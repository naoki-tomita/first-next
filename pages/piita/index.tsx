import { NextPage } from "next";
import { useState, useEffect } from "react";
import Link from "next/link";

interface PiitaItem {
  id: number;
  title: string;
  body: string;
}

interface State {
  items: PiitaItem[];
}

const Index: NextPage = () => {
  const [state, setState] = useState<State>({ items: [] });
  const { items } = state;

  async function fetchItems() {
    setState({ items: await (await fetch("/api/piita/items")).json() });
  }

  useEffect(() => {
    fetchItems();
  }, []);

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
      <a href="/piita/edit">edit</a>
      <ul>{items.map((item, i) =>
        <li key={i}><Link href={`/piita/[id]`} as={`/piita/${item.id}`} ><a>{item.title}</a></Link></li>
      )}</ul>
    </div>
    </>
  );
};

export default Index;
