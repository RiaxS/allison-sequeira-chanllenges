import { useEffect, useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { actions, reducer } from "./store/reducer";
import "./App.css";
import NavBar from "./navBar/NavBar";
import SingleItem from "./item/SingleItem";
import { Provider as LoginProvider } from "./cart/ContextLogin";
import { Provider as CartProvider } from "./cart/ContextCart";

// function reducer(state, action) {
//   switch (action.type) {
//     case "UPDATE_VALUE":
//       return {
//         ...state,
//         ...action.payload,
//       };
//     case "SET":
//       return {
//         ...action.payload,
//       };
//     default:
//       return state;
//   }
// }

// function useReducer(cb, initialState) {
//   let inertState = initialState;

//   return [() => innerState, (action) => (innerState = cb(inertState, action))];
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     case "SET":
//       return (state = action.payload);
//   }
//   return state;
// }

// const [num, dispach] = useReducer(reducer, 0);





const initialState = {
  fname: "",
  lname: "",
  fcolor: "",
};

function App() {
  useReducer(reducer, initialState);
  const [values, dispach] = useReducer(reducer, initialState);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((prod) => {
        setProducts(prod);
      });
  }, []);

  const updateValue = (event) => {
    dispach({
      type: actions.UPDATE_VALUE,
      payload: { [event.target.id]: event.target.value },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(values, null, 2));
  }

  function handleReset(event) {
    dispach({
      type: actions.SET,
      payload: initialState
    })
  }

  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit} onReset={handleReset}>
          <div>
            <label htmlFor="fname" >First Name</label>
            <input type="text" id="fname" value={values.fname} onChange={updateValue}/>
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" value={values.lname} onChange={updateValue} />
          </div>
          <div>
            <label htmlFor="fcolor">Favorite Color</label>
            <input type="text" id="fcolor" value={values.fcolor} onChange={updateValue}/>
          </div>
          <div>
            <label htmlFor="ffood">Favorite Food</label>
            <input type="text" id="ffood" value={values.ffood} onChange={updateValue}/>
          </div>
          <button type="submit">Send</button>
          <button type="reset">Reset</button>
          </form>
        </div>
        <LoginProvider>
          <CartProvider>
            <NavBar cart={cart}></NavBar>
            <h4>Store</h4>
            <div className="cards-container">
              {products.length > 0 ? (
                products.map((prod) => (
                  <SingleItem key={prod.id} product={prod}></SingleItem>
                ))
              ) : (
                <h2>No products available</h2>
              )}
            </div>
          </CartProvider>
        </LoginProvider>
      </div>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fname" value={values.fname} onChange={updateValue}>
              First Name
            </label>
            <input type="text" name="" id="fname" />
          </div>
          <div>
            <label htmlFor="lname" value={values.lname} onChange={updateValue}>
              Last Name
            </label>
            <input type="text" name="" id="lname" />
          </div>
          <div>
            <label
              htmlFor="fcolor"
              value={values.fcolor}
              onChange={updateValue}
            >
              Fave Color
            </label>
            <input type="text" name="" id="fcolor" />
          </div>
          <button type="submit">Submit </button>
        </form>
      </div> */}
    </>
  );
}

export default App;
