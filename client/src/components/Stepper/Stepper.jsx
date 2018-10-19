import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from "@material-ui/core/Grid";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Cell phones – Miami, United States",
    imgPath:
      "http://www.mgwirelessonline.com/uploads/7/1/3/4/7134168/6681975_orig.jpg"
  },
  {
    label: "Laptops - Pompano, United States",
    imgPath: "http://interconnection.org/newsite/img/laptop-repair.jpg"
  },
  {
    label: "Bicycle - Hialeah, United States",
    imgPath:
      "https://www.knoxmercury.com/wp-content/uploads/2017/01/COVER_0112_DreamBikes1-793x529.jpg"
  },
  {
    label: "Plumber - Pembroke Pines, United States",
    imgPath:
      "https://www.fix-itrite.com/wp-content/uploads/2017/02/plumbing.jpg"
  },
  {
    label: "Painter - Sunrise, United States",
    imgPath: "http://www.ipagepro.com/monsoonpaintingllc/logos/HousePainter.jpg"
  }
];

const styles = theme => ({
  root: {
    maxWidth: 1300,
    flexGrow: 1,
    marginTop: 60,
    marginBottom: 60
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 600,
    overflow: "hidden",
    width: "100%"
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 2fr)",
    gridGap: `${theme.spacing.unit * 6}px`
  }
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={1}>
            <Paper className={classes.paper} />
          </Grid>
          <Grid item xs={5}>
            <Paper square elevation={0} className={classes.header}>
              <Paper className={classes.paper} />
              <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={this.handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              className={classes.mobileStepper}
              nextButton={
                <Button
                  size="small"
                  onClick={this.handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={this.handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} />
            <Typography component="h4" variant="h4" gutterBottom>
              "Getting the job done has never been easier and simple"
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);
