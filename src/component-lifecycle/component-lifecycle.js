import React, {Component} from 'react'
import './component-lifecycle.css'
import ComponentLifecycleA from './component-lifecycle-a/component-lifecycle-a'
import ComponentLifecycleB from './component-lifecycle-b/component-lifecycle-b'
import ComponentLifecycleC from './component-lifecycle-c/component-lifecycle-c'

class ComponentLifeCycle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loader: false,
			color: 'white',
			isDestroy: false
		}
		this.json = {
			a: 'aa',
			b: 'bb'
		}
		this.array = [1,2,3,4,5]
		console.log('constructor')
	}

	changeColor = () => {
		console.log('call')
		this.setState({color: 'gray'})
	}

	destroyC = () => {
		this.setState({isDestroy: true})
		//http://sean-smith.me/assets/portfolio/leaderboard/index.html

	}

	componentWillMount() {
		console.log('componentWillMount')
		this.setState({'loader': true})
		console.log(this.state.loader + "1");
	}

	render () {
		//const isVisible = this.state.isVisible
		const loader = this.state.loader
		console.log(this.state.color + "color")

		return (
			<div className="wrapper">
				{loader && <div className="loader">
				<img src='https://media.giphy.com/media/rcwkj93o4L9As/giphy.gif' alt=""/>
				</div>}

				{!loader && <ComponentLifecycleA data={this.json} colorOfA={this.state.color} onClickDestroy={this.destroyC}/>}
				{!loader && <ComponentLifecycleB data={this.array} onButtonClick={this.changeColor}/>}
				{!loader && !this.state.isDestroy && <ComponentLifecycleC isDestroy={this.state.isDestroy} />}
				
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