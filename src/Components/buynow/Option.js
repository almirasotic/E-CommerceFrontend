import React, { useContext, useState } from "react";
import { Logincontext } from "../context/Contextprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TokenContext } from "../../index";

const Option = ({
  setChosenBookKey,
  keyString,
  setPriceNumber,
  deletedata,
  get,
}) => {
  // console.log(deletedata);

  const { account, setAccount } = useContext(Logincontext);
  const { token, setToken } = useContext(TokenContext);
  // const [bookKey, setBookKey] = useState();
  // console.log(account);

  const removedata = async (deldata) => {
    try {
      //   const res = await fetch(`http://localhost:5007/remove/${id}`, {
      const res = await fetch(
        `https://e-commerce-backend-ruddy.vercel.app/remove/${deldata}`,
        {
          method: "DELETE",
          headers: {
            // Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token.token,
          },
          //credentials: "include",
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.status === 400 || !data) {
        // console.log("error aai remove time pr");
        console.log("error");
      } else {
        console.log("user delete");
        get();
        // setAccount(data);
        // get();
        // toast.success("Iteam remove from cart !", {
        //   position: "top-center",
        // });
        // setCartData(data.carts);
      }
    } catch (error) {
      console.log("TEST");
      console.log(error);
    }
  };

  console.log("keySSSSS", keyString);

  const handleClick8 = (event) => {
    setChosenBookKey(keyString);
    setPriceNumber(event.target.value);
  };

  return (
    <div className="add_remove_select" key={deletedata}>
      {/* <select onClick={handleClick8} name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>

        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>

        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
      </select> */}
      {/* <p onClick={() => removedata(deletedata)} style={{ cursor: "pointer" }}>
        Delete
      </p> */}
      <span></span>
      {/* <p className="forremovemedia">Save Or Later</p> */}
      <span></span>
      {/* <p className="forremovemedia">See More like this</p> */}
      <ToastContainer />
    </div>
  );
};

export default Option;
