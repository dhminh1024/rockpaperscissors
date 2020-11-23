import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import ChoiceButtons from "./components/ChoiceButtons";
import ChoiceCard from "./components/ChoiceCard";
import PublicNavbar from "./components/PublicNavbar";
import { shapes, roundOutcome } from "./utils";

const App = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [playerWin, setPlayerWin] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerChoice, setComputerChoice] = useState("");
  const [computerWin, setComputerWin] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const onPlayerChoose = (player) => {
    const computer = shapes[Math.floor(Math.random() * 3)];
    const result = roundOutcome[player][computer];
    setPlayerChoice(player);
    setComputerChoice(computer);
    setPlayerWin(result);
    setComputerWin(-result);
    if (result === 1) setPlayerScore((currentScore) => currentScore + 1);
    if (result === -1) setComputerScore((currentScore) => currentScore + 1);
  };

  return (
    <>
      <PublicNavbar />
      <Container>
        <h1 className="text-center mt-5">Rock Paper Scissors</h1>
        <Row className="justify-content-center align-items-start">
          <Col
            md={4}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <ChoiceCard title="You" winner={playerWin} shape={playerChoice} />
            <ChoiceButtons onPlayerChoose={onPlayerChoose} />
          </Col>
          <Col md={2} className="align-self-center">
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
          </Col>
          <Col md={4} className="d-flex flex-column justify-content-center">
            <ChoiceCard
              title="Computer"
              winner={computerWin}
              shape={computerChoice}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
