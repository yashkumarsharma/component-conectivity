import React, {Component} from 'react'
import './component-a.css'

class ComponentA extends Component {
	render (props) {
		return (
			<div className="box box-a">
				First Name: {this.props.text}
			</div>
		)
	}

}

export default ComponentA;