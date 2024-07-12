import PropTypes from "prop-types";
import styles from "./CopyTradeContainer.module.css";

const   CopyTradeContainer = ({ className = "" }) => {
  return (
    <div className={[styles.copyTradeContainer, className].join(" ")}>
      <div className={[styles.bTCContainer, "animatedJiggle"].join(" ")}>
        <h1 className={styles.btc}>BTC</h1>
        <div className={styles.bTCContainerInner}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/vector-50.svg"
          />
        </div>
        <div className={styles.bTCEmptyContainer}>
          <div className={styles.div}>$548.63</div>
        </div>
      </div>
      <div className={styles.copyTradeDescriptionContain}>
        <img className={styles.gridIcon} alt="" src="/grid.svg" />
        <div className={styles.vectorParent}>
          {/* <img className={styles.frameItem} alt="" src="/vector-51.svg" /> */}
          <img className={styles.frameInner} alt="" src="/vector-52.svg" />
        </div>
        <img
          className={[styles.copyTradeDescriptionContainChild, "animatedJiggle"].join(" ")}
          alt=""
          src="/frame-1618873054@2x.png"
        />
        <img
          className={[styles.copyTradeDescriptionContainItem, "animatedJiggle"].join(" ")}
          alt=""
          src="/frame-1618873055@2x.png"
        />
        <img
          className={[styles.copyTradeDescriptionContainInner, "animatedJiggle"].join(" ")}
          alt=""
          src="/frame-1618873057@2x.png"
        />
        <img
          className={[styles.frameIcon, "animatedJiggle"].join(" ")}
          alt=""
          src="/frame-1618873058@2x.png"
        />
      </div>
    </div>
  );
};

CopyTradeContainer.propTypes = {
  className: PropTypes.string,
};

export default CopyTradeContainer;
