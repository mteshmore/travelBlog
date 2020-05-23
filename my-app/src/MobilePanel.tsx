import * as React from "react";

// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface Props {
    data: any;
}

class MobilePanel extends React.Component<Props> {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  render() {
    const content = this.props.data;

    const length = content.length;

    return (
      <div>
        {/* <AutoPlaySwipeableViews
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        > */}
        <div>{content[this.state.activeStep]}</div>
        {/* </AutoPlaySwipeableViews> */}
        <MobileStepper
          variant="dots"
          steps={length}
          position="static"
          activeStep={this.state.activeStep}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={this.state.activeStep === length - 1}
            >
              Next
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={this.state.activeStep === 0}
            >
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

export default MobilePanel;
