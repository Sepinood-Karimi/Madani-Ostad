import classes from './ContactUs.module.css';
import ContactUsSVG from "../../SVG/ContactUsSVG";
import Input from "../UI/Input/Input";
import Form from "../UI/Form/Form";

const ContactUs = () => {
    const submitButtonText = <>
        ارسال
        <i className="fa fa-paper-plane" aria-hidden="true"/>
    </>;
    return (
        <section className={classes['contact-us']}>
            <div className={classes['contact-us__subject']}>
                <span className={classes['contact-us__icon']}>
                <i className="fa fa-headphones fa-lg" aria-hidden="true"></i>
            </span>
                <div className={classes['contact-us__titles']}>
                    <h4 className={classes['contact-us__title']}>ارتباط با ما </h4>
                    <p className={classes['contact-us__description']}>برای ارتباط با تیم پشتیبانی وبسایت ، از فرم زیر
                        اقدام کنید . مرسی اه</p>
                </div>
            </div>
            <div className={classes['contact-us__form']}>
                <Form buttonText={submitButtonText}>
                    <Input id='name' type='text' labelText='' placeHolder='نام شما'
                           className={classes['contact-us__input']}/>
                    <Input id='number' type='text' labelText='' placeHolder='شماره موبایل'
                           className={classes['contact-us__input']}/>
                    <div>
                        <label htmlFor='comment'></label>
                        <textarea id='comment' name='comment' placeholder='هرچه می خواهد دل تنگت بگو' rows='7' cols='92'
                                  className={classes['contact-us__comment']}></textarea>
                    </div>
                </Form>
                <ContactUsSVG/>
            </div>
        </section>
    );
};

export default ContactUs;

