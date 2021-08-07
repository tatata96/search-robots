import React from 'react';

const Card = (props) => {

    const { name, email, id } = props;//destructuring her seferinde props.name yazmamak için
    return (<div className="tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5"><img alt='robot' src={`https://robohash.org/${id}?200x200`}></img>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>);
}

//props.name js expression olduğu için { } içine yazdık , that way works in jsx
export default Card;

//paranmetre kısmında da direkt destructuringi halledebilirilm { name, email, id } bunu ( ) bunun içine yazarak