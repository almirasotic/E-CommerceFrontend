import React from "react";
import { useEffect, useState } from "react";

const Subtotal = ({ chosenBookKey, priceNumber, iteam }) => {
  const [price, setPrice] = useState(0);
  const [realPriceAmount, setRealPriceAmount] = useState(0);

  console.log("itema", iteam);
  console.log("priceNumber", priceNumber);
  console.log("chosenBookKey", chosenBookKey);

  useEffect(() => {
    totalAmount();
  }, [iteam]);

  useEffect(() => {
    setRealPriceAmount(
      priceNumber ?? 1 * chosenProducPrice[0]?.price?.cost ?? 0
    );
  }, [priceNumber]);

  console.log("price", price);

  const totalAmount = () => {
    const price = iteam
      .filter((x) => !!x)
      .map((x) => x.price.cost)
      .filter((x) => !!x)
      .reduce((e, acc) => e + acc, 0);
    console.log("PRICEE", price);
    console.log(
      "PRICEE2",
      iteam.filter((x) => !!x).map((x) => x.price.cost)
    );
    setPrice(price);
  };

  console.log("item", iteam);

  console.log("item", chosenBookKey, priceNumber);

  let chosenProducPrice = iteam.filter((prdct) => prdct.id === chosenBookKey);

  console.log("testttt", chosenProducPrice[0]?.price?.cost ?? 0);

  return (
    <div className="sub_item">
      <h3>
        Subtotal ({iteam && iteam.length} items):
        <strong style={{ fontWeight: "700", color: "#111" }}> {price} $</strong>
      </h3>
    </div>
  );
};

export default Subtotal;
