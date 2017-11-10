import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Grid from "./Grid";
import ActionBar from "./ActionBar";

class App extends React.Component {

    constructor() {
        super();
    }

    clearFilter() {
        this.props.onClearFilter();
    }

    render() {
        return (
            <div>
                <header>
                    <ActionBar />
                </header>
                <div className={"filter-stroke"}>
                    <div className={"action-bar"}>

                        {/*<div className={"filter-item"}>*/}
                            {/*<span>Семинары и воркшопы</span>*/}
                            {/*<div className={"filter-close-button"}>*/}
                                {/*<i className={"material-icons"}>{"clear"}</i>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                        {/*<div className={"filter-item"}>*/}
                            {/*<span>Выставки</span>*/}
                            {/*<div className={"filter-close-button"}>*/}
                                {/*<i className={"material-icons"}>{"clear"}</i>*/}
                            {/*</div>*/}
                        {/*</div>*/}

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

