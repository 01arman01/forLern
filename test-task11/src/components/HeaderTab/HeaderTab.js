import React from 'react';
import s from './HeaderTab.module.css'
function HeaderTab({children,tabIndexChange,tabIndexStatus,index}) {
    return (
        <div
            onClick={()=>tabIndexChange(index)}
         className={tabIndexStatus?s.tabsactive:s.tabsinactive}
        >{children}</div>
    );
}

export default HeaderTab;