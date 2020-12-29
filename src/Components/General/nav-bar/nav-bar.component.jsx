import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import './nav-bar.styles.scss';
import { logout } from '../../../Redux/auth/auth.actions';
import { selectCurrentUser } from '../../../Redux/auth/auth.selectors';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

const NavBar = ({ user, logout}) => {

  return (
    <AppBar position="relative" style={{ background: '#102026' }}>
      <Toolbar>
        <div className='nav-links'>
          <Link className='mr5px' to='/articles/new'> 
            <Button> 
              New
            </Button>
          </Link>
          <Link className='mr5px' to='/articles/ranking' >
            <Button >
              Ranking
            </Button>
          </Link>
          <Link className={ user ? 'mr5px' : 'last-left-link'} to='/articles/trending'> 
            <Button >
              Trending
            </Button>
          </Link>
          {
            user && 
            <Link className='last-left-link' to='/article/add'>
              <Button >
                Add 
              </Button>
            </Link>
          }

          { 
            !user ?
            <React.Fragment>
              <Link className='mr5px' to='/login' > 
                <Button >
                  Login 
                </Button>
              </Link>
              
              <Link to='/register'> 
                <Button>
                  Register 
                </Button>
              </Link>
              
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