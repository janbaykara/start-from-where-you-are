import * as React from "react";
import "./styles.css";
import { useRequest } from "./data";
import { Tactic } from "./beautiful-rising";

export default function App() {
  const tactics = useRequest<Tactic[]>(
    `https://api.beautifulrising.org/api/v1/tactics`
  );
  const [selected, setSelected] = React.useState<string>("");

  return (
    <div className="App">
      <h1>Start From Where You Are</h1>
      {tactics?.data?.map((t) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setSelected((s) => (s === t.slug ? "" : t.slug))}
        >
          <TacticCard key={t.slug} tactic={t} open={selected === t.slug} />
        </div>
      ))}
    </div>
  );
}

function TacticCard({ tactic, open }: { tactic: Tactic; open?: boolean }) {
  return (
    <div>
      <h3>{tactic.title}</h3>
      {open && <pre>{JSON.stringify(tactic, null, 2)}</pre>}
    </div>
  );
}
