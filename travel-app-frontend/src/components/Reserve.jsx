import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Reserve = ({ setOpen, hotelId }) => {
  const { data, loading, error } = useFetch(`/api/hotels/room/${hotelId}`);
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon="fa-solid fa-circle-xmark"
          className="close"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        console.log(data)
        {data.map((item) => {
          <div className="rIten">
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max People: <b>{item.maxPeople}</b>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Reserve;
