import { NextPage } from "next";
import Link from "next/link";
import fetch from "node-fetch";

interface QiitaItem {
  rendered_body: string;
  body: string;
  id: string;
  likes_count: number;
  tags: Array<{ name: string }>;
  title: string;
  url: string;
}

interface Props {
  items: QiitaItem[];
}

const Qiita: NextPage<Props, Props> = props => {
  return (
    <>
      <style jsx global>{`
        .container {
          width: 920px;
          margin: auto;
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
        .tags {
          display: flex;
          flex-wrap: wrap;
        }
        .tag {
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 2px;
          border-radius: 4px;
          margin: 2px;
        }
      `}</style>
      <div className="container">
        <h1>Qiita item</h1>
        <ul>
          {props.items.map(item => (
            <li key={item.id}>
              <div>
                <Link href={`/qiita/[id]`} as={`/qiita/${item.id}`}>
                  <a>{item.title}</a>
                </Link>
              </div>
              <div className="tags">
                {item.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag.name}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

async function fetchQiitaItems() {
  return await (await fetch(
    "https://qiita.com/api/v2/items?per_page=100"
  )).json();
}

Qiita.getInitialProps = async () => {
  const json = await fetchQiitaItems();
  return { items: json };
};

export default Qiita;
