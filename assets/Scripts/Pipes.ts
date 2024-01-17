import {
    _decorator,
    Component,
    Node,
    Vec3,
    screen,
    find,
    UITransform,
} from "cc";
const { ccclass, property } = _decorator;

const random = (min, max) => {
    return Math.random() * (max - min) + min;
};

@ccclass("Pipes")
export class Pipes extends Component {
    @property({
        type: Node,
        tooltip: "Top Pipe",
    })
    public topPipe: Node;

    @property({
        type: Node,
        tooltip: "Bottom Pipe",
    })
    public bottomPipe: Node;

    public tempStartLocation: Vec3 = new Vec3(0, 0, 0);

    public scene = screen.windowSize;

    public game;
    public pipeSpeed: number;
    public tempSpeed: number;
    public pipeWidth: number;

    private bottomPipeY: number;

    hasPassedBird: boolean;

    onLoad() {
        this.game = find("GameCtrl").getComponent("GameCtrl");

        this.pipeSpeed = this.game.pipeSpeed;
        this.initPos();

        this.hasPassedBird = false;
    }

    initPos() {
        this.tempStartLocation.x = this.scene.width;
        this.pipeWidth = this.bottomPipe.getComponent(UITransform).width;

        let pipeGap = random(300, 380);
        let topHeight = random(20, 400);

        this.tempStartLocation.y = topHeight;
        this.bottomPipeY = topHeight - pipeGap;

        this.topPipe.setPosition(this.tempStartLocation.x, topHeight);
        this.bottomPipe.setPosition(
            this.tempStartLocation.x,
            topHeight - pipeGap
        );
    }

    //move the pipes as we update the game
    update(deltaTime: number) {
        this.tempSpeed = this.pipeSpeed * deltaTime;

        this.tempStartLocation = this.topPipe.position;
        this.tempStartLocation.x -= this.tempSpeed;

        this.bottomPipe.setPosition(this.tempStartLocation.x, this.bottomPipeY);
        this.topPipe.setPosition(this.tempStartLocation);

        if (
            this.topPipe.position.x <= this.scene.width / 2 &&
            !this.hasPassedBird
        ) {
            this.hasPassedBird = true;
            this.game.passPipe();
        }

        if (this.topPipe.position.x <= -this.pipeWidth * 2.2) {
            this.game.createPipe();
            this.destroy();
        }
    }
}
