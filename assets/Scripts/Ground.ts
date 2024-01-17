import {
    _decorator,
    Canvas,
    Component,
    director,
    Node,
    UITransform,
    Vec3,
} from "cc";
const { ccclass, property } = _decorator;
import { GameCtrl } from "./GameCtrl";

@ccclass("Ground")
export class Ground extends Component {
    @property({ type: Node, tooltip: "Ground 1 is here" })
    public ground1: Node;

    @property({ type: Node, tooltip: "Ground 2 is here" })
    public ground2: Node;

    @property({ type: Node, tooltip: "Ground 3 is here" })
    public ground3: Node;
    @property({ type: Node, tooltip: "Ground 4 is here" })
    public ground4: Node;

    public groundWidth: number;

    public tempStartLocation1 = new Vec3();
    public tempStartLocation2 = new Vec3();
    public tempStartLocation3 = new Vec3();
    public tempStartLocation4 = new Vec3();

    public gameCtrlSpeed = new GameCtrl();
    public gameSpeed: number;

    onLoad() {
        this.startUp();
    }

    startUp() {
        this.gameSpeed = this.gameCtrlSpeed.speed;

        this.groundWidth = this.ground1.getComponent(UITransform).width;

        this.tempStartLocation1.x = 0;
        this.tempStartLocation2.x = this.groundWidth;
        this.tempStartLocation3.x = this.groundWidth * 2;
        this.tempStartLocation4.x = this.groundWidth * 3;

        this.ground1.setPosition(this.tempStartLocation1);
        this.ground2.setPosition(this.tempStartLocation2);
        this.ground3.setPosition(this.tempStartLocation3);
        this.ground4.setPosition(this.tempStartLocation4);
    }

    update(deltaTime: number) {
        this.tempStartLocation1 = this.ground1.position;
        this.tempStartLocation2 = this.ground2.position;
        this.tempStartLocation3 = this.ground3.position;
        this.tempStartLocation4 = this.ground4.position;

        this.tempStartLocation1.x -= this.gameSpeed * deltaTime;
        this.tempStartLocation2.x -= this.gameSpeed * deltaTime;
        this.tempStartLocation3.x -= this.gameSpeed * deltaTime;
        this.tempStartLocation4.x -= this.gameSpeed * deltaTime;

        const endOfGround =
            findHighestNumber([
                this.tempStartLocation1.x,
                this.tempStartLocation2.x,
                this.tempStartLocation3.x,
                this.tempStartLocation4.x,
            ]) + this.groundWidth;

        if (this.tempStartLocation1.x <= -this.groundWidth) {
            this.tempStartLocation1.x = endOfGround;
        }
        if (this.tempStartLocation2.x <= -this.groundWidth) {
            this.tempStartLocation2.x = endOfGround;
        }
        if (this.tempStartLocation3.x <= -this.groundWidth) {
            this.tempStartLocation3.x = endOfGround;
        }
        if (this.tempStartLocation4.x <= -this.groundWidth) {
            this.tempStartLocation4.x = endOfGround;
        }
        this.ground1.setPosition(this.tempStartLocation1);
        this.ground2.setPosition(this.tempStartLocation2);
        this.ground3.setPosition(this.tempStartLocation3);
        this.ground4.setPosition(this.tempStartLocation4);
    }
}

function findHighestNumber(arr) {
    if (!arr.length) {
        return null; // Return null for an empty array
    }

    let maxNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }

    return maxNumber;
}
