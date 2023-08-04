import React, { Component } from "react";
import Overlay from "./Overlay";
import './app.css';
import CardItems from './CardItems';
import Searchbox from "./Searchbox";
import { aliens } from "./alien";


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
        const filteredAliens = this.state.aliens.filter(aliens =>{
            return aliens.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        });
        return(
            <section className="tc">
                <Overlay/>
                <h1 className='title'>Aliens Friends</h1>
                    <Searchbox searchChange = {this.onSearchChange}/>
                    <CardItems aliens={filteredAliens}/>   
             </section>
        );
    }
}
export default App;