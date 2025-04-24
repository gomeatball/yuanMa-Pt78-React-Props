import React from "react";

//include images into your bundle
import SimpleCounter from "./SimpleCounter"


const calculateSeconds = (aCounter, placeValue) => {
return Math.floor(aCounter / placeValue) % 10;
}

//create your first component
const Home = (props) => {
	return (
	
		<>
		<SimpleCounter 
		thousandDigit = {calculateSeconds(props.counter,1000)}
		hundredDigit = {calculateSeconds(props.counter,100)}
		tenDigit = {calculateSeconds(props.counter,10)}
		oneDigit = {calculateSeconds(props.counter,1)}
		/>
		</>
		
	)
}

export default Home;