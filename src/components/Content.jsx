import React, { useContext } from "react";
import { TestCharacterContext } from "../context/TestCharacterContext";
import CharacterCard from "./CharacterCard";

export default function Content() {
  const {
    data: {
      characters: { results },
    },
  } = useContext(TestCharacterContext);
  return (
    <div className="Content">
      {results.map(({ id, name, image }) => (
        <CharacterCard key={id} name={name} image={image} />
      ))}
    </div>
  );
}
