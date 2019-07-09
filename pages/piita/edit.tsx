import { NextPage } from "next";
import { useState } from "react";

interface State {
  title: string;
  body: string;
}

const Index: NextPage = () => {
  const [state, setState] = useState<State>({ title: "", body: "" });
  const { title, body } = state;
  function onChangeTitle(title: string) {
    setState({ ...state, title });
  }

  function onChangeBody(body: string) {
    setState({ ...state, body });
  }

  function onSend() {
    fetch("/api/piita/items", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ title, body }) });
  }
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
      <h1>Piita edit</h1>
      <div><input onChange={el => onChangeTitle(el.target.value)} value={title} /></div>
      <div><textarea onChange={el => onChangeBody(el.target.value)} value={body} /></div>
      <div><button onClick={onSend}>send</button></div>
    </div>
    </>
  );
};

export default Index;
