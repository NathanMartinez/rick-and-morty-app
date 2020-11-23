import React from "react";
import { MdExpandMore } from "react-icons/md";

export default function CharacterCard({
  data: { image, name, status, species, gender, origin, location },
}) {
  return (
    <div className="CharacterCard">
      <img src={image} alt="" />
      <div className="detail-section">
        <div className="name-status">
          <span className={status}></span>
          <h1 className={gender}>{name}</h1>
        </div>
        <div className="additional-info">
          <p>Species: {species}</p>
          <p>Origin: {origin.name}</p>
          <p>Last Known Location: {location.name}</p>
        </div>
        <MdExpandMore className="more-icon" />
      </div>
    </div>
  );
}
