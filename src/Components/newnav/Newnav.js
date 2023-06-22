import React from "react";
import "../newnav/newnav.css";
import { useNavigation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Newnav = () => {
  // history.push('/your-component')
  const history = useHistory();

  const handleClick = () => {
    console.log("test");
    history.push("/Kartica");
  };
  const handleClick1 = () => {
    console.log("test");
    history.push("/Anthologies");
  };
  const handleClick2 = () => {
    console.log("test");
    history.push("/Classics");
  };
  const handleClick3 = () => {
    console.log("test");
    history.push("/CrimeFiction");
  };
  const handleClick4 = () => {
    console.log("test");
    history.push("/HistoricalFiction");
  };
  const handleClick5 = () => {
    console.log("test");
    history.push("/Anthologies");
  };
  const handleClick6 = () => {
    console.log("test");
    history.push("/CrimeFiction");
  };
  const handleClick7 = () => {
    console.log("test");
    history.push("/CrimeFiction");
  };
  const handleClick8 = () => {
    console.log("test");
    history.push("/CrimeFiction");
  };
  const handleClick9 = () => {
    console.log("test");
    history.push("/Kartica");
  };
  const handleClick10 = () => {
    console.log("test");
    history.push("/CrimeFiction");
  };
  const handleClick11 = () => {
    console.log("test");
    history.push("/Children");
  };
  const handleClick12 = () => {
    console.log("test");
    history.push("/NonFiction2");
  };

  return (
    <div className="new_nav">
      <div className="nav_data">
        <div className="left_data">
          {/* <p><i className="fas fa-shopping-cart"></i> All</p> */}
          <p class="dropdown">
            <a class="dropbtn"  href="#"  >
              Books
            </a>
            <div class="dropdown-content">
              <a href="#" onClick={handleClick}>
                Fiction
              </a>
              <a href="#" onClick={handleClick1}>
                Anthologies & Short Stories
              </a>
              <a href="#" onClick={handleClick2}>
                Classics
              </a>
              <a href="#" onClick={handleClick3}>
                Crime Fiction
              </a>
              <a href="#" onClick={handleClick4}>
                Historical Fiction
              </a>
              <a href="#" onClick={handleClick5}>
                Contemporary Fiction
              </a>
              <a href="#" onClick={handleClick6}>
                Poetry
              </a>
              <a href="#" onClick={handleClick7}>
                Romance
              </a>
              <a href="#" onClick={handleClick8}>
                Fantasy
              </a>
              <a href="#" onClick={handleClick1}>
                Science Fiction
              </a>
            </div>
          </p>
          <p>I</p>
          <p class="dropdown"  href="#">
            <a class="dropbtn"  onClick={handleClick12}>
              Pre-Order
            </a>
            {/* <div class="dropdown-content">
              <a href="#" onClick={handleClick}>
                Non-fiction
              </a>
              <a href="#" onClick={handleClick1}>
                Art
              </a>
              <a href="#" onClick={handleClick2}>
                Biography
              </a>
              <a href="#" onClick={handleClick3}>
                Business & Finance
              </a>
              <a href="#" onClick={handleClick4}>
                Climate & Sustainability
              </a>
              <a href="#" onClick={handleClick5}>
                Current affairs & politics
              </a>
              <a href="#" onClick={handleClick6}>
                Diet & Fitness
              </a>
              <a href="#" onClick={handleClick7}>
                Fashion
              </a>
              <a href="#" onClick={handleClick8}>
                Food & Drink
              </a>
              <a href="#" onClick={handleClick1}>
                Gardening
              </a>
            </div> */}
          </p>
          <p>I</p>
          <p class="dropdown"  href="#">
            <a class="dropbtn" onClick={handleClick9}>
              Fiction
            </a>
            {/* href="#" */}
          </p>
          <p>I</p>
          <p class="dropdown"  href="#">
            <a class="dropbtn"  onClick={handleClick10}>
              Non-Fiction
            </a>
          </p>
          <p>I</p>
          <p class="dropdown"  href="#">
            <a class="dropbtn" onClick={handleClick11}>
              Children's
            </a>
          </p>
          <p>I</p>
          <p>Gift Card & Subscriptions</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        
        </div>
        <div className="right_data">
          {/* <img src="nav.jpg" alt="navdata" /> */}
        </div>
      </div>
    </div>
  );
};

export default Newnav;
