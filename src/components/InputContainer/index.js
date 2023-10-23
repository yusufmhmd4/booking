import React from "react";
import "./index.css";

const InputContainer = (props) => {
  const {
    ticketType,
    tickets,
    onChangeTicketQuantity,
    onChangeTicketType
  } = props;

  return (
    <div className="input-container">
      <select
        value={ticketType}
        onChange={(e) => onChangeTicketType(e.target.value)}
      >
        <option value="Premium">Premium</option>
        <option value="Standard">Standard</option>
      </select>
      <input
        type="number"
        name="quantity"
        min="1"
        max="10"
        step="1"
        value={tickets}
        onChange={(e) => onChangeTicketQuantity(e.target.value)}
      />
    </div>
  );
};

export default InputContainer;
