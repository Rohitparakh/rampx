// import React, { useState, useEffect } from 'react';
// import Typewriter from "typewriter-effect";

// const TypeWriterText = ({ text, delay = 2000, isLoop = true }) => {
// console.log(delay)
//   return (
//     <Typewriter 
//     options={{
//         autoStart: true,
//         loop: isLoop,
//       }}

//         onInit={(typewriter) => {
//             typewriter
//                 .typeString(text)
//                 .pauseFor(delay)
//                 .start();
//         }}
//     /> 
//   );
// };

// export default TypeWriterText;

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const TypeWriterText = ({ text, isLoop = false, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      setStartTyping(true);
    }
  }, [inView]);

  useEffect(() => {
    if (startTyping) {
      let index = -1;
      const timer = setInterval(() => {
        setDisplayedText((prevText) => {
          if (index < text.length+1) {
            return prevText + text.charAt(index);
          } else {
            clearInterval(timer);
            setStartTyping(false);
            if (isLoop) {
              setTimeout(() => {
                setDisplayedText(''); // Reset displayedText for loop
                index = -1;
                startTypingFunction(); // Start typing again for loop
              }, delay); // Adjust delay before looping
            }
            return prevText;
          }
        });
        index += 1;
      }, 100);

      const startTypingFunction = () => {
        setStartTyping(true);
      };

      return () => clearInterval(timer);
    }
  }, [startTyping, text, isLoop]);

  return (
    <div ref={ref} style={{ minHeight: '50px' }}>
      {displayedText}
    </div>
  );
};

export default TypeWriterText;
