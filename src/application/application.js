import React, {Component} from 'react'
import './application.css'

class Application extends Component {
	constructor() {
		super()
		this.state = {
			count: 0,
			array: [
				{'Name': 'Kanishka', 'Recent': 17, 'Alltime': 1997, 'Activity': '19:58:50 February 20, 2018', 'url': 'https://www.google.co.in'  },
				{'Name': 'Rahul', 'Recent': 2, 'Alltime': 1992, 'Activity': '20:58:50 February 20, 2018', 'url': 'https://www.google.co.in'  },
				{'Name': 'Yash', 'Recent': 14, 'Alltime': 1991, 'Activity': '19:28:50 February 20, 2018', 'url': 'https://www.google.co.in'  },
				{'Name': 'Shashank', 'Recent': 24, 'Alltime': 1990, 'Activity': '20:19:51 February 20, 2018', 'url': 'https://www.google.co.in'  },
				{'Name': 'Divya', 'Recent': 12, 'Alltime': 1988, 'Activity': '21:50:40 February 20, 2018', 'url': 'https://www.google.co.in'  }			
			]
		}
	}

	loadDefault = () => {
		const arr = []
		console.log("-----1---------")
		console.log(this.state.array[0] )
		console.log("-------1-------")

		this.state.array.map(function(value, index){
			arr.push(
				<tr key={index}>
					<td key="{value.name}"><a href={value.url}>{value.Name}</a></td><td key="{value.Recent}">{value.Recent}</td>
					<td key="{value.Alltime}">{value.Alltime}</td><td key="{value.Activity}">{value.Activity}</td>
				</tr>
			)
		})
		console.log("-------2-------")
		console.log(arr)
		console.log("-------2-------")

		return <tbody>{arr}</tbody>
	} 

	sortRecent = () => {
	 	const arr = []
		this.state.array.sort((a, b) => a.Recent > b.Recent)
		.map(function(value, index){
			arr.push(value)
		})
		this.setState({'array': arr})
		console.log("--------------")
		console.log(arr)
		console.log("--------------")

	}

	sortAllTime = () => {
	 	const arr = []
			this.state.array.sort((a, b) => a.Alltime > b.Alltime)
			.map(function(value, index){
				arr.push(value)
			})
			this.setState({'array': arr})
 }


	render() {
		return (
			<div>
			<h1>Application</h1>
			<div className="button-wrapper">
				<button className='button' onClick={this.sortRecent}>Show Recent</button>
				<button className='button' onClick={this.sortAllTime}>Show Alltime</button>
				<button className='button'>Sortby Recent</button>
				<button className='button'>Sortby Alltime</button>
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