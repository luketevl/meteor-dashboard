'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsUiWrapper extends React.Components{
  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
  }

  connentWillUnmount(){
    Blaze.remove(this.view);
  }

  render(){
    return <span ref="container" /> ;
  }
}
