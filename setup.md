# 🚀 WA.io — GitHub Setup & Complete File Structure

## 📁 کامل Folder Structure + نام تمام فایل‌ها

```
wa-io/
│
├─ 📄 README.md
├─ 📄 .gitignore
├─ 📄 .env.example
├─ 📄 ARCHITECTURE.md
├─ 📄 SETUP.md
├─ 📄 CONTRIBUTING.md
│
├─📁 smart-contracts/
│  ├─ 📄 package.json
│  ├─ 📄 package-lock.json
│  ├─ 📄 hardhat.config.ts
│  ├─ 📄 tsconfig.json
│  ├─ 📄 .env.example
│  ├─ 📄 .gitignore
│  │
│  ├─📁 contracts/
│  │  ├─ 📄 WA.sol
│  │  ├─ 📄 Mining.sol
│  │  ├─ 📄 Referral.sol
│  │  └─ 📄 Treasury.sol
│  │
│  ├─📁 scripts/
│  │  ├─ 📄 deploy.ts
│  │  ├─ 📄 verify.ts
│  │  ├─ 📄 initialize.ts
│  │  └─ 📄 constants.ts
│  │
│  ├─📁 test/
│  │  ├─ 📄 WA.test.ts
│  │  ├─ 📄 Mining.test.ts
│  │  └─ 📄 Security.test.ts
│  │
│  └─📁 deployments/
│     ├─ 📄 testnet.json
│     └─ 📄 mainnet.json (empty initially)
│
├─📁 backend/
│  ├─ 📄 package.json
│  ├─ 📄 package-lock.json
│  ├─ 📄 tsconfig.json
│  ├─ 📄 .env.example
│  ├─ 📄 .gitignore
│  ├─ 📄 Dockerfile
│  ├─ 📄 docker-compose.yml
│  │
│  ├─📁 src/
│  │  ├─ 📄 app.ts
│  │  ├─ 📄 server.ts
│  │  │
│  │  ├─📁 config/
│  │  │  ├─ 📄 database.ts
│  │  │  ├─ 📄 blockchain.ts
│  │  │  ├─ 📄 cache.ts
│  │  │  ├─ 📄 env.ts
│  │  │  └─ 📄 logger.ts
│  │  │
│  │  ├─📁 controllers/
│  │  │  ├─ 📄 auth.controller.ts
│  │  │  ├─ 📄 mining.controller.ts
│  │  │  ├─ 📄 user.controller.ts
│  │  │  ├─ 📄 referral.controller.ts
│  │  │  ├─ 📄 wallet.controller.ts
│  │  │  └─ 📄 leaderboard.controller.ts
│  │  │
│  │  ├─📁 services/
│  │  │  ├─ 📄 auth.service.ts
│  │  │  ├─ 📄 mining.service.ts
│  │  │  ├─ 📄 points.service.ts
│  │  │  ├─ 📄 referral.service.ts
│  │  │  ├─ 📄 reward.service.ts
│  │  │  ├─ 📄 wallet.service.ts
│  │  │  ├─ 📄 blockchain.service.ts
│  │  │  └─ 📄 claim.service.ts
│  │  │
│  │  ├─📁 models/
│  │  │  ├─ 📄 User.ts
│  │  │  ├─ 📄 Mining.ts
│  │  │  ├─ 📄 Referral.ts
│  │  │  ├─ 📄 Transaction.ts
│  │  │  ├─ 📄 Claim.ts
│  │  │  └─ 📄 Leaderboard.ts
│  │  │
│  │  ├─📁 routes/
│  │  │  ├─ 📄 index.ts
│  │  │  ├─ 📄 auth.routes.ts
│  │  │  ├─ 📄 mining.routes.ts
│  │  │  ├─ 📄 user.routes.ts
│  │  │  ├─ 📄 referral.routes.ts
│  │  │  ├─ 📄 wallet.routes.ts
│  │  │  └─ 📄 health.routes.ts
│  │  │
│  │  ├─📁 middlewares/
│  │  │  ├─ 📄 auth.middleware.ts
│  │  │  ├─ 📄 validation.middleware.ts
│  │  │  ├─ 📄 rateLimit.middleware.ts
│  │  │  ├─ 📄 error.middleware.ts
│  │  │  └─ 📄 cors.middleware.ts
│  │  │
│  │  ├─📁 jobs/
│  │  │  ├─ 📄 dailyReward.job.ts
│  │  │  ├─ 📄 claimProcessing.job.ts
│  │  │  ├─ 📄 halvingSchedule.job.ts
│  │  │  ├─ 📄 leaderboardUpdate.job.ts
│  │  │  └─ 📄 scheduler.ts
│  │  │
│  │  ├─📁 websocket/
│  │  │  ├─ 📄 socket.ts
│  │  │  ├─ 📄 events.ts
│  │  │  └─ 📄 handlers.ts
│  │  │
│  │  ├─📁 utils/
│  │  │  ├─ 📄 validators.ts
│  │  │  ├─ 📄 helpers.ts
│  │  │  ├─ 📄 constants.ts
│  │  │  ├─ 📄 errors.ts
│  │  │  └─ 📄 crypto.ts
│  │  │
│  │  └─📁 types/
│  │     ├─ 📄 user.types.ts
│  │     ├─ 📄 mining.types.ts
│  │     ├─ 📄 api.types.ts
│  │     ├─ 📄 blockchain.types.ts
│  │     └─ 📄 index.ts
│  │
│  ├─📁 tests/
│  │  ├─ 📄 setup.ts
│  │  ├─📁 unit/
│  │  │  ├─ 📄 mining.test.ts
│  │  │  ├─ 📄 referral.test.ts
│  │  │  └─ 📄 points.test.ts
│  │  ├─📁 integration/
│  │  │  ├─ 📄 auth.test.ts
│  │  │  ├─ 📄 mining.test.ts
│  │  │  └─ 📄 wallet.test.ts
│  │  └─📁 e2e/
│  │     └─ 📄 mining-flow.test.ts
│  │
│  └─📁 scripts/
│     ├─ 📄 seed.ts
│     ├─ 📄 backup.sh
│     └─ 📄 cleanup.sh
│
├─📁 frontend/
│  ├─ 📄 package.json
│  ├─ 📄 package-lock.json
│  ├─ 📄 vite.config.ts
│  ├─ 📄 tsconfig.json
│  ├─ 📄 tailwind.config.js
│  ├─ 📄 postcss.config.js
│  ├─ 📄 .env.example
│  ├─ 📄 .gitignore
│  ├─ 📄 Dockerfile
│  ├─ 📄 .dockerignore
│  │
│  ├─📁 src/
│  │  ├─ 📄 App.tsx
│  │  ├─ 📄 main.tsx
│  │  │
│  │  ├─📁 pages/
│  │  │  ├─ 📄 Dashboard.tsx
│  │  │  ├─ 📄 Mining.tsx
│  │  │  ├─ 📄 Referral.tsx
│  │  │  ├─ 📄 Wallet.tsx
│  │  │  ├─ 📄 Leaderboard.tsx
│  │  │  ├─ 📄 Profile.tsx
│  │  │  ├─ 📄 Login.tsx
│  │  │  ├─ 📄 Register.tsx
│  │  │  └─ 📄 NotFound.tsx
│  │  │
│  │  ├─📁 components/
│  │  │  ├─📁 common/
│  │  │  │  ├─ 📄 Header.tsx
│  │  │  │  ├─ 📄 Sidebar.tsx
│  │  │  │  ├─ 📄 Footer.tsx
│  │  │  │  ├─ 📄 Loading.tsx
│  │  │  │  └─ 📄 ErrorBoundary.tsx
│  │  │  │
│  │  │  ├─📁 mining/
│  │  │  │  ├─ 📄 MiningCard.tsx
│  │  │  │  ├─ 📄 MiningStats.tsx
│  │  │  │  ├─ 📄 MiningTimer.tsx
│  │  │  │  └─ 📄 StartMiningButton.tsx
│  │  │  │
│  │  │  ├─📁 referral/
│  │  │  │  ├─ 📄 ReferralLink.tsx
│  │  │  │  ├─ 📄 ReferralStats.tsx
│  │  │  │  ├─ 📄 ReferralTree.tsx
│  │  │  │  └─ 📄 CopyButton.tsx
│  │  │  │
│  │  │  ├─📁 wallet/
│  │  │  │  ├─ 📄 WalletConnect.tsx
│  │  │  │  ├─ 📄 BalanceDisplay.tsx
│  │  │  │  ├─ 📄 ClaimButton.tsx
│  │  │  │  └─ 📄 TransactionHistory.tsx
│  │  │  │
│  │  │  └─📁 leaderboard/
│  │  │     ├─ 📄 LeaderboardTable.tsx
│  │  │     ├─ 📄 UserRank.tsx
│  │  │     └─ 📄 LeaderboardFilters.tsx
│  │  │
│  │  ├─📁 hooks/
│  │  │  ├─ 📄 useAuth.ts
│  │  │  ├─ 📄 useMining.ts
│  │  │  ├─ 📄 useWeb3.ts
│  │  │  ├─ 📄 useApi.ts
│  │  │  ├─ 📄 useWebSocket.ts
│  │  │  ├─ 📄 useWallet.ts
│  │  │  └─ 📄 useLocalStorage.ts
│  │  │
│  │  ├─📁 services/
│  │  │  ├─ 📄 api.service.ts
│  │  │  ├─ 📄 web3.service.ts
│  │  │  ├─ 📄 storage.service.ts
│  │  │  ├─ 📄 wallet.service.ts
│  │  │  └─ 📄 socket.service.ts
│  │  │
│  │  ├─📁 store/
│  │  │  ├─ 📄 index.ts
│  │  │  ├─ 📄 authSlice.ts
│  │  │  ├─ 📄 miningSlice.ts
│  │  │  ├─ 📄 userSlice.ts
│  │  │  ├─ 📄 walletSlice.ts
│  │  │  └─ 📄 leaderboardSlice.ts
│  │  │
│  │  ├─📁 styles/
│  │  │  ├─ 📄 tailwind.css
│  │  │  ├─ 📄 globals.css
│  │  │  └─ 📄 animations.css
│  │  │
│  │  ├─📁 types/
│  │  │  ├─ 📄 user.ts
│  │  │  ├─ 📄 mining.ts
│  │  │  ├─ 📄 api.ts
│  │  │  ├─ 📄 web3.ts
│  │  │  └─ 📄 index.ts
│  │  │
│  │  └─📁 utils/
│  │     ├─ 📄 validators.ts
│  │     ├─ 📄 formatters.ts
│  │     ├─ 📄 constants.ts
│  │     └─ 📄 helpers.ts
│  │
│  ├─📁 tests/
│  │  ├─ 📄 setup.ts
│  │  ├─📁 unit/
│  │  │  ├─ 📄 hooks.test.ts
│  │  │  └─ 📄 utils.test.ts
│  │  └─📁 integration/
│  │     └─ 📄 components.test.tsx
│  │
│  └─📁 public/
│     ├─📁 images/
│     │  ├─ 📄 logo.svg
│     │  └─ 📄 favicon.ico
│     └─📁 assets/
│        └─ 📄 fonts/
│
├─📁 docs/
│  ├─ 📄 README.md
│  ├─ 📄 API.md
│  ├─ 📄 SMART_CONTRACT.md
│  ├─ 📄 DEPLOYMENT.md
│  ├─ 📄 TESTING.md
│  ├─ 📄 DATABASE.md
│  ├─ 📄 SECURITY.md
│  └─📁 guides/
│     ├─ 📄 LOCAL_SETUP.md
│     ├─ 📄 TESTING_GUIDE.md
│     └─ 📄 DEPLOYMENT_GUIDE.md
│
├─📁 .github/
│  ├─📁 workflows/
│  │  ├─ 📄 backend-ci.yml
│  │  ├─ 📄 frontend-ci.yml
│  │  ├─ 📄 smart-contract-ci.yml
│  │  └─ 📄 deploy.yml
│  │
│  └─📁 ISSUE_TEMPLATE/
│     ├─ 📄 bug_report.md
│     ├─ 📄 feature_request.md
│     └─ 📄 config.yml
│
└─📁 config/
   ├─ 📄 docker-compose.yml
   ├─ 📄 docker-compose.prod.yml
   ├─ 📄 nginx.conf
   ├─ 📄 mongodb.conf
   └─ 📄 redis.conf
```

---

## 📋 نام تمام فایل‌ها برای GitHub

### **Root Level** (wa-io/)
```
✓ README.md                  - پروژه توضیح
✓ .gitignore                 - اعلام فایل‌های نادیده
✓ .env.example               - نمونه متغیرهای محیطی
✓ ARCHITECTURE.md            - معماری پروژه
✓ SETUP.md                   - آموزش راه‌اندازی
✓ CONTRIBUTING.md            - دستورالعمل مشارکت
✓ LICENSE                    - مجوز (MIT)
```

### **smart-contracts/**
```
✓ package.json               - وابستگی‌ها
✓ hardhat.config.ts          - تنظیمات Hardhat
✓ tsconfig.json              - تنظیمات TypeScript
✓ .env.example               - متغیرهای محیطی نمونه

contracts/:
✓ WA.sol                     - توکن ERC20 اصلی
✓ Mining.sol                 - منطق ماینینگ
✓ Referral.sol               - سیستم ارجاع
✓ Treasury.sol               - مدیریت صندوق

scripts/:
✓ deploy.ts                  - اسکریپت استقرار
✓ verify.ts                  - تایید قرارداد
✓ initialize.ts              - راه‌اندازی اولیه
✓ constants.ts               - ثابت‌ها

test/:
✓ WA.test.ts                 - تست توکن
✓ Mining.test.ts             - تست ماینینگ
✓ Security.test.ts           - تست امنیت

deployments/:
✓ testnet.json               - اطلاعات استقرار تست‌نت
✓ mainnet.json               - اطلاعات استقرار مین‌نت (خالی)
```

### **backend/**
```
✓ package.json               - وابستگی‌ها
✓ tsconfig.json              - تنظیمات TypeScript
✓ .env.example               - متغیرهای محیطی نمونه
✓ Dockerfile                 - تصویر Docker
✓ docker-compose.yml         - ترکیب Docker

src/app.ts                   - راه‌اندازی Express
src/server.ts                - شروع سرور

config/:
✓ database.ts                - تنظیم MongoDB
✓ blockchain.ts              - تنظیم Web3
✓ cache.ts                   - تنظیم Redis
✓ env.ts                     - والیدیشن محیط
✓ logger.ts                  - سیستم لاگ

controllers/:
✓ auth.controller.ts         - کنترلر احراز هویت
✓ mining.controller.ts       - کنترلر ماینینگ
✓ user.controller.ts         - کنترلر کاربر
✓ referral.controller.ts     - کنترلر ارجاع
✓ wallet.controller.ts       - کنترلر کیف پول
✓ leaderboard.controller.ts  - کنترلر جدول رتبه‌بندی

services/:
✓ auth.service.ts            - سرویس احراز هویت
✓ mining.service.ts          - سرویس ماینینگ
✓ points.service.ts          - سرویس امتیازات
✓ referral.service.ts        - سرویس ارجاع
✓ reward.service.ts          - سرویس پاداش
✓ wallet.service.ts          - سرویس کیف پول
✓ blockchain.service.ts      - سرویس بلاکچین
✓ claim.service.ts           - سرویس درخواست‌ها

models/:
✓ User.ts                    - مدل کاربر
✓ Mining.ts                  - مدل ماینینگ
✓ Referral.ts                - مدل ارجاع
✓ Transaction.ts             - مدل تراکنش
✓ Claim.ts                   - مدل درخواست
✓ Leaderboard.ts             - مدل جدول رتبه‌بندی

routes/:
✓ index.ts                   - مسیرهای اصلی
✓ auth.routes.ts             - مسیرهای احراز هویت
✓ mining.routes.ts           - مسیرهای ماینینگ
✓ user.routes.ts             - مسیرهای کاربر
✓ referral.routes.ts         - مسیرهای ارجاع
✓ wallet.routes.ts           - مسیرهای کیف پول
✓ health.routes.ts           - مسیرهای سلامتی

middlewares/:
✓ auth.middleware.ts         - میان‌افزار احراز هویت
✓ validation.middleware.ts    - میان‌افزار تأیید
✓ rateLimit.middleware.ts     - میان‌افزار محدودیت سرعت
✓ error.middleware.ts         - میان‌افزار خطا
✓ cors.middleware.ts          - میان‌افزار CORS

jobs/:
✓ dailyReward.job.ts         - کار پاداش روزانه
✓ claimProcessing.job.ts     - کار پردازش درخواست
✓ halvingSchedule.job.ts     - کار برنامه نصفة‌کاری
✓ leaderboardUpdate.job.ts   - کار به‌روز رسانی جدول
✓ scheduler.ts               - برنامه‌ریزی کارها

websocket/:
✓ socket.ts                  - راه‌اندازی Socket.io
✓ events.ts                  - تعریف رویدادها
✓ handlers.ts                - دستگیرهای رویداد

utils/:
✓ validators.ts              - تأیید‌کننده‌ها
✓ helpers.ts                 - توابع کمکی
✓ constants.ts               - ثابت‌ها
✓ errors.ts                  - تعریف خطاها
✓ crypto.ts                  - توابع رمزنگاری

types/:
✓ user.types.ts              - انواع کاربر
✓ mining.types.ts            - انواع ماینینگ
✓ api.types.ts               - انواع API
✓ blockchain.types.ts        - انواع بلاکچین
✓ index.ts                   - صادرات انواع

tests/:
✓ setup.ts                   - راه‌اندازی تست
unit/:
✓ mining.test.ts
✓ referral.test.ts
✓ points.test.ts
integration/:
✓ auth.test.ts
✓ mining.test.ts
✓ wallet.test.ts
e2e/:
✓ mining-flow.test.ts

scripts/:
✓ seed.ts                    - پر کردن پایگاه داده
✓ backup.sh                  - اسکریپت پشتیبان
✓ cleanup.sh                 - اسکریپت پاک‌سازی
```

### **frontend/**
```
✓ package.json               - وابستگی‌ها
✓ vite.config.ts             - تنظیمات Vite
✓ tsconfig.json              - تنظیمات TypeScript
✓ tailwind.config.js         - تنظیمات Tailwind
✓ postcss.config.js          - تنظیمات PostCSS
✓ .env.example               - متغیرهای محیطی نمونه
✓ Dockerfile                 - تصویر Docker
✓ .dockerignore              - فایل‌های نادیده Docker

src/App.tsx                  - کامپوننت اصلی
src/main.tsx                 - نقطه ورود

pages/:
✓ Dashboard.tsx              - صفحه داشبورد
✓ Mining.tsx                 - صفحه ماینینگ
✓ Referral.tsx               - صفحه ارجاع
✓ Wallet.tsx                 - صفحه کیف پول
✓ Leaderboard.tsx            - صفحه جدول رتبه‌بندی
✓ Profile.tsx                - صفحه پروفایل
✓ Login.tsx                  - صفحه ورود
✓ Register.tsx               - صفحه ثبت‌نام
✓ NotFound.tsx               - صفحه 404

components/common/:
✓ Header.tsx                 - سرصفحه
✓ Sidebar.tsx                - نوار کناری
✓ Footer.tsx                 - پایین‌صفحه
✓ Loading.tsx                - لاگر بارگیری
✓ ErrorBoundary.tsx          - مرز خطا

components/mining/:
✓ MiningCard.tsx             - کارت ماینینگ
✓ MiningStats.tsx            - آمار ماینینگ
✓ MiningTimer.tsx            - تایمر ماینینگ
✓ StartMiningButton.tsx      - دکمه شروع

components/referral/:
✓ ReferralLink.tsx           - لینک ارجاع
✓ ReferralStats.tsx          - آمار ارجاع
✓ ReferralTree.tsx           - درخت ارجاع
✓ CopyButton.tsx             - دکمه کپی

components/wallet/:
✓ WalletConnect.tsx          - اتصال کیف پول
✓ BalanceDisplay.tsx         - نمایش موجودی
✓ ClaimButton.tsx            - دکمه درخواست
✓ TransactionHistory.tsx     - تاریخچه تراکنش

components/leaderboard/:
✓ LeaderboardTable.tsx       - جدول جدول رتبه‌بندی
✓ UserRank.tsx               - رتبه کاربر
✓ LeaderboardFilters.tsx     - فیلترهای جدول

hooks/:
✓ useAuth.ts                 - هوک احراز هویت
✓ useMining.ts               - هوک ماینینگ
✓ useWeb3.ts                 - هوک Web3
✓ useApi.ts                  - هوک API
✓ useWebSocket.ts            - هوک WebSocket
✓ useWallet.ts               - هوک کیف پول
✓ useLocalStorage.ts         - هوک ذخیره محلی

services/:
✓ api.service.ts             - سرویس API
✓ web3.service.ts            - سرویس Web3
✓ storage.service.ts         - سرویس ذخیره
✓ wallet.service.ts          - سرویس کیف پول
✓ socket.service.ts          - سرویس Socket

store/:
✓ index.ts                   - تنظیمات Redux
✓ authSlice.ts               - slice احراز هویت
✓ miningSlice.ts             - slice ماینینگ
✓ userSlice.ts               - slice کاربر
✓ walletSlice.ts             - slice کیف پول
✓ leaderboardSlice.ts        - slice جدول رتبه‌بندی

styles/:
✓ tailwind.css               - سبک‌های Tailwind
✓ globals.css                - سبک‌های سراسری
✓ animations.css             - انیمیشن‌ها

types/:
✓ user.ts                    - انواع کاربر
✓ mining.ts                  - انواع ماینینگ
✓ api.ts                     - انواع API
✓ web3.ts                    - انواع Web3
✓ index.ts                   - صادرات انواع

utils/:
✓ validators.ts              - تأیید‌کننده‌ها
✓ formatters.ts              - فرمت‌کنندگان
✓ constants.ts               - ثابت‌ها
✓ helpers.ts                 - توابع کمکی

tests/:
✓ setup.ts                   - راه‌اندازی تست
unit/:
✓ hooks.test.ts
✓ utils.test.ts
integration/:
✓ components.test.tsx

public/:
images/:
✓ logo.svg
✓ favicon.ico
assets/fonts/:
(فایل‌های فونت)
```

### **docs/**
```
✓ README.md                  - خوش‌آمدگویی اسناد
✓ API.md                     - مستندات API
✓ SMART_CONTRACT.md          - مستندات قرارداد
✓ DEPLOYMENT.md              - آموزش استقرار
✓ TESTING.md                 - آموزش تست
✓ DATABASE.md                - طراحی پایگاه داده
✓ SECURITY.md                - نکات امنیتی

guides/:
✓ LOCAL_SETUP.md             - راه‌اندازی محلی
✓ TESTING_GUIDE.md           - راهنمای تست
✓ DEPLOYMENT_GUIDE.md        - راهنمای استقرار
```

### **.github/**
```
workflows/:
✓ backend-ci.yml             - CI برای Backend
✓ frontend-ci.yml            - CI برای Frontend
✓ smart-contract-ci.yml      - CI برای قرارداس
✓ deploy.yml                 - استقرار خودکار

ISSUE_TEMPLATE/:
✓ bug_report.md
✓ feature_request.md
✓ config.yml
```

### **config/**
```
✓ docker-compose.yml         - ترکیب Docker توسعه
✓ docker-compose.prod.yml    - ترکیب Docker تولید
✓ nginx.conf                 - تنظیمات Nginx
✓ mongodb.conf               - تنظیمات MongoDB
✓ redis.conf                 - تنظیمات Redis
```

---

## 🚀 مرحله‌های GitHub

### **1. Repository ایجاد کن**
```bash
# GitHub.com → New Repository
# نام: wa-io
# Public/Private: Private (اول) → Public (بعد)
```

### **2. Clone کن**
```bash
git clone https://github.com/YOUR-USERNAME/wa-io.git
cd wa-io
```

### **3. تمام فایل‌های بالا را ایجاد کن:**

**سپس:**
```bash
git add .
git commit -m "Initial project structure"
git push origin main
```

---

## ✅ Checklist برای GitHub

```
✓ Repository ایجاد
✓ Clone محلی
✓ Folder structure درست
✓ تمام فایل‌های .md نوشته شده
✓ .gitignore صحیح
✓ .env.example تکمیل
✓ package.json‌ها آماده
✓ اولین commit و push
```

---

## 💡 نکات مهم

1. **هر folder یک `package.json` دارد:**
   - `smart-contracts/package.json`
   - `backend/package.json`
   - `frontend/package.json`

2. **تمام `.env.example` فایل‌ها مثال نشان می‌دهند:**
   - اصلی `.env` درج نشود (در `.gitignore`)

3. **folder `/src` فقط در `backend` و `frontend` است**

4. **مستندات در `/docs` و `.github/workflows` برای CI/CD**

---

## 🎯 بعد از ساخت structure:

**من برایت می‌سازم:**
1. تمام فایل‌های توضیح‌دار (`.md`)
2. `package.json` تکمیل شده
3. پیکربندی‌های پایه (`Dockerfile`, `docker-compose.yml`)

**فقط بگو:** "شروع کنیم!" 🚀