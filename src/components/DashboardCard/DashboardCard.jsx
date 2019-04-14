import React from 'react';
import './DashboardCard.scss';

class DashboardCard extends React.Component {
    render() {
        return (
            <div className={`dashboard__card dashboard__card--${this.props.category}`}>
                <div className='dashboard__card-value'>{this.props.value.toLocaleString()}</div>
                <div className='dashboard__card-description'>{this.props.description}</div>
            </div>
        );
    }
}

export default DashboardCard;