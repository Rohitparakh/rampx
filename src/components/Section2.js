import React, { useState } from 'react';
import PropTypes from "prop-types";
import styles from "./Section2.module.css";
import plusImg from "./frame-1.svg";
import minusImg from "./minus.png";
import TypeWriterText from './TypeWriterText';
const Section2 = ({ className = "" }) => {

  const faqData = [
    { question: 'Can i trade with my lunch money?', answer: 'Answer 1' },
    { question: 'Why am i getting liquidated at 100x leverage?', answer: 'Answer 2' },
    { question: 'Is it possible for me trade with my SOL shitcoins that i bought?', answer: "Hell Nah bruh, you will need real USDT/USDC tokens here. Get a job at MacDonald’s and flip some burgers." },
    { question: 'Why i am not able to make money?', answer: 'Answer 4' },
    { question: 'Just another random filler question here to test what faq will look like with extra words.', answer: 'Answer 5' }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className={[styles.section4, className].join(" ")}>
      <h1 className={styles.frequentlyAskedQuestions}>
        <span className={styles.frequentlyAskedQuestionsTxtContainer}>
          {/* <p className={styles.frequentlyAsked}>{`Frequently Asked `}</p> */}
          <p className={styles.questions}>
            Frequently Asked Questions
            </p>
        </span>
      </h1>
      <div className={styles.fAQContainer}>
        <div className={styles.questionsContainer}>
        <div>
      {faqData.map((faq, index) => (
        <div key={index}>
          <div 
            onClick={() => handleToggle(index)} 
            style={{
              cursor: 'pointer', 
              // background: '#f1f1f1', 
              fontSize:'24px',
              padding: '10px', 
              marginBottom: '5px',
              color: `${openIndex === index ? '#fff':'#555'}`,
              display: 'flex',
              alignItems:'center',
              justifyContent:'space-between',
              width: '100%'
            }}
          >
           <span> {faq.question}</span>

            <img
              className={styles.answersIcon}
              loading="lazy"
              alt=""
              src={index === openIndex?minusImg:plusImg}
            />
          </div>
         
          {openIndex === index && (
            <div style={{ padding: '10px', 
            fontSize: '16px',
            color: '#555'
             }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
      </div>
          {/* <div className={styles.questions1}>
            <h3 className={styles.canITrade}>
              Can i trade with my lunch money?
            </h3>
            <img
              className={styles.answersIcon}
              loading="lazy"
              alt=""
              src="/frame-1.svg"
            />
          </div> */}
          {/* <div className={styles.questions2}>
            <h3 className={styles.whyAmI}>
              Why am i getting liquidated at 100x leverage?
            </h3>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame-1.svg"
            />
          </div> */}
          {/* <div className={styles.tradingQuestion}>
            <div className={styles.solanaTrading}>
              <h3 className={styles.isItPossible}>
                Is it possible for me trade with my SOL shitcoins that i bought?
              </h3>
              <div className={styles.hellNahBruhContainer}>
                <p className={styles.hellNahBruh}>
                  Hell Nah bruh, you will need real USDT/USDC tokens here.
                </p>
                <p className={styles.getAJob}>
                  Get a job at MacDonald’s and flip some burgers.
                </p>
              </div>
            </div>
            <img
              className={styles.emptyAnswerIcon}
              loading="lazy"
              alt=""
              src="/frame-3.svg"
            />
          </div> */}
          {/* <div className={styles.questions3}>
            <h3 className={styles.whyIAm}>Why i am not able to make money?</h3>
            <img
              className={styles.frameIcon1}
              loading="lazy"
              alt=""
              src="/frame-1.svg"
            />
          </div> */}
          {/* <div className={styles.questions4}>
            <h3 className={styles.justAnotherRandom}>
              Just another random filler question here to test what faq will
              look like with extra words.
            </h3>
            <img
              className={styles.frameIcon2}
              loading="lazy"
              alt=""
              src="/frame-1.svg"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

Section2.propTypes = {
  className: PropTypes.string,
};

export default Section2;
