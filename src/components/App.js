import React, { Component } from "react";
import Overlay from "../components/Overlay";
import '../css/app.css';
import CardItems from '../components/CardItems';
import Searchbox from "../components/Searchbox";
import { aliens } from "../components/alien";
import Scroll from "../components/Scroll";


class App extends Component{
    constructor(){
        super()
        this.state = {
            aliens: aliens,
            searchfield:''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }//end function
    render(){
        const {aliens, searchfield} = this.state;
        const filteredAliens = aliens.filter(alien =>{
            return alien.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        if(!aliens.length){
            return <h1 className="tc">Loading.....</h1>
        }//end if
        else{
            return(
                <section className="tc">
                    <Overlay/>
                    <h1 className='title'>Aliens Friends</h1>
                        <Searchbox searchChange = {this.onSearchChange}/>
                        <Scroll>
                             <CardItems aliens={filteredAliens}/> 
                        </Scroll>  
                 </section>
            );
        }//end else
    }
}
export default App;