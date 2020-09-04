import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      petrolpumps:[],
      output:[],
    }
}
showValue(){
  const output =[]
  const petrolpumps=[]
  for (var i = 0; i < 5; i++)
{
  petrolpumps.push(Math.floor(Math.random() * 100))
}
this.setState({petrolpumps:petrolpumps})
// console.log('petrolpumps' , petrolpumps)

  const totalDistance = 100
  let distanceCovered = 0
  let initialPetrol = 30

  for (var i = 0; distanceCovered<=totalDistance; i++)
{
    let randomMove= Math.floor((Math.random() * 6)+1)
    let petrolstatus = initialPetrol - randomMove
    initialPetrol = petrolstatus
    let addpetrol = 20
   let gamestatus = distanceCovered+randomMove >= 100 ? "Reached" : ""

    if ( petrolpumps.indexOf(distanceCovered+randomMove) > -1)
    {
      initialPetrol = petrolstatus + addpetrol
      petrolstatus = petrolstatus + addpetrol
    }
 
    output.push(`Move ${i+1} - Car at ${distanceCovered+randomMove}, petrol remaining ${petrolstatus} ${gamestatus} `)
    if(petrolstatus < randomMove) {
      // gamestatus = "Game Over...."
      output[output.length-1] = output[output.length-1]+"Game Over"
      break
    }
    distanceCovered = distanceCovered + randomMove
}

this.setState({output:output})
{distanceCovered===totalDistance ? 'Reached' : 'GameOver'}
}
  render() {
    return<div>
          <span>Game </span> <button onClick={this.showValue.bind(this)}>Start</button>
          <br/>
          Petrol pumps generated at :
          {this.state.petrolpumps.sort(function(a, b) {
                return a - b;
            }).toString()}
          <br/>
          <br/>
          <div>{this.state.output.map(item=><div>{item}</div>)}</div>
          <br/>
    </div>

}
}
export default App;
