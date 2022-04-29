import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [counter, setCounter] = useState(0);
  const [tab, setTab] = useState([0]);
  // console.log(tab);
  return (
    <div className="App">
      <Header />
      <div className="addCounter">
        {tab.map(() => {
          return (
            <div className="global-counter">
              {" "}
              <div className="counter">
                <button
                  style={{
                    background: counter <= 0 ? "none" : "#5c48d3",
                    border: counter <= 0 ? "none" : "#5c48d3",
                  }}
                  disabled={counter <= 0 && true}
                  onClick={() => {
                    setCounter(counter - 1);
                  }}
                >
                  -
                </button>

                <p className="result">{counter}</p>
                <button
                  style={{
                    background: counter >= 10 ? "none" : "#5c48d3",
                    border: counter >= 10 ? "none" : "#5c48d3",
                  }}
                  disabled={counter >= 10 && true}
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="reset"
                onClick={() => {
                  setCounter(0);
                }}
              >
                RESET
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="add"
          onClick={() => {
            const newTab = [...tab];
            newTab.push(counter);
            setTab(newTab);
          }}
        >
          ADD
        </button>
        <button
          className="delete"
          onClick={() => {
            const newTab = [...tab];
            newTab.pop(counter);
            setTab(newTab);
          }}
        >
          Delete
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
