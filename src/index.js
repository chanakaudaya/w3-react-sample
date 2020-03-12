import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './App.js';
import HelloUser from './HelloUser.js';
import FriendsContainer from './Friends.js';
import Room from './Room.js';
import Reddit from './Reddit.js';

//const myfirstelement = <h1>Hello React!</h1>

class Car extends React.Component {
    constructor() {
        super();
        this.state = {color: "red"};
    }
    render() {
        return <h2>Hi, I am a {this.state.color} Car!</h2>
    }
}

function Van() {
    return <h2>Hi, I am also a Car!</h2>
}

class Garage extends React.Component {
    render() {
      return (
        <div>
        <h1>Who lives in my Garage?</h1>
        <Car />
        </div>
      );
    }
  }

class NewCar extends React.Component {
    render() {
        return <h2>I am a {this.props.color} Car!</h2>
    }
}

class Car3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }

  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol };
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }
  class Football extends React.Component {
    shoot = (a) => {
      alert(a);
    }
    render() {
      return (
        <button onClick={() => this.shoot("Goal")}>Take the shot!</button>
      );
    }
  }
  
//   ReactDOM.render(<Football />, document.getElementById('root'));

// ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));

//ReactDOM.render(<NewCar color="red" />, document.getElementById('root'));
//ReactDOM.render(<Header />, document.getElementById('root'));

// class MyForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { username: '' };
//     }
//     myChangeHandler = (event) => {
//       this.setState({username: event.target.value});
//     }
//     render() {
//       return (
//         <form>
//         <h1>Hello {this.state.username}</h1>
//         <p>Enter your name:</p>
//         <input
//           type='text'
//           onChange={this.myChangeHandler}
//         />
//         </form>
//       );
//     }
//   }
  
//   ReactDOM.render(<MyForm />, document.getElementById('root'));

// class MyForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { username: '' };
//     }
//     myChangeHandler = (event) => {
//       this.setState({username: event.target.value});
//     }
//     render() {
//       let header = '';
//       if (this.state.username) {
//         header = <h1>Hello {this.state.username}</h1>;
//       } else {
//         header = '';
//       }
//       return (
//         <form>
//         {header}
//         <p>Enter your name:</p>
//         <input
//           type='text'
//           onChange={this.myChangeHandler}
//         />
//         </form>
//       );
//     }
//   }
  
//   ReactDOM.render(<MyForm />, document.getElementById('root'));
/*
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      alert("You are submitting " + this.state.username);
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name, and submit:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        <input
          type='submit'
        />
        </form>
      );
    }
  }
  
  ReactDOM.render(<MyForm />, document.getElementById('root'));

  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        age: null,
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      if (nam === "age") {
        if (!Number(val)) {
          alert("Your age must be a number");
        }
      }
      this.setState({[nam]: val});
    }
    render() {
      return (
        <form>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>Enter your age:</p>
        <input
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
        </form>
      );
    }
  }
  
  ReactDOM.render(<MyForm />, document.getElementById('root')); 

  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        age: null,
      };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      let age = this.state.age;
      if (!Number(age)) {
        alert("Your age must be a number");
      }
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>Enter your age:</p>
        <input
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
        <br/>
        <br/>
        <input type='submit' />
        </form>
      );
    }
  }
  
  ReactDOM.render(<MyForm />, document.getElementById('root'));

  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        age: null,
        errormessage: ''
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err = '';
      if (nam === "age") {
        if (val !="" && !Number(val)) {
          err = <strong>Your age must be a number</strong>;
        }
      }
      this.setState({errormessage: err});
      this.setState({[nam]: val});
    }
    render() {
      return (
        <form>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>Enter your age:</p>
        <input
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
        {this.state.errormessage}
        </form>
      );
    }
  }
  
  ReactDOM.render(<MyForm />, document.getElementById('root'));

  class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mycar: 'Volvo'
      };
    }
    render() {
      return (
        <form>
        <select value={this.state.mycar}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
        </form>
      );
    }
  }*/
  
  ReactDOM.render(<Reddit />, document.getElementById('root'));
   
   
   
   
   
   
  
  