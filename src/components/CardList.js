import React from 'react';
import Card from '../components/Card';


const CardList = ({ robots }) => {

    return (//jsx için {cardComponnet yazdık}

        <div>{
            robots.map((user, index) => {
                //we want to return a card component
                //key props should normally sth unique like id, to make it easier to remove in deletions of cards
                return (<Card
                    key={index}
                    id={robots[index].id}
                    name={robots[index].name}
                    email={robots[index].email} />
                );
            })}
        </div>

    );
}
//CardList is a pure, deterministic function
//if robots(prop) is same it will always render(return) the same things
//so CardList is a PURE COMPONENT
export default CardList;