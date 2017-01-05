import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About} />
      <Route path="projects" component={Projects} />
      <Route path="blog" component={Blog} />
  </Route>
);
