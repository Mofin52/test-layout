import React from 'react';
import Portal from '../Portal/Portal';
import './PortalsList.scss';

class PortalsList extends React.Component {
    
    renderPortals(portals) {
        return portals.map((portal) => {
            return <Portal {...portal} />
        })
    }
    
    render() {
        return (
            <div className='portals-list'>
                {this.renderPortals(this.props.portals)}
            </div>
        );
    }
}

export default PortalsList;