import React from 'react';
import './Notifications.css'
import { Button } from 'react-bootstrap';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

const Notifications = () => {
    return (
        <div className='Notifications'>
            <p style={{ display: 'inline', marginRight: '80% '}}>
                Here is the list of notifications
            </p>
            <Button
                aria-label='Close'
                onClick={console.log('Close button has been clicked')}
            >
                <img style={{ display: 'inline' }} src={closeIcon} alt='Close'/>
            </Button>
            <ul>
                <li data='default'>New course available</li>
                <li data='urgent'>New resume available</li>
                <li
                        data='urgent'
                        dangerouslySetInnerHTML={{ __html: getLatestNotification}}
                ></li>
            </ul>
        </div>
    );
};

export default Notifications;