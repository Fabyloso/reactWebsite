import React, { Component } from 'react';
import { connect } from 'react-redux';


class SectionDetail extends Component{
    render(){
        if(!this.props.section){
            return <div>Click something</div>;
        }
        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.section}</div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        section: state.activeSection
    };
}

export default connect(mapStateToProps)(SectionDetail);