import React, { useState } from "react";
import "../header/kartica.css";
import { useHistory } from "react-router";

const Irish = () => {
  const history = useHistory();
  const [names, setNames] = useState([]);
  const handleClick1 = () => {
    console.log("test");
    history.push("/home");
  };
  const handleClick2 = () => {
    console.log("test");
    history.push("/Prazna");
  };

  const handleCheckbox = (name) => {
    const nameExistIndex = names.findIndex((n) => n === name);
    if (nameExistIndex !== -1) {
      let tmp = [...names];
      tmp.splice(nameExistIndex, 1);
      setNames([...tmp]);
    } else setNames([...names, name]);
  };

  return (
    <div class="row">
      <div class="column2">
        <div className="applied">
          <h3>Applied:</h3>
          <div className="applied2">
            Category: Fiction - Classics-{" "}
            {names.map((name) => name + " ")}
          </div>
          <button> <a href="#" onClick={handleClick2}>
          Clear All Filters
            </a></button>
        </div>
        <div className="zaprvukarticu">
          <div className="kartica1">
            <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978303%2F9783031094248.jpg&w=200&q=75"></img>
            <p>Irish Policing </p>
            <p></p>
            <h6>Wilde Oscar</h6>
            <h5>$2.6</h5>
            <button>ADD TO BASKET</button>
          </div>
          <div className="kartica2">
            <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781848893306.jpg&w=200&q=75"></img>
            <p>Dublin A New</p>

            <h6>Thursday Murder</h6>
            <h5>$9.79</h5>
            <button>ADD TO BASKET</button>
          </div>
          <div className="kartica3">
            <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781848893245.jpg&w=200&q=75"></img>
            <p>Striking Back P/B</p>

            <h6>Banville John</h6>
            <h5>$10.12</h5>
            <button>ADD TO BASKET</button>
          </div>
          <div className="kartica4">
            <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781848408791.jpg&w=200&q=75"></img>
            <p>Island of Woods How Island</p>

            <h6>Antoine Saint-Exupery</h6>
            <h5>$10.12</h5>
            <button>ADD TO BASKET</button>
          </div>
          <div className="kartica5">
            <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978184%2F9781843518488.jpg&w=200&q=75"></img>
            <p>Little Republics The Story</p>

            <h6>Wilde Oscar</h6>
            <h5>$12.15</h5>
            <button>ADD TO BASKET</button>
          </div>
          <div className="kartica6">
            <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978180%2F9781800854710.jpg&w=200&q=75"></img>
            <p>The Voice of the (Collins Classics)</p>

            <h6>Stoker Bram</h6>
            <h5>$3.15</h5>
            <button>ADD TO BASKET</button>
          </div>
          <div className="kartica7">
            <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978103%2F9781032110738.jpg&w=200&q=75"></img>
            <p>Granta 154: I've Been</p>

            <h6>Jane Austen</h6>
            <h5>$3.15</h5>
            <button>ADD TO BASKET</button>
          </div>
          <div className="kartica8">
            <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978180%2F9781801104388.jpg&w=200&q=75"></img>
            <p>Everything</p>

            <h6>Jane Austen</h6>
            <h5>$11.15</h5>
            <button>ADD TO BASKET</button>
          </div>
          <div className="kartica9">
            <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781786075994.jpg&w=200&q=75"></img>
            <p>Cursed</p>

            <h6>Georges Simenon</h6>
            <h5>$21.15</h5>
            <button>ADD TO BASKET</button>
          </div>
          <div className="kartica10">
            <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781781175255.jpg&w=200&q=75"></img>
            <p>Cursed</p>

            <h6>GP.g. Wodehouse</h6>
            <h5>$15</h5>
            <button>ADD TO BASKET</button>
          </div>
          <div className="kartica11">
            <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781780731797.jpg&w=200&q=75"></img>
            <p>Landfall 235</p>

            <h6>Virginia Woolf</h6>
            <h5>$17</h5>
            <button>ADD TO BASKET</button>
          </div>
          <div className="kartica12">
            <img src="https://www.dubraybooks.ie/_next/image?url=https%3A%2F%2Fwww.bibdsl.co.uk%2Fbds-images%2Fl%2F978178%2F9781780733258.jpg&w=200&q=75"></img>
            <p>Orwell on Freedom</p>

            <h6>Jane Austen</h6>
            <h5>$12</h5>
            <button>ADD TO BASKET</button>
          </div>
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
              onChange={() => handleCheckbox("Charles Dickens")}
            ></input>
            <span className="checkpomeraj">Charles Dickens</span>
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

export default Irish;
