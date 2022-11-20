import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kepno" />

        <footer>
          This project was coded by{" "}
          <a
            href="mailto:ttt83103@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Anastasiia Khrystoforova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AnastasiiaKhry/react-weather-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://elaborate-bonbon-aa114d.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}