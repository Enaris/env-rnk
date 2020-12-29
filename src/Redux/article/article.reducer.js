import ArticleActionTypes from './article.types';

const INITIAL_STATE = {

  articles: [], 
  fetchingArticles: true,

  addingArticle: false,

  loadingArticleIds: [], 

  article: null, 
  fetchingArticle: true, 
  fetchingArticleError: null

}

const ArticleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ArticleActionTypes.ADD_ARTICLE_START: 
      return {
        ...state,
        addingArticle: true
      }
    case ArticleActionTypes.ADD_ARTICLE_SUCCESS: 
      return {
        ...state,
        addingArticle: false
      }
    case ArticleActionTypes.ADD_ARTICLE_FAILURE: 
      return {
        ...state,
        addingArticle: false
      }
    
    case ArticleActionTypes.GET_ARTICLE_LIST_START: 
      return {
        ...state,
        articles: [], 
        fetchingArticles: true,
      }
    case ArticleActionTypes.GET_ARTICLE_LIST_SUCCESS:
      return {
        ...state,
        articles: action.payload, 
        fetchingArticles: false,
      }
    case ArticleActionTypes.GET_ARTICLE_LIST_FAILURE: 
      return {
        ...state,
        articles: [], 
        fetchingArticles: false,
      }

    case ArticleActionTypes.POINT_ARTICLE_START: 
      return {
        ...state,
        loadingArticleIds: state.loadingArticleIds 
          ? [ ...state.loadingArticleIds, action.payload.articleId ]
          : [ action.payload.articleId ]
      }
    case ArticleActionTypes.POINT_ARTICLE_SUCCESS:
      const { pluses, minuses, id, userPlused, userMinused } = action.payload;
      return {
        ...state,
        article: state.article == null ? null : { ...state.article, pluses: pluses, minuses: minuses, userPlused: userPlused, userMinused: userMinused },
        articles: state.articles.map(a => a.id === id ? { ...a, pluses: pluses, minuses: minuses, userPlused: userPlused, userMinused: userMinused } : a),
        loadingArticleIds: state.loadingArticleIds.filter(i => i !== id)
      }
    case ArticleActionTypes.POINT_ARTICLE_FAILURE:
      return {
        ...state,
        loadingArticleIds: state.loadingArticleIds.filter(i => i !== action.payload.id)
      }

    case ArticleActionTypes.GET_ARTICLE_START: 
      return {
        ...state,
        article: null,
        fetchingArticle: true, 
        fetchingArticleError: null
      }
    case ArticleActionTypes.GET_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
        fetchingArticle: false, 
        fetchingArticleError: null
      }
    case ArticleActionTypes.GET_ARTICLE_FAILURE:
      return {
        ...state,
        article: null,
        fetchingArticle: false, 
        fetchingArticleError: action.payload
      }
    default:
      return state;
  }
}

export default ArticleReducer;