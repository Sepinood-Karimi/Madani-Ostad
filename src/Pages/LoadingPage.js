import Additional from "../Components/UI/Additional/Additional";

const LoadingPage = () => {
  return (
    <Additional
      isOpen={true}
      text="... در حال انتقال به صفحه ای دیگر"
      title="لطفا صبر کنید"
    />
  );
};
export default LoadingPage;
