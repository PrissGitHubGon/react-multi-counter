import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [counter, setCounter] = useState([0]);

  // const [tab, setTab] = useState([0]);
  // console.log(tab);
  return (
    <div className="App">
      <Header />
      <div className="addCounter">
        {counter.map((item, index) => {
          return (
            <div key={index} className="global-counter">
              {" "}
              <div className="counter">
                <button
                  style={{
                    background: item <= 0 ? "none" : "#5c48d3",
                    border: item <= 0 ? "none" : "#5c48d3",
                  }}
                  disabled={item <= 0 && true}
                  onClick={() => {
                    const newTab = [...counter];
                    newTab[index] -= 1;
                    setCounter(newTab);
                  }}
                >
                  -
                </button>

                <p className="result">{item}</p>
                <button
                  style={{
                    background: counter >= 10 ? "none" : "#5c48d3",
                    border: counter >= 10 ? "none" : "#5c48d3",
                  }}
                  disabled={counter >= 10 && true}
                  onClick={() => {
                    const newTab = [...counter];
                    newTab[index] += 1;
                    setCounter(newTab);
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="reset"
                onClick={() => {
                  const newTab = [...counter];
                  newTab[index] = 0;
                  setCounter(newTab);
                }}
              >
                RESET
              </button>
            </div>
          );
        })}
      </div>
      <div className="add-delete">
        <button
          className={counter.length < 3 ? "add" : "add-off"}
          disabled={counter.length < 3 ? false : true}
          onClick={() => {
            const newTab = [...counter];
            newTab.push(0);
            setCounter(newTab);
          }}
        >
          ADD
        </button>
        <button
          className={counter.length > 1 ? "delete" : "delete-off"}
          disabled={counter.length > 1 ? false : true}
          onClick={() => {
            const newTab = [...counter];
            newTab.pop();
            setCounter(newTab);
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
