import { useReducer } from "react";
import "./styles.css";

const INCREMENT = "increment";
const ADD_VALUE = "addValue";
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case ADD_VALUE:
      return {
        ...state,
        addValue: action.payload
      };
    case "submit":
      return {
        count: state.count + parseInt(state.addValue),
        addValue: ""
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    addValue: ""
  });

  const increment = () => {
    dispatch({
      type: INCREMENT
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    dispatch({
      type: ADD_VALUE,
      payload: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    dispatch({
      type: "submit",
      payload: value
    });
  };

  return (
    <div className="App">
      <h4>The Count is : {state.count}</h4>
      <button onClick={increment}>Increment</button>
      <button>Decrement</button>
      <form onSubmit={handleSubmit}>
        <input type="number" value={state.addValue} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Add Value
        </button>
      </form>
    </div>
  );
}
