import Button from "../Button/Button";

const Form = ({ children, buttonText, className }) => {
  return (
    <form className={className}>
      {children}
      <Button>{buttonText}</Button>
    </form>
  );
};

export default Form;
