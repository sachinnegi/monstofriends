import React from 'react';
// import {robots} from './robots';
import Card from './Card';
const CardsArray = ({ robots })=>{
    
    return(
        <div>
            {
                robots.map((user,i) => {
                    return (
                    <Card
                        key = {robots[i].id.toString()}
                        id = {robots[i].id}
                        name = {robots[i].name}
                        email = {robots[i].email}
                        />
                    )
                }
                )
            }
        </div>
    );
}
export default CardsArray;