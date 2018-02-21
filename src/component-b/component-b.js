import React, {Component} from 'react'
import ComponentA from '../component-a/component-a'
import ComponentC from '../component-c/component-c'
import './component-b.css'

class ComponentB extends Component {
	constructor(props) {
		super(props)
		this.state = {
				'inputValue': '',
				'text': '',
				isVisible: false
		}
	} 
	textOnChange = e => {
		this.setState({'inputValue': e.target.value})
	}

	loadText = () => {
		this.setState({
			'text': this.state.inputValue,
		})
		if( this.state.inputValue === 'divya') {
			this.setState({
				isVisible: true,
			})
		}
	}
	render () {
		const text = this.state.text
		const isVisible = this.state.isVisible
		return (
			<div class="box box-b">
				<input type='text' onChange={this.textOnChange} /> <button onClick={this.loadText} >Enter</button>
				<ComponentA text={text} />
				{isVisible && <ComponentC text="Hello I am Divya" /> }
			</div>
		)
	}
}

export default ComponentB;