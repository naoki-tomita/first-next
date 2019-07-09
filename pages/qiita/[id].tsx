import { NextPage } from "next";
import { useRouter } from "next/router";
import fetch from "node-fetch";

interface QiitaItem {
  rendered_body: string;
  body: string;
  id: string,
  likes_count: number,
  tags: Array<{ name: string }>;
  title: string;
  url: string;
}

interface Props {
  item: QiitaItem;
}

const Qiita: NextPage<Props, Props> = (props) => {
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
        justify-content: space-between;
      }
      li {
        width: 150px;
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
      }
      .tag {
        background-color: #eee;
        padding: 2px;
        border-radius: 4px;
        margin: 2px;
      }
    `}</style>
    <div ref={(el) => el && (el.innerHTML = props.item.rendered_body)} className="container" />
    </>
  );
};

async function fetchQiitaItem(id: string): Promise<QiitaItem> {
  return await (await fetch(`https://qiita.com/api/v2/items/${id}`)).json();
}

Qiita.getInitialProps = async ({ query }) => {
  const item = await fetchQiitaItem((query as {[key: string]: string}).id);
  return { item };
}


export default Qiita;
