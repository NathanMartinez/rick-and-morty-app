import React, { useContext } from "react";
import {
  TestCharacterContext,
  PageNumberContext,
} from "../context/TestCharacterContext";

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
      <div
        className="page-button"
        onClick={(e) => {
          if (prev) {
            getPage(prev);
          }
        }}
      >{`<`}</div>
      <div className="page-info">
        <p>
          {next - 1}/{+pages}
        </p>
        <small>Page</small>
      </div>
      <div
        className="page-button"
        onClick={(e) => {
          if (next) {
            getPage(next);
          }
        }}
      >{`>`}</div>
    </footer>
  );
}
