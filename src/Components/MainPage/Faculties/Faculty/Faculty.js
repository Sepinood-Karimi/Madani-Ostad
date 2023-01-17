import classes from './Faculty.module.css'

const Faculty = () => {
    return (
        <div className={classes.faculty}>
            <p className={classes['faculty-title']}>دانشکده</p>
            <h4 className={classes['faculty-name']}> فناوری اطلاعات</h4>
            <ul className={classes.teachers}>
                <li className={classes.teacher}>مهدی هاشم زاده</li>
                <li className={classes.teacher}>مهدی هاشم زاده</li>
                <li className={classes.teacher}>مهدی هاشم زاده</li>
                <li className={classes.teacher}>مهدی هاشم زاده</li>
            </ul>
            <p className={classes['all-teachers']}>مشاهده همه اساتید</p>
        </div>
    );
};

export default Faculty;