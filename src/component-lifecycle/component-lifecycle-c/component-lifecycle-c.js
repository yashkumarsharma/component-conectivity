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

	ComponentWillUnmount() {
		if(this.props.isDestroy) 
			this.ComponentLifecycleC.destroy()
	} 

}

export default ComponentLifecycleC;