import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import ArticleDetails from '../../../Components/Application/article-details/article-details.component';
import { getArticleStart } from '../../../Redux/article/article.actions';
import { selectArticleDetails, selectArticleFetching } from '../../../Redux/article/article.selectors';
import { selectCurrentUser } from '../../../Redux/auth/auth.selectors';
import './article-details-page.styles.scss'

const ArticleDetailsPage = ({ articleLoading, fetchArticle, user, article }) => {

  const { params: { articleId }} = useRouteMatch(); 
  useEffect(() => {
    fetchArticle({ aspUserId: user ? user.aspUserId : null, articleId: articleId })
  }, [user, fetchArticle, articleId])
  return (
    <div className='page-flex article-list-page flex-align-items p5'>
      {
        articleLoading 
        ? <div> Loading </div>
        : !articleLoading && !article
        ? <div> Article not found </div> 
        : <ArticleDetails article={ article } />
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  articleLoading: selectArticleFetching,
  user: selectCurrentUser, 
  article: selectArticleDetails
})

const mapDispatchToProps = dispatch => ({
  fetchArticle: data => dispatch(getArticleStart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetailsPage);