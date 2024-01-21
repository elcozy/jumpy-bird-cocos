import {
    _decorator,
    Animation,
    CCFloat,
    PolygonCollider2D,
    Component,
    RigidBody2D,
    tween,
    Vec3,
    Tween,
    easing,
    Node,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("Bird")
export class Bird extends Component {
    @property({
        type: CCFloat,
        tooltip: "how high does he fly?",
    })
    public jumpHeight: number = 3.5;

    @property({
        type: CCFloat,
        tooltip: "how long does he fly?",
    })
    public jumpDuration: number = 0.3;

    //Animation property of the bird
    public birdAnimation: Animation;

    //Temporary location of the bird
    public birdLocation: Vec3;

    //hit detection call
    public hitSomething: boolean;

    private startedFlying: boolean = false;
    public pulseHeight: number = 3.5;
    pulseDuration: number = 0.75;

    onLoad() {
        //Restart the bird
        this.resetBird();
        this.getComponent(RigidBody2D).awakeOnLoad = true;
        this.getComponent(PolygonCollider2D).sensor = true;
        this.getComponent(RigidBody2D).enabled = false;
        //Get the initial animation information
        this.birdAnimation = this.getComponent(Animation);
        this.startPreFlightAnimation();
    }

    //reset the bird's location and hit detection
    resetBird() {
        //create original bird location
        this.birdLocation = new Vec3(0, 0, 0);

        //place bird in location
        this.node.setPosition(this.birdLocation);

        //reset hit detection
        this.hitSomething = false;
    }
    preTween: Tween<any>;

    private startPreFlightAnimation() {
        if (this.startedFlying) return;
        console.log("startPulseAnimation");
        this.pulseHeight = 20;
        this.pulseDuration = 0.4;
        this.preTween = tween(this.node.position)
            .to(
                this.pulseDuration,
                new Vec3(
                    this.node.position.x,
                    this.node.position.y + this.pulseHeight,
                    0
                ),
                {
                    easing: "smooth",
                    onUpdate: (target: Vec3, ratio: number) => {
                        this.node.position = target;
                    },
                }
            )
            .call(() => {
                tween(this.node.position)
                    .to(
                        this.pulseDuration,
                        new Vec3(
                            this.node.position.x,
                            this.node.position.y - this.pulseHeight,
                            0
                        ),
                        {
                            easing: "quadInOut",
                            onUpdate: (target: Vec3, ratio: number) => {
                                this.node.position = target;
                            },
                        }
                    )
                    .call(() => {
                        console.log("preFlightAnimationq22");
                        this.startPreFlightAnimation(); // Repeat the pre-flight animation
                    })
                    .start();
            })
            .start();
    }

    private stopPreFlightAnimation() {
        console.log("stopPreFlightAnimation");
        this.preTween.stop();
    }

    //have the bird fly up in the air
    fly() {
        if (!this.startedFlying) {
            this.getComponent(RigidBody2D).enabled = true;

            this.startedFlying = true;
            this.birdAnimation.play();

            // Stop the pre-flight animation
            this.stopPreFlightAnimation();
            // Reset the bird to its initial position
            this.node.position = new Vec3(0, 0, 0);
        }

        //stop the bird animation immediately
        // this.birdAnimation.stop();
        console.log("jump", this.node.position.y, this.jumpHeight);
        //start the movement of the bird
        tween(this.node.position)
            .to(
                this.jumpDuration,
                new Vec3(
                    this.node.position.x,
                    this.node.position.y + this.jumpHeight,
                    0
                ),
                {
                    easing: "smooth",
                    onUpdate: (target: Vec3, ratio: number) => {
                        this.node.position = target;
                    },
                }
            )
            .start();

        //play the bird animation
        // this.birdAnimation.play();
    }
}
