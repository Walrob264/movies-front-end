import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonsEditDelete = ({ onDelete, onUpdate, size=' ', rounded=false }) => {
    return (
        <div className="d-flex justify-content-end">
            <Button
                variant='danger'
                size={size}
                className="me-1 btn-dark"
                onClick={onDelete}
                style={{borderRadius: rounded ? "50%" : ""}}
            >
                <i className="fa-solid fa-trash-can"></i>
            </Button>
            <Button 
                variant='warning' 
                size={size} 
                onClick={onUpdate}
                className="me-1 btn-dark"
                style={{borderRadius: rounded ? "50%" : ""}}
            >
                <i className="fa-solid fa-pen-to-square"></i>
            </Button>
        </div>
    );
};

export default ButtonsEditDelete;