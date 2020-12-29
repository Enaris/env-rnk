import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import FileDropPreview from '../../General/file-drop-preview/file-drop-preview.component';
import MuiFTxtField from '../Formik/mui-f-txt-field/mui-f-txt-field.component';
import QuillFField from '../Formik/quill-f-field/quill-f-field.component';
import './article-add-form.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../Redux/auth/auth.selectors';
import { formToAddArticleData } from './article-add-form.helpers';
import { articleAddStart } from '../../../Redux/article/article.actions';

const ArticleAddForm = ({ user, addArticle }) => {

  const [ cover, setCover ] = useState(null);

  const handleDropImg = img => setCover(img);
  const handleRemoveImg = () => setCover(null);
  const handleSubmit = v => {
    addArticle(formToAddArticleData(v, cover, user.aspUserId))
  }

  return (
    <div className='min-vw50 my5'>

      <div className='added-image-container mb5'>
        <div className='added-image'>
          <FileDropPreview 
            label='Add cover image'
            onRemove={ handleRemoveImg }
            handleDrop={ handleDropImg }
          />
        </div>
      </div>

      <Formik
        initialValues={{
          title: '',
          description: ''
        }}
        onSubmit={ v => handleSubmit(v) }
      >
        <Form className='login-form'>
          
          <MuiFTxtField
            name='title'
            fullWidth
            containerClass='mb5'
            label='Title'
            variant='filled'
          />
          <QuillFField 
            name='description'
            label='Description'
            containerClass='mb5'
            style={{ minHeight: '300px', maxHeight: '1000px' }}
          />
          <Button type='submit' > Add </Button>
        </Form>
      </Formik>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  addArticle: data => dispatch(articleAddStart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleAddForm);