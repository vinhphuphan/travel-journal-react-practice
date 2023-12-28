import React from "react";
import Nav from "./components/Nav";
import data from "./data.js";
import Card from "./components/Card"

export default function App() {
  const cards = data.map((card) => {
    return (
      <Card 
        key = {card.title}
        {...card}
      />
    )
  })

  return (
    <>
      <Nav />
      <section className="card-list">
        {cards}
      </section>
    </>
  );
}
