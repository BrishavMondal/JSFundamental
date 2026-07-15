import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";

function App() {
  const [count, setCount] = useState<number>(0);

  const [name, setName] = useState<string>("");

  const [student, setStudent] = useState({
    name: "Brishav",
    age: 24,
  });

  const [skills, setSkills] = useState<string[]>([
    "HTML",
    "CSS",
    "JavaScript",
  ]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const updateStudent = () => {
    setStudent({
      ...student,
      age: student.age + 1,
    });
  };

  const addSkill = () => {
    setSkills((prev) => [...prev, "React"]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Hello ${name}`);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>React + TypeScript Demo</h1>

      <Card title="Counter Example">
        <p>Count: {count}</p>

        <Button
          variant="primary"
          size="medium"
          onClick={increment}
        >
          Increment
        </Button>
      </Card>

      <Card title="Object State">
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>

        <Button
          variant="secondary"
          size="medium"
          onClick={updateStudent}
        >
          Increase Age
        </Button>
      </Card>

      <Card title="Array State">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <Button
          variant="primary"
          size="small"
          onClick={addSkill}
        >
          Add React
        </Button>
      </Card>

      <Card title="Controlled Form">
        <form onSubmit={handleSubmit}>
          <Input
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />

          <br />

          <Button
            variant="primary"
            size="large"
          >
            Submit
          </Button>
        </form>

        <p>You typed: {name}</p>
      </Card>
    </div>
  );
}

export default App;