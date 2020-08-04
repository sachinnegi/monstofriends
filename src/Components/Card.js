import React, {Fragment} from 'react';
const Card = (props)=>{
    const {id,name,email} = props;
    return(
        <Fragment>
            <div className="bg-light-green dib br3 ma3 pa3 grow bw2 shadow-5 tc">
                <img src={`https://robohash.org/${id}?set=set2`} alt='robot' height='200px' width='200px'/>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </Fragment>
    );
}
export default Card;