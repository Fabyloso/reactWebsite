import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSection } from '../actions/index';
import { bindActionCreators } from 'redux';

class ResumeList extends Component{
    renderList(){
        return this.props.resume_items.map((resume_item) =>{
          return(
              <li
                  key={resume_item.section}
                  onclick={() => this.props.selectSection(resume_item)}
                  className="list-group-item">
                  {resume_item.section}
              </li>
          );
        });

    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
function mapStateToProps(state) {
    return {
        resume_items: state.resume_items
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectSection:selectSection}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeList);