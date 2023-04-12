import Button from "../Button/Button/Button";
import LongButton from "../Button/LongButton/LongButton";

const Form = ({
  children,
  buttonText,
  className,
  long,
  additionalClassNames,
  buttonActions,
  additionalButtonClasses,
}) => {
  return (
    <form className={className} onSubmit={(e) => e.preventDefault()}>
      {children}
      {long && (
        <LongButton
          additionalClassNames={additionalClassNames}
          onClickButton={buttonActions}
          isLoading={true}
        >
          {buttonText}
        </LongButton>
      )}
      {!long && (
        <Button
          className={additionalButtonClasses}
          buttonAction={buttonActions}
        >
          {buttonText}
        </Button>
      )}
    </form>
  );
};

export default Form;
