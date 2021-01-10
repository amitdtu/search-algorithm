import React, {Component} from 'react'
import './App.css';
import arrow from './assets/images/arrow.svg'
import Header from './Navbar';



class App extends Component{

  state={
    array:[],
    currentIndex: 0,
    find: '',
  }

  runFunction = () => {
    this.setState({currentIndex: this.state.currentIndex+1})
    console.log('currentIndex increamented ')
  }

  componentDidMount() {
    this.generateRandomArray()
  }

  generateRandomArray = () => {
    const randomNumbers = []
    for(let i=0; i<10; i++){
      randomNumbers[i] = Math.floor(Math.random() * 100)
    }
    this.setState({array: randomNumbers, currentIndex: 0, find: ''})
  }

  handleStart = () => {
    if(!this.state.find){
      alert('please enter key to continue')
      return
    }
    this.setState({isStarted: true})
    console.log('program start')
    let counter = 0;
    const repeater = setInterval(() => {
      if(counter < this.state.array.length){
        // this.runFunction()
        console.log(counter)
        if(this.state.array[this.state.currentIndex] === this.state.find){
          alert(`key found at index ${this.state.currentIndex}` )
          console.log('key found')
          clearInterval(repeater)
          this.setState({isStarted: false, currentIndex: 0})
        } else if(this.state.currentIndex < this.state.array.length-1) {
          this.setState({currentIndex: this.state.currentIndex+1})
        }
        counter++;

      } else {
        alert('key not found')
        this.setState({isStarted: false, currentIndex:0})
        clearInterval(repeater)
      }
    },1000)
  }
  render(){
    const {array, currentIndex, find, isStarted} = this.state
    return(
      <>
      <Header />
      <div className="app d-flex bg-light">
        <div class="row container justify-content-center m-auto">
          <div className="col-12 col-sm-8">
            <div className="row justify-content-center mb-4">
              <div className="col-6 col-sm-4 col-md-3">
                <label for="exampleInputEmail1">Enter Key</label>
                <input value={find} disabled={isStarted} type="number" class="form-control" name="key" onChange={(e) => this.setState({find: parseInt(e.target.value)})} ></input>
              </div>
            </div>
              <div className="row">
                {array.map((num, idx) => 
                  <div key={`${idx}-${num}`} className="col">
                    {currentIndex === idx ? <img src={arrow} className="mb-2" /> : null}
                  </div>
                )}
              </div>
              <div class="row position-relative">
                {array.map((num, idx) => 
                    <div  key={idx} class={` col box rounded border p-2 ${find === array[currentIndex] && currentIndex === idx && isStarted ? 'bg-green' : 'bg-blue'}`}>
                      {num}
                    </div>
                )}
              </div>
              <div className="mt-4">
                <button  disabled={isStarted} onClick={this.handleStart} className="btn mr-4 bg-yellow">Start</button>
                <button  disabled={isStarted} onClick={this.generateRandomArray} className="btn bg-green2">Random Array</button>
              </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default App;
