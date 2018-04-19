import {reducer} from './reducer';
import { generateAuralUpdate, restartGame, makeGuess} from './actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: 11
};

describe('reducer for generateAuralUpdate', () =>{

    it('Should generate aural update', () => {
        const state = reducer(initialState, generateAuralUpdate());

        expect(state.auralStatus).toContain("Here's the status of the game");
    });
});

describe('reducer for makeGuess', () => {
    it('Should provide feedback upon guess', () => {
        const state = reducer(initialState, makeGuess(10));

        expect(state.feedback).toEqual("You're Hot!");
        expect(state.guesses).toEqual([10]);
    });
    it('Should provide feedback on invalid guess', () => {
        const state = reducer(initialState, makeGuess('H'));

        expect(state.feedback).toEqual("Please enter a valid number.")
    });
});

describe('reducer for restartGame', () => {
    it('Should reset the state', () => {
        const gameState = {
            guesses: [2, 4, 6],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 11
        };
        const state = reducer(gameState, restartGame(20));

        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 20
        });
    });
});
