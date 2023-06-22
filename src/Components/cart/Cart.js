import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { products } from "../home/productdata";
import { Divider } from "@mui/material";
import { useHistory, useParams } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";
import { Logincontext } from "../context/Contextprovider";
import { TokenContext, token } from "../../index";

const Cart = () => {
  const { account, setAccount } = useContext(Logincontext);
  const { token, setToken } = useContext(TokenContext);

  // console.log(account);

  const { id } = useParams("");
  // console.log(id);

  const history = useHistory();

  const [inddata, setIndedata] = useState("");

  const [quantity, setQuantity] = useState(1);

  // console.log([inddata]);

  const getinddata = async () => {
    const res = await fetch(
      `https://e-commerce-backend-ruddy.vercel.app/getproductsone/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.token,
        },
        //   headers: {
        //     Accept: "application/json",
        //     "Content-Type": "application/json",
        //   },
        //   credentials: "include",
      }
    );

    const data = await res.json();
    console.log(data);
    console.log(
      `https://e-commerce-backend-ruddy.vercel.app/getproductsone/${id}`
    );

    if (res.status !== 201) {
      alert("no data available");
    } else {
      setIndedata(data);
    }
  };

  // const addtocart = async (id) => {
  //   console.log(id);
  //   const check = await fetch(`http://localhost:5007/addcart/${id}`, {
  //     method: "POST",
  //     //   headers: {
  //     //     Accept: "application/json",
  //     //     "Content-Type": "application/json",
  //     //   },
  //     body: JSON.stringify({
  //       inddata,
  //     }),
  //     //   credentials: "include",
  //   });
  //   // console.log(check);
  //   const data1 = check.json();

  //   // console.log(check.status + "ok");

  //   if (check.status !== 201) {
  //     alert("no data available " + check.status);
  //   } else {
  //     setAccount(data1);
  //     history.push("/buynow");
  //     //   navigate("/home");
  //   }
  // };
  const handleClick2 = () => {
    console.log("test");
    history.push("/Kartica");
    // window.location.href = "/";
  };
  const handleClick4 = () => {
    console.log("test");
    history.push("/CrimeFiction");
    // window.location.href = "/";
  };
  const handleClick3 = () => {
    console.log("test");
    history.push("/HistoricalFiction");
    // window.location.href = "/";
  };
  const addtocart = async (id) => {
    if (!inddata) {
      alert("Please fetch product data first.");
      return;
    }
    let check;
    for (let i = 0; i < quantity; i++) {
      check = await fetch(
        `https://e-commerce-backend-ruddy.vercel.app/addcart/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token.token,
          },
          body: JSON.stringify({
            inddata,
          }),
        }
      );
    }
    setQuantity(1);
    const data1 = await check.json();
    if (check.ok) {
      // checking for a successful HTTP response status
      setAccount(data1);
      history.push("/buynow");
    } else {
      alert("Error adding product to cart.");
    }
  };

  useEffect(() => {
    getinddata();
  }, []);
  return (
    <div className="cart_section">
      {inddata && Object.keys(inddata).length && (
        <div className="cart_container">
          <div className="left_cart">
            <img src={inddata.detailUrl} alt="cart" />
            {/* <div className="cart_btn">
              <button
                className="cart_btn1"
                onClick={() => addtocart(inddata.id)}
              >
                Add to Cart
              </button>
              <button className="cart_btn2">Buy Now</button>
            </div> */}
          </div>
          <div className="right_cart">
            <h3>{inddata.title.shortTitle}</h3>
            <h4>
              By{" "}
              <a href="# " className="sociall" onClick={handleClick4}>
                {inddata.title.longTitle}
              </a>{" "}
            </h4>

            {/* <Divider /> */}
            {/* <p className="mrp">
              Dolar : <del>{inddata.price.mrp}$</del>
            </p>
            <p>
              Deal of the Day :{" "}
              <span style={{ color: "#B12704" }}>{inddata.price.cost}$</span>
            </p> */}
            {/* <p>
              You save :{" "}
              <span style={{ color: "#B12704" }}>
                {" "}
                {inddata.price.mrp - inddata.price.cost} (
                {inddata.price.discount}){" "}
              </span>
            </p> */}

            <div className="discount_box">
              {/* <h5>
                Discount :{" "}
                <span style={{ color: "#111" }}>{inddata.discount}</span>{" "}
              </h5> */}
              {/* <h4>
                FREE Delivery :{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  Oct 8 - 21
                </span>{" "}
                Details
              </h4> */}
              <p style={{ color: "#111" }}>
                Category: <br></br>
                <a href="# " className="social" onClick={handleClick2}>
                  Social Issues
                </a>{" "}
                <br></br>
                <a href="# " className="social" onClick={handleClick3}>
                  Thriller
                </a>
                <span style={{ color: "#111", fontWeight: "600" }}>
                  {" "}
                  <br></br> <br></br>
                  Paperback
                </span>{" "}
                <br></br>
              </p>
            </div>
            <p className="description">
              {" "}
              <span
                style={{
                  fontFamily: "Montserrat",
                  lineHeight: "1.2",
                  color: "#21282d",
                  fontSize: "15px",
                  fontWeight: "300",
                  // letterSpacing: "0.4px",
                }}
              >
                {inddata.description}
              </span>{" "}
              <br></br> <br></br>
              {/* <h4 className="sociall1">
              ISBN{" "}{inddata.price.isbn}
              {" "}
            </h4> */}
            </p>
          </div>
          <div className="right_right">
            <div className="inline-paragraphs">
              <p className="mrpp">
                <del>€{inddata.price.mrp}</del>
              </p>
              <p>
                Was :{" "}
                <span style={{ color: "#00205b", fontWeight: "1000" }}>
                  €{inddata.price.cost}
                </span>
              </p>
            </div>
            <ul className="p-about-order">
              <br></br>
              <p>In stock online</p>
              <br></br>
              <p>Delivery in 1-2 working days</p>
              <br></br>
              <p>Free Delivery in ROI</p>
            </ul>

            <div className="cart_btn">
              <div className="word">Quantity</div>
              <input
                type="number"
                className="cart_input"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button
                className="cart_btn1"
                onClick={() => addtocart(inddata.id)}
              >
                Add to basket
              </button>
            </div>
          </div>
        </div>
      )}

      {!inddata ? (
        <div className="circle">
          <CircularProgress />
          <h2> Loading....</h2>
        </div>
      ) : (
        ""
      )}

      {/* <div class="container">
        <div class="div1">
          <img src="https://blog.dubraybooks.ie/wp-content/uploads/2023/05/Dont-Look-Back-Blog-Header-1024x539.jpg"/>
          <button class="imagee-button">
            <a href="https://blog.dubraybooks.ie/2023/05/09/dont-look-back-by-jo-spain/">
         Read More
            </a>
          </button>
        </div>

        <div class="div2">
        <img src="https://blog.dubraybooks.ie/wp-content/uploads/2023/05/No-On-Saw-A-Thing-Header-1024x539.jpg"/>
        <button class="imagee-button">
            <a href="https://blog.dubraybooks.ie/2023/05/08/no-one-saw-a-thing/">
         Read More
            </a>
          </button>
         <h1>asddassddas</h1>
        </div>
      </div> */}
      <div class="main-div">
        <div class="sub-div">
          <img
            class="image"
            src="https://blog.dubraybooks.ie/wp-content/uploads/2023/05/Happy-Couple-Blog-Header-1024x539.jpg"
            alt="Slika 1"
          />
          <button class="button">
            <a href="https://blog.dubraybooks.ie/2023/05/18/the-happy-couple/">
              Read More
            </a>
          </button>
          <button class="button1">18 may 2023</button>
          <h3>The Happy Couple by Naoise Dolan</h3>
          <br></br>
          <p>Naoise Dolan tells us about her new read, The Happy Couple. </p>
        </div>
        <div class="sub-div">
          <img
            class="image"
            src="https://blog.dubraybooks.ie/wp-content/uploads/2023/05/MicrosoftTeams-image-470-1024x539.jpg"
            alt="Slika 2"
          />
          <button class="button">
            <a href="https://blog.dubraybooks.ie/2023/05/16/falling-animals-by-sheila-armstrong/">
              Read More
            </a>
          </button>
          <button class="button1">16 may 2023</button>
          <h3>TFalling Animals by Sheila Armstrong</h3>
          <br></br>
          <p>Naoise Dolan tells us about her new read, The Happy Couple. </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
