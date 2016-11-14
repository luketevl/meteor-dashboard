'use strict';

import React from 'react';

import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import App from '../imports/components/App.jsx';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
