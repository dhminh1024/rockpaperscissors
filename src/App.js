import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import ChoiceButtons from "./components/ChoiceButtons";
import ChoiceCard from "./components/ChoiceCard";
import PublicNavbar from "./components/PublicNavbar";
import {
  shapes,
  roundOutcome,
  initialProps,
  useLocalStorageState,
} from "./utils";
import Scores from "./components/Scores";
import GameMode from "./components/GameMode";

const App = () => {
  const [playerLeftProps, setPlayerLeftProps] = useLocalStorageState(
    "playerLeft",
    initialProps
  );
  const [playerRightProps, setPlayerRightProps] = useLocalStorageState(
    "playerRight",
    initialProps
  );
  const [gameMode, setGameMode] = useLocalStorageState("gameMode", "");

  const getRoundOutcome = (playerLeftChoice, playerRightChoice) => {
    const result = roundOutcome[playerLeftChoice][playerRightChoice];
    setPlayerLeftProps({
      ...playerLeftProps,
      choice: playerLeftChoice,
      win: result,
      score: result === 1 ? playerLeftProps.score + 1 : playerLeftProps.score,
    });
    setPlayerRightProps({
      ...playerRightProps,
      choice: playerRightChoice,
      win: -result,
      score:
        result === -1 ? playerRightProps.score + 1 : playerRightProps.score,
    });
  };

  const onPlayerLeftChoose = (playerLeftChoice) => {
    const playerRightChoice = shapes[Math.floor(Math.random() * 3)];
    getRoundOutcome(playerLeftChoice, playerRightChoice);
  };

  const randomPlay = () => {
    const playerLeftChoice = shapes[Math.floor(Math.random() * 3)];
    const playerRightChoice = shapes[Math.floor(Math.random() * 3)];
    getRoundOutcome(playerLeftChoice, playerRightChoice);
  };

  const onGameModeChoose = (mode) => {
    if (mode === "onePlayer") {
      setPlayerLeftProps({
        ...playerLeftProps,
        title: "You",
      });
      setPlayerRightProps({
        ...playerRightProps,
        title: "Computer",
      });
    } else if (mode === "twoPlayer") {
      setPlayerLeftProps({
        ...playerLeftProps,
        title: "Player 1",
      });
      setPlayerRightProps({
        ...playerRightProps,
        title: "Player 2",
      });
    }
    setGameMode(mode);
  };

  const restartGame = () => {
    setPlayerLeftProps(initialProps);
    setPlayerRightProps(initialProps);
    setGameMode("");
  };

  return (
    <>
      <PublicNavbar />
      <Container>
        <h1 className="text-center mt-5">Rock Paper Scissors</h1>
        <Row>
          <Col>
            <GameMode
              gameMode={gameMode}
              onGameModeChoose={onGameModeChoose}
              restartGame={restartGame}
            />
          </Col>
        </Row>
        <Row className="justify-content-center align-items-start">
          <Col
            md={4}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <ChoiceCard
              title={playerLeftProps.title}
              winner={playerLeftProps.win}
              shape={playerLeftProps.choice}
              side="left"
            />
          </Col>
          <Col md={2} className="align-self-center">
            <Scores
              playerScore={playerLeftProps.score}
              computerScore={playerRightProps.score}
            />
          </Col>
          <Col md={4} className="d-flex flex-column justify-content-center">
            <ChoiceCard
              title={playerRightProps.title}
              winner={playerRightProps.win}
              shape={playerRightProps.choice}
              side="right"
            />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            {gameMode === "twoPlayer" && (
              <Button variant="primary" size="lg" onClick={randomPlay}>
                Random Play
              </Button>
            )}
            {gameMode === "onePlayer" && (
              <ChoiceButtons onPlayerChoose={onPlayerLeftChoose} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
