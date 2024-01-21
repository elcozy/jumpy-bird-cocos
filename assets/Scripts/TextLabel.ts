import {
    _decorator,
    Color,
    Component,
    Node,
    Label,
    CCString,
    CCFloat,
    Font,
    LabelShadow,
    LabelOutline,
} from "cc";

const { ccclass, property } = _decorator;

@ccclass("TextLabel")
export class TextLabel extends Component {
    @property({
        type: CCString,
        multiline: true,
        tooltip: "The text to display",
    })
    public text: string = "FlappyBird !";

    @property({
        type: CCFloat,
        tooltip: "The font size",
    })
    public fontSize: number = 24;
    @property({
        type: Font,
        tooltip: "The font type",
    })
    public fontFamily: Font = null;

    // @property({
    //     type: Color,
    //     tooltip: "The font color",
    // })
    public fontColor: Color = Color.WHITE;

    // @property({
    //     type: Color,
    //     tooltip: "The outline color",
    // })
    private outlineColor: Color = Color.BLACK;

    public label: Label | null = null;

    onLoad() {
        this.createLabel();
    }

    start() {
        // Set default values if not provided
        // this.text = this.text || "Hello, World!";
        // // this.fontSize = this.fontSize || 24;
        // // this.fontColor = this.fontColor || Color.WHITE;
        // // Call a function to set up the label when the component starts
        // this.createLabel();
        // console.log("this.text", this.text);
    }

    private labelOutline: LabelOutline | null = null;
    private labelShadow: LabelShadow | null = null;
    createLabel() {
        console.log("this.text", this.text);

        // Ensure we have a valid node to attach the label to
        if (!this.node) {
            console.error(
                "Node not found. Make sure the component is attached to a node."
            );
            return;
        }

        // Create a label node
        const labelNode = new Node();
        this.label = labelNode.addComponent(Label);

        // Set properties based on the component's properties
        if (this.label) {
            this.label.string = this.text;
            this.label.fontSize = this.fontSize;
            this.label.lineHeight = this.fontSize;
            this.label.color = this.fontColor;

            if (this.fontFamily) this.label.font = this.fontFamily;

            // Create and add LabelShadow component
            this.labelShadow = labelNode.addComponent(LabelShadow);
            if (this.labelShadow) {
                this.labelShadow.color = this.outlineColor;
                this.labelShadow.offset.y = -1.2;
            } else {
                console.error("LabelShadow component not found on labelNode.");
            }
            // Create and add LabelOutline component
            this.labelOutline = labelNode.addComponent(LabelOutline);
            if (this.labelOutline) {
                this.labelOutline.color = this.outlineColor;
                this.labelOutline.width = 2;
            } else {
                console.error("LabelOutline component not found on labelNode.");
            }
            // Get the content size of the label
            // const labelSize = this.label.c;

            // Set the width and height of the node based on label size and font size
            // this.node.width = labelSize.width + this.fontSize; // Adjust as needed
            // this.node.height = labelSize.height + this.fontSize; // Adjust as needed
            // this.label.
            // this.label.fontSize = this.fontSize;
            // this.label.color = this.fontColor;

            // Add the label node to the component's node
            this.node.addChild(labelNode);
            console.log("this.text shows", this.text);
        }
        // } else {
        //     console.error("Label component not found on labelNode.");
    }
    // }
    updateText(content: number | string) {
        if (this.label) {
            this.label.string = content.toString();
        }
    }
    // Method to activate the node
    activateNode() {
        if (this.node) {
            this.node.active = true;
        }
    }

    // Method to deactivate the node
    deactivateNode() {
        if (this.node) {
            this.node.active = false;
        }
    }
}
