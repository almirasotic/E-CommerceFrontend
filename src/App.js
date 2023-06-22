import Navbaar from "./Components/header/Navbaar";
import Newnav from "./Components/newnav/Newnav";
import Maincomp from "./Components/home/Maincomp";
import Footer from "./Components/footer/Footer";
import Signup from "./Components/signup_signin/SignUp";
import Sign_in from "./Components/signup_signin/Sign_in";
import Cart from "./Components/cart/Cart";
import Buynow from "./Components/buynow/Buynow";
import "./App.css";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Switch, Route } from "react-router-dom";
import { TokenContext } from ".";
import Activate from "./Components/signup_signin/activate";
import Nova from "./Components/header/Nova";
import Kartica from "./Components/header/Kartica";
import Anthologies from "./Components/header/Anthologies";
import Classics from "./Components/header/Classics";
import CrimeFiction from "./Components/header/CrimeFiction";
import HistoricalFiction from "./Components/header/HistoricalFiction";
import Prazna from "./Components/header/Prazna";
import Nonfiction from "./Components/header/Nonfiction";
import Irish from "./Components/header/Irish"
import Children from "./Components/header/Children";
import NonFiction2 from "./Components/header/NonFiction2"

function App() {
  const [data, setData] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {data ? (
        <>
          <Navbaar />
          <Newnav />
          <Switch>
            <Route exact path="/">
              <Maincomp />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/login">
              <Sign_in />
            </Route>
            <Route exact path="/getproductsone/:id">
              <Cart />
            </Route>
            <Route exact path="/buynow">
              <Buynow />
            </Route>
            <Route exact path="/aktiviraj">
              <Activate />
            </Route>
            <Route exact path="/nova">
              <Nova />
            </Route>
            <Route exact path="/kartica">
              <Kartica />
            </Route>
            <Route exact path="/anthologies">
              <Anthologies />
            </Route>
            <Route exact path="/classics">
              <Classics />
            </Route>
            <Route exact path="/crimefiction">
              <CrimeFiction />
            </Route>
            <Route exact path="/historicalfiction">
              <HistoricalFiction />
            </Route>
            <Route exact path="/prazna">
              <Prazna />
            </Route>
            <Route exact path="/nonfiction">
              <Nonfiction />
            </Route>
            <Route exact path="/irish">
              <Irish />
            </Route>
            <Route exact path="/children">
              <Children/>
            </Route>
            <Route exact path="/NonFiction2">
              <NonFiction2/>
            </Route>
          </Switch>
          <Footer />
        </>
      ) : (
        <div className="circle">
          <CircularProgress />
          <h2> Loading....</h2>
        </div>
      )}
    </TokenContext.Provider>
  );
}

export default App;
