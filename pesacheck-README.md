<div align="center">

<img src="https://img.shields.io/badge/PesaCheck-32%20Financial%20Tools-1A7A4A?style=for-the-badge&logoColor=white" />

# 💰 PesaCheck

### The most comprehensive free personal finance platform built for everyone.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-pesacheck.vercel.app-1A7A4A?style=flat-square)](https://pesacheck.vercel.app)
[![Deploy Status](https://img.shields.io/badge/deploy-vercel-black?style=flat-square&logo=vercel)](https://pesacheck.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![Made in Kenya](https://img.shields.io/badge/Made%20in-Kenya%20🇰🇪-green?style=flat-square)](https://pesacheck.vercel.app)

---

> **32 powerful financial tools. Zero cost. No sign-up required.**  
> Built by a solo developer in Nairobi to help people everywhere make smarter money decisions.

</div>

---

## 🎯 What is PesaCheck?

PesaCheck is a browser-based personal finance platform that puts 32 professional-grade financial tools in one place — completely free. From loan calculations to investment projections, retirement planning to debt analysis, PesaCheck gives anyone the power of a financial advisor at zero cost.

No ads that matter. No paywalls for the essentials. Built from first principles by someone who understands money.

---

## ✨ Features

### 🏦 Loan & Debt Tools
| Tool | What it does |
|---|---|
| Loan Calculator | Monthly payments, total interest, full amortisation schedule |
| Mortgage Calculator | Home loan breakdown with principal/interest split over time |
| Debt Payoff Planner | Avalanche vs snowball method comparison |
| Refinancing Calculator | Should you refinance? Exact savings over time |
| Loan Comparison | Compare up to 3 loans side by side |

### 📈 Investment & Savings Tools
| Tool | What it does |
|---|---|
| Compound Interest Calculator | Watch your money grow with reinvestment |
| Investment Return Calculator | ROI, CAGR, and future value projections |
| Savings Goal Tracker | How long until you hit your target |
| Emergency Fund Calculator | Exactly how much buffer you need |
| Retirement Planner | Will you have enough? Find out now |

### 💸 Budget & Income Tools
| Tool | What it does |
|---|---|
| Monthly Budget Planner | Income vs expenses breakdown |
| 50/30/20 Rule Calculator | Needs, wants, and savings split |
| Net Worth Calculator | Assets minus liabilities = your true wealth |
| Salary Negotiation Tool | Know your market value before the meeting |
| Freelancer Income Planner | Irregular income? Plan around it |

### 📊 Tax & Currency Tools
| Tool | What it does |
|---|---|
| Tax Bracket Calculator | Understand exactly what you owe |
| Currency Converter | Live rates for major currencies |
| Inflation Impact Calculator | What is your money actually worth? |
| Side Hustle Profit Calculator | Is the hustle worth your time? |

*...and 13 more tools across insurance, real estate, and financial planning.*

---

## 🛠️ Tech Stack

```
Frontend:    HTML5 · CSS3 · Vanilla JavaScript (ES6+)
Deployment:  Vercel (CDN, edge network, zero config)
Payments:    M-Pesa Daraja API (PesaCheck Pro — see pesacheck-backend)
Compliance:  Kenya Data Protection Act 2019
```

### Why Vanilla JS?
PesaCheck is intentionally built without frameworks. Every tool loads in under **100ms** — no bundlers, no hydration, no unnecessary dependencies. Financial tools need to be fast and trustworthy.

---

## 🏗️ Architecture

```
pesacheck/
├── index.html          # Main platform shell
├── tools/              # Individual tool pages
│   ├── loan.html
│   ├── mortgage.html
│   ├── investment.html
│   └── ... (29 more)
├── css/
│   └── styles.css      # Design system
├── js/
│   └── calculators.js  # Core financial logic
└── assets/
    └── icons/
```

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/daviskinga12-ops/pesacheck.git

# Navigate to project
cd pesacheck

# Open in browser (no build step needed)
open index.html

# Or use a local server
npx serve .
```

---

## 💳 PesaCheck Pro

The free tier covers all 32 tools. PesaCheck Pro unlocks:
- Saved calculations & history
- PDF export for any tool
- Portfolio tracking dashboard
- Priority support

Pro payments are powered by **M-Pesa Daraja API** (STK Push). See [`pesacheck-backend`](https://github.com/daviskinga12-ops/pesacheck-backend) for the full payment backend.

---

## 📋 Compliance

PesaCheck is built in full compliance with the **Kenya Data Protection Act (2019)**:
- No personal data collected on free tier
- Clear privacy policy and terms of service
- User data deletion on request
- No third-party data sharing

---

## 📊 By the Numbers

- **32** financial calculation tools
- **<100ms** average tool load time
- **1** developer, built solo from scratch
- **$0** in external funding

---

## 🤝 Contributing

Found a bug? Want to add a tool? Contributions are welcome.

```bash
# Fork the repo
# Create your branch
git checkout -b feature/new-tool

# Make your changes
# Submit a pull request
```

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

<div align="center">

**Built with 💚 in Nairobi, Kenya**

[![Live Demo](https://img.shields.io/badge/Try_PesaCheck-pesacheck.vercel.app-1A7A4A?style=for-the-badge)](https://pesacheck.vercel.app)

</div>
