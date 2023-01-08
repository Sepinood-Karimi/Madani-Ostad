import classes from './Button.module.css';

const Button = ({children,className}) => {
    const buttonClasses = classes.button + ' ' + className;

    return (
        <button className={buttonClasses}>
            {children}
        </button>
    );
};

export default Button;