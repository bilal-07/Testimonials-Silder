import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 13335000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <h1 class="main-heading">Testimonials Slider</h1>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, company, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <div className="container silder-items d-flex justify-content-center">
                <div>
                  <img src={image} alt={name} className="person-img" />
                </div>
                <div className="text-left ml-4">
                  <h4 className="fw-bold mb-2">{name}</h4>
                  <h4 className="mb-2">{title}</h4>
                  <h4 className="mb-3">{company}</h4>

                  <p className="text">{quote}</p>
                  <FaQuoteRight className="icon" />
                </div>
              </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
