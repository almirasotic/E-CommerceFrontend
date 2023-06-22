import React from "react";
import "./activate.css";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Activate = () => {
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  const token = searchParams.get("token");
  const history = useHistory();
  // console.log(udata);

  const senddata = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:5007/aktiviraj?token=${token}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const data = await res.json();
      // console.log(data);

      if (res.status === 201) {
        toast.success("Uspesno ste aktivirali nalog, molimo ulogujte se!", {
          position: "top-center",
        });
        history.push("/login");
      } else {
        toast.error("Greska!", {
          position: "bottom-center",
        });
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Activate</h1>
      <button className="dugmeprvo" onClick={senddata}>
        Aktiviraj
      </button>
      <div className="drugi"></div>
    </div>
  );
};

export default Activate;
