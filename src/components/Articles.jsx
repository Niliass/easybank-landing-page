import { useState } from "react";
import { articles } from "../Data";

const Articles = () => {
  const [data, setData] = useState(articles);
  return (
    <section className="articles">
      <div className="container">
        <h2 className="articles__title">Latest Articles</h2>
        <div className="articles__content">
          {data &&
            data.map(({ author, title, content, img }, idx) => {
              return (
                <article className="article" key={idx}>
                  <img src={img} alt="article image" className="article__img" />
                  <div className="article__info">
                    <h3 className="article__author">{author}</h3>
                    <h4 className="article__title">{title}</h4>
                    <p className="article__desc">{content}</p>
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Articles;
