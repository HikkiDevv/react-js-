import React from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import "./style.css";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Home = () => <h1>Pagina Principal</h1>;

const Contacto = () => <h1>Contactanos</h1>;

const Reseñas = () => <h1>Valoranos</h1>;

const inlineStyles = {
  padding: 5,
};

  const getContent = () => {
    if ((page = "contacto")) {
      return <Contacto />;
    } else if ((page = "reseñas")) {
      return <Reseñas />;
    } else {
      return <Home />;
    }
  };

  const toPage = (page) => (event) => {
    ebent.preventDefault();
    window.history.pushState(null, "", `/${page}`);
    setPage(page);
  };

  return (
    <BrowserRouter>
      <header>
        <link to="#" onClick={toPage("home")} style={inlineStyles}>
          Home
        </link>
        <link to="#" onClick={toPage("contacto")} style={inlineStyles}>
          contacto
        </link>
        <link to="#" onClick={toPage("Reseñas")} style={inlineStyles}>
          Reseñas
        </link>
      </header>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/reseñas">
        <reseñas />
      </Route>
      <Route path="/contacto">
        <Contacto />
      </Route>
      {getContent()}
    </BrowserRouter>
  );
};
export default function App() {
  return (
    <>
      <NavBar background={"transparent"} />
      <Hero title="El Rey de la Cerveza" />
    </>
  );
}
