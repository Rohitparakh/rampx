import PropTypes from "prop-types";
import styles from "./Section.module.css";
import TypeWriterText from "./TypeWriterText";

const Section = ({ className = "" }) => {
  return (
    <div className={[styles.section3, className].join(" ")}>
      <img className={styles.gridIcon} alt="" src="/grid-1.svg" />
      <div className={styles.copyTradeParent}>
        <h1 className={styles.copyTrade}>
          <TypeWriterText text= "Copy Trade" isLoop={false}></TypeWriterText></h1>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className={styles.chartContainer}>
      <img
              className={styles.chartElementThree}
              loading="lazy"
              alt=""
              src="/frame-1618873059.svg"
            />
        <div className={styles.chartInnerContainer}>
          <div className={[styles.chartElementOne, "animatedJiggle"].join(" ")} />
          <div className={[styles.chartElementTwo, "animatedJiggle"].join(" ")} />
          <div className={[styles.chartElementThreeContainer, "animatedJiggle"].join(" ")}>
         
          </div>
          <div className={[styles.chartElementFour, "animatedJiggle"].join(" ")} />
          <div className={[styles.chartElementFive, "animatedJiggle"].join(" ")} />
        </div>
        <div className={[styles.chartElementsContainer, "animatedJiggle"].join(" ")}>
          <div className={[styles.chartInnerElementsContainer, "animatedJiggle"].join(" ")}>
            <div className={[styles.chartSubElementOne, "animatedJiggle"].join(" ")} />
            <div className={[styles.chartSubElementTwo, "animatedJiggle"].join(" ")} />
            <div className={[styles.chartSubElementThree, "animatedJiggle"].join(" ")} />
            <div className={[styles.chartSubElementFour, "animatedJiggle"].join(" ")} />
          </div>
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
