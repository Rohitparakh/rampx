import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.heroWrapper, className].join(" ")}>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroInnerContainer}>
            <div className={styles.heroInnerContainerChild} />
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </div>
          <div className={styles.frameParent}>
            <header className={styles.frameGroup}>
              <nav className={styles.frameWrapper}>
                <nav className={styles.frameContainer}>
                  <div className={styles.productsWrapper}>
                    <a className={styles.products}>Products</a>
                  </div>
                  <div className={styles.blogContainer}>
                    <a className={styles.vault}>Vault</a>
                  </div>
                  <div className={styles.blogContainer1}>
                    <a className={styles.blog}>Blog</a>
                  </div>
                </nav>
              </nav>
              <Button
                className={styles.frameChild}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "16",
                  background: "#d0f603",
                  border: "rgba(255, 255, 255, 0.12) solid 1px",
                  borderRadius: "6px",
                  "&:hover": { background: "#d0f603" },
                  width: 151,
                  height: 40,
                }}
              >
                Launch App
              </Button>
            </header>
            <div className={styles.socialIconsParent}>
              <div className={styles.socialIcons} />
              <div className={styles.socialIcons1} />
              <div className={styles.socialIcons2} />
              <div className={styles.socialIcons3} />
              <div className={styles.socialIcons4} />
              <div className={styles.socialIcons5} />
              <div className={styles.socialIcons6} />
              <div className={styles.socialIcons7} />
              <div className={styles.socialIcons8} />
              <div className={styles.socialIcons9} />
              <div className={styles.socialIcons10} />
              <div className={styles.frameItem} />
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group.svg"
              />
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="/frame-48095475.svg"
              />
              <img
                className={styles.rectangleIcon}
                loading="lazy"
                alt=""
                src="/rectangle-34624211@2x.png"
              />
              <img
                className={styles.primetwitterIcon}
                loading="lazy"
                alt=""
                src="/primetwitter@2x.png"
              />
              <img
                className={styles.logosdiscordIcon}
                loading="lazy"
                alt=""
                src="/logosdiscordicon.svg"
              />
              <img
                className={styles.farcaster1Icon}
                loading="lazy"
                alt=""
                src="/farcaster-1.svg"
              />
              <img
                className={styles.socialIcons11}
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.tradePerpetualsSeamlesslyParent}>
                <h1 className={styles.tradePerpetualsSeamlessly}>
                  Trade Perpetuals, Seamlessly
                </h1>
                <div className={styles.tradingDescriptionContainer}>
                  <div className={styles.thePremierNonCustodial}>
                    The premier non-custodial DEX for trading perpetual
                    contracts on Sei. Our decentralized platform provides deep
                    liquidity pools and robust trading features
                  </div>
                  <div className={styles.tradingButtonsContainer}>
                    <Button
                      className={styles.tradingButtonsContainerChild}
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#000",
                        fontSize: "16",
                        background: "#d0f603",
                        borderRadius: "8px",
                        "&:hover": { background: "#d0f603" },
                        width: 132,
                        height: 47,
                      }}
                    >
                      Start Trading
                    </Button>
                    <div className={styles.backedByButton}>
                      <div className={styles.backedBy}>{`Backed by `}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
