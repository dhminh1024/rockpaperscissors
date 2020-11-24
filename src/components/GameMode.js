import React from "react";
import { Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const GameMode = ({ gameMode, onGameModeChoose, restartGame }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Button onClick={restartGame}>Restart</Button>
      <hr />
      <h2>Game mode</h2>
      <ToggleButtonGroup
        type="radio"
        name="gameMode"
        value={gameMode}
        onChange={onGameModeChoose}
      >
        <ToggleButton value="onePlayer" variant="outline-danger">
          One Player
        </ToggleButton>
        <ToggleButton value="twoPlayer" variant="outline-danger">
          Two Player
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default GameMode;
