import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigationbar from "./componets/navigation/Navigationbar";
import Home from "./componets/home/Home";
import Shop from "./componets/shop/Shop";
import About from "./componets/about/About";
import ShopDetails from "./componets/shop/ShopDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/shop/:id" component={ShopDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
