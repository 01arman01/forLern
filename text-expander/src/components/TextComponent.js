import React, {useState} from 'react';

function TextComponent({
                           bgc = 'white',
                           textColor = 'black',
                           fontWeight = 400,
                           buttonColor = 'blue'

                       }) {
    let textLength = 20
    const [textOpen, setTextOpen] = useState(textLength)
    const onclickTextOpen = () => {
        setTextOpen(textOpen ? null : textLength)
    }


    const styleTextContainer = {
        backgroundColor: bgc,
        color: textColor,
    }
    const textStyle = {
        fontWeight,
        textAlign: 'start',
        display: 'inline'
    }
    const buttonStyle = {
        color: buttonColor,
        cursor: 'pointer'
    }
    const message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam asperiores autem beatae consequatur deserunt fugiat, fugit id in iusto libero non quaerat reprehenderit ut velit. Adipisci aliquam asperiores doloremque dolorum exercitationem, facere magni officiis quasi quibusdam tempora. In, voluptatem!'
    return (
        <div style={styleTextContainer}>
            <p style={textStyle}>
                {
                    textOpen ?
                        message.split('', textLength) : message
                }
            </p>
            <span onClick={onclickTextOpen} style={buttonStyle}> test...</span>

        </div>
    );
}

export default TextComponent;
