import React from "react";

import s from "./Button.module.scss";

function Button ({ className, type = "button", children, disabled = false }) {
    return (
        // первый вариант
        // <button className={props.className} style={{backgroundColor: props.color}}>{props.text}</button>
        // второй вариант написания текста названия кнопки
        // <button className={props.className} style={{backgroundColor: props.color}}>{props.children}</button>

        // третий вариант со стилями в отдельном файле
        <button 
            className={`${s.button} ${className}`} 
            type={type} 
            disabled={disabled}
            >
                {children}
        </button>
    )
}

export default Button;