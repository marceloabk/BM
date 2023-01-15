import Markdown from "markdown-to-jsx";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getArticle } from "../article.js";
import { Code } from "../components/Code";

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
  const [isDark, setIsDark] = useState(true);

  return (
    <article>
      <Markdown
        options={{
          overrides: {
            Code: {
              component: Code,
              props: {
                isDark,
                setIsDark,
              },
            },
          },
        }}
      >
        {article}
      </Markdown>
    </article>
  );
}
