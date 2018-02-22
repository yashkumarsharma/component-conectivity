import React, {Component} from 'react'
import './component-lifecycle-b.css'

class ComponentLifecycleB extends Component {
	constructor(props){
		super(props)
		console.log(this.props.data)
	} 

	indexing = () => {
		const arr = []
		for (var i = 0; i < this.props.data.length; i++) {
			console.log(i, "D")
			arr.push(<li><span>Value :{i+1} </span><span>{this.props.data[i]}</span></li>)
		}
		return <div>{arr}</div>
	}

	render (props) {
		return (
			<div className="component-b">
				<h2>Loop 1</h2>
				<ul>
				{this.indexing()}
				</ul>
				<h2>Loop 2</h2>
				<ul>
					{this.props.data.map(function(value, index){
						return <li key={index}>value: {value}</li>
					})}
				</ul>
				<button onClick={() => this.props.onButtonClick()}>Change color of A </button>
			</div>
		)
	}

}

export default ComponentLifecycleB;