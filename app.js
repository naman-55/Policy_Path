// ============================================
// GovScheme AI — Main Application Logic
// ============================================

(function () {
  "use strict";

  // ---- DOM REFS ----
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  const body = document.body;
  const html = document.documentElement;
  const cursorGlow = $("#cursor-glow");
  const navbar = $("#navbar");
  const themeToggle = $("#theme-toggle");
  const mobileMenuBtn = $("#mobile-menu-btn");
  const navLinks = $("#nav-links");
  const heroCta = $("#hero-cta");
  const heroDemo = $("#hero-demo");
  const userForm = $("#user-form");
  const progressFill = $("#progress-fill");
  const progressText = $("#progress-text");
  const analysisOverlay = $("#ai-analysis-overlay");
  const analysisSteps = $$("#analysis-steps .analysis-step");
  const analysisFill = $("#analysis-progress-fill");
  const analysisPercent = $("#analysis-percent");
  const resultsSection = $("#results-section");
  const analyticsSection = $("#analytics-section");
  const schemesGrid = $("#schemes-grid");
  const schemeSearch = $("#scheme-search");
  const filterPills = $$("#filter-pills .filter-pill");
  const modal = $("#scheme-modal");
  const modalBody = $("#modal-body");
  const modalClose = $("#modal-close");
  const demoModal = $("#demo-modal");
  const demoModalBody = $("#demo-modal-body");
  const demoModalClose = $("#demo-modal-close");
  const reAnalyzeBtn = $("#re-analyze-btn");
  const aiChat = $("#ai-chat");

  let currentStep = 1;
  let matchedSchemes = [];
  let activeFilter = "all";
  let searchQuery = "";
  let debounceTimer = null;

  // ---- THEME ----
  function initTheme() {
    const saved = localStorage.getItem("govscheme-theme") || "dark";
    html.setAttribute("data-theme", saved);
  }
  themeToggle.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("govscheme-theme", next);
  });
  initTheme();
  // ---- SHOW ALL SCHEMES (Browse Mode) ----
const schemesNavBtn = document.querySelector('[data-section="results-section"]');

if (schemesNavBtn) {
  schemesNavBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showAllSchemes();
  });
}

  // ---- CURSOR GLOW ----
  document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
    cursorGlow.style.opacity = "1";
  });
  document.addEventListener("mouseleave", () => (cursorGlow.style.opacity = "0"));

  // ---- NAVBAR SCROLL ----
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const st = window.scrollY;
    navbar.classList.toggle("scrolled", st > 60);
    // Active nav link — only consider visible, rendered sections
    let current = "hero";
    ["hero", "form-section", "results-section", "analytics-section"].forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      // Skip sections that are hidden (display:none)
      if (el.classList.contains("hidden") || getComputedStyle(el).display === "none") return;
      if (st >= el.offsetTop - 200) {
        current = id;
      }
    });
    $$(".nav-link").forEach((l) => {
      l.classList.toggle("active", l.dataset.section === current);
    });
    lastScroll = st;
  });

  // ---- ONE-SCROLL: HERO ↔ DISCOVER ----
  const heroEl = $("#hero");
  const formEl = $("#form-section");
  let isScrolling = false;

  function smoothScrollTo(targetY) {
    isScrolling = true;
    window.scrollTo({ top: targetY, behavior: "smooth" });
    // Detect when the smooth scroll finishes
    let raf;
    let lastY = window.scrollY;
    let settled = 0;
    function check() {
      if (Math.abs(window.scrollY - lastY) < 1) {
        settled++;
        if (settled > 5) { isScrolling = false; return; }
      } else {
        settled = 0;
      }
      lastY = window.scrollY;
      raf = requestAnimationFrame(check);
    }
    raf = requestAnimationFrame(check);
    // Safety: force unlock after 1.2s no matter what
    setTimeout(() => { isScrolling = false; cancelAnimationFrame(raf); }, 1200);
  }

  window.addEventListener("wheel", (e) => {
    if (isScrolling) { e.preventDefault(); return; }

    const scrollY = window.scrollY;
    const heroTop = heroEl.offsetTop;
    const heroBottom = heroTop + heroEl.offsetHeight;
    const formTop = formEl.offsetTop;

    // User is on HERO section and scrolls DOWN → snap to Discover
    if (e.deltaY > 0 && scrollY < heroBottom - 200) {
      e.preventDefault();
      smoothScrollTo(formTop);
      return;
    }

    // User is near top of DISCOVER section and scrolls UP → snap back to Hero
    if (e.deltaY < 0 && scrollY >= formTop - 10 && scrollY <= formTop + 150) {
      e.preventDefault();
      smoothScrollTo(heroTop);
      return;
    }
  }, { passive: false });

  // ---- MOBILE MENU ----
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    mobileMenuBtn.classList.toggle("active");
  });
  $$(".nav-link").forEach((l) =>
    l.addEventListener("click", () => {
      navLinks.classList.remove("open");
      mobileMenuBtn.classList.remove("active");
    })
  );

  // ---- HERO CTA ----
  heroCta.addEventListener("click", () => {
    document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
  });
  heroDemo.addEventListener("click", () => {
    const videoUrl = heroDemo.dataset.video || "https://www.youtube.com/embed/M7lc1UVf-VE";
    openDemoModal(videoUrl);
  });

  // ---- HERO COUNTER ANIMATION ----
  function animateCounters() {
    $$(".stat-number").forEach((el) => {
      const target = +el.dataset.target;
      const dur = 2000;
      const start = performance.now();
      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / dur, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
  const heroObs = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        heroObs.disconnect();
      }
    },
    { threshold: 0.5 }
  );
  heroObs.observe(document.querySelector(".hero-stats"));

  // ---- MULTI-STEP FORM ----
  function showStep(n) {
    $$(".form-step").forEach((s) => s.classList.remove("active"));
    const step = $(`.form-step[data-step="${n}"]`);
    if (step) {
      step.classList.add("active");
      currentStep = n;
      const pct = Math.round(((n - 1) / 3) * 100);
      progressFill.style.width = pct + "%";
      progressText.textContent = pct + "% Complete";
      updateAIChat(n);
    }
  }

  $$(".step-next").forEach((btn) =>
    btn.addEventListener("click", () => {
      if (validateStep(currentStep)) showStep(+btn.dataset.next);
    })
  );
  $$(".step-prev").forEach((btn) =>
    btn.addEventListener("click", () => showStep(+btn.dataset.prev))
  );

  function validateStep(step) {
    const stepEl = $(`.form-step[data-step="${step}"]`);
    const inputs = stepEl.querySelectorAll("[required]");
    let valid = true;
    inputs.forEach((inp) => {
      if (!inp.value.trim()) {
        valid = false;
        inp.style.borderColor = "var(--danger)";
        inp.addEventListener("input", () => (inp.style.borderColor = ""), { once: true });
        inp.addEventListener("change", () => (inp.style.borderColor = ""), { once: true });
      }
    });
    if (!valid) {
      addAIMessage("⚠️ Please fill in all required fields before proceeding.", "warning");
    }
    return valid;
  }

  // ---- AI CHAT UPDATES ----
  function updateAIChat(step) {
    const msgs = {
      1: "📝 Great start! Personal information helps me narrow down state-specific and demographic-targeted schemes.",
      2: "💰 Employment and income data are crucial — many schemes have specific income ceiling requirements.",
      3: "🎯 Almost there! Additional details will help me fine-tune the AI matching algorithm for better results.",
    };
    if (msgs[step]) addAIMessage(msgs[step]);
  }

  function addAIMessage(text, type = "info") {
    const div = document.createElement("div");
    div.className = "ai-message";
    div.innerHTML = `<p>${text}</p>`;
    aiChat.appendChild(div);
    aiChat.scrollTop = aiChat.scrollHeight;
  }

  // ---- FORM SUBMIT ----
  userForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;
    const profile = getProfile();
    progressFill.style.width = "100%";
    progressText.textContent = "100% Complete";
    await runAIAnalysis(profile);
  });

  function getProfile() {
    return {
      name: $("#fullName").value.trim(),
      age: +$("#age").value,
      gender: $("#gender").value,
      state: $("#state").value,
      occupation: $("#occupation").value,
      income: $("#income").value,
      category: $("#category").value,
      disability: $("#disability").value,
      education: $("#education").value,
      residence: $("#residence").value,
      interests: [...$$("#interests-grid input:checked")].map((c) => c.value),
    };
  }

  // ---- AI ANALYSIS ----
  async function runAIAnalysis(profile) {
    analysisOverlay.classList.remove("hidden");
    body.style.overflow = "hidden";

    for (let i = 0; i < analysisSteps.length; i++) {
      await delay(600 + Math.random() * 400);
      analysisSteps[i].classList.add("active");
      const pct = Math.round(((i + 1) / analysisSteps.length) * 100);
      analysisFill.style.width = pct + "%";
      analysisPercent.textContent = pct + "%";
      if (i > 0) {
        analysisSteps[i - 1].classList.remove("active");
        analysisSteps[i - 1].classList.add("done");
        analysisSteps[i - 1].querySelector(".step-check").textContent = "✅";
      }
    }
    await delay(400);
    analysisSteps[analysisSteps.length - 1].classList.remove("active");
    analysisSteps[analysisSteps.length - 1].classList.add("done");
    analysisSteps[analysisSteps.length - 1].querySelector(".step-check").textContent = "✅";

    matchedSchemes = matchSchemes(profile);
    await delay(300);
    analysisOverlay.classList.add("hidden");
    body.style.overflow = "";
    resetAnalysis();
    showResults(profile, matchedSchemes);
  }

  function resetAnalysis() {
    analysisSteps.forEach((s) => {
      s.classList.remove("active", "done");
      s.querySelector(".step-check").textContent = "⏳";
    });
    analysisFill.style.width = "0%";
    analysisPercent.textContent = "0%";
  }

  // ---- MATCHING ENGINE ----
  function matchSchemes(profile) {
    return SCHEMES_DB.map((scheme) => {
      let score = 0;
      let maxScore = 0;
      const e = scheme.eligibility;

      // ---- OCCUPATION ----
      if (e.occupation) {
        maxScore += 30;
        if (e.occupation.includes(profile.occupation)) score += 30;
        else return null;
      }

      // ---- INCOME ----
      if (e.income) {
        maxScore += 25;
        if (e.income.includes(profile.income)) score += 25;
        else return null;
      }

      // ---- AGE ----
      if (e.minAge || e.maxAge) {
        maxScore += 20;
        if (profile.age >= (e.minAge || 0) && profile.age <= (e.maxAge || 120)) score += 20;
        else return null;
      }

      // ---- GENDER ----
      if (e.gender && e.gender !== "all") {
        maxScore += 10;
        if (e.gender !== profile.gender) return null;
        score += 10;
      }

      // ---- CATEGORY ----
      if (e.category) {
        maxScore += 10;
        if (e.category.includes(profile.category)) score += 10;
        else return null;
      }

      // ---- RESIDENCE ----
      if (e.residence) {
        maxScore += 5;
        if (e.residence.includes(profile.residence)) score += 5;
        else return null;
      }

      // ---- INTEREST BONUS ----
      if (profile.interests.includes(scheme.category)) {
        score += 5;
        maxScore += 5;
      }

      const confidence = maxScore ? Math.round((score / maxScore) * 100) : 100;
      return { ...scheme, confidence };
    })
      .filter(Boolean)
      .filter((s) => s.confidence >= 40)
      .sort((a, b) => b.confidence - a.confidence);
  }
  function showAllSchemes() {
    // Show results section, hide analytics
    resultsSection.classList.remove("hidden");
    analyticsSection.classList.add("hidden");
    $("#footer").style.display = "block";

    // Hide the AI summary card — not relevant in browse mode
    const summaryCard = $("#ai-summary-card");
    if (summaryCard) summaryCard.style.display = "none";

    // Hide the re-analyze button in browse mode
    const reBtn = $("#re-analyze-btn");
    if (reBtn) reBtn.closest(".results-footer").style.display = "none";

    // Update header to show total schemes
    $(".results-section .section-tag").textContent = "All Schemes";
    $(".results-section .section-title").textContent = `${SCHEMES_DB.length} Government Schemes`;
    $("#results-subtitle").textContent =
      "Browse all available schemes. Use the search and filters below to find what you need.";

    // Set matchedSchemes = all schemes (no confidence scoring)
    matchedSchemes = SCHEMES_DB.map((s) => ({ ...s, confidence: 100 }));

    // Reset filters
    activeFilter = "all";
    searchQuery = "";
    schemeSearch.value = "";
    filterPills.forEach((p) => p.classList.remove("active"));
    filterPills[0]?.classList.add("active");

    // Render cards
    renderSchemeCards(matchedSchemes);

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: "smooth" });
  }

  // ---- SHOW RESULTS ----
  function showResults(profile, schemes) {
    resultsSection.classList.remove("hidden");
    analyticsSection.classList.remove("hidden");
    $("#footer").style.display = "block";

    // Restore elements that browse-mode may have hidden
    const summaryCard = $("#ai-summary-card");
    if (summaryCard) summaryCard.style.display = "";
    const reFooter = $("#re-analyze-btn")?.closest(".results-footer");
    if (reFooter) reFooter.style.display = "";
    $(".results-section .section-tag").textContent = "AI Results";
    $(".results-section .section-title").textContent = "Your Recommended Schemes";

    resultsSection.scrollIntoView({ behavior: "smooth" });

    // Summary
    const highMatches = schemes.filter((s) => s.confidence >= 70).length;
    const avgConf = schemes.length ? Math.round(schemes.reduce((a, s) => a + s.confidence, 0) / schemes.length) : 0;
    $("#summary-text").textContent = `Hi ${profile.name}! Based on your profile as a ${profile.age}-year-old ${profile.occupation.replace(/-/g, " ")} with an income of ${incomeLabel(profile.income)}, I found ${schemes.length} schemes you may be eligible for. ${highMatches} schemes have a high match score (>70%). I recommend starting with the top-rated ones for maximum benefit.`;
    $("#summary-time").textContent = `Analysis completed at ${new Date().toLocaleTimeString()}`;
    $("#results-subtitle").textContent = `Found ${schemes.length} schemes matching your profile`;

    // Confidence ring
    animateConfidence(avgConf);

    // Tags
    const tags = [...new Set(schemes.map((s) => CATEGORY_META[s.category]?.label).filter(Boolean))];
    $("#summary-tags").innerHTML = tags.map((t) => `<span class="summary-tag">${t}</span>`).join("");

    // Render cards
    renderSchemeCards(schemes);

    // Analytics
    renderAnalytics(profile, schemes);
    generateDetailedReport(profile, schemes);
  }

  function animateConfidence(val) {
    const arc = $(".confidence-arc");
    const text = $("#confidence-val");
    const circumference = 113.1;
    let current = 0;
    const dur = 1500;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      current = Math.round(p * val);
      text.textContent = current + "%";
      arc.style.strokeDashoffset = circumference - (circumference * current) / 100;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function renderSchemeCards(schemes) {
    schemesGrid.innerHTML = "";
    const filtered = schemes.filter((s) => {
      const matchFilter = activeFilter === "all" || s.category === activeFilter;
      const matchSearch = !searchQuery || s.name.toLowerCase().includes(searchQuery) || s.description.toLowerCase().includes(searchQuery);
      return matchFilter && matchSearch;
    });

    if (filtered.length === 0) {
      schemesGrid.innerHTML = `<div class="glass-card" style="grid-column:1/-1;padding:48px;text-align:center"><p style="color:var(--text2)">No schemes found matching your criteria. Try adjusting filters.</p></div>`;
      return;
    }

    filtered.forEach((scheme, i) => {
      const card = document.createElement("div");
      card.className = "scheme-card glass-card";
      card.style.animationDelay = i * 0.08 + "s";
      card.style.animation = "fadeInUp 0.5s ease " + i * 0.08 + "s both";

      const matchClass = scheme.confidence >= 70 ? "high" : "med";
      const barClass = scheme.confidence >= 70 ? "high" : scheme.confidence >= 50 ? "med" : "low";
      const stars = "★".repeat(Math.round(scheme.rating)) + "☆".repeat(5 - Math.round(scheme.rating));

      card.innerHTML = `
        <div class="scheme-card-header">
          <div class="scheme-icon ${scheme.color}">${scheme.icon}</div>
          <div>
            <div class="scheme-card-title">${scheme.name}</div>
            <div class="scheme-card-ministry">${scheme.ministry}</div>
          </div>
        </div>
        <p class="scheme-card-desc">${scheme.description}</p>
        <div class="scheme-card-tags">
          <span class="scheme-tag match-${matchClass}">${scheme.confidence}% Match</span>
          <span class="scheme-tag">${CATEGORY_META[scheme.category]?.emoji || ""} ${CATEGORY_META[scheme.category]?.label || ""}</span>
          <span class="scheme-tag">${scheme.beneficiaries} beneficiaries</span>
        </div>
        <div class="scheme-card-footer">
          <div class="scheme-confidence">
            <div class="confidence-bar-bg"><div class="confidence-bar-fill ${barClass}" style="width:${scheme.confidence}%"></div></div>
            <span class="confidence-text">${scheme.confidence}%</span>
          </div>
          <div class="scheme-rating" title="${scheme.rating}/5">${stars}</div>
        </div>
      `;
      card.addEventListener("click", () => openModal(scheme));
      schemesGrid.appendChild(card);
    });
  }

  // ---- SEARCH (debounced) ----
  schemeSearch.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderSchemeCards(matchedSchemes);
    }, 250);
  });

  // ---- FILTER PILLS ----
  filterPills.forEach((pill) =>
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      activeFilter = pill.dataset.filter;
      renderSchemeCards(matchedSchemes);
    })
  );

  // ---- MODAL ----
  function openModal(scheme) {
    const matchClass = scheme.confidence >= 70 ? "high" : "med";
    modalBody.innerHTML = `
      <h2>${scheme.icon} ${scheme.name}</h2>
      <p class="modal-ministry">${scheme.ministry}</p>
      <span class="modal-badge ${matchClass}">AI Match: ${scheme.confidence}%</span>
      <div class="modal-section">
        <h3>📝 Description</h3>
        <p>${scheme.description}</p>
      </div>
      <div class="modal-section">
        <h3>✅ Key Benefits</h3>
        <ul>${scheme.benefits.map((b) => `<li>${b}</li>`).join("")}</ul>
      </div>
      <div class="modal-section">
        <h3>📋 How to Apply</h3>
        <p>${scheme.howToApply}</p>
      </div>
      <div class="modal-section">
        <h3>🤖 AI Recommendation</h3>
        <p>${generateAIRecommendation(scheme)}</p>
      </div>
      <div class="modal-apply">
        <a href="${scheme.link}" target="_blank" rel="noopener" class="btn btn-primary">
          <span>Apply Now</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
        <button class="btn btn-glass" onclick="this.closest('.modal-overlay').classList.add('hidden')">Close</button>
      </div>
    `;
    modal.classList.remove("hidden");
    body.style.overflow = "hidden";
  }

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  // Demo modal events
  if (demoModalClose) demoModalClose.addEventListener("click", closeDemoModal);
  if (demoModal) demoModal.addEventListener("click", (e) => { if (e.target === demoModal) closeDemoModal(); });

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeDemoModal(); } });

  function closeModal() {
    modal.classList.add("hidden");
    body.style.overflow = "";
  }

  function openDemoModal(url) {
    if (!demoModalBody || !demoModal) return;
    // Build a robust iframe src with recommended params for smooth autoplay/playback
    function buildSrc(u) {
      try {
        const parsed = new URL(u);
        const base = parsed.origin + parsed.pathname;
        const params = new URLSearchParams(parsed.search);
        params.set("autoplay", "1");
        params.set("mute", "1");
        params.set("playsinline", "1");
        params.set("rel", "0");
        params.set("controls", "1");
        params.set("modestbranding", "1");
        params.set("enablejsapi", "1");
        return `${base}?${params.toString()}`;
      } catch (e) {
        const sep = u.includes("?") ? "&" : "?";
        return `${u}${sep}autoplay=1&mute=1&playsinline=1&rel=0&controls=1&modestbranding=1&enablejsapi=1`;
      }
    }

    const src = buildSrc(url);

    demoModalBody.innerHTML = `
      <div class="video-wrap">
        <div class="video-spinner" aria-hidden="true"></div>
        <iframe src="${src}" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="eager"></iframe>
      </div>
    `;

    const iframe = demoModalBody.querySelector("iframe");
    const spinner = demoModalBody.querySelector(".video-spinner");

    // Remove spinner when iframe loads (or after a short timeout fallback)
    if (iframe) {
      iframe.addEventListener(
        "load",
        () => {
          if (spinner) {
            spinner.style.opacity = "0";
            setTimeout(() => spinner.remove(), 300);
          }
        },
        { once: true }
      );
      setTimeout(() => {
        if (spinner && spinner.parentNode) spinner.parentNode.removeChild(spinner);
      }, 6000);
    }

    demoModal.classList.remove("hidden");
    demoModal.setAttribute('aria-hidden','false');
    body.style.overflow = "hidden";
  }

  function closeDemoModal() {
    if (!demoModal) return;
    demoModal.classList.add("hidden");
    demoModal.setAttribute('aria-hidden','true');
    if (demoModalBody) demoModalBody.innerHTML = '';
    body.style.overflow = "";
  }

  function generateAIRecommendation(scheme) {
    const recs = [
      `Based on your profile, "${scheme.name}" is a ${scheme.confidence >= 70 ? "strong" : "moderate"} match. This scheme has benefited ${scheme.beneficiaries} people across India. The potential benefit value is ₹${scheme.potentialBenefit.toLocaleString()}.`,
      `Our AI engine rates this as a ${scheme.confidence}% match. We recommend ${scheme.confidence >= 70 ? "applying immediately" : "reviewing the eligibility criteria carefully"} to maximize your chances.`,
      `This scheme provides ${scheme.benefits[0].toLowerCase()}. Given your current profile, ${scheme.confidence >= 60 ? "you have a good chance of qualifying" : "some criteria may need verification"}.`,
    ];
    return recs[scheme.id % recs.length];
  }

  // ---- ANALYTICS ----
  function renderAnalytics(profile, schemes) {
    const highSchemes = schemes.filter((s) => s.confidence >= 70);
    const totalBenefit = schemes.reduce((a, s) => a + (s.potentialBenefit || 0), 0);
    const categories = [...new Set(schemes.map((s) => s.category))];

    animateStatValue("stat-total-val", schemes.length);
    animateStatValue("stat-high-val", highSchemes.length);
    $("#stat-benefits-val").textContent = "₹" + totalBenefit.toLocaleString();
    animateStatValue("stat-categories-val", categories.length);

    // Chart
    const catCounts = {};
    schemes.forEach((s) => {
      catCounts[s.category] = (catCounts[s.category] || 0) + 1;
    });
    const maxCount = Math.max(...Object.values(catCounts), 1);
    const chartBars = $("#chart-bars");
    chartBars.innerHTML = "";
    Object.entries(catCounts).forEach(([cat, count]) => {
      const meta = CATEGORY_META[cat] || {};
      const pct = Math.round((count / maxCount) * 100);
      chartBars.innerHTML += `
        <div class="chart-bar-row">
          <span class="chart-bar-label">${meta.emoji || ""} ${meta.label || cat}</span>
          <div class="chart-bar-track">
            <div class="chart-bar-fill ${meta.color || "purple"}" style="width:0%" data-width="${pct}%">${count}</div>
          </div>
        </div>`;
    });
    // Animate bars
    setTimeout(() => {
      $$(".chart-bar-fill").forEach((bar) => {
        bar.style.width = bar.dataset.width;
      });
    }, 200);

    // Profile summary
    const pd = $("#profile-details");
    pd.innerHTML = [
      ["Name", profile.name],
      ["Age", profile.age],
      ["Gender", capitalize(profile.gender)],
      ["State", capitalize(profile.state.replace(/-/g, " "))],
      ["Occupation", capitalize(profile.occupation.replace(/-/g, " "))],
      ["Income", incomeLabel(profile.income)],
      ["Category", profile.category.toUpperCase()],
      ["Education", capitalize((profile.education || "N/A").replace(/-/g, " "))],
      ["Residence", capitalize(profile.residence || "N/A")],
    ].map(([k, v]) => `<div class="profile-row"><span class="profile-row-key">${k}</span><span class="profile-row-val">${v}</span></div>`).join("");
  }
  function generateDetailedReport(profile, schemes) {

  const reportSection = document.getElementById("report-section");
  const reportContent = document.getElementById("report-content");

  if (!reportSection || !reportContent) return;

  reportSection.classList.remove("hidden");

  const totalBenefit = schemes.reduce(
    (a, s) => a + (s.potentialBenefit || 0),
    0
  );

  const highMatches = schemes.filter(s => s.confidence >= 70).length;

  reportContent.innerHTML = `

    <h3>👤 Applicant Profile</h3>
    <ul>
      <li><strong>Name:</strong> ${profile.name}</li>
      <li><strong>Age:</strong> ${profile.age}</li>
      <li><strong>Gender:</strong> ${profile.gender}</li>
      <li><strong>State:</strong> ${profile.state.replace(/-/g," ")}</li>
      <li><strong>Occupation:</strong> ${profile.occupation.replace(/-/g," ")}</li>
      <li><strong>Income:</strong> ${incomeLabel(profile.income)}</li>
    </ul>

    <h3>📊 Eligibility Analysis</h3>
    <ul>
      <li>Total Schemes Matched: <strong>${schemes.length}</strong></li>
      <li>High Confidence Matches: <strong>${highMatches}</strong></li>
      <li>Average Match Score: <strong>${
        schemes.length
          ? Math.round(
              schemes.reduce((a,s)=>a+s.confidence,0)/schemes.length
            )
          : 0
      }%</strong></li>
    </ul>

    <h3>💰 Estimated Total Benefit Value</h3>
    <p><strong>₹${totalBenefit.toLocaleString()}</strong> potential support based on eligibility.</p>

    <h3>🧠 AI Recommendation Logic</h3>
    <p>
      Recommendations are generated using eligibility parameters including
      age, income, gender, occupation, and residence.  
      Schemes not matching required criteria are automatically excluded.
    </p>

    <h3>📌 Next Steps</h3>
    <ol>
      <li>Open scheme details</li>
      <li>Review eligibility documents</li>
      <li>Visit official portal</li>
      <li>Submit application</li>
    </ol>

  `;
}

  function animateStatValue(id, target) {
    const el = document.getElementById(id);
    const dur = 1200;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(p * target);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ---- RE-ANALYZE ----
  reAnalyzeBtn.addEventListener("click", () => {
    resultsSection.classList.add("hidden");
    analyticsSection.classList.add("hidden");
    activeFilter = "all";
    searchQuery = "";
    schemeSearch.value = "";
    filterPills.forEach((p) => p.classList.remove("active"));
    filterPills[0]?.classList.add("active");
    showStep(1);
    progressFill.style.width = "0%";
    progressText.textContent = "0% Complete";
    $("#form-section").scrollIntoView({ behavior: "smooth" });
  });


  // ---- HELPERS ----
  function delay(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }
  function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
  }
  function incomeLabel(val) {
    const m = { "below-1l": "Below ₹1 Lakh", "1l-2.5l": "₹1L – ₹2.5L", "2.5l-5l": "₹2.5L – ₹5L", "5l-10l": "₹5L – ₹10L", "above-10l": "Above ₹10L" };
    return m[val] || val;
  }
  // ---- DOB TO AGE CALCULATION ----
  const dobInput = $("#dob");
  if (dobInput) {
    dobInput.addEventListener("change", () => {
      const dob = new Date(dobInput.value);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) age--;

      let hiddenAge = $("#age");
      if (!hiddenAge) {
        hiddenAge = document.createElement("input");
        hiddenAge.type = "hidden";
        hiddenAge.id = "age";
        hiddenAge.name = "age";
        $("#user-form").appendChild(hiddenAge);
      }
      hiddenAge.value = age;
    });
  }

  // ---- INIT ----
  $("#footer").style.display = "none";
})();
