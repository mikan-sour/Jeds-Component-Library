import React from "react";
import './textbox.css';

interface JedsInputProps extends React.HTMLProps<HTMLInputElement>  {}
 
const JedsInput: React.FC<JedsInputProps> = ({...props}) => {
    return <input type="text" className='input' {...props}/>;
}
 
export { JedsInput, JedsInputProps };