import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// , {
//   mode: 'no-cors'
// }
const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
      fetch("https://www.reddit.com/r/meditation.json")
        .then(res => res.json())
        .then(res => setArticles(res))
  }, []);

  if (articles) {
  return (
    <main className="container">
      <section className="row justify-content-center mt-5">
        {
        articles.data.children.map((article) => (
          <div className="col-md-6" key={article.data.id}>
            <div className="card shadow my-2">
              <div className="card-body">
                <h4 style={{color: '#212529'}} className="card-title">{article.data.title}</h4>

                <p style={{color: '#212529'}} className="card-text">
                  {article.data.selftext.substr(0, 75) + "..."}
                </p>
                <Link
                  to={`/articles/${article.id}`}
                  className="btn btn-primary"
                >
                  More details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>

    // <h1>Articles</h1>
  )}
  else {
    return(
      <h1>loading</h1>
    )
  }
};

export default Articles;
