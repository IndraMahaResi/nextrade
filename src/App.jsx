import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleDollarSign,
  Globe2,
  Layers3,
  Menu,
  ShieldCheck,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const evaluationPlans = [
  {
    id: "2step",
    name: "Stellar 2-Step",
    subtitle: "News Trading Allowed | Refund on 1st Reward",
    badge: "MOST POPULAR",
    plans: [
      {
        account: "$2K",
        price: "$49.99",
        oldPrice: "$59.99",
        discount: "16% OFF",
        profitTarget: "8% / 5%",
        dailyLoss: "5%",
        maxLoss: "10%",
        drawdown: "Static",
        consistency: "None",
        minDays: "5 Days",
        rewardShare: "Up to 80%",
        refund: "Yes",
        newsProfit: "100%",
        maxRisk: "2% At any time",
        firstWithdrawal: "After 14 Days",
        subsequentWithdrawal: "Bi-Weekly",
      },
      {
        account: "$5K",
        price: "$119.99",
        oldPrice: "$139.99",
        discount: "14% OFF",
        profitTarget: "8% / 5%",
        dailyLoss: "5%",
        maxLoss: "10%",
        drawdown: "Static",
        consistency: "None",
        minDays: "5 Days",
        rewardShare: "Up to 80%",
        refund: "Yes",
        newsProfit: "100%",
        maxRisk: "2% At any time",
        firstWithdrawal: "After 14 Days",
        subsequentWithdrawal: "Bi-Weekly",
      },
      {
        account: "$10K",
        price: "$219.99",
        oldPrice: "$249.99",
        discount: "12% OFF",
        profitTarget: "8% / 5%",
        dailyLoss: "5%",
        maxLoss: "10%",
        drawdown: "Static",
        consistency: "None",
        minDays: "5 Days",
        rewardShare: "Up to 80%",
        refund: "Yes",
        newsProfit: "100%",
        maxRisk: "2% At any time",
        firstWithdrawal: "After 14 Days",
        subsequentWithdrawal: "Bi-Weekly",
      },
      {
        account: "$20K",
        price: "$399.99",
        oldPrice: "$449.99",
        discount: "11% OFF",
        profitTarget: "8% / 5%",
        dailyLoss: "5%",
        maxLoss: "10%",
        drawdown: "Static",
        consistency: "None",
        minDays: "5 Days",
        rewardShare: "Up to 80%",
        refund: "Yes",
        newsProfit: "100%",
        maxRisk: "2% At any time",
        firstWithdrawal: "After 14 Days",
        subsequentWithdrawal: "Bi-Weekly",
      },
    ],
  },

  {
    id: "1step",
    name: "Stellar 1-Step",
    subtitle: "News Trading Allowed | Reward Every 5 Business Days",
    badge: "",
    plans: [
      {
        account: "$2K",
        price: "$69.99",
        oldPrice: "$79.99",
        discount: "12% OFF",
        profitTarget: "10%",
        dailyLoss: "5%",
        maxLoss: "10%",
        drawdown: "Static",
        consistency: "None",
        minDays: "5 Days",
        rewardShare: "Up to 80%",
        refund: "Yes",
        newsProfit: "100%",
        maxRisk: "2% At any time",
        firstWithdrawal: "Every 5 Days",
        subsequentWithdrawal: "Every 5 Days",
      },
      {
        account: "$5K",
        price: "$149.99",
        oldPrice: "$169.99",
        discount: "12% OFF",
        profitTarget: "10%",
        dailyLoss: "5%",
        maxLoss: "10%",
        drawdown: "Static",
        consistency: "None",
        minDays: "5 Days",
        rewardShare: "Up to 80%",
        refund: "Yes",
        newsProfit: "100%",
        maxRisk: "2% At any time",
        firstWithdrawal: "Every 5 Days",
        subsequentWithdrawal: "Every 5 Days",
      },
      {
        account: "$10K",
        price: "$299.99",
        oldPrice: "$329.99",
        discount: "9% OFF",
        profitTarget: "10%",
        dailyLoss: "5%",
        maxLoss: "10%",
        drawdown: "Static",
        consistency: "None",
        minDays: "5 Days",
        rewardShare: "Up to 80%",
        refund: "Yes",
        newsProfit: "100%",
        maxRisk: "2% At any time",
        firstWithdrawal: "Every 5 Days",
        subsequentWithdrawal: "Every 5 Days",
      },
      {
        account: "$20K",
        price: "$549.99",
        oldPrice: "$599.99",
        discount: "8% OFF",
        profitTarget: "10%",
        dailyLoss: "5%",
        maxLoss: "10%",
        drawdown: "Static",
        consistency: "None",
        minDays: "5 Days",
        rewardShare: "Up to 80%",
        refund: "Yes",
        newsProfit: "100%",
        maxRisk: "2% At any time",
        firstWithdrawal: "Every 5 Days",
        subsequentWithdrawal: "Every 5 Days",
      },
    ],
  },

  {
    id: "lite",
    name: "Stellar Lite",
    subtitle: "Most Affordable 2 Step Step | News Trading Allowed",
    badge: "BEST VALUE",
    plans: [
      {
        account: "$2K",
        price: "$39.99",
        oldPrice: "$49.99",
        discount: "20% OFF",
        profitTarget: "8% / 5%",
        dailyLoss: "5%",
        maxLoss: "8%",
        drawdown: "Static",
        consistency: "None",
        minDays: "3 Days",
        rewardShare: "Up to 80%",
        refund: "Yes",
        newsProfit: "100%",
        maxRisk: "2% At any time",
        firstWithdrawal: "After 14 Days",
        subsequentWithdrawal: "Bi-Weekly",
      },
      {
        account: "$5K",
        price: "$89.99",
        oldPrice: "$109.99",
        discount: "18% OFF",
        profitTarget: "8% / 5%",
        dailyLoss: "5%",
        maxLoss: "8%",
        drawdown: "Static",
        consistency: "None",
        minDays: "3 Days",
        rewardShare: "Up to 80%",
        refund: "Yes",
        newsProfit: "100%",
        maxRisk: "2% At any time",
        firstWithdrawal: "After 14 Days",
        subsequentWithdrawal: "Bi-Weekly",
      },
      {
        account: "$10K",
        price: "$169.99",
        oldPrice: "$199.99",
        discount: "15% OFF",
        profitTarget: "8% / 5%",
        dailyLoss: "5%",
        maxLoss: "8%",
        drawdown: "Static",
        consistency: "None",
        minDays: "3 Days",
        rewardShare: "Up to 80%",
        refund: "Yes",
        newsProfit: "100%",
        maxRisk: "2% At any time",
        firstWithdrawal: "After 14 Days",
        subsequentWithdrawal: "Bi-Weekly",
      },
      {
        account: "$20K",
        price: "$299.99",
        oldPrice: "$349.99",
        discount: "14% OFF",
        profitTarget: "8% / 5%",
        dailyLoss: "5%",
        maxLoss: "8%",
        drawdown: "Static",
        consistency: "None",
        minDays: "3 Days",
        rewardShare: "Up to 80%",
        refund: "Yes",
        newsProfit: "100%",
        maxRisk: "2% At any time",
        firstWithdrawal: "After 14 Days",
        subsequentWithdrawal: "Bi-Weekly",
      },
    ],
  },

  {
    id: "instant",
    name: "Stellar Instant",
    subtitle: "No Daily Loss Limit | No Consistency Rule",
    badge: "INSTANT",
    plans: [
      {
        account: "$2K",
        price: "$49.99",
        oldPrice: "$59.99",
        discount: "16% OFF",
        profitTarget: "None",
        dailyLoss: "None",
        maxLoss: "6%",
        drawdown: "Trailing",
        consistency: "None",
        minDays: "None",
        rewardShare: "Up to 80%",
        refund: "None",
        newsProfit: "40%",
        maxRisk: "3% At any time",
        firstWithdrawal: "On-Demand / Bi-Weekly",
        subsequentWithdrawal: "On-Demand / Bi-Weekly",
      },
      {
        account: "$5K",
        price: "$119.99",
        oldPrice: "$139.99",
        discount: "14% OFF",
        profitTarget: "None",
        dailyLoss: "None",
        maxLoss: "6%",
        drawdown: "Trailing",
        consistency: "None",
        minDays: "None",
        rewardShare: "Up to 80%",
        refund: "None",
        newsProfit: "40%",
        maxRisk: "3% At any time",
        firstWithdrawal: "On-Demand / Bi-Weekly",
        subsequentWithdrawal: "On-Demand / Bi-Weekly",
      },
      {
        account: "$10K",
        price: "$299.99",
        oldPrice: "$349.99",
        discount: "14% OFF",
        profitTarget: "None",
        dailyLoss: "None",
        maxLoss: "6%",
        drawdown: "Trailing",
        consistency: "None",
        minDays: "None",
        rewardShare: "Up to 80%",
        refund: "None",
        newsProfit: "40%",
        maxRisk: "3% At any time",
        firstWithdrawal: "On-Demand / Bi-Weekly",
        subsequentWithdrawal: "On-Demand / Bi-Weekly",
      },
      {
        account: "$20K",
        price: "$599.99",
        oldPrice: "$699.99",
        discount: "14% OFF",
        profitTarget: "None",
        dailyLoss: "None",
        maxLoss: "6%",
        drawdown: "Trailing",
        consistency: "None",
        minDays: "None",
        rewardShare: "Up to 80%",
        refund: "None",
        newsProfit: "40%",
        maxRisk: "3% At any time",
        firstWithdrawal: "On-Demand / Bi-Weekly",
        subsequentWithdrawal: "On-Demand / Bi-Weekly",
      },
    ],
  },
];

const marketAssets = [
  ["NQ", "NASDAQ 100"],
  ["SPX", "S&P 500"],
  ["DJI", "DOW JONES"],
  ["XAU", "GOLD / USD"],
  ["EUR", "EUR / USD"],
  ["GBP", "GBP / USD"],
  ["JPY", "USD / JPY"],
  ["AAPL", "APPLE"],
  ["NVDA", "NVIDIA"],
  ["TSLA", "TESLA"],
  ["MSFT", "MICROSOFT"],
  ["AMZN", "AMAZON"],
  ["META", "META"],
  ["GOOGL", "ALPHABET"],
  ["AMD", "AMD"],
  ["NFLX", "NETFLIX"],
];

const faqs = [
  {
    q: "What is NEXTRADE?",
    a: "NEXTRADE is an academic business prototype for a trading evaluation and performance platform. Traders are evaluated against predefined rules before progressing to the next stage.",
  },
  {
    q: "What happens after I purchase an account?",
    a: "The customer selects an account size, receives the applicable trading rules, completes the evaluation, and can progress when the required performance criteria are met.",
  },
  {
    q: "Can traders trade during major news?",
    a: "News trading availability depends on the selected evaluation model. The exact rules are displayed before the customer starts the evaluation.",
  },
  {
    q: "How does the reward split work?",
    a: "The prototype uses a reward-sharing model of up to 80%. Actual operational terms would depend on the final business implementation.",
  },
  {
    q: "What payment methods are supported?",
    a: "The prototype presents major card, wallet, and regional payment options including Visa, Mastercard, American Express, Apple Pay, Google Pay, PayPal, QRIS, and bank transfer.",
  },
  {
    q: "Is NEXTRADE an investment service?",
    a: "No. This website is an academic business and digital marketing prototype. The displayed pricing, account sizes, targets, and reward rules are illustrative.",
  },
];

/* =========================================================
   HELPERS
========================================================= */

function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#B7FF4A]">
      <span className="h-px w-8 bg-[#B7FF4A]" />
      {children}
    </div>
  );
}

function Button({ children, href = "#accounts", secondary = false }) {
  return (
    <a
      href={href}
      className={
        secondary
          ? "inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-bold text-white transition hover:border-[#B7FF4A]/40 hover:bg-white/[0.06]"
          : "inline-flex items-center justify-center gap-2 rounded-lg bg-[#B7FF4A] px-5 py-3 text-sm font-black text-[#070A0F] transition hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(183,255,74,.16)]"
      }
    >
      {children}
    </a>
  );
}

/* =========================================================
   PAYMENT LOGOS
========================================================= */

function MastercardLogo() {
  return (
    <div className="payment-icon payment-mastercard">
      <span className="mc-one" />
      <span className="mc-two" />
    </div>
  );
}

function VisaLogo() {
  return <span className="payment-text payment-visa">VISA</span>;
}

function AmexLogo() {
  return <span className="payment-text payment-amex">AMEX</span>;
}

function ApplePayLogo() {
  return <span className="payment-text payment-apple">Pay</span>;
}

function GooglePayLogo() {
  return (
    <span className="payment-text payment-google">
      G<span>Pay</span>
    </span>
  );
}

function PaypalLogo() {
  return <span className="payment-text payment-paypal">PayPal</span>;
}

function QrisLogo() {
  return <span className="payment-text payment-qris">QRIS</span>;
}

function BankLogo() {
  return <span className="payment-text payment-bank">BANK</span>;
}

function PaymentMethods() {
  return (
    <div className="payment-methods">
      <div className="payment-method" title="Mastercard">
        <MastercardLogo />
      </div>

      <div className="payment-method" title="Visa">
        <VisaLogo />
      </div>

      <div className="payment-method" title="American Express">
        <AmexLogo />
      </div>

      <div className="payment-method" title="Apple Pay">
        <ApplePayLogo />
      </div>

      <div className="payment-method" title="Google Pay">
        <GooglePayLogo />
      </div>

      <div className="payment-method" title="PayPal">
        <PaypalLogo />
      </div>

      <div className="payment-method" title="QRIS">
        <QrisLogo />
      </div>

      <div className="payment-method" title="Bank Transfer">
        <BankLogo />
      </div>

      <div className="payment-more">+13 more</div>
    </div>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Company", "#company"],
    ["History", "#history"],
    ["Markets", "#markets"],
    ["How It Works", "#how-it-works"],
    ["Accounts", "#accounts"],
    ["FAQ", "#faq"],
    ["Proposal", "#proposal"],
  ];

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#070A0F]/90 backdrop-blur-xl">
        <Container className="flex h-[72px] items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/assets/nextrade-logo.png"
              alt="NEXTRADE"
              className="h-9 w-auto object-contain"
            />

            <div className="hidden border-l border-white/10 pl-3 sm:block">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                Trading Evaluation
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[12px] font-semibold text-white/55 transition hover:text-white"
              >
                {label}
              </a>
            ))}

            <a
              href="#accounts"
              className="rounded-md bg-[#B7FF4A] px-4 py-2.5 text-xs font-black text-[#070A0F] transition hover:-translate-y-0.5"
            >
              View Accounts
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
            aria-label="Open menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/[0.06] bg-[#090D13] lg:hidden"
            >
              <Container className="flex flex-col py-4">
                {links.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="border-b border-white/[0.05] py-4 text-sm font-semibold text-white/70"
                  >
                    {label}
                  </a>
                ))}

                <a
                  href="#accounts"
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-lg bg-[#B7FF4A] px-4 py-3 text-center text-sm font-black text-[#070A0F]"
                >
                  View Accounts
                </a>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <MarketTicker />
    </>
  );
}

/* =========================================================
   MARKET TICKER
========================================================= */

function MarketTicker() {
  const items = [...marketAssets, ...marketAssets];

  return (
    <div className="fixed left-0 right-0 top-[72px] z-40 overflow-hidden border-b border-white/[0.05] bg-[#090D13]/95 backdrop-blur-md">
      <div className="ticker-track flex min-w-max">
        {items.map(([symbol, name], index) => (
          <div
            key={`${symbol}-${index}`}
            className="flex h-[34px] items-center gap-2 border-r border-white/[0.05] px-5"
          >
            <span className="text-[10px] font-black text-white">{symbol}</span>
            <span className="text-[9px] font-medium uppercase tracking-wide text-white/35">
              {name}
            </span>
            <span className="text-[9px] font-bold text-[#B7FF4A]">
              +{(0.12 + (index % 7) * 0.17).toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="grid-bg relative overflow-hidden pt-[160px]">
      <div className="glow pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full blur-3xl" />
      <div className="glow-cyan pointer-events-none absolute right-0 top-40 h-[450px] w-[450px] rounded-full blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-14 pb-24 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:pb-32">
          <div>
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#B7FF4A]/20 bg-[#B7FF4A]/[0.06] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#B7FF4A]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#B7FF4A]" />
              Trading Evaluation & Performance Platform
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl lg:text-[82px]"
            >
              PROVE
              <br />
              <span className="text-[#B7FF4A]">YOUR EDGE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 max-w-xl text-base leading-7 text-white/50 sm:text-lg"
            >
              NEXTRADE gives disciplined traders a structured environment to
              demonstrate consistency, manage risk, and progress through
              performance-based evaluation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="#accounts">
                Explore Accounts
                <ArrowRight size={16} />
              </Button>

              <Button href="#company" secondary>
                Discover NEXTRADE
                <ArrowUpRight size={16} />
              </Button>
            </motion.div>

            <div className="mt-12 grid max-w-lg grid-cols-3 border-y border-white/[0.07] py-5">
              <div>
                <div className="text-xl font-black text-white">16+</div>
                <div className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                  Markets
                </div>
              </div>

              <div className="border-l border-white/[0.07] pl-5">
                <div className="text-xl font-black text-white">80%</div>
                <div className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                  Reward Share
                </div>
              </div>

              <div className="border-l border-white/[0.07] pl-5">
                <div className="text-xl font-black text-white">24/7</div>
                <div className="mt-1 text-[9px] uppercase tracking-widest text-white/35">
                  Platform
                </div>
              </div>
            </div>
          </div>

          <HeroTerminal />
        </div>
      </Container>
    </section>
  );
}

function HeroTerminal() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-[40px] bg-[#B7FF4A]/[0.03] blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0C1118] shadow-2xl">
        <div className="flex h-11 items-center justify-between border-b border-white/[0.07] px-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
          </div>

          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
            NEXTRADE TERMINAL
          </span>

          <Activity size={14} className="text-[#B7FF4A]" />
        </div>

        <div className="grid grid-cols-3 border-b border-white/[0.07]">
          {[
            ["XAUUSD", "+1.82%", "$2,641.20"],
            ["NAS100", "+0.91%", "20,184.42"],
            ["AAPL", "+1.34%", "$227.16"],
          ].map(([symbol, change, price]) => (
            <div
              key={symbol}
              className="border-r border-white/[0.06] px-4 py-4 last:border-r-0"
            >
              <div className="text-[10px] font-bold text-white/40">
                {symbol}
              </div>
              <div className="mt-1 text-sm font-black text-white">{price}</div>
              <div className="mt-1 text-[9px] font-bold text-[#B7FF4A]">
                {change}
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-[330px] overflow-hidden p-5">
          <div className="chart-grid absolute inset-5" />

          <svg
            viewBox="0 0 600 280"
            className="absolute inset-5 h-[calc(100%-40px)] w-[calc(100%-40px)]"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B7FF4A" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#B7FF4A" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="M0 240 L45 222 L80 230 L120 195 L155 202 L190 165 L220 180 L255 145 L290 158 L325 115 L365 132 L400 90 L430 110 L465 72 L500 84 L535 44 L570 62 L600 24 V280 H0 Z"
              fill="url(#chartGradient)"
            />

            <path
              d="M0 240 L45 222 L80 230 L120 195 L155 202 L190 165 L220 180 L255 145 L290 158 L325 115 L365 132 L400 90 L430 110 L465 72 L500 84 L535 44 L570 62 L600 24"
              fill="none"
              stroke="#B7FF4A"
              strokeWidth="3"
            />
          </svg>

          <div className="absolute bottom-5 left-5 right-5 flex justify-between text-[8px] uppercase tracking-widest text-white/20">
            <span>09:00</span>
            <span>12:00</span>
            <span>15:00</span>
            <span>18:00</span>
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-white/[0.07]">
          <div className="px-4 py-4">
            <div className="text-[9px] uppercase tracking-widest text-white/30">
              Equity
            </div>
            <div className="mt-1 text-sm font-black text-white">$52,481.20</div>
          </div>

          <div className="border-l border-white/[0.07] px-4 py-4">
            <div className="text-[9px] uppercase tracking-widest text-white/30">
              Daily P&L
            </div>
            <div className="mt-1 text-sm font-black text-[#B7FF4A]">
              +$1,284.20
            </div>
          </div>

          <div className="border-l border-white/[0.07] px-4 py-4">
            <div className="text-[9px] uppercase tracking-widest text-white/30">
              Risk
            </div>
            <div className="mt-1 text-sm font-black text-white">1.82%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   COMPANY
========================================================= */

function Company() {
  const values = [
    {
      icon: Target,
      title: "Discipline",
      text: "Rules are designed around risk control, consistency, and repeatable decision making.",
    },
    {
      icon: BarChart3,
      title: "Technology",
      text: "A digital-first experience gives traders clear visibility over performance and account metrics.",
    },
    {
      icon: TrendingUp,
      title: "Progression",
      text: "The objective is not a single winning trade. It is building a process that can scale.",
    },
  ];

  return (
    <section id="company" className="border-t border-white/[0.06] bg-[#080C12]">
      <Container className="py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Company</SectionLabel>

            <h2 className="max-w-xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              BUILT AROUND
              <br />
              <span className="text-white/35">THE TRADER.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-white/50">
              NEXTRADE is positioned as a modern trading evaluation and
              performance platform. Instead of selling the dream of easy money,
              the concept focuses on giving traders a structured environment to
              prove their process.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="border-t border-white/[0.08] pt-5"
                  >
                    <Icon size={20} className="text-[#B7FF4A]" />

                    <h3 className="mt-5 text-lg font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   HISTORY
========================================================= */

function History() {
  const timeline = [
    [
      "2021",
      "Concept",
      "The original idea starts from the gap between retail traders and structured trading environments.",
    ],
    [
      "2022",
      "Research",
      "The business model is shaped around evaluation, performance measurement, and digital delivery.",
    ],
    [
      "2023",
      "Prototype",
      "NEXTRADE evolves into a digital-first trading evaluation platform concept.",
    ],
    [
      "2024",
      "Expansion",
      "The platform vision expands toward multiple markets, account sizes, and trader progression.",
    ],
    [
      "2025",
      "Product System",
      "Evaluation rules, reward structures, customer journey, and platform experience are formalized.",
    ],
    [
      "2026",
      "NEXTRADE",
      "The concept is presented as an academic digital marketing business prototype.",
    ],
  ];

  return (
    <section id="history" className="bg-[#070A0F]">
      <Container className="py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionLabel>Our History</SectionLabel>

            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              FROM IDEA
              <br />
              <span className="text-white/30">TO PLATFORM.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
              A fictional timeline created specifically for the NEXTRADE
              academic business prototype.
            </p>
          </div>

          <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {timeline.map(([year, title, text]) => (
              <div
                key={year}
                className="grid gap-4 py-6 sm:grid-cols-[90px_150px_1fr]"
              >
                <div className="text-sm font-black text-[#B7FF4A]">{year}</div>

                <div className="text-sm font-bold text-white">{title}</div>

                <p className="text-sm leading-6 text-white/40">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FOUNDER
========================================================= */

function Founder() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080C12]">
      <Container className="py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[320px_1fr]">
          <div className="relative">
            <div className="absolute -inset-3 border border-[#B7FF4A]/10" />

            <div className="relative overflow-hidden border border-white/[0.08] bg-[#0D121A]">
              <img
                src="/assets/ceo-indra.png"
                alt="Indra Maha Resi"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          <div>
            <SectionLabel>Leadership</SectionLabel>

            <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              BUILT WITH A
              <br />
              <span className="text-white/30">TECH MINDSET.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/45">
              NEXTRADE is founded around the intersection of trading,
              technology, digital products, and performance management. The goal
              is to make the evaluation experience clearer, measurable, and
              accessible to modern traders.
            </p>

            <div className="mt-8 border-l-2 border-[#B7FF4A] pl-5">
              <div className="text-lg font-black text-white">
                Indra Maha Resi
              </div>

              <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-[#B7FF4A]">
                Founder & Chief Executive Officer
              </div>

              <div className="mt-3 text-xs text-white/35">
                Trading Technology · Indonesia & Southeast Asia
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   MARKETS
========================================================= */

function Markets() {
  const categories = [
    ["US Indices", "NASDAQ · S&P 500 · DOW", "01"],
    ["Precious Metals", "Gold · Silver", "02"],
    ["Forex", "EURUSD · GBPUSD · USDJPY", "03"],
    ["US Equities", "AAPL · NVDA · TSLA · MSFT", "04"],
  ];

  return (
    <section id="markets" className="overflow-hidden bg-[#070A0F]">
      <Container className="py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>Markets</SectionLabel>

            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              TRADE THE
              <br />
              <span className="text-white/30">GLOBAL MARKET.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/40">
            The NEXTRADE concept is designed around multiple liquid markets,
            giving traders flexibility to operate according to their strategy.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(([title, subtitle, number]) => (
            <div
              key={title}
              className="bg-[#0A0F16] p-7 transition hover:bg-[#0D131C]"
            >
              <div className="text-xs font-black text-[#B7FF4A]">{number}</div>

              <h3 className="mt-16 text-xl font-black text-white">{title}</h3>

              <p className="mt-3 text-xs leading-5 text-white/35">{subtitle}</p>
            </div>
          ))}
        </div>
      </Container>

      <div className="overflow-hidden border-y border-white/[0.06] bg-[#090D13]">
        <div className="market-scroll flex min-w-max">
          {[...marketAssets, ...marketAssets].map(([symbol, name], index) => (
            <div
              key={`${symbol}-${index}`}
              className="flex h-20 min-w-[180px] items-center gap-4 border-r border-white/[0.05] px-7"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[9px] font-black text-white">
                {symbol.slice(0, 4)}
              </div>

              <div>
                <div className="text-xs font-black text-white">{symbol}</div>

                <div className="mt-1 text-[9px] uppercase tracking-wider text-white/30">
                  {name}
                </div>
              </div>

              <div className="ml-auto text-[10px] font-bold text-[#B7FF4A]">
                +{(0.21 + (index % 8) * 0.14).toFixed(2)}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HOW IT WORKS
========================================================= */

function HowItWorks() {
  const steps = [
    [
      "01",
      "Choose",
      "Select an evaluation model and account size that fits your trading style.",
    ],
    [
      "02",
      "Trade",
      "Follow the rules, manage your risk, and execute your strategy.",
    ],
    [
      "03",
      "Prove",
      "Demonstrate consistency against the defined performance criteria.",
    ],
    [
      "04",
      "Progress",
      "Move forward and unlock the next stage of the trader journey.",
    ],
  ];

  return (
    <section
      id="how-it-works"
      className="border-t border-white/[0.06] bg-[#080C12]"
    >
      <Container className="py-24 lg:py-32">
        <SectionLabel>How It Works</SectionLabel>

        <div className="grid gap-px overflow-hidden border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <div key={number} className="bg-[#0A0F16] p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-[#B7FF4A]">
                  {number}
                </span>

                <ArrowUpRight size={16} className="text-white/20" />
              </div>

              <h3 className="mt-20 text-2xl font-black text-white">{title}</h3>

              <p className="mt-4 text-sm leading-6 text-white/40">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   ACCOUNTS
========================================================= */

function Accounts() {
  const [selectedPlan, setSelectedPlan] = useState(3);
  const [selectedAccount, setSelectedAccount] = useState(0);

  const plan = evaluationPlans[selectedPlan];
  const account = plan.plans[selectedAccount];

  const selectPlan = (index) => {
    setSelectedPlan(index);
    setSelectedAccount(0);
  };

  return (
    <section id="accounts" className="bg-[#070A0F]">
      <Container className="py-24 lg:py-32">
        <div className="mb-12 max-w-2xl">
          <SectionLabel>Account Programs</SectionLabel>

          <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
            CHOOSE YOUR
            <br />
            <span className="text-white/30">TRADING MODEL.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/40">
            Select an evaluation model, then choose the account size. All values
            below are illustrative assumptions for the NEXTRADE academic
            prototype.
          </p>
        </div>

        {/* PLAN TABS */}

        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
          {evaluationPlans.map((item, index) => (
            <button
              key={item.id}
              onClick={() => selectPlan(index)}
              className={`group relative min-h-[110px] rounded-xl border p-5 text-left transition ${
                selectedPlan === index
                  ? "border-[#665CFF] bg-[#191652]"
                  : "border-white/[0.07] bg-[#15171B] hover:border-white/15"
              }`}
            >
              {item.badge && (
                <div className="absolute right-4 top-4 rounded-full bg-[#B7FF4A] px-2 py-1 text-[8px] font-black text-[#070A0F]">
                  {item.badge}
                </div>
              )}

              <div className="text-lg font-black text-white">{item.name}</div>

              <div className="mt-3 max-w-[270px] text-xs leading-5 text-white/45">
                {item.subtitle}
              </div>
            </button>
          ))}
        </div>

        {/* ACCOUNT SELECTOR */}

        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {plan.plans.map((item, index) => (
            <button
              key={item.account}
              onClick={() => setSelectedAccount(index)}
              className={`relative min-h-[175px] rounded-xl border p-6 text-left transition ${
                selectedAccount === index
                  ? "border-[#665CFF] bg-[#191652]"
                  : "border-white/[0.07] bg-[#15171B] hover:border-white/15"
              }`}
            >
              {selectedAccount === index && (
                <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-[#B7FF4A]" />
              )}

              {item.discount && (
                <div className="text-xs font-black text-[#B7FF4A]">
                  {item.discount}
                </div>
              )}

              <div className="mt-3 text-[12px] text-white/40">Account</div>

              <div className="mt-1 text-4xl font-black tracking-tight text-white">
                {item.account}
              </div>

              <div className="mt-5 flex items-end gap-2">
                <span className="text-lg font-black text-[#B7FF4A]">
                  {item.price}
                </span>

                <span className="text-xs text-white/25 line-through">
                  {item.oldPrice}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* DETAIL PANEL */}

        <motion.div
          layout
          className="mt-5 overflow-hidden rounded-xl border border-[#665CFF]/50 bg-[#090B1A]"
        >
          <div className="flex flex-col gap-4 border-b border-white/[0.06] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B7FF4A] opacity-50" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#B7FF4A]" />
              </span>

              <span className="text-sm font-bold text-white">
                Show Percentage
              </span>
            </div>

            <div className="text-sm font-medium text-white/45">
              Avg. Reward:
              <span className="ml-2 font-black text-[#B7FF4A]">$89.04</span>
            </div>
          </div>

          <div className="grid gap-4 p-5 lg:grid-cols-[1fr_1fr_0.95fr]">
            {/* ACCOUNT RULES */}

            <RuleCard
              title="Account Rules"
              rows={[
                ["Profit Target", account.profitTarget],
                ["Daily Loss Limit", account.dailyLoss],
                ["Maximum Loss Limit", account.maxLoss],
                ["Drawdown Type", account.drawdown],
                ["Consistency Rule", account.consistency],
                ["Minimum Trading Days", account.minDays],
                ["Reset Applicable", "Yes"],
              ]}
            />

            {/* REWARD RULES */}

            <RuleCard
              title="Reward Rules"
              rows={[
                ["Reward Share", account.rewardShare],
                ["Refund", account.refund],
                ["News Trading Profit", account.newsProfit],
                ["Max Risk", account.maxRisk],
                ["First Withdrawal", account.firstWithdrawal],
                ["Subsequent Withdrawal", account.subsequentWithdrawal],
              ]}
            />

            {/* PURCHASE */}

            <div className="flex flex-col justify-center rounded-xl border border-white/[0.07] bg-[#0B0D16] p-6">
              <div className="text-xl font-black text-white">
                {plan.name} {account.account}
              </div>

              <div className="mt-3 flex items-end gap-3">
                <span className="text-3xl font-black text-[#B7FF4A]">
                  {account.price}
                </span>

                <span className="pb-1 text-sm text-white/30 line-through">
                  {account.oldPrice}
                </span>
              </div>

              <div className="mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white/40">
                FOR DISCOUNT USE CODE
                <span className="text-[#B7FF4A]">STOCT</span>
                <span className="text-white/20">▣</span>
              </div>

              <button className="mt-6 flex h-14 items-center justify-center gap-2 rounded-xl bg-[#635BFF] text-sm font-black text-white transition hover:bg-[#7069ff] hover:shadow-[0_12px_40px_rgba(99,91,255,.22)]">
                Start Challenge
                <ArrowRight size={16} />
              </button>

              <PaymentMethods />

              <p className="mt-5 text-[9px] leading-4 text-white/25">
                Payment methods displayed for the academic prototype.
                Availability would depend on the final payment provider
                integration.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function RuleCard({ title, rows }) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-[#0B0D16] p-5">
      <div className="mb-5 text-sm font-bold text-white/45">{title}</div>

      <div className="space-y-4">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-[1fr_auto] items-center gap-4"
          >
            <div className="flex items-center gap-2 text-xs text-white/55">
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/20 text-[7px]">
                i
              </span>
              {label}
            </div>

            <div className="text-right text-xs font-medium text-white">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   BUSINESS MODEL
========================================================= */

function BusinessModel() {
  const items = [
    [
      "01",
      "Evaluation Fees",
      "Revenue generated from trader evaluation packages.",
    ],
    [
      "02",
      "Trader Progression",
      "Structured progression creates a long-term customer journey.",
    ],
    [
      "03",
      "Digital Platform",
      "A scalable technology layer supports account and performance management.",
    ],
    [
      "04",
      "Community & Content",
      "Education and community create additional brand touchpoints.",
    ],
  ];

  return (
    <section className="border-y border-white/[0.06] bg-[#080C12]">
      <Container className="py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionLabel>Business Model</SectionLabel>

            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              BUILT FOR
              <br />
              <span className="text-white/30">SCALE.</span>
            </h2>
          </div>

          <div className="grid gap-px border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">
            {items.map(([number, title, text]) => (
              <div key={number} className="bg-[#0A0F16] p-7">
                <div className="text-xs font-black text-[#B7FF4A]">
                  {number}
                </div>

                <h3 className="mt-12 text-lg font-black text-white">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/40">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   TARGET MARKET
========================================================= */

function TargetMarket() {
  const markets = [
    "Retail Traders",
    "Beginner Traders",
    "Intermediate Traders",
    "Trading Communities",
    "Digital Finance Communities",
    "Young Professionals",
  ];

  return (
    <section className="bg-[#070A0F]">
      <Container className="py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel>Target Market</SectionLabel>

            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              WHO WE
              <br />
              <span className="text-white/30">SERVE.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-base leading-8 text-white/45">
              NEXTRADE targets digitally active traders who want a structured
              environment to test their strategy, manage risk, and demonstrate
              consistency.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {markets.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-white/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   CUSTOMER PROPOSAL
========================================================= */

function Proposal() {
  return (
    <section id="proposal" className="bg-[#080C12]">
      <Container className="py-24 lg:py-32">
        <div className="overflow-hidden border border-white/[0.08] bg-[#0A0F16]">
          <div className="grid lg:grid-cols-[1fr_0.75fr]">
            <div className="p-7 sm:p-10 lg:p-14">
              <SectionLabel>Customer Proposal</SectionLabel>

              <h2 className="max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                CHOOSE.
                <br />
                TRADE.
                <br />
                <span className="text-[#B7FF4A]">PROVE.</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
                Start with the account model that matches your trading approach.
                Follow the rules. Track your performance. Progress when your
                process proves itself.
              </p>

              <div className="mt-8">
                <Button href="#accounts">
                  View Account Programs
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            <div className="border-t border-white/[0.07] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/30">
                Customer Value
              </div>

              <div className="mt-8 space-y-6">
                {[
                  "Clear account rules",
                  "Multiple account sizes",
                  "Performance-focused journey",
                  "Transparent pricing",
                  "Multiple payment methods",
                  "Digital-first customer experience",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#B7FF4A]/10 text-[#B7FF4A]">
                      <Check size={13} />
                    </span>

                    <span className="text-sm font-semibold text-white/70">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FAQ
========================================================= */

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-[#070A0F]">
      <Container className="py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <SectionLabel>FAQ</SectionLabel>

            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              QUESTIONS.
              <br />
              <span className="text-white/30">ANSWERED.</span>
            </h2>
          </div>

          <div className="border-y border-white/[0.07]">
            {faqs.map((item, index) => {
              const active = open === index;

              return (
                <div
                  key={item.q}
                  className="border-b border-white/[0.07] last:border-b-0"
                >
                  <button
                    onClick={() => setOpen(active ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className="text-sm font-bold text-white">
                      {item.q}
                    </span>

                    <ChevronDown
                      size={17}
                      className={`shrink-0 text-white/30 transition ${
                        active ? "rotate-180 text-[#B7FF4A]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <p className="max-w-3xl pb-6 text-sm leading-7 text-white/40">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="grid-bg relative overflow-hidden border-t border-white/[0.06]">
      <div className="glow pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

      <Container className="relative py-28 text-center lg:py-36">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#B7FF4A]/20 bg-[#B7FF4A]/[0.06] text-[#B7FF4A]">
            <Zap size={22} />
          </div>

          <h2 className="text-5xl font-black tracking-[-0.055em] sm:text-7xl">
            YOUR EDGE.
            <br />
            <span className="text-[#B7FF4A]">YOUR PROOF.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/40">
            Explore the NEXTRADE account programs and choose the model that fits
            your trading process.
          </p>

          <div className="mt-8 flex justify-center">
            <Button href="#accounts">
              Explore Accounts
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#05070A]">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_auto]">
          <div>
            <img
              src="/assets/nextrade-logo.png"
              alt="NEXTRADE"
              className="h-9 w-auto"
            />

            <p className="mt-5 max-w-sm text-xs leading-6 text-white/30">
              Trading Evaluation & Performance Platform.
              <br />
              Built around discipline, technology, and progression.
            </p>
          </div>

          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25">
              Navigate
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#company"
                className="text-xs text-white/45 hover:text-white"
              >
                Company
              </a>

              <a
                href="#markets"
                className="text-xs text-white/45 hover:text-white"
              >
                Markets
              </a>

              <a
                href="#accounts"
                className="text-xs text-white/45 hover:text-white"
              >
                Accounts
              </a>

              <a href="#faq" className="text-xs text-white/45 hover:text-white">
                FAQ
              </a>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25">
              Company
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <span className="text-xs text-white/45">Indonesia</span>

              <span className="text-xs text-white/45">Southeast Asia</span>

              <span className="text-xs text-white/45">Trading Technology</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-7">
          <p className="max-w-5xl text-[10px] leading-5 text-white/20">
            DISCLAIMER — NEXTRADE is a proprietary trading evaluation platform.
            All trading activities are conducted within simulated virtual
            accounts. NEXTRADE does not provide investment advice, financial
            recommendations, or brokerage services. Account parameters, drawdown
            limits, and profit split allocations are binding and governed by the
            selected program policies. Trading financial markets involves a
            substantial risk of capital loss.
          </p>

          <div className="mt-5 flex flex-col justify-between gap-3 text-[10px] text-white/20 sm:flex-row">
            <span>© 2026 NEXTRADE.The Next Generation of Trading.</span>
            <span>Funded Platform</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <div className="min-h-screen bg-[#070A0F] text-white">
      <Navbar />

      <main>
        <Hero />
        <Company />
        <History />
        <Founder />
        <Markets />
        <HowItWorks />
        <Accounts />
        <BusinessModel />
        <TargetMarket />
        <Proposal />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
