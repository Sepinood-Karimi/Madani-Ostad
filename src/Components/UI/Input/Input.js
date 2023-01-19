import classes from './Input.module.css';

const Input = ({id,labelText,type,placeHolder,className}) => {
    const inputClassName = classes.input + ' ' + className;

  return(
      <>
          <label htmlFor={id}>{labelText}</label>
          <input type={type} id={id} name={id} placeholder={placeHolder} className={inputClassName}/>
      </>
  );
};

export default Input;