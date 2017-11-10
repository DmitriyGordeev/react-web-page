import React, { Component } from 'react';
import { connect } from 'react-redux';
import jQuery from 'jquery';

import './ActionBar.css';

class ActionBar extends React.Component {

    constructor() {
        super();
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
        alert(item);
    }

    menuList(data) {
        var component = [];
        for(var p in data) {
            if (data.hasOwnProperty(p))
                component.push(<li onClick={ this.filterItemClick.bind(this, data[p]) }>{data[p]}</li>);
        }

        return component;
    }

    menuTitleClick() {
        jQuery("#top-menu-dropdown").toggle();
    }

    render() {
        return (
            <div className={"action-bar"}>
                <div className={"dropdown-menu"} onClick={this.menuTitleClick}>
                    <p>Тип события</p>
                    <ul id={"top-menu-dropdown"}>
                        { this.menuList(this.test_menuJson()) }
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        storeData: state
    }),
    dispatch => ({})
)(ActionBar);