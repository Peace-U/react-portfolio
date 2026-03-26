import { useState, useEffect } from "react";

function Hero() {
  const roles = ["UX Designer", "Frontend Developer", "React Developer"];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typing = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setText(roles[roleIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1500);
      }
    }, 100);

    return () => clearTimeout(typing);
  }, [charIndex, roleIndex]);

  return (
    <section>
      <h1>Hello, I'm Peace</h1>
      <h2>a {text}</h2>
    </section>
  );
}

export default Hero;