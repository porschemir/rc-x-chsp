import { createFileRoute } from "@tanstack/react-router";
import { Apple, Check, Play, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$750 Cash App Reward — RECO" },
      { name: "description", content: "Earn cash playing games, completing tasks, and testing apps with RECO." },
      { property: "og:title", content: "$750 Cash App Reward — RECO" },
      { property: "og:description", content: "Earn cash playing games, completing tasks, and testing apps with RECO." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RewardPage,
});

function RecoMark() {
  return (
    <div className="reco-mark" aria-label="Reco">
      <span className="reco-heart">♥</span>
    </div>
  );
}

function CashMark() {
  return <div className="cash-mark" aria-label="Cash App">$</div>;
}

function AppStoreButton({ google = false }: { google?: boolean }) {
  return (
    <a
      className={google ? "store-button store-button-primary" : "store-button"}
      href="https://taprkr.com/r/eyJ0IjoicmVjb3NvY2lhbC1jcHIiLCJ0aWQiOiI3ZjNkMGY2NDRkNGRjOTNiMjFhOSIsInRzIjoxNzkxMjAzNDU2MTQ3fQ"
      aria-label={google ? "Get it on Google Play" : "Download on the App Store"}
    >
      {google ? <Play className="store-icon fill-current" /> : <Apple className="store-icon" />}
      <span><small>{google ? "Get it on" : "Download on the"}</small><strong>{google ? "Google Play" : "App Store"}</strong></span>
    </a>
  );
}

function RewardPage() {
  return (
    <main className="reward-page">
      <div className="top-glow" />
      <div className="earning-ticker"><span>◫◫</span> <strong>Jake R.</strong> just earned <b>$67.00</b> — paid instantly</div>

      <div className="content-column">
        <section className="hero-card enter">
          <div className="brand-pair"><RecoMark /><span>×</span><CashMark /></div>
          <div className="rating-pill">
            <span className="stars">★★★★★</span><strong>4.7</strong><span>· App Store</span><span className="reviews">(50K+ reviews)</span>
          </div>
          <h1>Your <em>$750</em> Cash App<br className="desktop-break" /> Reward</h1>
          <p className="hero-copy">Earn real cash playing games, completing tasks, and testing apps. Cash out anytime — no minimum.</p>

          <div className="cash-card">
            <div className="cash-card-top"><span><CashMark /> <strong>Cash App</strong></span><span className="reco-chip">▣ Reco</span></div>
            <p>RECO × CASH APP REWARD</p>
            <div className="amount"><span>$</span>750<sup>.00</sup></div>
            <div className="cash-card-bottom"><span>FOR VERIFIED USER</span><b>● READY TO CLAIM</b></div>
          </div>

          <div className="live-pill"><span>●</span> 1,862 people earning right now</div>
        </section>

        <section className="details-card enter delay-one">
          <div className="game-row">
            <div className="game-icon" aria-hidden="true">🌳</div>
            <div><h2>Gardenscapes</h2><div className="game-rating"><span>★★★★★</span> 4.8 · Top Rated</div><strong>Pay: $26/hr</strong></div>
          </div>
          <div className="divider" />
          <h3>HOW IT WORKS</h3>
          <ol>
            <li><i>1</i><span>Sign up on Reco Social (select 21+)</span></li>
            <li><i>2</i><span>Play games &amp; complete tasks</span></li>
            <li><i>3</i><span>Withdraw your <b>$750 or MORE</b> to Cash App, PayPal, Visa or Crypto</span></li>
          </ol>
        </section>

        <section className="offer-card enter delay-two">
          <div className="offer-labels"><b>🔥 SPECIAL OFFER</b><span>FAST TRACK</span></div>
          <h2>Get your <em>$750 reward</em> fast ⚡</h2>
          <p>Skip the grind — just download one of our partner games and <strong>make a single in-app purchase.</strong> Your reward unlocks instantly.</p>
          <ul>
            <li><Check /><span>Your in-app purchase gets <strong>fully reimbursed</strong> as part of your reward payout — you spend nothing</span></li>
            <li><Check /><span>You <strong>keep all items, coins &amp; upgrades</strong> you purchased in the game — they're yours forever</span></li>
            <li><Check /><span><strong>$750 reward</strong> deposits to your Cash App or any payment method of your choice within 24–48 hours</span></li>
          </ul>
        </section>

        <section className="stats-card enter delay-two">
          <div><strong>$50M+</strong><span>PAID OUT</span></div><div><strong>4.7★</strong><span>APP RATING</span></div><div><strong>$0</strong><span>TO JOIN</span></div>
        </section>

        <footer className="legal">
          <p>Availability, rewards, and eligibility may vary by user, location, and completed activity. Results are not guaranteed and are based on individual participation. Earnings vary by offer.</p>
          <nav><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Service</a></nav>
        </footer>
      </div>

      <aside className="download-bar" id="download">
        <div className="availability"><span>●</span> Available now on iOS and Android</div>
        <div className="store-buttons"><AppStoreButton /><AppStoreButton google /></div>
      </aside>
    </main>
  );
}