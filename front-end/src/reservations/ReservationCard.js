import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function ReservationCard({ reservation }) {
  const URL = process.env.REACT_APP_API_BASE_URL;
  const history = useHistory();

  const handleCancelClick = async (event) => {
    event.preventDefault();
    const message = `Do you want to cancel this reservation? This cannot be undone.`;

    if (window.confirm(message)) {
      try {
        await axios.put(
          `${URL}/reservations/${reservation.reservation_id}/status`,
          { data: { status: "cancelled" } }
        );
        history.go(0);
      } catch (error) {
        return error;
      }
    }
  };

  function handleClick () {
    console.log(`/reservations/${reservation.reservation_id}/edit`)
    history.push(`/reservations/${reservation.reservation_id}/edit`)
  }

  return (
    <tr>
      <td>{reservation.first_name}</td>
      <td>{reservation.last_name}</td>
      <td>{reservation.mobile_number}</td>
      <td>{reservation.reservation_time}</td>
      <td>{reservation.people}</td>
      <td data-reservation-id-status={reservation.reservation_id}>
        {reservation.status}
      </td>
      <td>
        {reservation.status === "booked" && (
          <a href={`/reservations/${reservation.reservation_id}/seat`}>
            <button className="btn btn-success">Seat</button>
          </a>
        )}
      </td>
      <td>
        {reservation.status === "booked" && (
          
            <button type="button" onClick={handleClick} className="btn btn-secondary">Edit</button>
        )}
      </td>
      <td>
        {reservation.status === "booked" && (
          <button
            className="btn btn-danger"
            data-reservation-id-cancel={reservation.reservation_id}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        )}
      </td>
    </tr>
  );
}