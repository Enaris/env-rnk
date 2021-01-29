import { call, all, put, takeLatest } from 'redux-saga/effects';

import ArticleActionTypes from './article.types';
import axios from 'axios';
import { push } from 'connected-react-router';
import { articleDeleteUrl, articleDetailsUrl, articlePointUrl, articleRmvScore, articleUrl } from '../../Utils/api-urls';
import { articleAddFailure, articleAddSuccess, deleteArticleFailure, deleteArticleSuccess, getArticleFailure, getArticlesFailure, getArticlesSuccess, getArticleSuccess, pointArticleFailure, pointArticleSuccess, rmvScoreFailure, rmvScoreSuccess } from './article.actions';

export function* addArticle({ payload }) {
  var formData = new FormData();
  formData.append('title', payload.title);
  formData.append('description', payload.description);
  formData.append('aspAuthorId', payload.aspAuthorId);
  formData.append('cover', payload.cover);


  try {
    yield call(axios.post, articleUrl, formData)
    yield put(articleAddSuccess());
    yield put(push('/articles/new'));
  }
  catch (e) {
    yield put(articleAddFailure(e.response.data.errors));
  }
}

export function* getArticles({ payload }) {
  try {
    var result = yield call(axios.get, articleUrl, {
      params: { ...payload }
    })
    yield put(getArticlesSuccess(result.data));
  }
  catch (e) {
    yield put(getArticlesFailure(e.response.data.errors));
  }
}

export function* pointArticle({ payload }) {
  const { articleId, aspUserId, point } = payload;
  try {
    var result = yield call(axios.post, articlePointUrl(aspUserId, articleId, point), payload)
    yield put(pointArticleSuccess(result.data));
  }
  catch (e) {
    yield put(pointArticleFailure(e.response.data.errors));
  }
}

export function* rmvScore({ payload }) {
  const { articleId, aspUserId } = payload;
  try {
    var result = yield call(axios.post, articleRmvScore(aspUserId, articleId), payload)
    yield put(rmvScoreSuccess(result.data));
  }
  catch (e) {
    yield put(rmvScoreFailure(e.response.data.errors));
  }
}

export function* getArticleDetails({ payload }) {
  const { articleId, aspUserId } = payload;
  try {
    var result = yield call(axios.get, articleDetailsUrl(aspUserId, articleId))
    yield put(getArticleSuccess(result.data));
  }
  catch (e) {
    yield put(getArticleFailure(e.response.data.errors));
  }
}

export function* deleteArticle({ payload }) {
  const { articleId, aspUserId } = payload;
  try {
    yield call(axios.delete, articleDeleteUrl(aspUserId, articleId));
    yield put(deleteArticleSuccess());
    yield put(push('/articles/new'));
  }
  catch (e) {
    yield put(deleteArticleFailure(e.response.data.errors));
  }
}


export function* onAddArticle() {
  yield takeLatest(ArticleActionTypes.ADD_ARTICLE_START, addArticle);
}

export function* onGetArticles() {
  yield takeLatest(ArticleActionTypes.GET_ARTICLE_LIST_START, getArticles);
}

export function* onPointArticle() {
  yield takeLatest(ArticleActionTypes.POINT_ARTICLE_START, pointArticle);
}

export function* onRmvScoreArticle() {
  yield takeLatest(ArticleActionTypes.RMV_SCORE_START, rmvScore);
}

export function* onGetArticleDetails() {
  yield takeLatest(ArticleActionTypes.GET_ARTICLE_START, getArticleDetails);
}

export function* onDeleteArticle() {
  yield takeLatest(ArticleActionTypes.DELETE_ARTICLE_START, deleteArticle);
}

export default function* ArticleSagas() {
  yield all([
    call(onAddArticle),
    call(onGetArticles), 
    call(onPointArticle), 
    call(onGetArticleDetails),
    call(onDeleteArticle),
    call(onRmvScoreArticle)
  ])
}