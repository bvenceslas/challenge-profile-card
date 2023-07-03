import "./styles.css";

const skillData = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#5544C0",
  },
  {
    skill: "Git and Github",
    level: "advanced",
    color: "#D123AF",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#34DFAF",
  },
  {
    skill: "Node",
    level: "advanced",
    color: "#129CAF",
  },
];

export default function App() {
  return (
    <div className="App">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

const Avatar = () => {
  return (
    <img
      src="https://avatars.githubusercontent.com/u/59555731?s=400&u=874ee771b540434bcc5ec33e85eff66c2abf71ad&v=4"
      alt="profile avatar"
    />
  );
};

const Intro = () => {
  return (
    <div className="intro">
      <h2>Josh Venceslas</h2>
      <p>
        Full-stack developer at Skilly Hub. When not coding i like to listen to
        music, do meditation, cook (and eat), or just explore the world of
        reading books.
      </p>
    </div>
  );
};

const Skill = ({ data }) => {
  // const testedLevel =
  //   data.level === "advanced"
  //     ? "💪🏽"
  //     : data.level === "intermediate"
  //     ? "👍🏽"
  //     : "🫣";

  return (
    <div className="skill" style={{ backgroundColor: data.color }}>
      {/* <span>{`${data.skill} ${testedLevel}`}</span>  */}
      <span>{data.skill} </span>
      <span>{data.level === "advanced" && "💪🏽"}</span>
      <span>{data.level === "intermediate" && "👍🏽"}</span>
      <span>{data.level === "beginner" && "🫣"}</span>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      {skillData.map((data) => (
        <Skill data={data} />
      ))}
    </div>
  );
};
