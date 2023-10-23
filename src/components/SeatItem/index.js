import "./index.css";
import { MdOutlineEventSeat } from "react-icons/md";

const SeatItem = (props) => {
  const { seat, onClickBookingSeat, bookingList } = props;
  const { id, status } = seat;

  const onClickSeat = () => {
    onClickBookingSeat(id);
  };


  const activeClassName = `seat ${
    bookingList.includes(id) ? "selected" : status
  }`;

  return (
    <li>
      <button type="button" className="button" onClick={onClickSeat}>
        <MdOutlineEventSeat className={activeClassName} />
      </button>
    </li>
  );
};

export default SeatItem;
