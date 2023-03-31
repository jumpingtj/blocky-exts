class Pythag {

    constructor() {}

    getInfo() {
        return {
            id: 'pythag',
            name: 'Pythagorean',

            blocks: [{
                opcode: 'pythag',

                blockType: Scratch.BlockType.REPORTER,

                text: 'hyp of tri with a [A] and b [B]',
                arguments: {
                    A: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 3
                    },
                    B: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 4
                    }
                }
            }]
        }
    }
    pythag(args) {
        return Math.sqrt(args.A ** 2 + args.B ** 2)
    }
}