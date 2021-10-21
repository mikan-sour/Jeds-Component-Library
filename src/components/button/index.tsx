import React from "react";
import './button.css';

interface JedsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant:'primary'|'secondary'
}
 
const JedsButton: React.FC<JedsButtonProps> = ({variant,children, ...props}) => (
    <button className={variant} {...props}>
        {children}
    </button>
);

 
export  { JedsButton, JedsButtonProps };