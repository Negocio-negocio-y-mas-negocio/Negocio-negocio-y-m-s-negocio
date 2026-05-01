import "./home.scss";

export default function Home() {

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Unforgettable Events, Crafted to Perfection</h1>
          <p>
            We design, plan, and execute premium events that leave lasting impressions.
            From corporate parties to private celebrations — we handle everything.
          </p>

          <a href="/contact" className="hero-cta">Plan Your Event</a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature">
          <h2>🎉 Event Planning</h2>
          <p>Complete planning services tailored to your vision & budget.</p>
        </div>

        <div className="feature">
          <h2>🍽️ Catering Coordination</h2>
          <p>Top-tier food, custom menus, and luxury dining experiences.</p>
        </div>

        <div className="feature">
          <h2>🎶 Entertainment</h2>
          <p>DJs, live performers, hosts — curated for your event vibe.</p>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="cta-block">
        <h2>Ready to Bring Your Event to Life?</h2>
        <p>Let our team handle the details.</p>
        <a href="/contact" className="cta-btn">Get Started</a>
      </section>

    </div>
  );
}