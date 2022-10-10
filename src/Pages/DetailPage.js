import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const {userId} = useParams();
  return (
    <div>
      <h2>
        Details about Users {userId}
      </h2>
    </div>
  );
};

export default DetailPage;
