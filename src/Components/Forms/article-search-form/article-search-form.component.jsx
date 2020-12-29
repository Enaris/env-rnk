import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getArticlesStart } from '../../../Redux/article/article.actions';
import { selectCurrentUser } from '../../../Redux/auth/auth.selectors';
import MuiFTxtField from '../Formik/mui-f-txt-field/mui-f-txt-field.component';
import './article-search-form.styles.scss'

const ArticleSearchForm = ({ fetchArticles, user, mode = 'new' }) => {

  useEffect(() => {
    fetchArticles({ title: '', email: '', aspUserId: user ? user.aspUserId : null, mode: mode });
  }, [fetchArticles, user, mode])
  
  return (
    <div className='max-w-1000'>
      <Formik
        initialValues={{
          title: '',
          email: ''
        }}
        onSubmit={ v => fetchArticles({ ...v, aspUserId: user ? user.aspUserId : null, mode: mode })}
      >
        <Form className='w100'>
          <MuiFTxtField
            name='title'
            fullWidth
            containerClass='mb5'
            label='Title'
            variant='filled'
          />
          <MuiFTxtField
            name='email'
            fullWidth
            containerClass='mb5'
            label="Author's email "
            variant='filled'
          />
          <Button type='submit' > Search </Button>
        </Form>
      </Formik>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchArticles: data => dispatch(getArticlesStart(data))
})

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleSearchForm);