import React from "react";

const Scores = ({ playerScore, computerScore }) => {
  return (
    <h2 className="text-center">
      <span
        className={
          `${playerScore > computerScore && "text-success"} ` +
          `${playerScore < computerScore && "text-danger"} `
        }
      >
        {playerScore}
      </span>{" "}
      -{" "}
      <span
        className={
          `${playerScore < computerScore && "text-success"} ` +
          `${playerScore > computerScore && "text-danger"} `
        }
      >
        {computerScore}
      </span>
    </h2>
  );
};

export default Scores;
