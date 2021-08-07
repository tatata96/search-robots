import React from 'react';

const Scroll
    = (props) => {
        //return props.children;//if we run this nothing changes
        //props have children->we can create components that wrap other component like Scroll

        //css style yazmanın jsx syntaxi bu, görmek için border ı 5px yap
        return (

            <div style={{ overflowY: 'scroll', marginTop: "3%", border: '5px solid silver', height: '70vh' }}>
                {props.children}
            </div>
        );
    };

export default Scroll;