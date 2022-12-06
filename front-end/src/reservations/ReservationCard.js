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
        history.push("/");
      } catch (error) {
        return error;
      }
    }
  };

  function handleEditClick () {
    console.log(`/reservations/${reservation.reservation_id}/edit`)
    history.push(`/reservations/${reservation.reservation_id}/edit`)
  }

  function handleSeatClick () {
    console.log(`/reservations/${reservation.reservation_id}/seat`)
    history.push(`/reservations/${reservation.reservation_id}/seat`)
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
            <button type="button" class="btn btn-success" onClick={handleSeatClick} className="btn btn-secondary">Seat</button>
        )}
      </td>
      <td>
        {reservation.status === "booked" && (
            <button type="button" onClick={handleEditClick} className="btn btn-secondary">Edit</button>
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