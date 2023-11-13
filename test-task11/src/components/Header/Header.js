
import HeaderTab from "../HeaderTab/HeaderTab";
import s from './Header.module.css'

function Header({data,tabIndex,tabIndexChange}) {

    return (
        <div className={s.header}>
            {
                data.map((item,index)=>{
                    return<HeaderTab key={index} index={index} tabIndexStatus={tabIndex === index} tabIndexChange={tabIndexChange}> Tab {index + 1}</HeaderTab>
                })
            }
        </div>
    );
}
export default Header;