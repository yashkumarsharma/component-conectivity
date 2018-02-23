import React, {Component} from 'react'
import './component-lifecycle-a.css'

class ComponentLifecycleA extends Component {
	constructor(props){
		super(props)
		console.log(this.props.data)
		this.state = {
			color: 'white'
		}
	} 

	componentWillReceiveProps(nextProps) {
		this.setState({color: nextProps.colorOfA})
		console.log(nextProps.colorOfA + "nextProps")
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.colorOfA === 'orange') return false

		console.log('shouldComponentUpdate 2')
		return true
	}

	render (props) {
		return (
			<div className="component-a" style={{'background': this.state.color}}>
			{this.state.color}
				<ul>
					<li><span>Value 1: </span><span>{this.props.data.a}</span></li>
					<li><span>Value 2: </span><span>{this.props.data.b}</span></li>
				</ul>
				<button onClick={() => this.props.onClickDestroy() }>Destroy C</button>

			</div>
		)
	}

}

export default ComponentLifecycleA;