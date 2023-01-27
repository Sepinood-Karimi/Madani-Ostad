import Loading from "../Components/Loading/Loading";

const LoadingPage = ({ isOpen, close }) => {
  return <Loading close={close} isOpen={isOpen} />;
};
export default LoadingPage;
