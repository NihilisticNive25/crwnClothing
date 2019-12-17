import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const Topic  = (props) => {
	console.log(props);
	return (
		<div>
		<button onClick={() => props.history.push("/")}> HomePage </button>
		
			<h1>Topics  page</h1>
		
		</div>
	)
};


const TopicDetails = (props) => {
	console.log(props)
	return (
		<div>
			<h1>Topics Detail page</h1>
		</div>
	)
}

function App() {
  return (
    <div>
      <Switch>
      	<Route exact path="/" component={HomePage}/>
      	<Route exact path="/topics" component={Topic}/>
      	<Route path="/topics/:topicId" component={TopicDetails}/>
      </Switch>
    </div>
  );
}

export default App;
