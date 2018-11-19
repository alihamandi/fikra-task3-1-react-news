import styled from 'styled-components';
import React,{Components} from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/logo.png' ;
import magn from './assets/mag.png'





function Navbar(){
    return <header id="navBar">
        <div >
            <img id="logo" src={logo} alt="logo"/>
        </div>
        <div id="search">
            <div id="search-box">
                <div >
                    <img id="magn" src={magn} alt=""/>  
                </div>
                <input id="search" placeholder="Search a topic" type="text"/>
            </div>
        </div>
    </header>
}

function Body(){
    return <article>
        <div className="photo">
            <img src="https://unsplash.it/200/200" alt="photo"/>
        </div>
        <div className="head">
            <h1>Lorem ipsum</h1>
        </div>
        <div className="des">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor earum quod deserunt ullam eos repellat animi cum modi illo, esse quam, tempora ducimus nostrum totam maiores. Saepe, cupiditate aliquid.</p>
        </div>
        <div className="date">
            <time>19.10.2018</time>
        </div>
    </article>

}




function App(){
    return <div>
        <Navbar/>
        <Body/>
    </div>
}

ReactDOM.render(<App/>,document.getElementById('root'))