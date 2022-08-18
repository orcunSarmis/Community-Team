import { useQuery } from "@apollo/client";
import React from "react";

import { QUERY_COMMUNITIES } from "../utils/queries";

const Communities = () => {
  const { loading, data } = useQuery(QUERY_COMMUNITIES);
  
  if (loading) {
    return <>Loading...</>;
  }

  console.log(data);
  const communities = data.communities || [];

  return (
    <div>
      <h2>Communities</h2>
      {communities.map((el) => {
        return (
          <div>
            <p>{el.name}</p>
            <p>{el.location}</p>
            <button>Add</button>
          </div>
        );
      })}
    </div>
  );

};

export default Communities;
