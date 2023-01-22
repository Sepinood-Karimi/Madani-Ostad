import Button from "../Button/Button";
import LongButton from "../Button/LongButton";

const Form = ({
  children,
  buttonText,
  className,
  long,
  additionalClassNames,
}) => {
  return (
    <form className={className}>
      {children}
      {long && (
        <LongButton additionalClassNames={additionalClassNames}>
          {buttonText}
        </LongButton>
      )}
      {!long && <Button>{buttonText}</Button>}
    </form>
  );
};

export default Form;
