import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectArticles } from '../../../Redux/article/article.selectors';
import ArticleListItem from '../article-list-item/article-list-item.component';
import './article-list.styles.scss'

const ArticleList = ({ articles }) => {

  return (
    <div className='article-list max-w-1000'>
      { articles &&
        articles.map(a => <ArticleListItem article={ a } key={ a.id } />)
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  articles: selectArticles
})

export default connect(mapStateToProps)(ArticleList);