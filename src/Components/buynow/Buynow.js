import { Divider } from "@mui/material";
import React, { useContext, useEffect, useState, useMemo } from "react";
import "./buynow.css";
import Empty from "./Empty";
import Option from "./Option";
import Right from "./Right";
import Subtotal from "./Subtotal";
import { TokenContext } from "../..";
import productsData from "../../constant/productsdata";
import { groupBy } from "lodash";

function makeNewCartData(cartdata) {
  if (!cartdata) return cartdata;
  const cartObj = groupBy(cartdata, "id");
  const books = [];
  for (let id of Object.keys(cartObj)) {
    const book = cartObj[id][0];
    book.quantity = cartObj[id].length;
    books.push(book);
  }
  return books;
}

const Buynow = () => {
  const [cartdata, setCartdata] = useState("");
  // console.log(cartdata.length);
  const { token, setToken } = useContext(TokenContext);
  const [priceNumber, setPriceNumber] = useState(1);
  const [chosenBookKey, setChosenBookKey] = useState();
  // const [realPriceAmount, setRealPriceAmount] = useState(e.price.cost)

  const cartDataNew = useMemo(() => makeNewCartData(cartdata), [cartdata]);
  console.log("cartdata", cartdata);
  const getdatabuy = async () => {
    const res = await fetch(
      "https://e-commerce-backend-ruddy.vercel.app/cartdetails",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.token,
        },

        authorize: "token iz cookie",
        // credentials:"include"
      }
    );

    const data = await res.json();
    // console.log(data.carts);

    if (res.status !== 201) {
      alert("no data available");
    } else {
      // console.log("data cart main hain");
      setCartdata(data.carts);
    }
  };

  useEffect(() => {
    console.log(productsData);
    getdatabuy();
  }, []);

  console.log("chosenBookKey pricenumber", chosenBookKey, priceNumber);

  // const [price, setPrice] = useState(0);,
  // const totalAmount = () => {
  //     let price = 0
  //     cartdata.map((e) => {
  //         price += e.price.cost
  //     })
  //     setPrice(price)
  // }

  // useEffect(() => {
  //     totalAmount();
  // }, [cartdata]);

  console.log("cartdata", cartdata);

  return (
    <>
      {cartDataNew && cartDataNew.length ? (
        <div className="buynow_section">
          <div className="buynow_container">
            <div className="left_buy">
              <h1>Shopping Cart</h1>
              <p>Select all items</p>
              <span className="leftbuyprice">Price</span>
              <Divider />

              {cartDataNew.map((e, id) => {
                console.log("e", e.id);
                return (
                  <>
                    <div className="item_containert" key={id}>
                      <img src={e.detailUrl} alt="imgitem" />
                      <div className="item_details">
                        <h3>{e.title.longTitle}</h3>
                        <h3>{e.title.shortTitle}</h3>
                        <h3 className="diffrentprice">{e.price.cost}$</h3>
                        <p className="unusuall">
                          Usually dispatched in 8 days.
                        </p>
                        <p>Eligible for FREE Shipping</p>
                        {/* <img
                          src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                          alt="logo"
                        /> */}
                        <Option
                          keyString={e.id}
                          setChosenBookKey={setChosenBookKey}
                          setPriceNumber={setPriceNumber}
                          deletedata={e.id}
                          get={getdatabuy}
                        />
                        <h5 className="Quantity">Quantity: {e.quantity}</h5>
                      </div>
                      <h3 className="item_price">{e.price.cost}$</h3>
                      {/* <h5>Quantity: {e.quantity}</h5> */}
                      {/* <p>Quantity:{productsData[0].price.quantity}</p> */}
                    </div>
                    <Divider />
                  </>
                );
              })}

              <Subtotal
                chosenBookKey={chosenBookKey}
                priceNumber={priceNumber}
                iteam={cartdata}
              />
            </div>
            <Right iteam={cartdata} />
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Buynow;

// thodu changes krya 6 carts ni andr cart htu bt tene remove karine
// je pramane aapdo normal data save 6 te rite bnavyu
// jo carts ni andr cart use kro to tmare map call kravya pachi pn e.cart.discount
