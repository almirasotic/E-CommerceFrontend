import React, { useEffect } from "react";
import Banner from "./Banner";
import "../home/home.css";
import Slide from "./Slide";
import { Divider } from "@mui/material";
import { getProducts } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

const Maincomp = () => {
  const { products } = useSelector((state) => state.getproductsdata);
  // console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <div className="home_section">
        <div className="banner_part">
          <Banner />
        </div>
        {products != null ? (
          <div>
            <div className="slide_part">
              <div className="left_slide">
                <Slide title="Bestsellers" products={products.slice(0, 5)} />
              </div>
              {/* <div className="right_slide">
                            <h4>Festive latest launches</h4>
                         
                            <a href="#">see more</a>
                        </div> */}
            </div>

            <Slide title="Just Landed" products={products.slice(5, 10)} />
            {/* ovo je za sliku ispod */}
            {/* <div className="center_img">
                   
                </div> */}

            <Slide title="Pre-order" products={products.slice(10, 15)} />
            <Slide
              title="Dubray Staff Recommended Reads"
              products={products.slice(15, 20)}
            />
          </div>
        ) : (
          <h1 className="text-center">Products are loading...</h1>
        )}
      </div>

      <Divider />
    </>
  );
};

export default Maincomp;

{
  /* {
            products.map((e)=>{
                return (
                    <>
                        <h3>{e.description}</h3>
                    </>
                )
            })
        } */
}

/*
export default Card(imeKnjige, cena, autor, slika)=>{
  <div>
  <img>Slila</img>
    <h1>${author}
  </div>
}
*/
