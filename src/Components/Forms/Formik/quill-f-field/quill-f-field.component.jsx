import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill-f-field.styles.scss';
import { Field } from 'formik';

const QuillFField = ({ containerClass, label, ...props  }) => {
  return (
    <div className={`${containerClass ? containerClass : ''} quill-f-field`}>
      { label &&
        <div className='quill-f-field-label'>{ label }</div>
      }
      <Field name={ props.name }>
        { ({ field }) => <ReactQuill 
          { ...props }
          value={ field.value } 
          onChange={ field.onChange(field.name) } 
          theme="snow" 
          /> }
      </Field>
    </div>
  )
}

export default QuillFField;