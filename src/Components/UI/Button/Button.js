import classes from './Button.module.css';
import mainClasses from '../Common/common.module.css';

const Button = ({children,className}) => {
    const buttonClasses = classes.button + ' ' + className + ' ' + mainClasses['hand-cursor'];

    return (
        <button className={buttonClasses}>
            {children}
        </button>
    );
};

export default Button;