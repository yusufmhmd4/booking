import "./index.css";
import { MdOutlineEventSeat } from "react-icons/md";

const SeatingInfoComponents = () => (
  <div className="seating-info-container">
    <div className="seat-legend">
      <MdOutlineEventSeat className="seatInfo booked" />
      <span>Booked</span>
    </div>
    <div className="seat-legend">
      <MdOutlineEventSeat className="seatInfo available" />
      <span>Available</span>
    </div>
    <div className="seat-legend">
      <MdOutlineEventSeat className="seatInfo selected" />
      <span>Selected</span>
    </div>
  </div>
);

export default SeatingInfoComponents;
