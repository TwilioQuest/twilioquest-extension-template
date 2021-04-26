const createObjectiveCompletionResponderConfig = require("../../scripts/objectiveCompletionResponder");

module.exports = {
  ...createObjectiveCompletionResponderConfig(),
  animations: {
    objectiveNotCompleted: {
      frames: [0],
      frameRate: 1,
    },
    objectiveCompleted: {
      frames: [0, 1],
      frameRate: 2,
    },
    objectiveCompleting: {
      frames: [0, 1],
      frameRate: 2,
    },
  },
  spriteSheets: {
    lightsGreen: {
      fileName: "lights-green.png",
      frameDimensions: {
        width: 24,
        height: 24,
      },
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "lightsGreen",
      layers: [],
    },
  },
};
