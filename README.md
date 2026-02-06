# samaan-customer — Customer Web App (Next.js)

Customer-facing web app for **Samaan** (browse products, cart/checkout, order tracking, notifications).

## Live
- **Customer App:** https://ashy-rock-061d16910.2.azurestaticapps.net

## Related Repositories
- **Backend API:** https://github.com/adityaakunjir/samaan-api
- **Merchant App:** https://github.com/adityaakunjir/samaan-merchant
- **Portfolio Repo:** https://github.com/adityaakunjir/Samaan

## Tech Stack
- Next.js (React), TypeScript
- REST API integration with `samaan-api`
- Azure Static Web Apps

## Features
- JWT authentication (Customer)
- Product browsing + search/filter
- Cart + checkout
- My Orders + Order Details
- Order tracking compatible with static export routing
- Notifications generated from the logged-in user’s order status updates

## Local Setup
### Prerequisites
- Node.js 18+ (recommended)

### Configure
Set the API base URL:

```bash
NEXT_PUBLIC_API_URL=https://samaan-api.azurewebsites.net/api
```

### Run
```bash
npm install
npm run dev
```

## Deployment
Deployed on **Azure Static Web Apps**.
