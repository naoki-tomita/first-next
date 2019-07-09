import { NextPage } from "next";

const Index: NextPage = () => {
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
      <h1>Title</h1>
      <a href="/qiita">Qiita items</a>
    </div>
    </>
  );
};

export default Index;
