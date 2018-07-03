import React, {Component} from 'react'

class DesignComponent extends Component {
	constructor(props){
		super(props)
		this.state = {
			inputFieldValue: "",
			text : "new text added"
		}

	}

	inputValue = (e) => {
		this.setState({inputFieldValue: e.target.value})
	}

	loadText = () => {
		this.setState({text: this.state.inputFieldValue})
	}

	render() {
		return (
			<div>
				<h1>Design Component</h1>
				<input type="text" onChange="this.inputValue"/>
				<button onClick="this.loadText">Add</button>
				<ul>
					<li>
						{this.state.text}
					</li>
				</ul>
			</div>		
		)
	}

}

export default DesignComponent;