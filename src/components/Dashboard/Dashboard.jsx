import React from 'react';
import DashboardCard from '../DashboardCard/DashboardCard';
import './Dashboard.scss';

class Dashboard extends React.Component {

    renderCards(cards) {
        return cards.map((card) => {
            return <DashboardCard {...card} />
        })
    }

    render() {
        return (
            <div className='dashboard'>
                {this.renderCards(this.props.dashboardCards)}
            </div>
        );
    }
}

export default Dashboard;