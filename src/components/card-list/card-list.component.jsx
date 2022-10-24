import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
    const { monsters } = props;
    return(
        <div className="card-list">
            {monsters.map((monster) => {
                const {name, email, id} = monster;
                return (
                    <Card key={id} name={name} email={email} id={id} />
                );
            })};
        </div>
    )
}

export default CardList;