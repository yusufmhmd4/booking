import React from "react";
import SeatItem from "../SeatItem";
import "./index.css";

const SeatingLayout = (props) => {
  const { bookingSeatsList, bookingList, onClickBookingSeat } = props;
  return (
    <>
      {["Premium", "Standard"].map((type) => (
        <React.Fragment key={type}>
          <h4 className="seat-type-heading">{type}</h4>
          <ul className="seats-container">
            {bookingSeatsList.map((seat) => {
              if (seat.type === type) {
                return (
                  <SeatItem
                    seat={seat}
                    key={seat.id}
                    onClickBookingSeat={onClickBookingSeat}
                    bookingList={bookingList}
                  />
                );
              }
              return null;
            })}
          </ul>
        </React.Fragment>
      ))}
    </>
  );
};

export default SeatingLayout;
