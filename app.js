import styled from 'styled-components';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/logo.png' ;
import magn from './assets/mag.png'


class News extends Component{
    constructor(){
        super()
        this.state = {
            news : []
        }
        fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=1304dda50b3c4066b642db00ccf7ae98')
        .then((response)=>{
            return response.json()
        }).then((data)=>{
            this.setState({
                news: data.articles
            })
            
        })
    }

    render(){
        return <React.Fragment>
            <header id="navBar">
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
    
            <div>
            
            {
                this.state.news.map((item , i)=>{
                
                    return(
                    <div key={i} id="main">
                        <article  className="article">
                            <div  className="photo">
                                <img width="50%" height="100%"  src={item.urlToImage} alt="photo"/>
                            </div>
                            <div className="content">
                                <div className="head">
                                    <h1>{item.title}</h1>
                                </div>
                                <div className="des">
                                    <p>{item.description}</p>
                                </div>
                                <div className="date">
                                    <time>{item.publishedAt}</time>
                                </div>
                            </div>
                        </article>
                    </div>)
                    

            })
            
            }

            </div>
        </React.Fragment>
        
    }
}


// function NewsItem(){
//     return <div id="main">
//         <article className="article">
//         <div className="photo">
//             <img src="https://unsplash.it/200/200" alt="photo"/>
//         </div>
//         <div className="content">
//             <div className="head">
//                 <h1>Lorem ipsum</h1>
//             </div>
//             <div className="des">
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor earum quod deserunt ullam eos repellat animi cum modi illo, esse quam, tempora ducimus nostrum totam maiores. Saepe, cupiditate aliquid.</p>
//             </div>
//             <div className="date">
//                 <time>19.10.2018</time>
//             </div>
//         </div>
        
//         </article>
        

//     </div>
     

// }




function App(){
    return <div>
        <News/>
    </div>
}

ReactDOM.render(<App/>,document.getElementById('root'))