import React from "react";
import { Spinner } from "react-bootstrap";
import './Loader.scss'

export const Loader = () => {
    return (
        
        <div className="div-spinner">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        
        
    );
}

export default Loader;

