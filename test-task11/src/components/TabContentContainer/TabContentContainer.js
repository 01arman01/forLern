import React, {useState} from 'react';
import s from './TabContentContaine.module.css'

function TabContentContainer({data,tabIndex}) {
    // <p style={textStyle}>
    //     {
    //         textOpen ?
    //             message.split('', textLength) : message
    //     }
    // </p>
    const [textOpen, setTexOpen] = useState(70)
    const onChangeTextOpen = ()=>{
        textOpen?setTexOpen(null):setTexOpen(70)
    }
    return (
        <div className={s.main}>
            <h1 className={s.header}>{data[tabIndex].summary}</h1>
            <p> {
               textOpen? data[tabIndex].details.split('',textOpen): data[tabIndex].details
            }
            </p>
            <div>
                <div className={s.footer}>
                    <p className={s.textChangeButton} onClick={onChangeTextOpen}> {textOpen?'open details':'Hide details'}</p>
                    <div className={s.footerlastchild}><span>0</span>
                        <button className={s.buttonLove}>❤️️</button>
                        <button className={s.buttonsRed}>+</button>
                        <button className={s.buttonsRed}>+++</button>
                    </div>
                </div>
                <div>
                    <button className={s.tooButtons}>Undo</button>
                    <button className={s.tooButtons}>Undo Undo in 2s</button>
                </div>
            </div>
        </div>
    );
}

export default TabContentContainer;