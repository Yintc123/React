import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const DropdownComp = (props) => {
    // const directions = ['up', 'up-centered', 'down', 'down-centered', 'start', 'end'];
    const direction = props.direction;
    return (
        <div className="mb-2">
            <DropdownButton
            as={ButtonGroup}
            key={direction}
            id={`dropdown-button-drop-${direction}`}
            drop={direction}
            variant="secondary"
            title={props.name}
            >
                {props.pages.map((page, index) => {
                    return <Dropdown.Item key={page.pageName} eventKey={index} href={page.path}>{page.pageName}</Dropdown.Item>
                })}
            </DropdownButton>
        </div>
    )
}

export default DropdownComp;