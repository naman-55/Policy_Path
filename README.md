# 🏛️ PolicyPath / GovScheme AI

**AI-Powered Government Scheme Discovery Platform**

PolicyPath is a lightweight static web application that intelligently matches government schemes to a user's profile using a rule-based AI-style matching engine.

Designed for zero-backend deployment, accessibility, and easy extensibility.

---

## 🚀 Overview

PolicyPath helps users discover relevant government schemes based on:

- Income level
- Category / Social group
- Occupation
- Education
- Gender
- Location
- Special conditions

The system evaluates eligibility criteria and generates a confidence score for each scheme.

---

## ⚡ Quick Start

### Option 1 — Open Directly

Open `index.html` in your browser.

### Option 2 — Run a Local Server (Recommended)

Using Python:

```bash
python -m http.server 8000
```

Using Node:

```bash
npx serve .
```

Then visit:

```
http://localhost:8000
```

---

## 🧠 Core Features

### 1. AI-like Matching Engine

- Rule-based scoring system
- Multi-criteria eligibility evaluation
- Confidence percentage calculation
- Dynamic recommendation generation

**Implemented in:**  
`matchSchemes()` — app.js

---

### 2. Interactive Multi-Step Form

- Profile-based questionnaire
- Real-time UI transitions
- Clean and responsive design

**Files:**

- index.html
- styles.css

---

### 3. 65+ Curated Government Schemes

Each scheme record contains:

- Eligibility rules
- Benefits description
- Potential financial benefit
- Rating
- Target demographics
- Category metadata

**Data file:**  
`schemes-data.js`

---

### 4. Analytics Dashboard

After submission, users can see:

- Total matched schemes
- Category distribution
- Benefit estimation
- Confidence scoring

**Functions:**

- `renderAnalytics()`
- `showResults()`

---

### 5. Detailed Report Generation

Creates a structured recommendation summary.

**Function:**  
`generateDetailedReport()`

---

### 6. AI Recommendation Text

Generates contextual advisory text per scheme.

**Function:**  
`generateAIRecommendation()`

---

### 7. Full 8-Language Localization (Auto-Translating Engine)

Native support for **English, Hindi, Marathi, Tamil, Telugu, Bengali, Gujarati, and Kannada**.
The platform leverages a built-in background dynamic translation engine using Google Translate API to automatically batch-translate government schemes, UI elements, and form dropdowns in real-time natively without full-page reloads.

**File:**  
`translation.js` & `app.js` (translateAllSchemes, translateAutoElements)

---

### 8. Interactive AI Chatbot

A contextual chatbot built directly into the sidebar that guides users through the form, answers basic questions, handles validation errors, and dynamically translates its own responses into the user's selected language.

---

## 🗂️ Project Structure

```
PolicyPath/
│
├── index.html            # Main UI
├── app.js                # Core logic, matching engine & AI Auto-Translate
├── schemes-data.js       # Scheme dataset + metadata
├── styles.css            # Styling & responsive rules (Dark/Light themes)
├── translation.js        # Localization strings (8 Languages)
├── LICENSE               # MIT License
└── README.md
```

---

## ⚙️ How the Matching Engine Works

1. **Profile Collection**  
   User enters structured profile data.

2. **Eligibility Evaluation**  
   Each scheme's eligibility object is compared with user inputs.

3. **Weighted Scoring**  
   Income, occupation, category, and other parameters are scored.

4. **Confidence Calculation**  
   A normalized confidence percentage is generated.

5. **Sorting**  
   Schemes are sorted by:
   - Confidence score
   - Rating
   - Estimated benefit

---

## 🛠️ How to Add or Update Schemes

Edit `schemes-data.js`.

Each scheme object follows this structure:

```javascript
{
  id: "scheme_id",
  name: "Scheme Name",
  category: "Education",
  eligibility: { ... },
  benefits: ["Benefit 1"],
  potentialBenefit: 50000,
  rating: 4.5
}
```

After editing:

- The Auto-Translate engine will detect new strings and automatically cache translated versions of the scheme in the user's local storage for lightning-fast performance.

---

## 🌍 Localization

To add a new language:

1. Open `translation.js`
2. Add a new language key
3. Provide base string mappings for static UI elements.
4. The Auto-Translate engine (`app.js`) handles all remaining dynamic dropdowns, scheme descriptions, and chat responses automatically!

---

## 🎯 Design Principles

- No backend required
- Fully static and GitHub Pages compatible
- Modular JavaScript architecture
- Clean separation of concerns
- Responsive design
- Fully integrated Dark & Light themes (Including native Calendar / Form elements)
- Easily extensible dataset

---

## 🔮 Future Improvements

- JSON schema validation for schemes
- Admin panel for scheme upload
- API integration with official government data
- Machine learning-based ranking
- PDF export
- PWA support--

## 🤝 Contribution Guidelines

- Keep logic modular inside `app.js`
- Avoid hardcoded UI strings (use `translation.js`)
- Maintain responsiveness in `styles.css`
- Test eligibility logic thoroughly
- Run accessibility checks

---

## 📜 License

MIT License — see `LICENSE`
