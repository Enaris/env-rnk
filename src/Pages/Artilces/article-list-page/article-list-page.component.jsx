import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import ArticleList from '../../../Components/Application/article-list/article-list.component';
import ArticleSearchForm from '../../../Components/Forms/article-search-form/article-search-form.component';
import { selectFetchingArticles } from '../../../Redux/article/article.selectors';
import './article-list-page.styles.scss'

const ArticleListPage = ({ fetchingArticles }) => {

  const { location } = useHistory();
  const mode = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);

  return (
    <div className='page-flex article-list-page flex-align-items p5'>
      <ArticleSearchForm mode={ mode } />
      {
        !fetchingArticles 
        ? <ArticleList />
        : <div> Loading </div>
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  fetchingArticles: selectFetchingArticles
})

export default connect(mapStateToProps)(ArticleListPage);