import classes from './Faculty.module.css'
import mainClasses from '../../../UI/common.module.css';

const Faculty = () => {
    return (
        <div className={classes.faculty}>
            <p className={classes['faculty-title']}>دانشکده</p>
            <h4 className={classes['faculty-name']}> فناوری اطلاعات</h4>
            <ul className={classes.teachers}>
                <li className={classes.teacher + ' ' + mainClasses['hand-cursor']}>مهدی هاشم زاده</li>
                <li className={classes.teacher + ' ' + mainClasses['hand-cursor']}>مهدی هاشم زاده</li>
                <li className={classes.teacher + ' ' + mainClasses['hand-cursor']}>مهدی هاشم زاده</li>
                <li className={classes.teacher + ' ' + mainClasses['hand-cursor']}>مهدی هاشم زاده</li>
            </ul>
            <p className={classes['all-teachers'] + ' ' + mainClasses['hand-cursor']}>مشاهده همه اساتید</p>
        </div>
    );
};

export default Faculty;