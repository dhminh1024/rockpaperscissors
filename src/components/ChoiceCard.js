import React from "react";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";

const ChoiceCard = ({ title, winner, shape }) => {
  const played = shape === "rock" ? rock : shape === "paper" ? paper : scissors;
  return (
    <div
      className={`d-flex flex-column align-items-center choice-card 
                  ${winner === 1 && "border-success"} 
                  ${winner === -1 && "border-danger"}
                `}
    >
      <h2 className="text-center">{title}</h2>
      <img src={played} alt="Rock Paper Scissors" className="" />
      {winner === 1 && <h2 className="text-success font-weight-bold">Won</h2>}
      {winner === -1 && <h2 className="text-danger font-weight-bold">Lost</h2>}
      {winner === 0 && <h2 className="font-weight-bold">Tie</h2>}
    </div>
  );
};

export default ChoiceCard;
