import React, { useState } from 'react';
import { connect } from 'react-redux';
import ImgAlt from '../../General/img-alt/img-alt.component';
import { format } from 'date-fns';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import CancelIcon from '@material-ui/icons/Cancel';
import './article-details.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../Redux/auth/auth.selectors';
import { selectLoadingArticlesIds } from '../../../Redux/article/article.selectors';
import { deleteArticleStart, pointArticleStart, rmvScoreStart } from '../../../Redux/article/article.actions';
import { imageUrl } from '../../../Utils/api-urls';
import { Button, Grid, Tab, Tabs } from '@material-ui/core';
import { a11yProps } from '../../../Utils/mui-helpers';
import TabPanel from '../../General/tab-panel/tab-panel.component';
import YNModal from '../../General/y-n-modal/y-n-modal.component';

const ArticleDetails = ({
  pointArticle, 
  user, 
  loadingIds,
  deleteArticle,
  rmvScore,
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
    markedBy, 
    author: { email, aspUserId }
  } 
}) => {

  const [ tabIndex, setTabIndex ] = useState(0);
  const [ openConfirmDelete, setOpenConfirmDelete ] = useState(false);
  const loadingPoints = loadingIds && (loadingIds.find(i => i === id) != null);
  const handlePoint = point => {
    pointArticle({ aspUserId: user.aspUserId, articleId: id, point: point })
  }
  const handleRmvScore = () => {
    rmvScore({ aspUserId: user.aspUserId, articleId: id })
  }
  const handleConfirmDelete = () => {
    if (user)
      deleteArticle({ aspUserId: user.aspUserId, articleId: id });
    setOpenConfirmDelete(false);
  }
  return (
    <div className='article-details max-w-1000'>
      <div className='article-details-top mb5'>
        <div className='article-details-top-image-container'>
          {
            coverUrl ?
            <img src={ imageUrl(coverUrl) } alt='cover' className='article-details-top-image' />
            : 
            <ImgAlt wordSpacing="600px" />
          }
        </div>
        <div className='article-details-top-desc'>
          <h1 className='article-details-top-desc-title mb5'>{ title }</h1>
          <div className='article-details-top-desc-points mb5'>
            <Button 
              startIcon={ <AddBoxIcon /> } 
              disabled={ !user || userPlused || loadingPoints }
              size="large"
              onClick={ () => handlePoint(1) }
            >
                { pluses }
              </Button>
            <Button 
              startIcon={ <IndeterminateCheckBoxIcon /> } 
              disabled={ !user || userMinused || loadingPoints }
              size="large"
              onClick={ () => handlePoint(-1) }
            >
              { minuses }
            </Button>
            <Button 
              startIcon={ <CancelIcon /> } 
              disabled={ !user || (!userMinused && !userPlused) || loadingPoints }
              size="large"
              onClick={ () => handleRmvScore() }
            >
            </Button>
          </div>
          <div className='article-details-top-desc-added mb5'>
            { `${format(new Date(dateAdded), 'yyyy/MM/dd HH:mm')} by ${email}` }
          </div>
          { user && user.aspUserId === aspUserId &&
            <React.Fragment>
              <Button
                onClick={ () => setOpenConfirmDelete(true) }
                size='large'
                color='secondary'
              >
                Delete
              </Button>
              <YNModal 
                open={ openConfirmDelete }
                onYes={ () => handleConfirmDelete() }
                onNo={ () => setOpenConfirmDelete(false) }
                onClose={ () => setOpenConfirmDelete(false) }
              />
            </React.Fragment>
          }
        </div>
      </div>
      <div className='article-details-bot'>
        <Tabs 
          value={ tabIndex } 
          onChange={ (e, v) => setTabIndex(v) } 
          aria-label="article-details-bot-tabs"
          className='article-details-bot-tabs'
        >
          <Tab label="Description" { ...a11yProps(0) } />
          <Tab label="Marked by" { ...a11yProps(1) } />
        </Tabs>
        <div className='article-details-bot-tabs-content'>
          <TabPanel value={ tabIndex } index={0}>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          </TabPanel>
          <TabPanel value={ tabIndex } index={1}>
            <ul>
              {
                markedBy.map((p, i) => <li key={ p.id } className={i % 2 !== 0 ? 'bg-black' : ''}>
                  <Grid container className='article-details-bot-point'>
                    <Grid item xs={6}>{ p.userEmail }</Grid>
                    <Grid item xs={6}>{ p.plus ? '+' : '-' }</Grid>
                  </Grid>
                </li>)
              }
            </ul>
          </TabPanel>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser, 
  loadingIds: selectLoadingArticlesIds
})

const mapDispatchToProps = dispatch => ({
  pointArticle: data => dispatch(pointArticleStart(data)),
  rmvScore: data => dispatch(rmvScoreStart(data)),
  deleteArticle: data => dispatch(deleteArticleStart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);