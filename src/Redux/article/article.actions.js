import ArticleActionTypes from './article.types';

export const articleAddStart = articleAddData => ({
  type: ArticleActionTypes.ADD_ARTICLE_START,
  payload: articleAddData
})

export const articleAddSuccess = () => ({
  type: ArticleActionTypes.ADD_ARTICLE_SUCCESS, 
})

export const articleAddFailure = error => ({
  type: ArticleActionTypes.ADD_ARTICLE_FAILURE, 
  payload: error
})

export const getArticlesStart = getArticlesData => ({
  type: ArticleActionTypes.GET_ARTICLE_LIST_START, 
  payload: getArticlesData
})

export const getArticlesSuccess = articles => ({
  type: ArticleActionTypes.GET_ARTICLE_LIST_SUCCESS, 
  payload: articles
})

export const getArticlesFailure = error => ({
  type: ArticleActionTypes.GET_ARTICLE_LIST_FAILURE, 
  payload: error
})

export const pointArticleStart = data => ({
  type: ArticleActionTypes.POINT_ARTICLE_START, 
  payload: data
})

export const pointArticleSuccess = article => ({
  type: ArticleActionTypes.POINT_ARTICLE_SUCCESS, 
  payload: article
})

export const pointArticleFailure = error => ({
  type: ArticleActionTypes.POINT_ARTICLE_FAILURE, 
  payload: error
})

export const rmvScoreStart = data => ({
  type: ArticleActionTypes.RMV_SCORE_START, 
  payload: data
})

export const rmvScoreSuccess = article => ({
  type: ArticleActionTypes.RMV_SCORE_SUCCESS, 
  payload: article
})

export const rmvScoreFailure = error => ({
  type: ArticleActionTypes.RMV_SCORE_FAILURE, 
  payload: error
})

export const getArticleStart = data => ({
  type: ArticleActionTypes.GET_ARTICLE_START, 
  payload: data
})

export const getArticleSuccess = article => ({
  type: ArticleActionTypes.GET_ARTICLE_SUCCESS, 
  payload: article
})

export const getArticleFailure = error => ({
  type: ArticleActionTypes.GET_ARTICLE_FAILURE, 
  payload: error
})

export const deleteArticleStart = data => ({
  type: ArticleActionTypes.DELETE_ARTICLE_START, 
  payload: data
})

export const deleteArticleSuccess = () => ({
  type: ArticleActionTypes.DELETE_ARTICLE_SUCCESS, 
})

export const deleteArticleFailure = error => ({
  type: ArticleActionTypes.DELETE_ARTICLE_FAILURE, 
  payload: error
})