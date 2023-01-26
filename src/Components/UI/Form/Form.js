import Button from "../Button/Button/Button";
import LongButton from "../Button/LongButton/LongButton";

const Form = ({
  children,
  buttonText,
  className,
  long,
  additionalClassNames,
  buttonActions,
}) => {
  return (
    <form className={className} onSubmit={(e) => e.preventDefault()}>
      {children}
      {long && (
        <LongButton
          additionalClassNames={additionalClassNames}
          onClickButton={buttonActions}
        >
          {buttonText}
        </LongButton>
      )}
      {!long && <Button>{buttonText}</Button>}
    </form>
  );
};

export default Form;
