import React from "react";
import "./index.css";

const ProceedButton = (props) => {
  const { bookingList, tickets, onClickProceedButton } = props;

  const bookTickets = async () => {
    const object = {
      bookingList
    };

    if (bookingList.length === tickets) {
      onClickProceedButton(
        `You have successfully booked ${tickets} seats. Please refresh this page`
      );

      const url = `https://booking-seats-production.up.railway.app/seats/booking/`;
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
      };

      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result)
    } else {
      onClickProceedButton(
        `Please select ${tickets - bookingList.length} seats`
      );
    }
  };

  return (
    <button type="button" className="proceed-button" onClick={bookTickets}>
      Proceed
    </button>
  );
};

export default ProceedButton;
