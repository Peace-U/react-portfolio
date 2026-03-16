import { useState, useEffect } from "react";

function Hero() {

  const words = ["React Developer", "Frontend Engineer", "UI Designer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {

    const typing = setTimeout(() => {

      if (charIndex < words[wordIndex].length) {
        setText(words[wordIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setWordIndex((wordIndex + 1) % words.length);
        }, 1500);
      }

    }, 100);

    return () => clearTimeout(typing);

  }, [charIndex, wordIndex]);

  return (
    <section>
      <h1>Hello, I'm a {text}</h1>
    </section>
  );
}

export default Hero;