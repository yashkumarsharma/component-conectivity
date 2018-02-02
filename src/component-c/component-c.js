import React, {Component} from 'react'
import './component-c.css'

class ComponentC extends Component {
	render (props) {
		return (
			<div class="box box-c">
				{this.props.text}
			</div>
		)
	}

}

export default ComponentC;