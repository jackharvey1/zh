import { useEffect } from 'react';

export default (shortcut, callback) => {
    const handleKeyDown = (event) => {
        if (shortcut === event.key) {
            return callback(event);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });
};
