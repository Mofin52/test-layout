import React from 'react';
import './Portal.scss';

const pagesDict = {
    synched: 'Синхронизировано',
    creatingPages: 'Создание'
};

class Portal extends React.Component {

    renderMainButton(btnState, pages) {
        return (
            <button className={`portal-button button-${btnState}`}>
                <span className='button-icon'></span>
                <span className='button-text'>
                    {
                        btnState === 'synched' ? 'Синхронизировано' : `Создание ${pages} страниц`
                    }
                </span>
            </button>
        ); 
    }
    
    renderTitle(businessStatus, title) {
        return (
            <h3 className='portal-title'>
                {title}
                {
                    businessStatus &&
                    <ul className='portal-state'>
                        {
                            businessStatus.total === businessStatus.setUp ?
                            <li>{`все ${businessStatus.total} заведений настроены`}</li> :
                            <React.Fragment>
                                <li>{`${businessStatus.total} заведений`}</li>
                                <li>{`${businessStatus.setUp} настроено`}</li>
                                <li>{`${businessStatus.notSetUp} в поиске`}</li>
                            </React.Fragment>
                        }
                    </ul>
                }
            </h3>
        );
    }

    renderControls(mainButtonState, creatingPages, status) {
        return (
            status !== 'disabled' && 
            <div className='portal-controls'>
                {
                    mainButtonState &&
                    this.renderMainButton(mainButtonState, creatingPages)
                }
                {
                    status === 'active' ?
                    <React.Fragment>
                        <button className='portal-button'><span className='button-icon'></span>Инфа</button>
                        <button className='portal-button'><span className='button-icon'></span>Прайс</button>
                        <button className='portal-button'><span className='button-icon'></span>Фото</button>
                        <button className='portal-button'><span className='button-icon'></span>Акции</button>
                    </React.Fragment> :
                    null
                }
            </div>
        );
    }

    renderFooter(rate, status, searchData, reviews) {
        return (
            <div className='portal-footer'>
                {
                    status === 'disabled' && <div>Площадка отключена</div>
                }
                {
                    rate !== undefined &&
                    <div className={`footer-rate ${rate > 0 ? 'active' : 'inactive'}`}>
                        <span className='footer-rate-icon'></span>
                        <span className='footer-rate-text'>
                            {rate > 0 ? `${rate.toLocaleString()} из 5` : 'Портал без рейтинга'}
                        </span>
                        {
                            reviews !== undefined &&
                            <ul>
                                <li>{reviews.total} отзывов, {reviews.notAnswered} неотвеченных</li>
                            </ul>
                        }
                    </div>
                }
                {
                    searchData !== undefined && `Поиск заведений: ${searchData.found} из ${searchData.total}...`
                }
            </div>
        );
    }

    render() {
        const {actionRequired, businessStatus, status, title, mainButtonState, creatingPages, rate, reviews, searchData, updates} = this.props
        return (
            <div className={`portal portal--${status}`}>
                {this.renderTitle(businessStatus, title)}
                {this.renderControls(mainButtonState, creatingPages, status)}
                {this.renderFooter(rate, status, searchData, reviews)}
                <div className='portal-menu'>
                    <div className='menu-point'>{status === 'disabled' ? 'Включить' : 'Отключить'}</div>
                </div>
                {
                    actionRequired &&
                    <button  className='portal-button badge'>
                        <span className='button-icon'></span>
                        Требует действий
                    </button>
                }
                {
                    updates && <div className='portal-updates'>{updates} обновления</div>
                }
            </div>
        );
    }
}

export default Portal;