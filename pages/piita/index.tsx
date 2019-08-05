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
          max-width: 920px;
          margin: auto;
        }
        h1 {
          font-weight: bold;
        }
        a {
          word-wrap: break-word;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          width: 150px;
          padding: 8px;
          border: 1px solid #ccc;
          margin: 4px;
          border-radius: 8px;
          background-color: #f8f8f8;
        }
      `}</style>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <h1>Piita item</h1>
          <a href="/piita/edit">記事をあたらしくつくる</a>
        </div>
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              <Link href={`/piita/[id]`} as={`/piita/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Index;
