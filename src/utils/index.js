export const shapes = ["rock", "paper", "scissors"];
// Meaning: 0 = tie, -1 = loss, 1 = win
export const roundOutcome = {
  rock: { rock: 0, paper: -1, scissors: 1 },
  paper: { rock: 1, paper: 0, scissors: -1 },
  scissors: { rock: -1, paper: 1, scissors: 0 },
};
