import React, { Component } from 'react';

import Coin from './Coin';

class Flipper extends Component{

    constructor(props){
        super(props);
        this.state ={
            face : 'head',
            heads : 0,
            tails: 0,
            count: 0
        }
    }


    handleFlip = (e) => {

        var flip = Math.floor(Math.random()* 2);
        var face = flip? 'heads' : 'tails';
        console.log( flip +' '+  face)
        if (face === 'heads'){
          this.setState( curState => {return {face: 'head',heads: curState.heads+1, count : curState.count+1}});}
        else{
          this.setState( curState => {return {face: 'tails',tails: curState.tails+1, count : curState.count+1}});}

        }


    



    render(){

        return(<div>

            <Coin face={this.state.face} />
        <h1>Out of {this.state.count} counts, there have been {this.state.heads} heads and {this.state.tails} tails.</h1>
            <button onClick={this.handleFlip}>Flip Coin</button>


        </div>)




    }}









export default Flipper;