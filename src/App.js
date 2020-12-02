import React, { Component } from 'react';
import Layout from './components/Layouts/Layout.component';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder.component';

class App extends Component {
  state = { 

   }

  render() { 
    return ( 
      <Layout>
        <BurgerBuilder />
      </Layout>
    );
  }
}
 
export default App;