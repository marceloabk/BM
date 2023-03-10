import { useLoaderData } from "react-router-dom";
import { ArticleCall } from "../components/ArticleCall";
import articlesCalls from "../mocks/articlesCalls";

export async function loader() {
  const articles = articlesCalls;
  return { articles };
}
export default function Index() {
  const { articles } = useLoaderData();
  return (
    <div>
      {articles.length ? (
        articles.map((article, i) => (
          <ArticleCall
            key={i}
            title={article.title}
            author={article.author}
            date={article.date}
            call={article.call}
          />
        ))
      ) : (
        <p>
          <i>Nenhum artigo publicado</i>
        </p>
      )}
    </div>
  );
}
