import PropTypes from "prop-types";
import styles from "./Section1.module.css";
import TypeWriterText from "./TypeWriterText";
import usdcUSDT from './usdcUSDT.png';
import security from './security.png';
import onramp from './onramp.png';

const Section1 = ({ className = "" }) => {
  return (
    <section className={[styles.section1, className].join(" ")}>
      <div className={styles.pairsContentParent}>
        <div className={styles.pairsContent}>
          <img
            className={[styles.logoIcon, "animatedJiggle"].join(" ")}
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
          <div className={styles.pairsDescriptionContainer}>
            <h1 className={styles.usdtUsdcPairs}>
              <TypeWriterText text="USDT-USDC Pairs" isLoop={false}></TypeWriterText>
              </h1>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
        <div className={styles.securityIconContainerParent}>
          <img
            className={[styles.securityIconContainer,"animatedJiggle"].join(" ")}
            loading="lazy"
            alt=""
            src="/frame-1000003009.svg"
          />
          <div className={styles.securityTitleContainer}>
            <h1 className={styles.security}>
              <TypeWriterText text="Security" isLoop={false}></TypeWriterText>
            </h1>
          </div>
          <div className={styles.securityDescriptionContainer}>
            <div className={styles.loremIpsumDolor1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.onrampContentParent}>
        <div className={styles.onrampContent}>
          <img
            className={[styles.onrampSpacerIcon, "animatedJiggle"].join(" ")}
            alt=""
            src={onramp}
          />
          <img
            className={[styles.tetherUsdtLogo1Icon, "animatedJiggle"].join(" ")}
            alt=""
            src={usdcUSDT}
          />
          <img
            className={[styles.usdCoinUsdcLogo1Icon, "animatedJiggle"].join(" ")}
            loading="lazy"
            alt=""
            src={security}
          />
        </div>
        <div className={styles.onrampDescriptionContainer}>
          <h1 className={styles.easyOnramp}>
            <TypeWriterText text="Easy onramp" isLoop={false}></TypeWriterText>
          </h1>
          <div className={styles.loremIpsumDolor2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </section>
  );
};

Section1.propTypes = {
  className: PropTypes.string,
};

export default Section1;
