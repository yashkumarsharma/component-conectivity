import React, {Component} from 'react'
import './component-lifecycle-b.css'

class ComponentA extends Component {
	render (props) {
		return (
			<div className="component-b">
				b
			</div>
		)
	}

}

export default ComponentA;