import React from "react";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissors from "../images/scissors.png";

const flipRule = {
  left: { rock: true, paper: false, scissors: false, unknown: true },
  right: { rock: false, paper: true, scissors: true, unknown: false },
};

const ChoiceCard = ({ title, winner, shape, side }) => {
  const played =
    shape === "scissors" ? scissors : shape === "paper" ? paper : rock;
  return (
    <div
      className={`d-flex flex-column align-items-center choice-card 
                  ${winner === 1 && "border-success"} 
                  ${winner === -1 && "border-danger"}
                `}
    >
      <h2 className="text-center">{title}</h2>
      <img
        src={played}
        alt="Rock Paper Scissors"
        className={flipRule[side][shape] ? "flip" : ""}
      />
      {winner === 1 && <h2 className="text-success font-weight-bold">Won</h2>}
      {winner === -1 && <h2 className="text-danger font-weight-bold">Lost</h2>}
      {winner === 0 && <h2 className="font-weight-bold">Tie</h2>}
    </div>
  );
};

export default ChoiceCard;
