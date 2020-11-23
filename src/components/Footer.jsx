import React, { useContext } from "react";
import {
  TestCharacterContext,
  PageNumberContext,
} from "../context/TestCharacterContext";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function Footer() {
  const getPage = useContext(PageNumberContext);
  const {
    data: {
      characters: {
        info: { pages, next, prev },
      },
    },
  } = useContext(TestCharacterContext);
  return (
    <footer className="Footer">
      <FaArrowCircleLeft
        size="2rem"
        className="page-button"
        onClick={() => {
          if (prev) {
            getPage(prev);
          }
        }}
      />
      <div className="page-info">
        <p>
          {next > 1 ? next - 1 : 1}/{+pages}
        </p>
      </div>
      <FaArrowCircleRight
        size="2rem"
        className="page-button"
        onClick={() => {
          if (next) {
            getPage(next);
          }
        }}
      />
    </footer>
  );
}
