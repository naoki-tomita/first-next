import { NextPage } from "next";
import { useState, useEffect } from "react";

interface PiitaItem {
  id: number;
  title: string;
  body: string;
}

interface State {
  title: string;
  body: string;
  items: PiitaItem[];
}

const Index: NextPage = () => {
  const [state, setState] = useState<State>({ title: "", body: "", items: [] });
  const { title, body, items } = state;
  return (
    <>
    <style jsx global>{`
      .container {
        width: 920px;
        margin: auto;
      }
      h1 {
        font-weight: bold;
      }
    `}</style>
    <div className="container">
      <h1>Piita item</h1>
      <ul></ul>
    </div>
    </>
  );
};

export default Index;
