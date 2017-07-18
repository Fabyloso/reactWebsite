import React, { Component } from 'react';
import SectionList from '../containers/resume-section-list'
import SectionDetail from '../containers/resume-section-detail'


export default class App extends Component {
  render() {
    return (
      <div>
        <SectionList/>
        <SectionDetail/>
      </div>
    );
  }
}
