import React from 'react';
import './App.scss';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/home-page/home-page.component';
import LoginPage from './Pages/login-page/login-page.component';
import RegisterPage from './Pages/register-page/register-page.component';
import NavBar from './Components/General/nav-bar/nav-bar.component';
import ArticleAddPage from './Pages/Artilces/article-add-page/article-add-page.component';
import ArticleListPage from './Pages/Artilces/article-list-page/article-list-page.component';
import ArticleDetailsPage from './Pages/Artilces/article-details-page/article-details-page.component';



const muiTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <MuiThemeProvider theme={ muiTheme }>

      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={ ArticleListPage } />
          <Route exact path='/login' component={ LoginPage } />
          <Route exact path='/register' component={ RegisterPage } />
          <Route exact path='/article/add' component={ ArticleAddPage } />
          <Route exact path='/article/:articleId' component={ ArticleDetailsPage } />
          <Route exact path='/articles/new' component={ ArticleListPage } />
          <Route exact path='/articles/ranking' component={ ArticleListPage } />
          <Route exact path='/articles/trending' component={ ArticleListPage } />
        </Switch>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
