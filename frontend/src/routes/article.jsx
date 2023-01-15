import { useLoaderData } from "react-router-dom";
import { getArticle } from "../article.js";
import Markdown from "markdown-to-jsx";

export async function loader({ params }) {
  const contact = await getArticle(params.articleId);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }

  return contact;
}

export default function Article() {
  const article = useLoaderData();

  return (
    <article>
      <Markdown>{article}</Markdown>
    </article>
  );
}
