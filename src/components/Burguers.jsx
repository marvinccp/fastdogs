import React from "react";
//components
import Header from "./Header";

//styles
import "../styles/Burguers.css";

//data
import burguers from "../data/burgers";

const Burguers = () => {
  return (
    <>
      <Header />
      <title className="title-container">
        <h1>Burguers</h1>
      </title>
      <section className="items-cards-container">
        {burguers.map((item) => (
          <article className="card-item-container" key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.thumb} alt={item.title} />
            <h3>Price $ {item.price}</h3>
          </article>
        ))}
      </section>
    </>
  );
};

export default Burguers;
