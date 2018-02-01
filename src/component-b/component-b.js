import React, {Component} from 'react'
import './component-b.css'

class ComponentB extends Component {
	constructor(props) {
		super(props)
		this.state = {
				'text': ''
		}
	} 
	loadText = e => {
		this.setState({'text': e.target.value})
	}
	render () {
		const text = this.state.text
		return (
			<div class="box box-b">
				<input type='text' onChange={this.loadText} />
			</div>
		)
	}

}

export default ComponentB;