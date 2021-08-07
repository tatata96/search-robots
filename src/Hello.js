import React, { Component } from 'react';//destructuring, React.Component diyeceğimize direkt Component diyoruz bu sayede
import './Hello.css';//bu componentın css i 
class Hello extends Component {
    //we always have a render function, we tell what we want to return
    render() {

        //console a bakınca class yerine className kullan dedi çünkü yukarda class var
        return (
            <div className="f1 tc"><h1>Hello World</h1>
                <p>{this.props.greeting}</p></div>
        );

    }
}

//class f1 ve tc tachyons sayesinde font1 ve text center demek ->package ekledikten  ekledikten sonra 
//değişiklik yaparsam önce npm start yapıp serverın çalıştıdığından emin ol

//we have to export it for it to work
//default means you only export one thing
export default Hello;
