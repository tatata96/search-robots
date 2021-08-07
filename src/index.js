import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';//. means same directory, check src folder
import App from './containers/App';//means App.js , extension koymazsan js olduğunu assume ediyor, src de App.js var o yani bu
//import Hello from './Hello';
import * as serviceWorker from './serviceWorker';
//import Card from './Card';
//import CardList from './CardList';
import 'tachyons';//command de: npm install tachyons yaparak   bu yeni paketi ekledik,package.jsonda görebiliriz
//bu css i kolaylaştıran bişi
import { robots } from './robots';//export default olmadığı için destructuring yapmalıyız


// public dosyasındaki indexedDB.html de: body de sadece bir div var (id="root") 
// o divin de içi boş görünüyor, ama browserda çalışırken boş değil

//we are grabbing the element with id=root
//and we want to "render" this "App" COMPONENT
//ReactDOM.render(<App />, document.getElementById('root'));//sample app çalışıyo normalde

//bununla değiştirip kaydedince browserı refreshlemeden değişiyor
//ve command propmta "App is imported but never used gibi uyarılar veriyor" bu yüzden import App i commente alıyoruz
//warning vermeyi bırakıyor
//ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));

//creating our own component Hello
//ReactDOM.render(<Hello greeting={"Hi Tamara"} />, document.getElementById('root'));
//now we have added a greeting props, Hello.js de buna erişimim var

//creating a card component
ReactDOM.render(
    <div>
        <App />

    </div>
    , document.getElementById('root'));//sample app çalışıyo normalde



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
