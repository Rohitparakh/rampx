import Typewriter from "typewriter-effect";

const TypeWriterText = ({ text, delay = 2000, isLoop = true }) => {

  return (
    <Typewriter 
    options={{
        autoStart: true,
        loop: isLoop,
      }}

        onInit={(typewriter) => {
            typewriter
                .typeString(text)
                .pauseFor(delay)
                .start();
        }}
    /> 
  );
};

export default TypeWriterText;
