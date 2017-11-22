import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Grid from "./Grid";
import ActionBar from "./ActionBar";
import FilterItem from "./FilterItem";

class App extends React.Component {

    constructor() {
        super();
    }

    clearFilter() {
        this.props.onClearFilter();
    }

    switchFilterStroke() {
        if(this.props.storeData.length > 0) {
            return {display: "block"};
        }
        else {
            return {display: "none"};
        }
    }

    render() {
        var style = this.switchFilterStroke();
        return (
            <div>
                <header>
                    <ActionBar />
                </header>
                <div id={"filter-stroke"} style={style}>
                    <div className={"action-bar"}>

                        {
                            this.props.storeData.map((filterItem, index) =>
                                <FilterItem key={index} filterName={filterItem}/>
                            )
                        }


                        <div id={"filter-clear-button"} onClick={ this.clearFilter.bind(this) }>
                            Очистить
                        </div>

                    </div>
                </div>
                <Grid />
            </div>
        );
    }
}

export default connect(
    state => ({
        storeData: state
    }),
    dispatch => ({
        onClearFilter: () => {
            dispatch({ type: 'CLEAR_FILTER' })
        }
    })
)(App);

