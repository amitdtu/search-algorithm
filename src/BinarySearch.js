import React, {Component} from 'react'
import './App.css';
import arrow from './assets/images/arrow.svg'
import Header from './Navbar';



class App extends Component{

  state={
    array:[],
    currentIndex: 0,
    target: '',
    min:0,
    max:9,
    mid: Math.floor((0+9)/2),
    isStarted: false,
  }

  // runFunction = () => {
  //   this.setState({currentIndex: this.state.currentIndex+1})
  //   console.log('currentIndex increamented ')
  // }

  componentDidMount() {
    this.generateRandomArray()
  }

  generateRandomArray = () => {
    const randomNumbers = []
    for(let i=0; i<10; i++){
      randomNumbers[i] = Math.floor(Math.random() * 100)
    }
    this.setState({array: randomNumbers.sort((a,b) => a-b), currentIndex: 0, target: ''})
  }

  reset = () => {
    this.setState({
      target: '',
      min:0,
      max:9,
      mid: Math.floor((0+9)/2),
      isStarted: false,
    })
  }

  binarySearch = (repeater) => {
    const {min, max, array, target} = this.state

    const mid = Math.floor((min+max)/2)
    if(min > max) {
        alert("no key found")
        clearInterval(repeater)
        this.reset()
    }

    if(array[mid] === target){
        this.setState({mid: mid}, () => {
          alert("key found at " + mid)
          clearInterval(repeater)
          this.reset()
        })
    } else if(array[mid] < target){
        // min = mid;
        this.setState({min: mid+1, mid: Math.floor((mid+1+max)/2)})
    } else {
        // max = mid;
        this.setState({max: mid-1, mid: Math.floor((mid-1+min)/2)})
    }
  }

  handleStart = () => {
    if(!this.state.target){
      alert('please enter key to continue')
      return
    }
    this.setState({isStarted: true,}, () => {
      const repeater = setInterval(() => {
        const {min, max, array, target} = this.state
        this.binarySearch(repeater)
      },1000)
    })
    console.log('program start')
    
    
  }
  render(){
    const {array, currentIndex, target, isStarted, mid, min, max} = this.state
    return(
      <>
      <div className="app d-flex bg-light">
        <div class="row container justify-content-center m-auto">
          <div className="col-12 col-sm-8">
          <h1 className="mb-4 purple">Binary Search</h1>
            <div className="row justify-content-center mb-4">
              <div className="col-6 col-sm-4 col-md-3">
                <label for="exampleInputEmail1">Enter Key</label>
                <input value={target} disabled={isStarted} type="number" class="form-control" name="key" onChange={(e) => this.setState({target: parseInt(e.target.value)})} ></input>
              </div>
            </div>
              {isStarted  ? <div className="row">
                {array.map((num, idx) => 
                  <div key={`${idx}-${num}`} className="col">
                    {mid === idx ? <img src={arrow} alt="arrow" /> : null}
                    {min === idx ?  <p>min</p> : null}
                    {max === idx ? <p>max</p> : null}
                  </div>
                )}
              </div> : null}
              <div class="row position-relative">
                {array.map((num, idx) => 
                    <div  key={idx} class={` col box rounded border p-2 ${idx === mid && array[mid] === target  && isStarted ? 'bg-green' : 'bg-blue'}`}>
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
