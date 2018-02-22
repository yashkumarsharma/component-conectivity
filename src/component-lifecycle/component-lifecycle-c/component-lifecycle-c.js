import React, {Component} from 'react'
import './component-lifecycle-c.css'

class ComponentLifecycleC extends Component {
	render (props) {
		return (
			<div className="component-lifecycle-c">
				I am Component 'C'.
			</div>
		)
	}

	componentWillUnmount() {
		console.log('done')
	} 

}

export default ComponentLifecycleC;