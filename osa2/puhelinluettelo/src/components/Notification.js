import React from 'react';

const Notification = ({notification, setNotification}) => {
    if (!notification || notification.message === null) {
        return null
    }

    // type should be either error, warning or success
    let type = notification.type ? notification.type : 'warning';

    setTimeout(() => {
        setNotification(null);
    }, 4000);

    return (
        <div className={`message ${type}`}>
            {notification.message}
        </div>
    );
};

export default Notification;