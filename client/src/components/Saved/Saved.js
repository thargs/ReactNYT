import React from 'react';

export const Saved = ({ article, children }) =>
<div className="savedArticle">
  <a href={article.url}><h4>{article.title}</h4></a>
  <button data-id={article._id}>Delete</button>
  {children}
</div>;
