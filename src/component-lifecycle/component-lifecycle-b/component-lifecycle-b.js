import React, {Component} from 'react'
import './component-lifecycle-b.css'

class ComponentLifecycleB extends Component {
	constructor(props){
		super(props)
		console.log(this.props.data)
	} 
	render (props) {
		return (
			<div className="component-b">
				<ul>
					<li><span>Value 1: </span><span>{this.props.data[1]}</span></li>
					<li><span>Value 2: </span><span>{this.props.data[2]}</span></li>
				</ul>
				<button>Change color of A </button>
			</div>
		)
	}

}

export default ComponentLifecycleB;