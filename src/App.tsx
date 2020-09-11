import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [creditCard, setCreditCard] = useState<number>();
  const [creditCardExpiryDate, setCreditCardExpiryDate] = useState<string>("");
  const fetchCreditCard = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value
      .replace(/[^\d]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    setCreditCard(event.target.value);
  };

  const fetchExpiryDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    //const {value} = event.target;
    event.target.value = event.target.value
      .replace(/^(\d\d)(\d)$/g, "$1/$2")
      .replace(/^(\d\d\/\d\d)(\d+)$/g, "$1/$2");
  };
  return (
    <div className="App">
      <input
        type="tel"
        placeholder="1111 1111 1111 1111"
        onChange={fetchCreditCard}
        value={creditCard}
        maxlength={19}
      />

      <input
        type="text"
        placeholder="MM/YY"
        onChange={fetchExpiryDate}
        maxLength={5}
      />
      <button>Submit</button>
    </div>
  );
}
