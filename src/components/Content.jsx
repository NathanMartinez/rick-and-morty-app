import React, { useContext } from "react";
import {
  TestCharacterContext,
  LoadingContext,
} from "../context/TestCharacterContext";
import CharacterCard from "./CharacterCard";

export default function Content() {
  const loading = useContext(LoadingContext);
  const {
    data: {
      characters: { results },
    },
  } = useContext(TestCharacterContext);
  return (
    <div className="Content">
      {loading
        ? "Loading"
        : results.map((char) => <CharacterCard key={char.id} data={char} />)}
    </div>
  );
}
