import React, {Component} from 'react'
import './component-lifecycle-a.css'

class ComponentLifecycleA extends Component {
	constructor(props){
		super(props)
		console.log(this.props.data)
	} 
	render (props) {
		return (
			<div className="component-a">
				<ul>
					<li><span>Value 1: </span><span>{this.props.data.a}</span></li>
					<li><span>Value 2: </span><span>{this.props.data.b}</span></li>
				</ul>
				<button>Load C</button>

			</div>
		)
	}

}

export default ComponentLifecycleA;