function pickRandomlyFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = {
  events: {
    onPlayerDidInteract: (self, event, world) => {
      if (self === event.target) {
        const options = [
          "Randomly chosen option A",
          "Randomly chosen option B",
        ];
        const randomText = pickRandomlyFromArray(options);

        world.showNotification(randomText);
      }
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 5332,
      spriteSheet: "TwilioQuestTileset",
      layers: [],
    },
  },
};
