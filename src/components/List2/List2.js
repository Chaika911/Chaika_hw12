import React from "react";

const List2 = ({items}) => {
    return(
        <ol>2
            {items.map(element => {
                const {id, name} = element;
                return <li key={id}>{name}</li>
            })}
        </ol>
    )
}

export default List2;