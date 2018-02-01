import React, {Component} from 'react'
import ComponentB from './component-b/component-b'
import './component-a.css'

class ComponentA extends Component {
	render () {
		return (
			<div class="box box-a">
				<ComponentB text={this.state.text}/>
			</div>
		)
	}

}

export default ComponentA;