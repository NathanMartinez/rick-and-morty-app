import React, { useState, createContext } from "react";
import { queryFetch } from "../utility";

import json from "../test_data/index.json";

export const TestCharacterContext = createContext();
export const PageNumberContext = createContext();
export const LoadingContext = createContext();

export default function TestCharacterProvider({ children }) {
  // eslint-disable-next-line
  const [data, setData] = useState(json);
  const [loading, setLoading] = useState(false);

  const getPage = (pageNum) => {
    setLoading(true);
    const query = `query {
      characters(page: ${pageNum}) {
        info {
          pages
          next
          prev
        }
        results {
          id
          image
          name
          status
          species
          gender
          origin {
            id
            name
            dimension
          }
          location {
            id
            name
            dimension
          }
        }
      }
    }
    `;
    queryFetch(query).then((json) => setData(json));
    setLoading(false);
  };

  return (
    <LoadingContext.Provider value={loading}>
      <TestCharacterContext.Provider value={data}>
        <PageNumberContext.Provider value={getPage}>
          {children}
        </PageNumberContext.Provider>
      </TestCharacterContext.Provider>
    </LoadingContext.Provider>
  );
}
