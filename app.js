import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './assets/logo.png' ;
import up from './assets/green.png' ;
import down from './assets/grey.png' ;





class News extends Component{
    constructor(){
        super()
        this.state = {
            news : [],
            searchValue:'',
            articleNo : 20,
            sorting : ''
        }

        this.getNews()

        
      }

      onSortChange(event){
        this.setState({ 
            sorting : event.target.value
        })
        this.getNews(this.state.searchTerm , this.state.sorting)
    }

    getNews(searchTerm = 'iraq' , sorting = 'publishedAt'){
        fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=${sorting}&apiKey=1304dda50b3c4066b642db00ccf7ae98`)
        .then((response)=>{
            console.log(sorting)
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
    onNoChange(event){
          this.setState({
            articleNo : event.target.value
          })
      }




    render(){
        return <React.Fragment>
            <header id="navBar">
                <div >
                    <img id="logo" src={logo} alt="logo"/>
                </div>
                <div id="options">
                    <div id="lists">
                        <select id="select1" onChange={this.onNoChange.bind(this)}>
                        <option value="20">20</option>
                        <option value="15">15</option>
                        <option value="10">10</option>
                        <option value="5">5</option>
                        </select>
                        <select id="select2" onChange={this.onSortChange.bind(this)}>
                        <option value="publishedAt">default(date)</option>
                        <option value="publishedAt">Date</option>
                        <option value="title">Title</option>
                        <option value="voting">Most voted</option>
                        </select>
                    </div>
                    <div id="search-box">
                            <input  id="search" placeholder="Search term" type="text" onChange={this.onInputChange.bind(this)} onKeyUp={this.OnKeyUp.bind(this)}  value={this.state.searchValue}/>
                    </div>
                </div>
            </header>
    
            <div>
                {this.state.news.map((item , i)=>{
                    console.log(item)
                    if (i<this.state.articleNo) {
                        return(
                            <div key={i} id="main">
                                <article  className="article">
                                    <div className="body">
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
                                    </div>
                                    
                                    <div className="arrows">
                                        <img width="30px" src={up} alt="up vote"/>
                                        <p>0</p>
                                        <img width="30px" src={down} alt="down vote"/>
                                    </div>
                                </article>
                            </div>
                )}})}
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