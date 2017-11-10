import React, { Component } from 'react';
import { connect } from 'react-redux';

import './FilterItem.css';

class FilterItem extends React.Component {

    closeFilterHandler() {
        this.props.onCloseFilter(this.props.filterName);
    }

    render() {
        return (
            <div className={"filter-item"}>
                <span>{this.props.filterName}</span>
                <div className={"filter-close-button"}>
                    <i className={"material-icons"} onClick={this.closeFilterHandler.bind(this)}>{"clear"}</i>
                </div>
            </div>
        );
    }
}

FilterItem.defaultProps = {
    filterName: ""
};

export default connect(
    state => ({
        storeData: state
    }),
    dispatch => ({
        onCloseFilter: (filter) => {
            dispatch({ type: 'CLOSE_FILTER', filterName: filter })
        }
    })
)(FilterItem);