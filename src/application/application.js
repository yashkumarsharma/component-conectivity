import React, {Component} from 'react'
import './application.css'

class Application extends Component {
	constructor() {
		super()
		this.array= [
				{'Name': 'Kanishka', 'Recent': 17, 'Alltime': 1997, 'Activity': '19:58:50 February 20, 2018', 'url': 'https://www.google.co.in'  },
				{'Name': 'Rahul', 'Recent': 2, 'Alltime': 1992, 'Activity': '20:58:50 February 20, 2018', 'url': 'https://www.google.co.in'  },
				{'Name': 'Yash', 'Recent': 14, 'Alltime': 1991, 'Activity': '19:28:50 February 20, 2018', 'url': 'https://www.google.co.in'  },
				{'Name': 'Shashank', 'Recent': 24, 'Alltime': 1990, 'Activity': '20:19:51 February 20, 2018', 'url': 'https://www.google.co.in'  },
				{'Name': 'Divya', 'Recent': 12, 'Alltime': 1988, 'Activity': '21:50:40 February 20, 2018', 'url': 'https://www.google.co.in'  }			
			]
		this.state = {
			count: 0,
			activeRecent: false,
			activeAlltime: false,
			activeSortRecent: false,
			activeSortAlltime: false
		}
	}

	loadDefault = () => {
		const arr = []
		this.array.map(function(value, index){
			arr.push(
				<tr key={index}>
					<td key="{value.name}"><a href={value.url}>{value.Name}</a></td><td key="{value.Recent}">{value.Recent}</td>
					<td key="{value.Alltime}">{value.Alltime}</td><td key="{value.Activity}">{value.Activity}</td>
				</tr>
			)
		})
		return <tbody>{arr}</tbody>
	} 

	showRecent = () => {
	 	const arr = []
		this.array.sort((a, b) => a.Recent < b.Recent)
		.map(function(value, index){
			arr.push(value)
		})
		this.setState({array: arr, activeRecent: true, activeAlltime: false, activeSortRecent: false, activeSortAlltime: false})
	}

	showAllTime = () => {
	 	const arr = []
			this.array.sort((a, b) => a.Alltime > b.Alltime)
			.map(function(value, index){
				arr.push(value)
			})
		this.setState({array: arr, activeRecent: false, activeAlltime: true, activeSortRecent: false, activeSortAlltime: false})
  }

	sortRecent = () => {
	 	const arr = []
		this.array.sort((a, b) => a.Recent > b.Recent)
		.map(function(value, index){
			arr.push(value)
		})
		this.setState({array: arr, activeRecent: false, activeAlltime: false, activeSortRecent: true, activeSortAlltime: false})
	}

	sortAlltime = () => {
	 	const arr = []
			this.array.sort((a, b) => a.Alltime < b.Alltime)
			.map(function(value, index){
				arr.push(value)
			})
		this.setState({array: arr, activeRecent: false, activeAlltime: false, activeSortRecent: false, activeSortAlltime: true})
  }

	render() {
		return (
			<div>
			<h1>Application</h1>
			<div className="button-wrapper">
				<button className={"button " + (this.state.activeRecent ? 'active' : '')} onClick={this.showRecent} >Show Recent</button>
				<button className={"button " + (this.state.activeAlltime ? 'active' : '')}  onClick={this.showAllTime}>Show Alltime</button>
				<button className={"button " + (this.state.activeSortRecent ? 'active' : '')}  onClick={this.sortRecent}>Sortby Recent</button>
				<button className={"button " + (this.state.activeSortAlltime ? 'active' : '')}  onClick={this.sortAlltime}>Sortby Alltime</button>
			</div>
			<div className="table-wrapper">
				<table>
					<thead>
						<tr>
							<th>
								Username
							</th>
							<th>
								Recent
							</th>
							<th>
								Alltime
							</th>
							<th>
								Activity
							</th>
						</tr>
					</thead>
						{this.loadDefault()}
				</table>
			</div>
			</div>
		)
	}

}

export default Application;