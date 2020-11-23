import React from "react";

export default function CharacterCard({ image, name }) {
  return (
    <div className="CharacterCard">
      <img src={image} alt="" />
      <div className="detail-section">
        <h1>{name}</h1>
      </div>
    </div>
  );
}
