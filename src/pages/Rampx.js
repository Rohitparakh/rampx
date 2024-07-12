import FrameComponent from "../components/FrameComponent";
import Section1 from "../components/Section1";
import CopyTradeContainer from "../components/CopyTradeContainer";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import Footer from "../components/Footer";
import styles from "./Rampx.module.css";
import HeroSection from "../components/HeroSection";
import TypeWriterText from "../components/TypeWriterText";

const Rampx = () => {
  return (
    <div className={styles.rampx}>
      <HeroSection/>
      {/* <FrameComponent /> */}
      <section className={styles.rampxInner}>
        <div className={styles.frameChild} />
      </section>
      <Section1 />
      <section className={styles.section2Parent}>
        <div className={styles.section2}>
          <div className={styles.priceFeedContainer}>
            <h1 className={styles.realTimePrice}>
              <TypeWriterText text="Real time Price Feed" isLoop={false}></TypeWriterText></h1>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
          <CopyTradeContainer />
        </div>
        <Section />
      </section>
      <section className={[styles.backerIconsParent, "animatedJiggle"].join(" ")}>
        <div className={[styles.backerIcons, "animatedJiggle"].join(" ")} />
        <div className={[styles.backerIcons1, "animatedJiggle"].join(" ")} />
        <div className={[styles.backerIcons2, "animatedJiggle"].join(" ")} />
        <div className={[styles.backerIcons3, "animatedJiggle"].join(" ")} />
        <div className={[styles.backerIcons4, "animatedJiggle"].join(" ")} />
        <div className={[styles.backerIcons5, "animatedJiggle"].join(" ")} />
      </section>
      <div className={styles.backersDescriptionContainer}>
        <div className={styles.backersDescriptionInner}>
          <h1 className={styles.backedByTop}>
            <TypeWriterText text="Backed by Top Dawgs" isLoop={false}></TypeWriterText>
            </h1>
          <div className={styles.loremIpsumDolor1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
      <Section2 />
      <Footer />
    </div>
  );
};

export default Rampx;
