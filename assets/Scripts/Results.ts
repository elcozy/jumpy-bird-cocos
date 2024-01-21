import { _decorator, Component, Label, Node, sys } from "cc";
import { TextLabel } from "./TextLabel";
const { ccclass, property } = _decorator;

@ccclass("Results")
export class Results extends Component {
    @property({
        type: TextLabel,
        tooltip: "Current Score",
    })
    public scoreLabel: TextLabel;

    @property({
        type: TextLabel,
        tooltip: "High Score",
    })
    public highScore: TextLabel;

    @property({
        type: TextLabel,
        tooltip: "Try Again?",
    })
    public resultEnd: TextLabel;

    //variables needed for the scores
    maxScore: number = 0; //saved high score
    currentScore: number; // current score while playing

    //change current score to new score or back to zero then display the new score
    updateScore(num: number) {
        //update the score to the new number on the screen
        this.currentScore = num;

        //display new score
        this.scoreLabel.updateText(`${this.currentScore}`);
    }

    //resets the score back to 0 and hides game over information
    resetScore() {
        //reset score to 0
        this.updateScore(0);

        //hide high score and try again request
        this.hideResult();

        //reset current score label
        this.scoreLabel.updateText(`${this.currentScore}`);
    }

    //add a point to the score
    setScore(newScore: number) {
        //add a point to the score
        this.updateScore(newScore);
    }
    addScore() {
        //add a point to the score
        this.updateScore(this.currentScore + 1);
    }

    //show the score results when the game ends.
    showResult() {
        //check if it's the high score
        this.maxScore = Math.max(this.maxScore, this.currentScore);
        this.saveHighScore();
        //activate high score label
        this.highScore.updateText(`High Score is: ${this.maxScore}`);
        this.highScore.activateNode();

        //activate try again label
        this.resultEnd.activateNode();
    }

    //hide results and request for a new game when the new game starts
    hideResult() {
        //hide the high score and try again label.
        this.highScore.deactivateNode();
        this.resultEnd.deactivateNode();
    }

    getHighScore(): number {
        // Get the current high score
        let storedHighScore = sys.localStorage.getItem("highScore");
        console.log("storedHighScore", storedHighScore);
        if (storedHighScore !== null) {
            storedHighScore = parseInt(storedHighScore);
        } else {
            storedHighScore = 0;
        }
        return storedHighScore;
    }

    setHighScore(newHighScore: number) {
        // Save the new high score to local storage
        sys.localStorage.setItem("highScore", newHighScore.toString());
    }

    saveHighScore() {
        this.setHighScore(Math.max(this.maxScore, this.currentScore));
    }
    loadHighScore() {
        this.maxScore = this.getHighScore();
        console.log("    this.maxScore", this.maxScore);
    }
}
