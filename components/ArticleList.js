import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles?.map((article) => (
        <div key={article.id}>
          <ArticleItem article={article} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
