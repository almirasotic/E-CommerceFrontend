import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { products } from "./productdata";
import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slide.css";
import { Logincontext } from "../context/Contextprovider";
import { TokenContext, token } from "../../index";

const Slide = ({ title, products }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const { account, setAccount } = useContext(Logincontext);
  const { token, setToken } = useContext(TokenContext);

  // console.log(account);

  const { id } = useParams("");
  // console.log(id);

  const history = useHistory();

  const [inddata, setIndedata] = useState("");

  // console.log([inddata]);

  const getinddata = async (id) => {
    const res = await fetch(`http://localhost:5007/getproductsone/${id}`, {
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
    });

    const data = await res.json();

    if (res.status !== 201) {
      alert("no data available");
    } else {
      return data;
    }
  };

  const addtocart = async (id) => {
    console.log(id);

    const i = await getinddata(id);
    console.log("almir", i);
    if (!i) {
      alert("Please fetch product data first.");
      return;
    }
    console.log("sending token", token.token);
    const check = await fetch(
      `https://e-commerce-backend-ruddy.vercel.app/addcart/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.token,
        },
        body: JSON.stringify({
          i,
        }),
      }
    );
    const data1 = await check.json();
    console.log(data1, "!!!!!!!!!!!!!!!!!!!!!");
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

  const CarouselSlideItem = ({ product }) => {
    return (
      <NavLink to={`/getproductsone/${product.id}`} key={product.id}>
        <div className="bestseller1">
          <div className="products_items">
            <div className="product_img">
              <img src={product.url} alt="product" />
            </div>
            <p
              className="products_name"
              style={{ color: "#00205b", fontSize: "17px", fontWeight: "400" }}
            >
              {product.title.shortTitle}
            </p>
            <p
              className="products_offer"
              style={{ color: "gray", textDecoration: "none" }}
            >
              {product.tagline}
            </p>

            {/* <p className="products_explore" style={{ color: "#70c8b5", fontSize : "17px"}}>
               {product.price.cost} $ 
            </p> */}
            <p className="products_explore">
              <span className="product-name-line"></span>
              <span
                className="product-name"
                style={{ color: "gray", fontSize: "17px" }}
              >
                €{product.price.mrp}
              </span>
              <span
                className="product-price"
                style={{ color: "#70c8b5", fontSize: "17px" }}
              >
                {" "}
                €{product.price.cost}
              </span>
            </p>

            <button className="kupi" onClick={() => addtocart(product.id)}>
              ADD TO BASKET
            </button>
          </div>
        </div>
      </NavLink>
    );
  };

  return (
    <div className="products_section">
      <div className="products_deal">
        <h3>{title}</h3>
      </div>
      <Divider />
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={false}
        deviceType="desktop"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product) => (
          <CarouselSlideItem product={product} key={product.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
