import React, { useContext, useState } from "react";
import "../header/non.css";
import { useHistory } from "react-router";
import { Logincontext } from "../context/Contextprovider";
import { TokenContext } from "../../index";

const NonFiction2 = () => {
  const { account, setAccount } = useContext(Logincontext);
  const { token, setToken } = useContext(TokenContext);
  const addtocart = async (id, data) => {
    // console.log(id);
    // if (!inddata) {
    //   alert("Please fetch product data first.");
    //   return;
    // }
    console.log("sending token", token.token);
    const check = await fetch(`http://localhost:5007/addcart/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({
        data,
      }),
    });
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

  const [inddata, setIndedata] = useState("");
  const history = useHistory();
  const [names, setNames] = useState([]);
  function isShown(name) {
    return names.length === 0 || names.includes(name);
  }
  const handleClick1 = () => {
    console.log("test");
    // history.push("/Classics");
    window.location.href = "/";
  };
  const handleClick2 = () => {
    console.log("test");
    history.push("/Prazna");
    // window.location.href = "/";
  };

  const handleCheckbox = (name) => {
    const nameExistIndex = names.findIndex((n) => n === name);
    if (nameExistIndex !== -1) {
      let tmp = [...names];
      tmp.splice(nameExistIndex, 1);
      setNames([...tmp]);
    } else setNames([...names, name]);
  };

  const removeName = (name) => {
    setNames(names.filter((n) => n !== name));
  };

  return (
    <div className="NonGlavni">
      <div className="Sporedni">
        <h1 className="h1Non">Something to Look Forward To</h1>
        <img
          className="slikaNon2"
          src="https://images.ctfassets.net/7iq7c2o7xfbl/1LWYTVZcBQ6P9EEp6pdsn7/4e4ecbd015773f25a87130ea2b8faa96/Something_to_Look_Forward_to_Landing_Page_2742_x_558_May_23.webp"
        ></img>
        <br></br>
        <p className="Non2P">
          A selection of the forthcoming titles we're looking forward to
          reading. Whether your tastes run to crime fiction, cookbooks, current
          affairs, or children's books - here are some forthcoming highlights.
        </p>
        <h2>Fiction</h2>
        <div className="kartica1Non">
          <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9780571382019.webp&w=200&q=75"></img>
          <p>So Late in the Day</p>

          <p>Claire Keegen</p>
          <h5>$9.99</h5>
          <button
            onClick={() =>
              addtocart("products69", {
                id: "products69",
                url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9780571382019.webp&w=200&q=75",
                detailUrl:
                  "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9780571382019.webp&w=200&q=75",
                title: {
                  shortTitle: "So Late in the Day",
                  longTitle: "Claire Keegen",
                },
                price: {
                  mrp: 20.99,
                  cost: 16.5,
                  discount: "45%",
                },
                description:
                  "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                discount: "-20%",
                tagline: "Claire Keegen",
              })
            }
          >
            PRE-ORDER
          </button>
        </div>
        <div className="kartica2Non">
          <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=200&q=75"></img>
          <p>The Last devil </p>

          <p>Richard Osman</p>
          <h5>$3.99</h5>
          <button
            onClick={() =>
              addtocart("products70", {
                id: "products70",
                url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=200&q=75",
                detailUrl:
                  "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=200&q=75",
                title: {
                  shortTitle: "The Last devil",
                  longTitle: "Richard Osman",
                },
                price: {
                  mrp: 20.99,
                  cost: 16.5,
                  discount: "45%",
                },
                description:
                  "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                discount: "-20%",
                tagline: "Richard Osman",
              })
            }
          >
            PRE-ORDER
          </button>
        </div>
        <div className="kartica3Non">
          <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781529371628.jpg&w=200&q=75"></img>
          <p>Topographia </p>

          <p>Blindbuy</p>
          <h5>$2.99</h5>
          <button
            onClick={() =>
              addtocart("products70", {
                id: "products70",
                url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=200&q=75",
                detailUrl:
                  "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=200&q=75",
                title: {
                  shortTitle: "The Last devil",
                  longTitle: "Richard Osman",
                },
                price: {
                  mrp: 20.99,
                  cost: 16.5,
                  discount: "45%",
                },
                description:
                  "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                discount: "-20%",
                tagline: "Richard Osman",
              })
            }
          >
            PRE-ORDER
          </button>
        </div>
        <div className="kartica4Non">
          <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787636613.jpg&w=200&q=75"></img>
          <p>The Trap </p>

          <p>Catherine Ryan</p>
          <h5>$19.99</h5>
          <button
            onClick={() =>
              addtocart("products70", {
                id: "products70",
                url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=200&q=75",
                detailUrl:
                  "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=200&q=75",
                title: {
                  shortTitle: "The Last devil",
                  longTitle: "Richard Osman",
                },
                price: {
                  mrp: 20.99,
                  cost: 16.5,
                  discount: "45%",
                },
                description:
                  "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                discount: "-20%",
                tagline: "Richard Osman",
              })
            }
          >
            PRE-ORDER
          </button>
        </div>
        <div className="kartica5Non">
          <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978139%2F9781399712927.jpg&w=200&q=75"></img>
          <p>Holly </p>

          <p>Stephen King</p>
          <h5>$19.99</h5>
          <button
            onClick={() =>
              addtocart("products73", {
                id: "products73",
                url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978139%2F9781399712927.jpg&w=200&q=75",
                detailUrl:
                  "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978139%2F9781399712927.jpg&w=200&q=75",
                title: {
                  shortTitle: "Holly",
                  longTitle: "Stephen King",
                },
                price: {
                  mrp: 20.99,
                  cost: 16.5,
                  discount: "45%",
                },
                description:
                  "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                discount: "-20%",
                tagline: "Stephen King",
              })
            }
          >
            PRE-ORDER
          </button>
        </div>
        <h2>Non-Fiction</h2>
        <div className="kartica6Non">
          <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781783789573.jpg&w=200&q=75"></img>
          <p>A Thread of Violence </p>

          <p>Mark O`Connel</p>
          <h5>$19.99</h5>
          <button
            onClick={() =>
              addtocart("products75", {
                id: "products75",
                url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787636613.jpg&w=200&q=75",
                detailUrl:
                  "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787636613.jpg&w=200&q=75",
                title: {
                  shortTitle: "A Thread of Violence",
                  longTitle: "Mark O`Connel",
                },
                price: {
                  mrp: 20.99,
                  cost: 16.5,
                  discount: "45%",
                },
                description:
                  "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                discount: "-20%",
                tagline: "Mark O`Connel",
              })
            }
          >
            PRE-ORDER
          </button>
        </div>
        <div className="kartica7Non">
          <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781786051912.webp&w=200&q=75"></img>
          <p>Sean Quinn</p>

          <p>Sean Quinn</p>
          <h5>$13.99</h5>
          <button
            onClick={() =>
              addtocart("products76", {
                id: "products76",
                url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781786051912.webp&w=200&q=75",
                detailUrl:
                  "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781786051912.webp&w=200&q=75",
                title: {
                  shortTitle: "Sean Quinn",
                  longTitle: "Sean Quinn",
                },
                price: {
                  mrp: 20.99,
                  cost: 16.5,
                  discount: "45%",
                },
                description:
                  "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                discount: "-20%",
                tagline: "Sean Quinn",
              })
            }
          >
            PRE-ORDER
          </button>
        </div>
        <div className="kartica3Non">
          <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978071%2F9780717197224.jpg&w=200&q=75"></img>
          <p>Wise</p>

          <p>Elaine Harris</p>
          <h5>$2.99</h5>
          <button
            onClick={() =>
              addtocart("products77", {
                id: "products77",
                url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978071%2F9780717197224.jpg&w=200&q=75",
                detailUrl:
                  "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978071%2F9780717197224.jpg&w=200&q=75",
                title: {
                  shortTitle: "Wise",
                  longTitle: "Elaine Harris",
                },
                price: {
                  mrp: 20.99,
                  cost: 16.5,
                  discount: "45%",
                },
                description:
                  "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                discount: "-20%",
                tagline: "Elaine Harris",
              })
            }
          >
            PRE-ORDER
          </button>
        </div>
        <div className="kartica4Non">
          <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781529146516.jpg&w=200&q=75"></img>
          <p>The Daiary </p>

          <p>Steven Bartlet</p>
          <h5>$1.99</h5>
          <button
            onClick={() =>
              addtocart("products70", {
                id: "products70",
                url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=200&q=75",
                detailUrl:
                  "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241512456.jpg&w=200&q=75",
                title: {
                  shortTitle: "The Last devil",
                  longTitle: "Richard Osman",
                },
                price: {
                  mrp: 20.99,
                  cost: 16.5,
                  discount: "45%",
                },
                description:
                  "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                discount: "-20%",
                tagline: "Richard Osman",
              })
            }
          >
            PRE-ORDER
          </button>
        </div>
        <div className="kartica5Non">
          <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978071%2F9780717195992.jpg&w=200&q=75"></img>
          <p>Is Irelan Neutral? </p>

          <p>Gallagher Connor</p>
          <h5>$19.99</h5>
          <button
            onClick={() =>
              addtocart("products73", {
                id: "products79",
                url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978071%2F9780717195992.jpg&w=200&q=75",
                detailUrl:
                  "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978071%2F9780717195992.jpg&w=200&q=75",
                title: {
                  shortTitle: "Is Irelan Neutral?",
                  longTitle: "Gallagher Connor",
                },
                price: {
                  mrp: 20.99,
                  cost: 16.5,
                  discount: "45%",
                },
                description:
                  "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                discount: "-20%",
                tagline: "Gallagher Connor",
              })
            }
          >
            PRE-ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default NonFiction2;
