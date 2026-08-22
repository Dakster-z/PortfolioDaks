import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Specialiste integration IA",
          "Developpeur full-stack",
          "Expert automatisation business",
          "Developpeur OpenAI API",
          "Createur d'applications web intelligentes",
          "Concepteur de solutions IA",
          "Innovateur digital moderne",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
