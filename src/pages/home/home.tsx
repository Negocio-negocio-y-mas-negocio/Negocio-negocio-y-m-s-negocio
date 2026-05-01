import "./home.scss";

export default function Home() {

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Eventos inolvidables, creados a la perfección.</h1>
          <p>
            Diseñamos, planificamos, y ejecutamos eventos premium que dejan impresiones duraderas. Desde fiestas corporativas hasta celebraciones privadas, nos encargamos de todo.
          </p>

          <a href="/contact" className="hero-cta">Planifica tu evento</a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature">
          <h2>🎉 Planificación de eventos</h2>
          <p>Servicios de planificación completos adaptados a tu visión y presupuesto.</p>
        </div>

        <div className="feature">
          <h2>🍽️ Coordinación de Catering</h2>
          <p>Comida de primera calidad, menús personalizados y experiencias gastronómicas de lujo.</p>
        </div>

        <div className="feature">
          <h2>🎶 Entretenimiento</h2>
          <p>DJs, artistas en vivo, anfitriones: seleccionados para la vibra de tu evento.</p>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="cta-block">
        <h2>¿Listo para dar vida a tu evento?</h2>
        <p>Deja que nuestro equipo se encargue de los detalles.</p>
        <a href="/contact" className="cta-btn">Comenzar</a>
      </section>

    </div>
  );
}