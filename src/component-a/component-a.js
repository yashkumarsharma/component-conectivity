import React, {Component} from 'react'
import './component-a.css'

class ComponentA extends Component {
	render (props) {
		return (
			<div class="box box-a">
				Name: {this.props.text}
			</div>
		)
	}

}

export default ComponentA;