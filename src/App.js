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

  return (
    <div className="techno-wrapper">
      {props.technologies.map((techs, index) => (
        <div key={index}>
          <div
            className="techno"
            style={{ backgroundColor: `#${Math.round(Math.random() * 10000)}` }}
          >
            {techs}
          </div>
        </div>
      ))}
    </div>
  );
};

const Card = () => {
  const technologies = [
    "HTML + CSS 👍🏽",
    "Javascript 👍🏽",
    "Web Design 👍🏽",
    "Git and Github 👍🏽",
    "React 👍🏽",
    "Node 👍🏽",
  ];

  return (
    <div className="card">
      <img
        src="https://avatars.githubusercontent.com/u/59555731?s=400&u=874ee771b540434bcc5ec33e85eff66c2abf71ad&v=4"
        alt="brain picture"
      />

      <div className="card-text">
        <h2>Jonas Schmedtmann</h2>
        <p>
          Full-stack developer at Skilly Hub. When not coding i like to listen
          to music, do meditation, cook (and eat), or just explore the world of
          reading books.
        </p>

        <Techno technologies={technologies} />
      </div>
    </div>
  );
};
