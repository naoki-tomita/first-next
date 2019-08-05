import { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface PiitaItem {
  id: number;
  title: string;
  body: string;
}

interface State {
  item: PiitaItem;
}

const Index: NextPage = () => {
  const router = useRouter();
  const [state, setState] = useState<State>({ item: { id: 0, title: "", body: "" } });
  const { item } = state;

  async function fetchItem() {
    setState({ item: await (await fetch(`/api/piita/items/${router.query.id}`)).json() });
  }

  useEffect(() => {
    fetchItem();
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
      <h1>{item.title}</h1>
      <p>{item.body}</p>
    </div>
    </>
  );
};

export default Index;
