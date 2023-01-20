import Button from "../../UI/Button/Button";
import classes from "./Main.module.css";
import MainPageSVG from "../../../SVG/MainPageSVG";

const Main = () => {
  return (
    <div className={classes["main-container"]}>
      <main className={classes.main}>
        <h1>!این بار تو به اساتید نمره بده</h1>
        <p>
          ما چند نفر از دانشجو های رشته کامپیوتر اومدیم این سایتو ساختیم تا
          دانشجو ها بتونن راجب
        </p>
        <p>
          اساتید نظر بدن و به ویژگی های مختلفشون نمره بدن ، تا بقیه دانشجو ها
          موقع انتخاب واحد به
        </p>
        <p>راحتی بتونن استاد مورد نظرشونو انتخاب کنن</p>
        <div className={classes.buttons}>
          <Button className={classes["uni-button"]}>
            دانشکده ها<i className="fa fa-university" aria-hidden="true"></i>
          </Button>
          <Button>
            ثبت نام کنید <i className="fa fa-user" aria-hidden="true"></i>
          </Button>
        </div>
      </main>
      <aside className={classes.aside}>
        <MainPageSVG />
      </aside>
    </div>
  );
};

export default Main;