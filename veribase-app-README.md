<div align="center">

<img src="https://img.shields.io/badge/Veribase-Africa's_Trust_Infrastructure-1C2B4A?style=for-the-badge&logoColor=white" />

# 🔐 Veribase App

### Trust and verification infrastructure for Africa's informal economy.

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![M-Pesa](https://img.shields.io/badge/M--Pesa-Daraja_API-00B300?style=flat-square)](https://developer.safaricom.co.ke)
[![Made in Kenya](https://img.shields.io/badge/Built%20for-Africa%20🌍-orange?style=flat-square)](https://github.com/daviskinga12-ops/veribase-app)

---

> **Africa's economy, made legible.**  
> Veribase is a SaaS platform that provides identity verification, business legitimacy checks, and trust scoring for Kenya's informal economy — where 83% of workers operate without formal credentials.

</div>

---

## 🌍 The Problem

Kenya's informal economy represents **83% of the workforce** — over 17 million people and businesses. Yet there is no reliable, accessible way to verify:

- Whether a business is legitimate
- Whether a contractor has done what they claim
- Whether a freelancer's reviews are real
- Whether a supply chain partner can be trusted

This gap costs Kenya's economy **billions of shillings annually** in fraud, failed transactions, and broken trust.

**Veribase solves this.**

---

## 🎯 What Veribase Does

Veribase provides a **verification-as-a-service** (VaaS) layer that businesses and individuals can plug into:

| Feature | Description |
|---|---|
| **Identity Verification** | Verify individuals against national ID + Safaricom records |
| **Business Legitimacy Check** | Cross-reference business registration, MPESA account history |
| **Trust Score** | Proprietary score (0–100) based on verified activity |
| **Verification Badge** | Embeddable badge for verified entities |
| **API Access** | RESTful API for B2B integrations |
| **M-Pesa Payments** | Pay for verifications via STK Push |

---

## ✨ Core Features

### For Individuals
- ✅ Get your Veribase Trust Score
- ✅ Generate a shareable verification certificate
- ✅ Portfolio of verified work history
- ✅ One-click identity proof for job applications

### For Businesses
- ✅ Verify contractors before hiring
- ✅ Screen suppliers and partners
- ✅ Embed Veribase badge on your storefront
- ✅ API access for automated verification workflows

### For Developers
- ✅ Full REST API with webhook support
- ✅ Verification badge embed widget
- ✅ Sandbox environment for testing

---

## 🛠️ Tech Stack

```
Frontend:     TypeScript · HTML5 · CSS3
Backend:      Supabase (PostgreSQL + Edge Functions + Auth)
Payments:     M-Pesa Daraja API (STK Push)
Deployment:   Vercel (frontend) · Supabase Cloud (backend)
Auth:         Supabase Auth (email + phone)
Storage:      Supabase Storage (verification documents)
```

---

## 🏗️ Architecture

```
veribase-app/
├── src/
│   ├── pages/
│   │   ├── index.html          # Landing page
│   │   ├── dashboard.html      # User dashboard
│   │   ├── verify.html         # Run a verification
│   │   └── profile.html        # Trust score profile
│   ├── api/
│   │   ├── verify.ts           # Verification logic
│   │   ├── score.ts            # Trust score engine
│   │   └── mpesa.ts            # Payment integration
│   ├── lib/
│   │   └── supabase.ts         # Supabase client
│   └── styles/
│       └── main.css
├── supabase/
│   ├── migrations/             # DB schema migrations
│   └── functions/              # Edge functions
└── public/
    └── badge/                  # Embeddable badge assets
```

---

## 🗄️ Database Schema

```sql
-- Core entities
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT UNIQUE,
  national_id TEXT UNIQUE,
  trust_score INTEGER DEFAULT 0,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE verifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requester_id UUID REFERENCES users(id),
  subject_id UUID REFERENCES users(id),
  type TEXT NOT NULL,             -- 'identity' | 'business' | 'work'
  status TEXT DEFAULT 'pending',  -- 'pending' | 'verified' | 'failed'
  score INTEGER,
  evidence JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  mpesa_receipt TEXT UNIQUE,
  amount INTEGER NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 🔌 API Reference

```
POST /api/verify/identity        Verify an individual
POST /api/verify/business        Verify a business
GET  /api/score/:userId          Get trust score
GET  /api/badge/:userId          Get embeddable badge
POST /api/payment/initiate       Initiate M-Pesa payment
POST /api/payment/callback       Payment callback handler
```

### Example: Verify an Identity
```javascript
const response = await fetch('https://api.veribase.co.ke/api/verify/identity', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' },
  body: JSON.stringify({
    national_id: '12345678',
    full_name: 'John Doe',
    phone: '0712345678'
  })
});

const result = await response.json();
// { verified: true, trust_score: 87, badge_url: '...' }
```

---

## 💰 Business Model

| Tier | Price | Includes |
|---|---|---|
| **Individual** | KES 99/verification | Identity check + Trust score |
| **Business** | KES 499/month | 20 verifications + API access |
| **Enterprise** | Custom | Unlimited + Dedicated support |

All payments processed via **M-Pesa STK Push** — no cards required.

---

## 🚀 Get Started

```bash
# Clone
git clone https://github.com/daviskinga12-ops/veribase-app.git
cd veribase-app

# Install dependencies
npm install

# Set up environment
cp .env.example .env
# Add your Supabase and M-Pesa credentials

# Run locally
npm run dev
```

---

## 🗺️ Roadmap

- [x] Core verification flow
- [x] M-Pesa payment integration
- [x] Supabase auth + database
- [x] Trust score engine
- [ ] Mobile app (React Native)
- [ ] Integration with eCitizen Kenya
- [ ] Machine learning trust scoring
- [ ] Pan-Africa expansion (Uganda, Tanzania, Ghana)

---

## 📄 License

MIT License.

---

<div align="center">

*Africa's economy, made legible.*

**[veribase.co.ke](https://github.com/daviskinga12-ops/veribase-app) · Built by [@daviskinga12-ops](https://github.com/daviskinga12-ops)**

</div>
