import React, {
  useReducer,
  useEffect,
  useInsertionEffect,
  useState,
} from "react";

function Home() {
  // Reducer function
  function counterReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  useEffect(() => {
    alert("count is mount");

    return () => {
      alert("count is unmount");
    };
  }, [state.count]);

  const [color, setColor] = useState("blue");

  useInsertionEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = `
      .dynamic-style {
        color: ${color};
        font-size: 20px;
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [color]);

  return (
    <div>
      {/* ************ useInsertionEffect ************ */}
      <h1>Example of useInsertionEffect</h1>
      <div>
        <p className="dynamic-style">This text changes color dynamically.</p>
        <button onClick={() => setColor(color === "blue" ? "red" : "blue")}>
          Toggle Color
        </button>
        {/* ************ useEffect ************ */}
        <h1>Example of useEffect</h1>
        <h3>Count: {state.count}</h3>
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>

  );
}

export default Home;
