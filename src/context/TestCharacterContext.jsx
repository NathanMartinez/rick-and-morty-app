import React, { useState, createContext } from "react";
import { queryFetch } from "../utility";

import json from "../test_data/index.json";

export const TestCharacterContext = createContext();
export const PageNumberContext = createContext();

export default function TestCharacterProvider({ children }) {
  // eslint-disable-next-line
  const [data, setData] = useState(json);

  const getPage = (pageNum) => {
    const query = `query {
      characters(page: ${pageNum}) {
        info {
          pages
          next
          prev
        }
        results {
          id
          name
          image
        }
      }
    }
    `;
    queryFetch(query).then((json) => setData(json));
  };

  return (
    <TestCharacterContext.Provider value={data}>
      <PageNumberContext.Provider value={getPage}>
        {children}
      </PageNumberContext.Provider>
    </TestCharacterContext.Provider>
  );
}
