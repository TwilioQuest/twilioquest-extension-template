module.exports = {
  animations: {},
  spriteSheets: {},
  events: {
    onPlayerDidInteract: (self, event, world) => {
      if (self === event.target) {
        // use this to target our single viewpoint
        world.forEachEntities("viewpoint", async (viewpoint) => {
          world.disablePlayerMovement();

          await world.tweenCameraToPosition({
            x: viewpoint.startX,
            y: viewpoint.startY,
          });
          await world.wait(3000);
          await world.tweenCameraToPlayer();

          world.enablePlayerMovement();
        });
      }
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 6930,
      spriteSheet: "TwilioQuestTileset",
      layers: [],
    },
  },
};
