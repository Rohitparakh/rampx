import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerTop}>
        <img
          className={styles.groupIcon}
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
        <div className={styles.emptyFooterTop}>
          <img
            className={styles.emptyFooterTopItem}
            loading="lazy"
            alt=""
            src="/frame-48095475-1.svg"
          />
        </div>
      </div>
      <div className={styles.footerColumns}>
        <div className={styles.footerColumnOne}>
          <div className={styles.productsColumn}>
            <div className={styles.productLinks}>
              <div className={styles.productItems}>
                <div className={styles.products}>Products</div>
                <div className={styles.productLinksList}>
                  <div className={styles.perpDex}>Perp Dex</div>
                  <div className={styles.aggregator}>Aggregator</div>
                  <div className={styles.vault}>Vault</div>
                </div>
              </div>
            </div>
            <div className={styles.socialColumn}>
              <div className={styles.socials}>Socials</div>
              <div className={styles.socialsList}>
                <div className={styles.twitter}>Twitter</div>
                <div className={styles.warpcast}>Warpcast</div>
                <div className={styles.hey}>Hey</div>
              </div>
            </div>
          </div>
          <div className={styles.productsColumn}>
            <div className={styles.productLinks}>
              <div className={styles.productItems}>
                <div className={styles.products}>Resources</div>
                <div className={styles.productLinksList}>
                  <div className={styles.perpDex}>Help Center</div>
                  <div className={styles.aggregator}>Raise a Ticket</div>
                  <div className={styles.vault}>Blog</div>
                  <div className={styles.vault}>Media Kit</div>
                </div>
              </div>
            </div>
            <div className={styles.socialColumn}>
              <div className={styles.socials}>Analytics</div>
              <div className={styles.socialsList}>
                <div className={styles.twitter}>Coingecko</div>
                <div className={styles.warpcast}>Coinmarket</div>
                <div className={styles.warpcast}>Dune</div>
                <div className={styles.hey}>Nansen</div>
              </div>
            </div>
          </div>
          {/* <div className={styles.resourcesColumn}>
            <div className={styles.resourcesLinks}>
              <div className={styles.resources}>Resources</div>
              <div className={styles.analytics}>Analytics</div>
            </div>
            <div className={styles.analyticsColumn}>
              <div className={styles.helpCenterLinks}>
                <div className={styles.helpCenterItems}>
                  <div className={styles.helpCentre}>Help Centre</div>
                  <div className={styles.raiseATicket}>Raise a Ticket</div>
                  <div className={styles.blog}>Blog</div>
                  <div className={styles.mediaKit}>Media Kit</div>
                </div>
              </div>
              <div className={styles.dataProviders}>
                <div className={styles.coingecko}>Coingecko</div>
                <div className={styles.coinmarket}>Coinmarket</div>
                <div className={styles.dune}>Dune</div>
                <div className={styles.nansen}>Nansen</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
