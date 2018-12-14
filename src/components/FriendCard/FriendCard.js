import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span>
    <button data-id={props.id} onClick={() => props.shuffleFriends()} className="shuffle">
      click for random
    </button>
    <button data-id={props.id} onClick={() => props.keepScore(props.id)} className="score">
      Score
    </button>
  </div>
);

export default FriendCard;
