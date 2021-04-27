function onObjectiveCompleted(self, event, world) {
  if (event.objective === self.objectiveName) {
    self.setState({
      isCompleting: true,
    });
  }
}

function initialize(self, event, world) {
  self.setState({
    isCompleted: world.isObjectiveCompleted(self.objectiveName),
  });
}

function createObjectiveCompletionResponderConfig(props = {}) {
  const {
    renderObjectiveCompleted = () => {},
    renderObjectiveNotCompleted = () => {},
  } = props;

  return {
    animations: {
      objectiveCompleted: {},
      objectiveCompleting: {},
      objectiveNotCompleted: {},
    },
    spriteSheets: {},
    properties: {
      sprite: {
        useGidAsDefaultFrameIndex: true,
        layers: [],
      },
    },
    events: {
      onLevelDidLoad: initialize,
      onMapDidLoad: initialize,
      onObjectiveCompleted,
      onObjectiveCompletedAgain: onObjectiveCompleted,
    },
    state: {
      isCompleting: false,
      isCompleted: false,
    },
    render: function (self, world) {
      if (self.state.isCompleting) {
        self.playAnimation("objectiveCompleting").then(() => {
          self.setState({ isCompleting: false, isCompleted: true });
        });
      } else if (self.state.isCompleted) {
        self.playAnimation("objectiveCompleted", true);
        renderObjectiveCompleted(self, world);
      } else {
        self.playAnimation("objectiveNotCompleted", true);
        renderObjectiveNotCompleted(self, world);
      }
    },
  };
}

module.exports = createObjectiveCompletionResponderConfig;
