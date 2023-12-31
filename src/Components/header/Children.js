import React, { useContext, useState } from "react";
import "../header/kartica.css";
import { useHistory } from "react-router";
import { Logincontext } from "../context/Contextprovider";
import { TokenContext } from "../../index";

const Children = () => {
  const { account, setAccount } = useContext(Logincontext);
  const { token, setToken } = useContext(TokenContext);
  const addtocart = async (id, data) => {
    // console.log(id);
    // if (!inddata) {
    //   alert("Please fetch product data first.");
    //   return;
    // }
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
          data,
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
    // history.push("/");
    window.location.href = "/";
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
    <div class="row">
      <div class="column2">
        <div className="applied">
          <h3>Applied:</h3>
          <div className="applied2">
            Category: Fiction - Children-{" "}
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
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781526628220.jpg&w=200&q=75"></img>
              <p>House of Sky </p>
              <p></p>
              <h6>Wilde Oscar</h6>
              <h5>$2.6</h5>
              <button
                onClick={() =>
                  addtocart("products43", {
                    id: "products43",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781526628220.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781526628220.jpg&w=200&q=75",
                    title: {
                      shortTitle: "House of Sky ",
                      longTitle: "Wilde Oscar",
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
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978191%2F9781915071262.jpg&w=200&q=75"></img>
              <p>GhostLord's</p>

              <h6>Antoine Saint-Exupery</h6>
              <h5>$9.79</h5>
              <button
                onClick={() =>
                  addtocart("products44", {
                    id: "products44",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978191%2F9781915071262.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978191%2F9781915071262.jpg&w=200&q=75",
                    title: {
                      shortTitle: "GhostLord's ",
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
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008554606.jpg&w=200&q=75"></img>
              <p>Fall of the School</p>

              <h6>Antoine Saint-Exupery</h6>
              <h5>$10.12</h5>
              <button
                onClick={() =>
                  addtocart("products45", {
                    id: "products45",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008554606.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008554606.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Fall of the School",
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
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978147%2F9781471192500.jpg&w=200&q=75"></img>
              <p>Night We Got Stuck In A Story</p>

              <h6>Antoine Saint-Exupery</h6>
              <h5>$10.12</h5>
              <button
                onClick={() =>
                  addtocart("products46", {
                    id: "products46",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978147%2F9781471192500.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978147%2F9781471192500.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Night We Got Stuck In A Story",
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
          {isShown("Wilde Oscar") && (
            <div className="kartica5">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978133%2F9781338801910.jpg&w=200&q=75"></img>
              <p>Dog Man 11 Twenty Thousand Fleas Under</p>

              <h6>Wilde Oscar</h6>
              <h5>$12.15</h5>
              <button
                onClick={() =>
                  addtocart("products47", {
                    id: "products47",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978133%2F9781338801910.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978133%2F9781338801910.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Dog Man 11 Twenty Thousand Fleas Under",
                      longTitle: "Wilde Oscar",
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
          {isShown("Stoker Bram") && (
            <div className="kartica6">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781788452939.jpg&w=200&q=75"></img>
              <p>Loshins oof(Collins Classics)</p>

              <h6>Stoker Bram</h6>
              <h5>$3.15</h5>
              <button
                onClick={() =>
                  addtocart("products48", {
                    id: "products48",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781788452939.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781788452939.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Loshins oof(Collins Classics)",
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
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781788452618.jpg&w=200&q=75"></img>
              <p>Granta 154: I've Been</p>

              <h6>Jane Austen</h6>
              <h5>$3.15</h5>
              <button
                onClick={() =>
                  addtocart("products51", {
                    id: "products51",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781788452618.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781788452618.jpg&w=200&q=75",
                    title: {
                      shortTitle: "Granta 154: I've Been",
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
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241392256.jpg&w=200&q=75"></img>
              <p>Everything</p>

              <h6>Jane Austen</h6>
              <h5>$11.15</h5>
              <button
                onClick={() =>
                  addtocart("products52", {
                    id: "products52",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241392256.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241392256.jpg&w=200&q=75",
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
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241417492.jpg&w=200&q=75"></img>
              <p>Cursed</p>

              <h6>Georges Simenon</h6>
              <h5>$21.15</h5>
              <button
                onClick={() =>
                  addtocart("products53", {
                    id: "products53",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241417492.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978024%2F9780241417492.jpg&w=200&q=75",
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
          {isShown("GP.g. Wodehouse") && (
            <div className="kartica10">
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978144%2F9781444968903.jpg&w=200&q=75"></img>
              <p>Cursed</p>

              <h6>GP.g. Wodehouse</h6>
              <h5>$15</h5>
              <button
                onClick={() =>
                  addtocart("products54", {
                    id: "products54",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978144%2F9781444968903.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978144%2F9781444968903.jpg&w=200&q=75",
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
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008197056.jpg&w=200&q=75"></img>
              <p>Landfall 235</p>

              <h6>Virginia Woolf</h6>
              <h5>$17</h5>
              <button
                onClick={() =>
                  addtocart("products55", {
                    id: "products55",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008197056.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978000%2F9780008197056.jpg&w=200&q=75",
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
              <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781526624802.jpg&w=200&q=75"></img>
              <p>Orwell on Freedom</p>

              <h6>Jane Austen</h6>
              <h5>$12</h5>
              <button
                onClick={() =>
                  addtocart("products56", {
                    id: "products56",
                    url: "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781526624802.jpg&w=200&q=75",
                    detailUrl:
                      "https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978152%2F9781526624802.jpg&w=200&q=75",
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
        <div className="lijevo2">
          <br></br>
          <br></br>
          <h3>Author</h3>
          <br></br>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={() => handleCheckbox("Jane Austen")}
            ></input>
            <span className="checkpomeraj">Jane Austen</span>
            <span className="spanpomeraj">52</span>
          </div>
          <div class="checkbox-wrapper">
            <input
              type="checkbox"
              id="myCheckbox"
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
              onClick={handleClick1}
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

export default Children;
