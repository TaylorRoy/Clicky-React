import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img onClick={() => props.shuffleFriends(props.id)} className="treeImage" alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;
