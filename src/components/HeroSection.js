import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./HeroSection.module.css";
import logo from './logo.png';
import discordLogo from './discord.png';
import twitterLogo from './twitter.png';
import farcasterLogo from './farcaster.png';
import backedByLogo from './backedBy.png';
import TypeWriterText from "./TypeWriterText";

const HeroSection = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  
  return (
    <section style={{background:"/Frame_1.png"}} className={[styles.heroWrapper, className,"bg"].join(" ")}>
      <header className={styles.header}>
        <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} id="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`} id="mobile-menu">
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Vault</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <div className={styles.mobileSocialIcons}>
            <a href="#"><img src={twitterLogo} className={styles.twitterIcon} alt="Twitter"/></a>
            <a href="#"><img src={discordLogo} className={styles.discordIcon} alt="Discord"/></a>
            <a href="#"><img src={farcasterLogo} className={styles.farcasterIcon} alt="Farcaster"/></a>
          </div>
        </div>

        <img src={logo} height="45" width="130" alt="Logo" className={styles.logo}/>

        <nav className={styles.nav}>
          <div>
            <a>Products</a>
          </div>
          <div>
            <a>Vault</a>
          </div>
          <div>
            <a>Blog</a>
          </div>
        </nav>

        <div className={styles.navRightContainer}>
          <div className={styles.socialIconHolder}>
            <img className={styles.twitterIcon} src={twitterLogo} alt="Twitter"/>
            <img className={styles.discordIcon} src={discordLogo} alt="Discord"/>
            <img className={styles.farcasterIcon} src={farcasterLogo} alt="Farcaster"/>
          </div>
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
        </div>
      </header>

      <div>
        <h1 className={styles.heroHeading}>
        <TypeWriterText text="Trade Perpetuals," isLoop={true} />          
        <TypeWriterText text="Seamlessly" delay={2700} isLoop={true}/>          
        </h1>

        <div className={styles.heroParagraph}>
          The premier non-custodial DEX for trading perpetual contracts on Sei. Our decentralized platform provides deep liquidity pools and robust trading features.
        </div>

        <Button
          className={styles.heroButton}
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

        <div className={styles.backedByBadge}>
          <div className={[styles.backedBy , "animatedJiggle"].join(" ")}>
            <span>Backed By</span>
            <img c src={backedByLogo} height="64" width="64" alt="Backed By"/>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  className: PropTypes.string,
};

export default HeroSection;
