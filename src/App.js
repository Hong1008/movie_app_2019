import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from './components/Navigation'
import Detail from './routes/Detail'

//import Proptypes from "prop-types";

// const foodIList = [
//   { id: 1, name: "kimchi", rating: 4.5 },
//   { id: 2, name: "banana", rating: 3.5 },
//   { id: 3, name: "apple", rating: 5 }
// ];

// function Food({ name, rating }) {
//   return (
//     <div>
//       <h1>{name} 굿굿</h1>
//       <p>{rating}/5.0</p>
//     </div>
//   );
// }

// Food.propTypes = {
//   name: Proptypes.string.isRequired,
//   rating: Proptypes.number
// };

// function App() {
//   return (
//     <div>
//       {foodIList.map(dish => (
//         <Food key={dish.id} name={dish.name} rating={dish.rating} />
//       ))}
//     </div>
//   );
// }

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
  );
}

export default App;
