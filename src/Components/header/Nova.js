import React, { useEffect, useState } from "react";
import Banner from "../home/Banner";
import "../home/home.css";
import Slide from "../home/Slide";
import { Divider } from "@mui/material";
import { getProducts } from "../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";

const Nova = () => {
  const { products } = useSelector((state) => state.getproductsdata);
  // console.log(products);
  const [filters, setFilters] = useState({
    category: "book",
    subcategory: "comedy",
  });

  const doFiltersExist = Object.keys(filters).length > 0;
  console.log(doFiltersExist);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  /*
  useEffect(() => {
    products.filter((item) => {
      skldjlasdjasldkjasldasd
    })
  }, [authorFilter])
  */ 

  return (
    <>
      <div className="home_section">
        
        <div className="banner_part">{!doFiltersExist && <Banner />}</div>
        <div className="slide_part">
          <div className="left_slide">
            <Slide
              title="Bestsellers"
              products={products
                .filter((item) => {
                  let result = true;
                  Object.keys(filters).forEach((category) => {
                    if (filters[category] !== item[category]) {
                      result = false;
                    }
                  });
                  return result;
                })
                .slice(0, 5)}
            />
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
          products={products.slice(15)}
        />
      </div>

      {/* 
        <div className=" display flex i row">
            <div> Filtere
            <label>Author</label>
                <select type="checkbox"/> I onda da nalupas ostale filtere koji ti trebaju morace da budu vezani sa stejtom po mogucnosti niz
                svaki put kad izaberes nesto odradi tajNiz.push(staSiIzabrao)
             <label>FOrmat</label>
             <select> i oni ce da budu vezani za niz FormatArray</slect>   
            /<div>
            <div>product.map((item)=>{
              <Card ime={item.name}  author={item.author} img={item.img} />
            })</div>
            
        </div>
      */}

      <Divider />
    </>
  );
};

export default Nova;

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
