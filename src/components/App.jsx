import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import PortalsList from './PortalsList/PortalsList';
import './App.scss';

const cards = [
    {category: 'reviews', value: 165, description: 'отзывов'},
    {category: 'reviews-to-answer', value: 21, description: 'неотвеченный отзыв'},
    {category: 'updates', value: 50, description: 'обновлений'},
    {category: 'average-rate', value: 4.5, description: 'средний рейтинг'},
];

const portals = [
    {
        title: 'Google',
        status: 'active',
        businessStatus: {
            total: 30,
            setUp: 30,
            notSetUp: 0
        },
        mainButtonState: 'synched',
        rate: 4.5,
        reviews: {
            total: 198,
            notAnswered: 15
        },
        actionRequired: false,
        updates: 2
    },
    {
        title: 'Flado',
        status: 'active',
        businessStatus: {
            total: 30,
            setUp: 4,
            notSetUp: 20
        },
        rate: 0,
        mainButtonState: 'creatingPages',
        creatingPages: 3,
        actionRequired: true
    },
    {
        title: '2Gis',
        status: 'inactive',
        searchData: {
            total: 78,
            found: 15
        },
        mainButtonState: 'creatingPages',
        creatingPages: 3,
        actionRequired: true
    },
    {
        title: 'Yell',
        status: 'disabled',
    }
]

class App extends React.Component {
    render() {
        return (
            <div className='app-container'>
                    <Dashboard dashboardCards={cards}/>
                    <PortalsList portals={portals}/>
            </div>
        );
    }
}

export default App;