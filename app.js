import styled from 'styled-components';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/logo.png' ;




class News extends Component{
    constructor(){
        super()
        this.state = {
            news : [],
            searchValue:''
        }

        this.getNews()

        
    }

    getNews(searchTerm = 'Iraq'){
        fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=978d6c3818ff431b8c210ae86550fb1f`)
        .then((response)=>{
            return response.json()
        }).then((data)=>{
            this.setState({
                news: data.articles
                
            })
        })
    }

    

    onInputChange(event){
        this.setState({
          searchValue: event.target.value
        })
      } 


      OnKeyUp(event){
        if (event.key == 'Enter') {

            this.getNews(this.state.searchValue)
            this.setState({
                searchValue:''
            })
            
        }
      }



    

    render(){
        return <React.Fragment>
            <header id="navBar">
                <div >
                    <img id="logo" src={logo} alt="logo"/>
                </div>
                <div id="search">
                <div id="search-box">
                        <input  id="search" placeholder="Search term" type="text" onKeyUp={this.OnKeyUp.bind(this)} onChange={this.onInputChange.bind(this)} value={this.state.searchValue}/>
                </div>
                </div>
            </header>
    
            <div>
            {
                this.state.news.map((item , i)=>{
                    console.log(item)
                    return(
                    <div key={i} id="main">
                        <article  className="article">
                            <div  className="photo">
                                <img  className="img"  width="165" height="165" src={item.urlToImage} alt="photo"/>
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




function App() {
    return <div>
      <News/>
    </div>
  }
  
  ReactDOM.render(<App/>, document.getElementById('root'))