import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { format } from 'date-fns';
import { imageUrl } from '../../../Utils/api-urls';
import ImgAlt from '../../General/img-alt/img-alt.component';
import './article-list-item.styles.scss';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../Redux/auth/auth.selectors';
import { selectLoadingArticlesIds } from '../../../Redux/article/article.selectors';
import { pointArticleStart } from '../../../Redux/article/article.actions';
import { Link } from 'react-router-dom';

const ArticleListItem = ({ user,
  pointArticle,
  loadingIds,
  article:
  {
    id,
    coverUrl,
    title,
    pluses,
    minuses,
    description,
    dateAdded,
    userPlused, 
    userMinused,
    author:
    { email }}}) => {

  const loading = loadingIds && (loadingIds.find(i => i === id) != null);
  const handlePoint = point => {
    pointArticle({ aspUserId: user.aspUserId, articleId: id, point: point })
  }
  return (
    <div className='article-list-item'>
      <Link to={ `/article/${ id }` } className='image-link-container'>
        <div className='image-container'>
          {
            coverUrl ?
            <img src={ imageUrl(coverUrl) } alt='cover' className='image' />
            : 
            <ImgAlt wordSpacing="250px" />
          }
        </div>
      </Link>
      <div className='article-list-item-desc-container'>
        <h3 className='article-list-item-desc-title'>
          <Link to={ `/article/${ id }` }>{ title }</Link> 
        </h3>
        <div className='article-list-item-desc-info'>
          <div className='article-list-item-desc-info-points'>
            <Button 
              startIcon={<AddBoxIcon />} 
              disabled={ !user || userPlused || loading }
              onClick={ () => handlePoint(1) }
            >
                { pluses }
              </Button>
            <Button 
              startIcon={<IndeterminateCheckBoxIcon />} 
              disabled={ !user || userMinused || loading }
              onClick={ () => handlePoint(-1) }
            >
              { minuses }
            </Button>
          </div>
          <div className='article-list-item-desc-info-added'>
            { `${format(new Date(dateAdded), 'yyyy/MM/dd HH:mm')} by ${email}` }
          </div>
        </div>
        <div className='article-list-item-desc-text' dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser, 
  loadingIds: selectLoadingArticlesIds
})

const mapDispatchToProps = dispatch => ({
  pointArticle: data => dispatch(pointArticleStart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListItem);