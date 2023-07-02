import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

const Techno = (props) => {
  console.log("techs:", props.technologies);
  return props.technologies.map((techs, index) => {
    return <div key={index}>{techs}</div>;
  });
};

const Card = () => {
  const technologies = [
    "HTML + CSS",
    "Javascript",
    "Web Design",
    "Git and Github",
    "React"
  ];

  return (
    <div>
      <img
        src="https://avatars.githubusercontent.com/u/59555731?s=400&u=874ee771b540434bcc5ec33e85eff66c2abf71ad&v=4"
        alt=""
      />
      <h2>Jonas Schmedtmann</h2>
      <p>
        Full-stack developer at Skilly Hub. When not coding i like to listen to
        music, do meditation, cook (and eat), or just explore the world of
        reading books.
      </p>

      <Techno technologies={technologies} />
    </div>
  );
};
