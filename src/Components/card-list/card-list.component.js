import React from "react";
import "../../Styles/card-list.style.css";
import { Card } from "../card/card.component";

export const CardList = ({ preachers }) => {
  
  return (
    <div className="card_list">
      {preachers.map((preacher) => (
        <Card key={preacher.id} preacher={preacher} />
      ))}
    </div>
  );
};
