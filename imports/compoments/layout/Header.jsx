'use strict';

import React from 'react';

export default class Header extends React.Components{
  construct(props){
    super(props);
  }
  render(){
    return (
      <header>
        <nav>
          <div class="nav-wrapper">
            <ul class="left hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li class="active"><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
