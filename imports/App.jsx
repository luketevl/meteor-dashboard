import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from './layout/Header.jsx';
import Content from './layout/Content.jsx';
import Footer from './layout/Footer.jsx';

export default class App extends React.Components{
  render(){
    return (
    <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
