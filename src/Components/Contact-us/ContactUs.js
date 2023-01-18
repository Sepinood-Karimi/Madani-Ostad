import classes from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <section className={classes['contact-us']}>
            <span className={classes['contact-us__icon']}>
                <i className="fa fa-headphones fa-lg" aria-hidden="true"></i>
            </span>
            <div className={classes['contact-us__titles']}>
                <h4 className={classes['contact-us__title']}>ارتباط با ما </h4>
                <p className={classes['contact-us__description']}>برای ارتباط با تیم پشتیبانی وبسایت ، از فرم زیر اقدام کنید . مرسی اه</p>
            </div>
        </section>
    );
};

export default ContactUs;