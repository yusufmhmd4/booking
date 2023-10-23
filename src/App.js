import React, { useState, useEffect } from "react";
import InputContainer from "./components/InputContainer";
import SeatingLayout from "./components/SeatingLayout";
import ProceedButton from "./components/ProceedButton";
import ErrorModal from "./components/ErrorModal";
import SeatingInfoComponents from "./components/SeatingInfoComponent";
import "./App.css";

function App() {
  const [ticketType, setTicketType] = useState("Standard");
  const [tickets, setTickets] = useState(1);
  const [bookingSeatsList, setBookingSeatsList] = useState([]);
  const [bookingList, setBookingList] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getSeatsData();
  }, []);

  const getSeatsData = async () => {
    try {
      const url = `https://booking-seats-production.up.railway.app/seats/`;
      const response = await fetch(url);
      const updatedData = await response.json();
      setBookingSeatsList(updatedData);
    } catch (error) {
      console.error("Error fetching seat data", error);
    }
  };

  const closeModel = () => {
    setIsModal(false);
    setErrorMsg("");
  };

  const onChangeTicketType = (type) => {
    setTicketType(type);
  };

  const onChangeTicketQuantity = (quantity) => {
    setTickets(quantity);
  };

  const onClickBookingSeat = (id) => {
    const findSeat = bookingSeatsList.find((e) => e.id === id);

    if (findSeat.status === "booked") {
      setIsModal(true);
      setErrorMsg("This seat is already booked! Please select other seats.");
    } else if (findSeat.type !== ticketType) {
      setIsModal(true);
      setErrorMsg("Please select Premium seats or choose Standard option");
    } else {
      if (bookingList.includes(id)) {
        setBookingList((prevState) => prevState.filter((e) => e !== id));
      } else {
        if (bookingList.length < tickets) {
          if (bookingList.indexOf(id) === -1) {
            setBookingList((prevState) => [...prevState, id]);
          } else {
            setBookingList((prevState) => prevState.filter((e) => e !== id));
          }
        } else {
          setIsModal(true);
          setErrorMsg("Please change the number of tickets");
        }
      }
    }
  };

  const onClickProceedButton = (value) => {
    setIsModal(true);
    setErrorMsg(value);
  };

  const activeModal = isModal ? "app-container active-modal" : "app-container";

  return (
    <div className={activeModal}>
      <SeatingInfoComponents />
      <div className=" booking-container">
        <InputContainer
          ticketType={ticketType}
          tickets={tickets}
          onChangeTicketQuantity={onChangeTicketQuantity}
          onChangeTicketType={onChangeTicketType}
        />

        <SeatingLayout
          bookingSeatsList={bookingSeatsList}
          bookingList={bookingList}
          onClickBookingSeat={onClickBookingSeat}
        />

        <ProceedButton
          bookingList={bookingList}
          onClickProceedButton={onClickProceedButton}
          tickets={tickets}
        />
      </div>
      {isModal && <ErrorModal errorMsg={errorMsg} closeModel={closeModel} />}
    </div>
  );
}

export default App;
