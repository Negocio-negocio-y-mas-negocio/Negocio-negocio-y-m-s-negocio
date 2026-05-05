import { useState } from "react";

type FormalWearItem = {
  image: string;
  title: string;
  description: string;
  colors: string;
};

type FormalWearSlideshowProps = {
  items: FormalWearItem[];
};

export default function FormalWearSlideshow({ items }: FormalWearSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeItem = items[activeIndex];

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));
  };

  const showSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section className="formal-wear" aria-labelledby="formal-wear-title">
      <div className="formal-wear__header">
        <p>Business party dress code</p>
        <h2 id="formal-wear-title">Acceptable Formal Wear</h2>
      </div>

      <div className="formal-wear__stage">
        <button
          className="formal-wear__nav"
          type="button"
          onClick={showPrevious}
          aria-label="Show previous formal wear option"
        >
          &lt;
        </button>

        <div className="formal-wear__viewport">
          <article
            className={`formal-wear__slide ${
              direction === 1 ? "formal-wear__slide--next" : "formal-wear__slide--previous"
            }`}
            key={activeItem.title}
          >
            <div className="formal-wear__image-wrap">
              <img src={activeItem.image} alt={activeItem.title} />
            </div>

            <div className="formal-wear__details">
              <span>
                {activeIndex + 1} / {items.length}
              </span>
              <h3>{activeItem.title}</h3>
              <p>{activeItem.description}</p>
              <div className="formal-wear__colors">
                <strong>Best colors</strong>
                <p>{activeItem.colors}</p>
              </div>
            </div>
          </article>
        </div>

        <button
          className="formal-wear__nav"
          type="button"
          onClick={showNext}
          aria-label="Show next formal wear option"
        >
          &gt;
        </button>
      </div>

      <div className="formal-wear__dots" aria-label="Formal wear options">
        {items.map((item, index) => (
          <button
            className={index === activeIndex ? "is-active" : ""}
            type="button"
            key={item.title}
            onClick={() => showSlide(index)}
            aria-label={`Show ${item.title}`}
            aria-pressed={index === activeIndex}
          />
        ))}
      </div>
    </section>
  );
}
