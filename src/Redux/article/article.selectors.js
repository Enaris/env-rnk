import { createSelector } from 'reselect';

const selectArticle = state => state.article;

export const selectArticles = createSelector(
  [selectArticle],
  article => article.articles
)

export const selectFetchingArticles = createSelector(
  [selectArticle],
  article => article.fetchingArticles
)

export const selectLoadingArticlesIds = createSelector(
  [selectArticle], 
  article => article.loadingArticleIds
)

export const selectArticleDetails = createSelector(
  [selectArticle], 
  article => article.article
)

export const selectArticleFetching = createSelector(
  [selectArticle], 
  article => article.fetchingArticle
)
