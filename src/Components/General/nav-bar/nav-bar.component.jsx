import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Button, Link, Toolbar } from '@material-ui/core';
import './nav-bar.styles.scss';
import { logout } from '../../../Redux/auth/auth.actions';
import { selectCurrentUser } from '../../../Redux/auth/auth.selectors';
import { createStructuredSelector } from 'reselect';

const NavBar = ({ user, logout}) => {

  return (
    <AppBar position="relative" style={{ background: '#102026' }}>
      <Toolbar>
        <div className='nav-links'>
          <Button className='mr5px'>
            <Link href='/new'> New </Link>
          </Button>
          <Button className='mr5px'>
            <Link href='/ranking' > Ranking </Link>
          </Button>
          <Button className='last-left-link'>
            <Link href='/trending' className='last-left-link'> Trending </Link>
          </Button>

          { 
            !user ?
            <React.Fragment>
              <Button className='mr5px'>
                <Link href='/login' > Login </Link>
              </Button>
              <Button>
                <Link href='/register'> Register </Link>
              </Button>
            </React.Fragment>
            : 
            <Button onClick={() => logout()}> Logout </Button>
          }
          
        </div>
        
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);