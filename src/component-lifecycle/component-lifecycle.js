import React, {Component} from 'react'

class ComponentLifeCycle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isVisible: false
		}
		console.log('constructor')
	}

	clickMe = () => {
		this.setState({'isVisible': true})
	}

	render () {
		const isVisible = this.state.isVisible
		return (
			<div className="a">
				<button onClick={this.clickMe} >Click Me</button>
				{this.props.divya}
			</div>
		)
	}

	componentWillMount() {
		console.log('componentWillMount')
	}

	componentDidMount() {
		console.log('componentDidMount')
	}

	componentWillReceiveProps(props) {
		console.log('componentWillReceiveProps')
	}

	shouldComponentUpdate() {
		console.log('shouldComponentUpdate')
		return true
	}

	componentWillUpdate() {
		console.log('componentWillUpdate')
	}

	componentDidUpdate() {
		console.log('componentDidUpdate')
	}

	componentWillUnmount() {
		console.log('componentWillUnmount')
	}

	componentDidCatch() {
		console.log('componentDidCatch')
	}
}

export default ComponentLifeCycle;