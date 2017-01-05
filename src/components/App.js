import React, {PropTypes, Component} from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
require('../images/favicon.ico');

const Div = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <Div>
        <Header />
        {this.props.children}
        <Footer />
      </Div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
