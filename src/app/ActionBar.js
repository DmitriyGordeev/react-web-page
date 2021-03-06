import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ActionBar.css';

class ActionBar extends React.Component {

    constructor() {
        super();
        this.menuVisible = false;
    }

    switch_arrow() {
        var menu = document.querySelector("#top-menu-dropdown");
        var menu_arrow = document.querySelector("#top-menu-arrow");

        if(this.menuVisible === false) {
            menu.style.display = "block";
            menu_arrow.innerText = "keyboard_arrow_up";
            this.menuVisible = true;
        }
        else {
            menu.style.display = "none";
            menu_arrow.innerText = "keyboard_arrow_down";
            this.menuVisible = false;
        }
    }

    test_menuJson() {
        return {
            seminars_workshops_training: 'Семинары, воркшопы и тренинги',
            lectures_talks: 'Лекции и дискуссии',
            concerts_performances: 'Концерты, спектакли и перформансы',
            film_screenings: 'Кинопоказы'
        };
    }

    filterItemClick(item) {
        this.switch_arrow();
        this.props.onSelectFilter(item);
    }

    menuList(data) {
        var component = [];
        for(var p in data) {
            if (data.hasOwnProperty(p))
                component.push(<li key={p} onClick={ this.filterItemClick.bind(this, data[p]) }>{data[p]}</li>);
        }

        return component;
    }

    menuTitleClick() {
        this.switch_arrow();
    }

    render() {
        return (
            <div className={"action-bar"}>
                <div className={"dropdown-menu"} onClick={this.menuTitleClick.bind(this)}>
                    <p>Тип события</p>
                    <i id="top-menu-arrow" className={"material-icons"} >{"keyboard_arrow_down"}</i>
                </div>
                <ul id={"top-menu-dropdown"} className={"hidden"}>
                    { this.menuList(this.test_menuJson()) }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        storeData: state
    }),
    dispatch => ({
        onSelectFilter: (filter) => {
            dispatch({ type: 'SELECT_FILTER', filterItem: filter});
        }
    })
)(ActionBar);