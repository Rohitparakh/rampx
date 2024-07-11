import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ className = "" }) => {
  return (
    <div className={[styles.section3, className].join(" ")}>
      <img className={styles.gridIcon} alt="" src="/grid-1.svg" />
      <div className={styles.copyTradeParent}>
        <h1 className={styles.copyTrade}>Copy Trade</h1>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.chartInnerContainer}>
          <div className={styles.chartElementOne} />
          <div className={styles.chartElementTwo} />
          <div className={styles.chartElementThreeContainer}>
            <img
              className={styles.chartElementThree}
              loading="lazy"
              alt=""
              src="/frame-1618873059.svg"
            />
          </div>
          <div className={styles.chartElementFour} />
          <div className={styles.chartElementFive} />
        </div>
        <div className={styles.chartElementsContainer}>
          <div className={styles.chartInnerElementsContainer}>
            <div className={styles.chartSubElementOne} />
            <div className={styles.chartSubElementTwo} />
            <div className={styles.chartSubElementThree} />
            <div className={styles.chartSubElementFour} />
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
