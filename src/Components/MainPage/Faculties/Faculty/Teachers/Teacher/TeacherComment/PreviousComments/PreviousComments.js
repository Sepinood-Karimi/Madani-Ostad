import classes from "./PreviousComments.module.css";
import classnames from "classnames";
import commonClasses from "../../../../../../../UI/Common/common.module.css";
const PreviousComments = () => {
  return (
    <>
      <div className={classnames(classes.comment)}>
        <div className={classnames(classes["comment-title"])}>
          <p className={classnames(classes.author)}>: ناشناس میگه </p>
          <p
            className={classnames(classes.answer, commonClasses["hand-cursor"])}
          >
            پاسخ
          </p>
        </div>
        <p className={classnames(classes["comment-text"])}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
    </>
  );
};

export default PreviousComments;
