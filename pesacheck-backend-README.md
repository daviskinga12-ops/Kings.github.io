<div align="center">

<img src="https://img.shields.io/badge/PesaCheck_Backend-M--Pesa_Payment_API-F7DF1E?style=for-the-badge&logo=nodedotjs&logoColor=black" />

# ⚡ PesaCheck Backend

### Production-grade Node.js payment backend with M-Pesa Daraja API integration.

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express)](https://expressjs.com)
[![Deployed on Railway](https://img.shields.io/badge/Deployed-Railway-0B0D0E?style=flat-square&logo=railway)](https://railway.app)
[![M-Pesa](https://img.shields.io/badge/M--Pesa-Daraja_API-00B300?style=flat-square)](https://developer.safaricom.co.ke)
[![Kenya](https://img.shields.io/badge/Made%20in-Kenya%20🇰🇪-green?style=flat-square)](https://github.com/daviskinga12-ops)

---

> **A real, working M-Pesa STK Push payment backend.**  
> Built for PesaCheck Pro subscriptions. Production-deployed. Zero downtime.

</div>

---

## 🎯 Overview

This is the full payment and subscription backend for [PesaCheck](https://pesacheck.vercel.app). It handles M-Pesa STK Push payments via the Safaricom Daraja API, manages user subscriptions, and serves as the API layer for PesaCheck Pro.

Built solo, deployed to production, and handling real transactions.

---

## 🔑 Core Features

### M-Pesa Daraja API Integration
- ✅ **OAuth token generation** — automatic token refresh before expiry
- ✅ **STK Push initiation** — prompt users to pay on their phone
- ✅ **Payment callback handling** — receive and verify Safaricom callbacks
- ✅ **Transaction status query** — check any transaction in real-time
- ✅ **Error handling** — timeout, user cancellation, insufficient funds
- ✅ **Sandbox → Production** toggle via environment variables

### Subscription Management
- ✅ User subscription creation and verification
- ✅ Subscription status checks on login
- ✅ Expiry date tracking and renewal reminders
- ✅ Transaction history per user

### Security
- ✅ CORS configured for PesaCheck frontend only
- ✅ Environment variable isolation (no secrets in code)
- ✅ Request validation middleware
- ✅ Rate limiting on payment endpoints
- ✅ Kenya Data Protection Act compliance

---

## 🛠️ Tech Stack

```
Runtime:      Node.js 18+
Framework:    Express.js 4.x
Payments:     Safaricom M-Pesa Daraja API v1
Deployment:   Railway (auto-deploy from GitHub)
Environment:  dotenv
HTTP Client:  Axios
```

---

## 🏗️ Project Structure

```
pesacheck-backend/
├── server.js               # Entry point
├── routes/
│   ├── mpesa.js            # All Daraja API routes
│   └── subscription.js     # Subscription management
├── middleware/
│   ├── auth.js             # Token verification
│   └── validate.js         # Request validation
├── utils/
│   ├── daraja.js           # Daraja API helpers
│   └── token.js            # OAuth token manager
├── config/
│   └── index.js            # Environment config
└── .env.example            # Environment template
```

---

## 🔌 API Endpoints

### Authentication
```
POST /api/auth/token         Generate M-Pesa OAuth token
```

### Payments
```
POST /api/mpesa/stkpush      Initiate STK Push payment
POST /api/mpesa/callback     Receive Safaricom payment callback
GET  /api/mpesa/status/:id   Query transaction status
```

### Subscriptions
```
POST /api/subscription/create      Create new subscription
GET  /api/subscription/check/:id   Verify subscription status
GET  /api/subscription/history/:id Transaction history
```

---

## ⚙️ Environment Variables

```env
# M-Pesa Daraja Credentials
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_SHORTCODE=your_shortcode
MPESA_PASSKEY=your_passkey
MPESA_CALLBACK_URL=https://your-backend.railway.app/api/mpesa/callback

# Environment
NODE_ENV=production
PORT=3000

# CORS
FRONTEND_URL=https://pesacheck.vercel.app
```

---

## 🚀 Local Development

```bash
# Clone the repo
git clone https://github.com/daviskinga12-ops/pesacheck-backend.git
cd pesacheck-backend

# Install dependencies
npm install

# Copy environment template
cp .env.example .env
# Fill in your Daraja sandbox credentials

# Run in development mode
npm run dev

# Server starts on http://localhost:3000
```

---

## 💡 M-Pesa STK Push Flow

```
User clicks "Upgrade to Pro"
        ↓
Frontend sends phone number to /api/mpesa/stkpush
        ↓
Backend generates OAuth token → sends STK Push request to Safaricom
        ↓
Safaricom sends payment prompt to user's phone (MPESA PIN screen)
        ↓
User enters PIN and confirms
        ↓
Safaricom sends callback to /api/mpesa/callback
        ↓
Backend verifies payment → activates Pro subscription
        ↓
User gets Pro access instantly
```

---

## 🌍 Why This Matters

M-Pesa processes **over $314 billion** in transactions annually and is the primary payment method across East Africa. Building production Daraja integrations requires deep knowledge of:

- Safaricom's OAuth2 implementation
- STK Push timing and timeout handling
- Callback URL setup and verification
- Production vs sandbox environment differences
- African fintech compliance requirements

This backend demonstrates all of the above in a live, production environment.

---

## 📄 License

MIT License.

---

<div align="center">

**Part of the [PesaCheck](https://pesacheck.vercel.app) ecosystem**

[![PesaCheck Live](https://img.shields.io/badge/Frontend-pesacheck.vercel.app-1A7A4A?style=for-the-badge)](https://pesacheck.vercel.app)

</div>
