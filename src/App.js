import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuBar from "./components/MenuBar";
import Slidebar from "./components/Slidebar";
import HowWork from "./components/HowWork";
import Events from "./components/Events";
import Placebyarea from "./components/Placebyarea";
import Question from "./components/Question";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [dropdown, setDropdown] = useState(false);

  const toggler = () => {
    setDropdown((prev) => !prev);
    console.log("Toggler clicked");
  };

  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <img
              className="header-logo"
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F1b2dd1cf7444a3f31338630b8aba45db.cdn.bubble.io%2Ff1729085580135x774676292058958500%2FModern%2520Green%2520and%2520Orange%2520Map%2520Pin%2520Motivational%2520Instagram%2520Story_20241011_200640_0000.png?w=96&h=119&auto=compress&dpr=1.5&fit=max"
              alt="logo"
            />
            <div className="buttons">
              <div className="navbar-text">
                <button
                  className="navbar-btn"
                  style={{ width: "200px", background: "none" }}
                >
                  Find a Place
                </button>
                <button
                  className="navbar-btn"
                  style={{ width: "200px", background: "none" }}
                >
                  Become our host
                </button>
              </div>
              <button className="btn btn-primary">Log in</button>
            </div>
            <div>
              <img
                src="menu.png"
                alt="icon"
                className="navbar-icon"
                onClick={toggler}
                style={{ cursor: "pointer" }}
              />
              {dropdown && (
                <div className="dropdown-menu">
                  <button className="dropdown-item">Find a Place</button>
                  <button className="dropdown-item">Become our host</button>
                  <button className="dropdown-item ">Log in</button>
                </div>
              )}
            </div>
          </div>
        </nav>

        <div className="maindiv1">
          <div className="div1">
            <div className="childdiv1">
              <span style={{ color: "#402b9e", display: "inline" }}>
                Plan your&nbsp;{" "}
              </span>
              <span style={{ color: "#fe8172", display: "inline" }}>
                {" "}
                perfect event&nbsp;
              </span>
              <span style={{ color: "black", display: "inline" }}>
                {" "}
                for any occasion
              </span>
            </div>
            <div className="childdiv2">
              <p className="p1">
                Focus on the event, and the venue is on us - just choose one
                from a thousands of indoor and outdoor spaces:
              </p>
            </div>
          </div>
          <div className="div2">
            <img
              className="Mainimage"
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F228ec5d55e383686437b8e192f6b14fe.cdn.bubble.io%2Ff1685411227805x876126873436218200%2FEllipse%252016.png?w=512&h=512&auto=compress&dpr=1.5&fit=max"
              alt="background"
            />
            <img
              className="image1"
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F1b2dd1cf7444a3f31338630b8aba45db.cdn.bubble.io%2Ff1730550147805x287072730873543240%2FWhatsApp%2520Image%25202024-11-02%2520at%252016.37.32_dbc76813.jpg?w=512&h=286&auto=compress&dpr=1.5&fit=max"
              alt="map"
            />
          </div>
        </div>
      </div>
      <div>
        <MenuBar />
      </div>
      <div>
        <Slidebar />
      </div>
      <div>
        <HowWork />
      </div>
      <div>
        <Events />
      </div>
      <div>
        <Placebyarea />
      </div>
      <div>
        <Question />
      </div>
        <Footer />     
    </div>
  );
}

export default App;
