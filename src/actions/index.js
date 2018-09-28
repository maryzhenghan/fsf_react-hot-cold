export const START_NEWGAME = 'START_NEWGAME';
export const startNewGame = (correctAnswer) => ({
  type: START_NEWGAME,
  correctAnswer
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
  type: MAKE_GUESS,
  guess
})

export const UPDATE_AURALSTATUS = 'UPDATE_AURALSTATUS';
export const updateAuralStatus = () => ({
  type: UPDATE_AURALSTATUS
});

// const action = startNewGame();
// const action = makeGuess(guess);
