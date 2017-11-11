import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Grid.css'
import Card from "./Card";

const typeToTitle = {
    seminars_workshops_training: 'Семинары, воркшопы и тренинги',
    lectures_talks: 'Лекции и дискуссии',
    concerts_performances: 'Концерты, спектакли и перформансы',
    film_screenings: 'Кинопоказы'
};

class Grid extends React.Component {

    test_jsonData() {
        var data = [
            {
                id: 1,
                type: 'seminars_workshops_training',
                title: 'Ридинг-группы',
                location: 'Библиотека Музея «Гараж»',
                image_url: 'https://cdn-static-garagemca.gcdn.co/storage/event/1/6/1622/preview_preview_image-288dd5b0-b91a-411f-a227-8deb39f276d0.jpg',
                start_date: '2017-09-12',
                end_date: '2017-11-30'
            },
            {
                id: 2,
                type: 'lectures_talks',
                title: 'Teens Day',
                location: 'Музей современного искусства «Гараж»',
                image_url: 'https://cdn-static-garagemca.gcdn.co/storage/event/1/6/1681/preview_preview_image-f9096671-ffcc-4a21-8757-56bedc3aa296.jpg',
                start_date: '2017-10-01',
                end_date: '2017-11-05'
            },
            {
                id: 3,
                type: 'seminars_workshops_training',
                title: 'Семинар «Читаем и изучаем “Искусство с 1900 года” вместе»',
                location: 'Образовательный центр Музея «Гараж»',
                image_url: 'https://cdn-static-garagemca.gcdn.co/storage/event/1/6/1611/preview_preview_image-638bfea3-5e57-4df7-ad9e-3d3a8e826afa.jpg',
                start_date: '2017-10-07',
                end_date: '2017-12-23'
            },
            {
                id: 4,
                type: 'seminars_workshops_training',
                title: 'Семейные дни в Музее',
                location: 'Музей современного искусства «Гараж»',
                image_url: 'https://cdn-static-garagemca.gcdn.co/storage/event/1/6/1691/preview_preview_image-aef6db15-ee8b-4980-9392-bd0efe9c4512.jpg',
                start_date: '2017-10-08',
                end_date: '2017-12-10'
            }
        ];
        return data;
    }

    jsonCards(data) {
        var thisObject = this;

        if(thisObject.props.storeData.length == 0)
        {
            return data.map(function(object, index) {
                var type = typeToTitle[object.type];
                return <Card
                    key={index}
                    activity={type}
                    eventName={object.title}
                    eventLocation={object.location}
                    imageSrc={object.image_url} />;
            });
        }

        return data.map(function(object, index) {
            var type = typeToTitle[object.type];
            if(thisObject.props.storeData.indexOf(type) != -1) {
                return <Card
                    key={index}
                    activity={type}
                    eventName={object.title}
                    eventLocation={object.location}
                    imageSrc={object.image_url} />;
            }
        });

    }

    render() {
        return (
            <section className={"grid"}>
                { this.jsonCards(this.test_jsonData()) }
            </section>
        );
    }

}

export default connect(
    state => ({
        storeData: state
    }),
    dispatch => ({})
)(Grid);