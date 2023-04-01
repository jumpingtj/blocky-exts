// var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');

class Movement {
    constructor(runtime) {
        this.runtime = runtime;
        this.automove = false;
    }
    getInfo() {
        return {
            "id": "Movement",
            "name": "Self-move",
            "blocks": [{
                "opcode": "movbool",
                "blockType": "boolean",
                "text": "Auto-move on?",
                "arguments": {}
            }, {
                "opcode": "movset",
                "blockType": "command",
                "text": "Set Auto-move to [B]",
                "arguments": {
                    "B": {
                        "type": "boolean",
                        "defaultValue": "true"
                    }
                }
            }]
        }
    }
    movbool() {
        return this.automove;
    }
    movset(b) {
        this.automove = b;
    }
}

Scratch.extensions.register(new Movement());