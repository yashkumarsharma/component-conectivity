import React, {Component} from 'react'
import './component-lifecycle.css'
import ComponentLifecycleA from './component-lifecycle-a/component-lifecycle-a'

import ComponentLifecycleB from './component-lifecycle-b/component-lifecycle-b'

class ComponentLifeCycle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loader: false
		}
		this.json = {
			a: 'aa',
			b: 'bb'
		}
		this.array = [1,2,3,4,5]
		console.log('constructor')
	}

	componentWillMount() {
		console.log('componentWillMount')
		this.setState({'loader': true})
		console.log(this.state.loader + "1");
	}

	render () {
		//const isVisible = this.state.isVisible
		const loader = this.state.loader
		console.log(this.state.loader + "2");

		return (
			<div className="wrapper">
				{loader && <div className="loader">
				<img src='http://4.bp.blogspot.com/-WL7QPLfJZE8/Uy6-Q_MlOeI/AAAAAAAABaE/p7-7s8JUuWs/s1600/red+loader.gif' />
				</div>}

				{!loader && <ComponentLifecycleA data={this.json}/>}
				{!loader && <ComponentLifecycleB data={this.array}/>}
				
			</div>

		)
	}

	componentDidMount() {
		console.log('componentDidMount')
		setTimeout(() => {
			this.setState({'loader': false})
		},3000)
	}

	componentWillReceiveProps(props) {
		console.log('componentWillReceiveProps')
	}

	shouldComponentUpdate() {
		console.log('shouldComponentUpdate')
		return true;
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