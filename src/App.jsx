import React, {Component} from 'react';
import fortuneCookieImg from './assets/Fortune_cookie.png'
import Button from './components/Button'
import Message from './components/Message'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: '',
      buttonValue: 'Break Cookie'
    }

    this.handleClick = this.handleClick.bind(this)

    this.messages = ['Every cloud has a silver lining', 'Give someone the cold shoulder', 'Go on a wild goose chase', 'Get a taste of your own medicine']

    
  }

  handleClick(ev) {
    let state = this.state
    let randomNumber = Math.floor(Math.random() * this.messages.length)
    
    state.message = this.messages[randomNumber]
    state.buttonValue = 'Get another message'
    this.setState(state)
     
  }

  render() {
    return (
      <div className="container">
        <img src={fortuneCookieImg} />
        <Button value={this.state.buttonValue} action={this.handleClick} />
         
         {this.state.message && 
         <Message message={this.state.message}/>
        }
        
        
      </div>
    )
  }

}


export default App;