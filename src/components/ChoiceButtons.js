import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const ChoiceButtons = ({ onPlayerChoose }) => {
  return (
    <ButtonGroup>
      <Button
        variant="outline-dark"
        className="mx-1"
        onClick={() => onPlayerChoose("rock")}
      >
        Play 👊
      </Button>
      <Button
        variant="outline-dark"
        className="mx-1"
        onClick={() => onPlayerChoose("paper")}
      >
        Play 🤚
      </Button>
      <Button
        variant="outline-dark"
        className="mx-1"
        onClick={() => onPlayerChoose("scissors")}
      >
        Play ✌
      </Button>
    </ButtonGroup>
  );
};

export default ChoiceButtons;
