import React from 'react';
import { connect } from 'react-redux';
import './home-page.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/auth/auth.selectors';
import { logout } from '../../Redux/auth/auth.actions';

const HomePage = ({ user, logout }) => {

  return (
    <div className='home-page'>
      asddsada
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);