import "./food.scss";

import food1 from "../../assets/foods/food1.jpg";
import food2 from "../../assets/foods/food2.jpg";
import food3 from "../../assets/foods/food3.jpg";
import food4 from "../../assets/foods/food4.jpg";
import food5 from "../../assets/foods/food4.jpg";
import food6 from "../../assets/foods/food4.jpg";
import food7 from "../../assets/foods/food4.jpg";
import food8 from "../../assets/foods/food4.jpg";
import food9 from "../../assets/foods/food4.jpg";

export default function Food() {
  const slideshowSingular = [food1, food2, food3, food4, food5, food6, food7, food8, food9];

  const slideshow = slideshowSingular.concat(slideshowSingular);

  const popular = [
    { img: food1, title: "Signature Charcuterie Board" },
    { img: food3, title: "Fresh Lemonade Bar" },
    { img: food2, title: "Luxury Dessert Table" },
  ];

  const cateringMenu = [
    {
      category: "Appetizers",
      items: ["Mini Sliders", "Bruschetta", "Fruit Cups", "Spring Rolls"],
    },
    {
      category: "Main Dishes",
      items: ["Pasta Trays", "Wrap Platters", "Chicken Bites", "Veggie Bowls"],
    },
    {
      category: "Desserts",
      items: ["Cupcakes", "Macarons", "Chocolate Dips", "Mini Cheesecakes"],
    },
    {
      category: "Beverages",
      items: ["Fresh Lemonade", "Iced Tea", "Mocktail Station"],
    },
  ];

  return (
    <div className="food-page">

      {/* 🍽️ Hero Section */}
      <div className="food-hero">
        <h1>Food Services</h1>
        <p>Fresh • Delicious • Beautifully Presented</p>
      </div>

      {/* 📸 Slideshow */}
      <section className="slideshow-section">
        <h2>Gallery</h2>
        <br />
        <div className="slideshow">
          <div className="slideshow-track">
            {slideshow.map((s, i) => (
              <img src={s} alt="Food" key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ Popular Dishes */}
      <section className="popular-section">
        <h2>Most Popular</h2>
        <br />
        <div className="popular-grid">
          {popular.map((p, i) => (
            <div className="popular-card" key={i}>
              <img src={p.img} alt={p.title} />
              <h3>{p.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🍽️ Catering Menu */}
      <section className="menu-section">
        <h2>Catering Menu</h2>
        <div className="menu-grid">
          {cateringMenu.map((cat, idx) => (
            <div className="menu-card" key={idx}>
              <h3>{cat.category}</h3>
              <ul>
                {cat.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}