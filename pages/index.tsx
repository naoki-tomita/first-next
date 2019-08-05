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
        <ul>
          <li>
            <a href="/qiita">Qiita items</a>
          </li>
          <li>
            <a href="/piita">Piita items</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Index;
