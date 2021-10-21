import React from "react";
import './button.css';
interface JedsButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary';
}
declare const JedsButton: React.FC<JedsButtonProps>;
export { JedsButton, JedsButtonProps };
