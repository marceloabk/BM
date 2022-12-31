import { H5 } from "./text";

const ArticleCall = (props) => {
  return (
    <div>
      <H5>{props.title}</H5>
      <p>
        {props.author} {props.date}
      </p>
      <p>{props.call}</p>
    </div>
  );
};

export { ArticleCall };
