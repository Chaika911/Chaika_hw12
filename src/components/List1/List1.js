import React from "react";

const List1 = ({items}) => {
    return(
        <ul>1
            {items.map(element => {
                const {id, name} = element;
                return <li key={id}>{name}</li>
            })}
        </ul>
    )
}

export default List1;