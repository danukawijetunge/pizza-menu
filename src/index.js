import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import App from "./App";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  // const style = { color: "red" };

  return (
    <>
      <header className="header">
        <h1>FAST REACT PIZZA CO.---</h1>;
      </header>
    </>
  );
}

function Menu() {
  const pizza = [pizzaData];

  return (
    <>
      <main className="menu" key="menu-1">
        <h2>OUR MENU</h2>

        {pizza.length > 0 ? (
          <>
            <Introduction />
            <PizzaMenu />
          </>
        ) : (
          "No Pizza Available"
        )}
      </main>
    </>
  );
}

function Introduction() {
  return (
    <>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our store oven, all organic, all direction.
      </p>
    </>
  );
}

function PizzaMenu() {
  return (
    <>
      <ul className="pizzas">
        {pizzaData.map((pizza) => {
          return <Pizza pizzaObj={pizza} />;
        })}
      </ul>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 23;

  let isOpen = hour > openHour && hour <= 23 ? true : false;

  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <Order openh={openHour} closeH={closeHour} />
        ) : (
          <p>Sorry We are Closed!!!</p>
        )}
      </footer>
    </>
  );
}

function Order(props) {
  const { openh } = props;

  return (
    <>
      <div className="order">
        <p>We are open until {openh}:00. Come visit us or order online!!!</p>
        <button className="btn">Order</button>
      </div>
    </>
  );
}

function Pizza(props) {
  console.log(props);
  //object destructuring
  const { name, photoName, ingredients, price, soldOut } = props.pizzaObj;

  return (
    <>
      <li className={soldOut ? "pizza sold-out" : "pizza"} key={name}>
        <img src={photoName} key={name} alt={name} />
        <div>
          <p>{name}</p>
          <span>{ingredients}</span>
          {soldOut ? <span> SOLD OUT</span> : <span>{price}</span>}
        </div>
      </li>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
