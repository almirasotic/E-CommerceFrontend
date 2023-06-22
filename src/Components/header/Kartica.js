import React, { useContext, useState, useEffect } from "react";
import "../header/kartica.css";
import { useHistory } from "react-router";
import { Logincontext } from "../context/Contextprovider";
import { TokenContext } from "../../index";

const Kartica = () => {
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

  const [filterShow, setFilterShow] = useState(window.innerWidth > 768);
  // useEffect(() => {
  //   const listener = () => {
  //     const width = window.innerWidth;
  //     if (width > 768 && filterShow) {
  //       setFilterShow(true);
  //     } else {
  //       setFilterShow(false);
  //     }
  //   };
  //   document.addEventListener("resize", listener);
  //   return () => document.removeEventListener("resize", listener);
  // }, []);
  function filterButtonClick() {
    setFilterShow((f) => !f);
  }

  return (
    <div class="row">
      <div class="column2">
        <div className="applied">
          <h3>Applied:</h3>
          <div className="prikazdugme">
            {" "}
            <button
              className="show-dugme"
              style={{ float: "left" }}
              onClick={filterButtonClick}
            >
              SHOW FILTERS
            </button>
          </div>
          <div className="applied2">
            Category: Fiction - General And Literary -{" "}
            {names.map((name) => (
              <span className="name-span">
                {name}{" "}
                <span className="name-x-span" onClick={() => removeName(name)}>
                  X
                </span>
              </span>
            ))}
          </div>
          <button>
            {" "}
            <a href="#" onClick={handleClick2}>
              Clear All Filters
            </a>
          </button>
        </div>
        <div className="zaprvukarticu">
          {isShown("Wilde Oscar") && (
            <div className="kartica1">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241251805.jpg&w=200&q=75"></img>
              <p>Only Dull People </p>
              <p></p>
              <h6>Wilde Oscar</h6>
              <h5>$2.6</h5>
              <button
                onClick={() =>
                  addtocart("products21", {
                    id: "products21",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241251805.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241251805.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Only Dull People",
                      longTitle: " Wilde Oscar",
                    },
                    price: {
                      mrp: 20.99,
                      cost: 16.5,
                      discount: "45%",
                    },
                    description:
                      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                    discount: "-20%",
                    tagline: "Wilde Oscar",
                  })
                }
              >
                ADD TO BASKET
              </button>
            </div>
          )}
          {isShown("Antoine Saint-Exupery") && (
            <div className="kartica2">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227864.jpg&w=200&q=75"></img>
              <p>The Little Prince</p>

              <h6>Antoine Saint-Exupery</h6>
              <h5>$9.79</h5>
              <button
                onClick={() =>
                  addtocart("products27", {
                    id: "products27",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227864.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227864.jpg&w=200&q=75",
                    title: {
                      shortTitle: "The Little Prince",
                      longTitle: "Antoine Saint-Exupery",
                    },
                    price: {
                      mrp: 20.99,
                      cost: 16.5,
                      discount: "45%",
                    },
                    description:
                      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                    discount: "-20%",
                    tagline: "Antoine Saint-Exupery",
                  })
                }
              >
                ADD TO BASKET
              </button>
            </div>
          )}
          {isShown("Antoine Saint-Exupery") && (
            <div className="kartica3">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227932.jpg&w=200&q=75"></img>
              <p>Pride and Prejudice</p>

              <h6>Antoine Saint-Exupery</h6>
              <h5>$10.12</h5>
              <button
                onClick={() =>
                  addtocart("products28", {
                    id: "products28",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227802.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227802.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Alice in Wonderland Price and prejuice",
                      longTitle: "Antoine Saint-Exupery",
                    },
                    price: {
                      mrp: 20.99,
                      cost: 16.5,
                      discount: "45%",
                    },
                    description:
                      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                    discount: "-20%",
                    tagline: "Antoine Saint-Exupery",
                  })
                }
              >
                ADD TO BASKET
              </button>
            </div>
          )}
          {isShown("Antoine Saint-Exupery") && (
            <div className="kartica4">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227802.jpg&w=200&q=75"></img>
              <p>Alice in Wonderland Price and prejuice</p>

              <h6>Antoine Saint-Exupery</h6>
              <h5>$10.12</h5>
              <button
                onClick={() =>
                  addtocart("products28", {
                    id: "products28",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227802.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781840227802.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Alice in Wonderland Price and prejuice",
                      longTitle: "Antoine Saint-Exupery",
                    },
                    price: {
                      mrp: 20.99,
                      cost: 16.5,
                      discount: "45%",
                    },
                    description:
                      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                    discount: "-20%",
                    tagline: "Antoine Saint-Exupery",
                  })
                }
              >
                ADD TO BASKET
              </button>
            </div>
          )}
          {isShown("Georges Simenon") && (
            <div className="kartica5">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978019%2F9780199535989.jpg&w=200&q=75"></img>
              <p>The Picture of Dorian Gray Book</p>

              <h6>Georges Simenon</h6>
              <h5>$12.15</h5>
              <button
                onClick={() =>
                  addtocart("products14", {
                    id: "products14",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781399724821.webp&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fdubray-medusa-bucket.s3.eu-west-1.amazonaws.com%2F9781399724821.webp&w=200&q=75",
                    title: {
                      shortTitle: "The Exchange",
                      longTitle: "Grisham John",
                    },
                    price: {
                      mrp: 24.99,
                      discount: "10%",
                    },
                    description:
                      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                    discount: "From 40",
                    tagline: "Mooney Caz",
                  })
                }
              >
                ADD TO BASKET
              </button>
            </div>
          )}
          {isShown("Stoker Bram") && (
            <div className="kartica6">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780007420087.jpg&w=200&q=75"></img>
              <p>Dracula P/B (Collins Classics)</p>

              <h6>Stoker Bram</h6>
              <h5>$3.15</h5>
              <button
                onClick={() =>
                  addtocart("products29", {
                    id: "products29",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780007420087.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780007420087.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Dracula P/B (Collins Classics)",
                      longTitle: "Stoker Bram",
                    },
                    price: {
                      mrp: 20.99,
                      cost: 16.5,
                      discount: "45%",
                    },
                    description:
                      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                    discount: "-20%",
                    tagline: "Stoker Bram",
                  })
                }
              >
                ADD TO BASKET
              </button>
            </div>
          )}
          {isShown("Jane Austen") && (
            <div className="kartica7">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978190%2F9781909889378.jpg&w=200&q=75"></img>
              <p>Granta 154: I've Been</p>

              <h6>Jane Austen</h6>
              <h5>$3.15</h5>
              <button
                onClick={() =>
                  addtocart("products31", {
                    id: "products31",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978180%2F9781801104388.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978180%2F9781801104388.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Everything",
                      longTitle: "Jane Austen",
                    },
                    price: {
                      mrp: 20.99,
                      cost: 16.5,
                      discount: "45%",
                    },
                    description:
                      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                    discount: "-20%",
                    tagline: "Jane Austen",
                  })
                }
              >
                ADD TO BASKET
              </button>
            </div>
          )}
          {isShown("Jane Austen") && (
            <div className="kartica8">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978180%2F9781801104388.jpg&w=200&q=75"></img>
              <p>Everything</p>

              <h6>Jane Austen</h6>
              <h5>$11.15</h5>
              <button
                onClick={() =>
                  addtocart("products31", {
                    id: "products31",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978180%2F9781801104388.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978180%2F9781801104388.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Everything",
                      longTitle: "Jane Austen",
                    },
                    price: {
                      mrp: 20.99,
                      cost: 16.5,
                      discount: "45%",
                    },
                    description:
                      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                    discount: "-20%",
                    tagline: "Jane Austen",
                  })
                }
              >
                ADD TO BASKET
              </button>
            </div>
          )}
          {isShown("Georges Simenon") && (
            <div className="kartica9">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781789091502.jpg&w=200&q=75"></img>
              <p>Cursed</p>

              <h6>Georges Simenon</h6>
              <h5>$21.15</h5>
              <button
                onClick={() =>
                  addtocart("products23", {
                    id: "products23",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781789091502.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781789091502.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Cursed",
                      longTitle: "Georges Simenon",
                    },
                    price: {
                      mrp: 20.99,
                      cost: 16.5,
                      discount: "45%",
                    },
                    description:
                      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                    discount: "-20%",
                    tagline: "Georges Simenon",
                  })
                }
              >
                ADD TO BASKET
              </button>
            </div>
          )}
          {isShown("P.g. Wodehouse") && (
            <div className="kartica10">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978199%2F9781990048050.jpg&w=200&q=75"></img>
              <p>Strong Words</p>

              <h6>P.g. Wodehouse</h6>
              <h5>$15</h5>
              <button
                onClick={() =>
                  addtocart("products24", {
                    id: "products24",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978199%2F9781990048050.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978199%2F9781990048050.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Cursed",
                      longTitle: "GP.g. Wodehouse",
                    },
                    price: {
                      mrp: 20.99,
                      cost: 16.5,
                      discount: "45%",
                    },
                    description:
                      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                    discount: "-20%",
                    tagline: "GP.g. Wodehouse",
                  })
                }
              >
                ADD TO BASKET
              </button>
            </div>
          )}
          {isShown("Virginia Woolf") && (
            <div className="kartica11">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978198%2F9781988531243.jpg&w=200&q=75"></img>
              <p>Landfall 235</p>

              <h6>Virginia Woolf</h6>
              <h5>$17</h5>
              <button
                onClick={() =>
                  addtocart("products25", {
                    id: "products25",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978198%2F9781988531243.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978198%2F9781988531243.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Landfall 235",
                      longTitle: "Virginia Woolf",
                    },
                    price: {
                      mrp: 20.99,
                      cost: 16.5,
                      discount: "45%",
                    },
                    description:
                      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                    discount: "-20%",
                    tagline: "Virginia Woolf",
                  })
                }
              >
                ADD TO BASKET
              </button>
            </div>
          )}
          {isShown("Jane Austen") && (
            <div className="kartica12">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787301405.jpg&w=200&q=75"></img>
              <p>Orwell on Freedom</p>

              <h6>Jane Austen</h6>
              <h5>$12</h5>
              <button
                onClick={() =>
                  addtocart("products35", {
                    id: "products35",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787301405.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781787301405.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Orwell on Freedom",
                      longTitle: "Jane Austen",
                    },
                    price: {
                      mrp: 20.99,
                      cost: 16.5,
                      discount: "45%",
                    },
                    description:
                      "** A Book of the Year in The Times - The New Statesman - Observer - Financial Times - Irish Times - Irish Independent - Times Literary Supplement ** WINNER OF THE ORWELL PRIZE AND THE KERRY GROUP IRISH NOVEL OF THE YEAR AWARD SHORTLISTED FOR THE RATHBONES FOLIO PRIZE AND THE IRISH NOVEL OF THE YEAR AT THE DALKEY LITERARY AWARDS 'Exquisite.' Damon Galgut 'Masterly.' The Times 'Miraculous.' Herald 'Astonishing.' Colm Tóibìn 'Stunning.' Sunday Independent 'Absolutely beautiful.' Douglas Stuart It is 1985, in an Irish town. During the weeks leading up to Christmas, Bill Furlong, a coal and timber merchant, faces into his busiest season. As he does the rounds, he feels the past rising up to meet him - and encounters the complicit silences of a people controlled by the Church.",
                    discount: "-20%",
                    tagline: "Jane Austen",
                  })
                }
              >
                ADD TO BASKET
              </button>
            </div>
          )}
        </div>
      </div>

      <div class="column1">
        <div className="lijevo1">
          <h2>Classic Fiction</h2>
          <h3>Category</h3>
          <br></br>
          <h4>
            <a href="#" onClick={handleClick1}>
              All General And Literary
            </a>
          </h4>
        </div>

        <div
          className="lijevo2"
          style={{ display: filterShow ? "block" : "none" }}
        >
          <br></br>
          <br></br>
          <h3>Author</h3>
          <br></br>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              checked={names.includes("Jane Austen")}
              onChange={() => handleCheckbox("Jane Austen")}
            ></input>
            <span className="checkpomeraj">Jane Austen</span>
            <span className="spanpomeraj">52</span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              checked={names.includes("Georges Simenon")}
              onChange={() => handleCheckbox("Georges Simenon")}
            ></input>
            <span className="checkpomeraj">Georges Simenon</span>
            <span className="spanpomeraj1">49</span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("P.g. Wodehouse")}
            ></input>
            <span className="checkpomeraj">P.g. Wodehouse</span>
            <span className="spanpomeraj2">41</span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Virginia Woolf")}
            ></input>
            <span className="checkpomeraj">Virginia Woolf</span>
            <span className="spanpomeraj3">38</span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Stoker Bram")}
            ></input>
            <span className="checkpomeraj">Stoker Bram</span>
            <span className="spanpomeraj4">36</span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Austen Jane")}
            ></input>
            <span className="checkpomeraj">Austen Jane</span>
            <span className="spanpomeraj5">34</span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Christie Agatha")}
            ></input>
            <span className="checkpomeraj">Christie Agatha</span>
            <span className="spanpomeraj6">31</span>
          </div>
          <br></br>
          <h3>Format</h3>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Paperback")}
            ></input>
            <span className="checkpomeraj">Paperback</span>
            <span className="spanpomeraj7">2.133</span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Hardback")}
            ></input>
            <span className="checkpomeraj">Hardback</span>
            <span className="spanpomeraj8">544</span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Cd-Audio")}
            ></input>
            <span className="checkpomeraj">Cd-Audio</span>
            <span className="spanpomeraj8">222</span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Gen. Merchandise")}
            ></input>
            <span className="checkpomeraj">Gen. Merchandise</span>
            <span className="spanpomeraj9">22</span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Book")}
            ></input>
            <span className="checkpomeraj">Book</span>
            <span className="spanpomeraj10">2</span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Leather/Fine Binding")}
            ></input>
            <span className="checkpomeraj">Leather/Fine Binding</span>
            <span className="spanpomeraj11">2</span>
          </div>
          <br></br>
          <br></br>
          <h3>Format</h3>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Paperback")}
            ></input>
            <span className="checkpomeraj">Paperback</span>
            <span className="spanpomeraj12"></span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Hard Back")}
            ></input>
            <span className="checkpomeraj">Hard Back</span>
            <span className="spanpomeraj12"></span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Book")}
            ></input>
            <span className="checkpomeraj">Book</span>
            <span className="spanpomeraj12"></span>
          </div>
          <br></br>
          <br></br>
          <h3>Irish Interest</h3>
          <div class="checkbox-wrapper">
            <input type="checkbox" id="myCheckbox"></input>
            <span className="checkpomeraj">Yes</span>
            <span className="spanpomeraj12">223</span>
          </div>
          <div class="checkbox-wrapper">
            <input type="checkbox" id="myCheckbox"></input>
            <span className="checkpomeraj">No</span>
            <span className="spanpomeraj12">165</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kartica;
