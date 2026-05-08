<div align="center">

<img src="https://img.shields.io/badge/Pesa_Tools-Financial_Calculators-1A7A4A?style=for-the-badge&logoColor=white" />

# 🧮 Pesa Tools

### A standalone collection of financial calculation tools — fast, free, and offline-capable.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://javascript.com)
[![No Dependencies](https://img.shields.io/badge/Dependencies-Zero-22c55e?style=flat-square)](https://github.com/daviskinga12-ops/pesa-tools)
[![Offline Ready](https://img.shields.io/badge/Works-Offline-6366F1?style=flat-square)](https://github.com/daviskinga12-ops/pesa-tools)
[![Made in Kenya](https://img.shields.io/badge/Made%20in-Kenya%20🇰🇪-green?style=flat-square)](https://github.com/daviskinga12-ops)

---

> **Financial tools that work anywhere — even without internet.**  
> Pesa Tools is a lightweight collection of calculators built for people who need reliable financial answers fast.

</div>

---

## 🎯 What is Pesa Tools?

Pesa Tools is the standalone, offline-first version of the calculation engine behind [PesaCheck](https://pesacheck.vercel.app). Each tool is a single HTML file that works:

- ✅ In any browser
- ✅ Without internet once loaded
- ✅ On any device (phone, tablet, desktop)
- ✅ With zero installation

Built for markets where connectivity is unreliable and financial literacy tools are scarce.

---

## 🧮 Tools Included

### Loan & Debt
```
loan-calculator.html         Monthly payment, total interest, amortisation table
mortgage-calculator.html     Home loan breakdown with equity growth chart
debt-payoff.html             Avalanche vs snowball comparison
```

### Savings & Investment
```
compound-interest.html       Future value with compound growth visualisation
savings-goal.html            Time to target with monthly contribution slider
investment-return.html       ROI and CAGR calculator
```

### Budget & Income
```
budget-planner.html          Monthly income vs expense tracker
50-30-20.html               Needs/wants/savings split calculator
net-worth.html               Assets minus liabilities tracker
```

### Currency & Inflation
```
currency-converter.html      Multi-currency converter with cached rates
inflation-calculator.html    Real value of money over time
```

---

## 💡 Design Philosophy

### Offline First
Every tool works after the first load — no API calls required for core functionality. Currency rates are cached and update when online.

### Mobile First
Built for the 70% of users who access financial tools on a mobile phone. Large touch targets. No horizontal scrolling. Works on 3G.

### Zero Dependencies
No React. No jQuery. No Bootstrap. Every tool is pure HTML/CSS/JS — loads in under 50ms and works on a 10-year-old phone.

### Financial Accuracy
Every formula is verified against:
- Standard banking amortisation formulas
- Kenya Revenue Authority tax tables (where applicable)
- Central Bank of Kenya reference rates

---

## 🏗️ File Structure

```
pesa-tools/
├── index.html                  # Tools directory
├── tools/
│   ├── loan-calculator.html
│   ├── mortgage-calculator.html
│   ├── compound-interest.html
│   ├── savings-goal.html
│   ├── budget-planner.html
│   ├── debt-payoff.html
│   ├── net-worth.html
│   ├── 50-30-20.html
│   ├── currency-converter.html
│   └── inflation-calculator.html
├── css/
│   └── tools.css               # Shared design system
└── js/
    ├── calculators.js           # Core financial formulas
    └── charts.js                # Chart rendering (no library)
```

---

## 🧮 Financial Formulas Used

### Loan Payment (PMT)
```javascript
// Standard amortisation formula
function monthlyPayment(principal, annualRate, months) {
  const r = annualRate / 100 / 12;
  return principal * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}
```

### Compound Interest (FV)
```javascript
// Future value with periodic contributions
function futureValue(principal, rate, periods, contribution) {
  const r = rate / 100 / 12;
  const fvPrincipal = principal * Math.pow(1 + r, periods);
  const fvContributions = contribution * ((Math.pow(1 + r, periods) - 1) / r);
  return fvPrincipal + fvContributions;
}
```

### Debt Avalanche vs Snowball
```javascript
// Calculates months to debt-free and total interest for both strategies
function comparePayoffStrategies(debts, extraPayment) { ... }
```

---

## 🚀 Use It

```bash
# Option 1: Clone and open
git clone https://github.com/daviskinga12-ops/pesa-tools.git
open pesa-tools/index.html

# Option 2: Just download one tool
# Each .html file works completely standalone
# Download loan-calculator.html → open in browser → done
```

---

## 🔗 Related Projects

| Project | Description |
|---|---|
| [PesaCheck](https://github.com/daviskinga12-ops/pesacheck) | Full platform with 32 tools + Pro tier |
| [PesaCheck Backend](https://github.com/daviskinga12-ops/pesacheck-backend) | M-Pesa payment API |

---

## 📄 License

MIT License — free to use, fork, and embed in your own projects.

---

<div align="center">

**Financial clarity for everyone. 💚**

**[@daviskinga12-ops](https://github.com/daviskinga12-ops) · Nairobi, Kenya 🇰🇪**

</div>
