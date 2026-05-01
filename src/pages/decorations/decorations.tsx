import './decorations.scss';
import deco1 from '../../assets/decorations/deco1.jpg';
import deco2 from '../../assets/decorations/deco2.jpg';
import deco3 from '../../assets/decorations/deco3.jpg';
import deco4 from '../../assets/decorations/deco4.jpg';

export default function Decorations() {
  const decorations = [
    { img: deco1, title: "Elegant Balloon Garlands" },
    { img: deco2, title: "Luxury Table Setups" },
    { img: deco3, title: "LED Backdrops & Signs" },
    { img: deco4, title: "Floral Arrangements" }
  ];

  return (
    <div className="decorations-page">
      <header>
        <h1>Decorations</h1>
        <p>Transform your event with high-quality, customizable designs.</p>
      </header>

      <section className="decor-grid">
        {decorations.map((item, idx) => (
          <div className="decor-card" key={idx}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}