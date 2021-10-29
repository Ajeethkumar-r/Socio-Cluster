import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  return (
    <div className='posts-form-header'>
      <div className='bg-primary' style={{ borderRadius: '5px' }}>
        <h4 className='p-1'>Say something...</h4>
      </div>
      <form
        className='form my-1'
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <textarea
          cols='30'
          rows='5'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Create post'
        ></textarea>
        <button
          type='submit'
          value='Submit'
          style={{ borderRadius: '5px' }}
          className='btn btn-post my-1'
        >
          <i className='fab fa-telegram fa-2x '></i>
        </button>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
