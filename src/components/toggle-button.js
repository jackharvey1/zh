import './toggle-button.css';

export default ({ children, enabled, handleOnClick }) => {
    const baseClassName = 'toggle-button';
    const enabledClassName = 'toggle-button--enabled';
    const className = enabled
        ? `${baseClassName} ${enabledClassName}`
        : baseClassName;
    return (
        <div className={className} onClick={handleOnClick}>
            {children}
        </div>
    );
};
