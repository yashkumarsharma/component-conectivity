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
				{'Name': 'Divya', 'Recent': 2, 'Alltime': 1988, 'Activity': '21:50:40 February 20, 2018', 'url': 'https://www.google.co.in'  }			
			]
		this.state = {
			count: 0,
			activeItem: 'recent'
		}
	}

	loadDefault = (arr) => {
		const newArr = []
		arr.map(function(value, index){
			newArr.push(
				<tr key={index}>
					<td key="{value.name}"><a href={value.url}>{value.Name}</a></td><td key="{value.Recent}">{value.Recent}</td>
					<td key="{value.Alltime}">{value.Alltime}</td><td key="{value.Activity}">{value.Activity}</td>
				</tr>
			)
		})
		return <tbody>{newArr}</tbody>
	} 

  loadData = (arr , key , sortType) => {
  	const newArr = []
  	if(sortType==='accending') {
	  	arr.sort((a, b) => key.a < key.b)
	  	.map(function(value, index){
				newArr.push(value)
			})
			return true
			this.setState({array: newArr})

		}

		if(sortType==='decending') {
			console.log(123)
			arr.sort((a, b) => key.a > key.b)
	  	.map(function(value, index){
				newArr.push(value)
			})
			return true
			this.setState({array: newArr})

		}
  }

	render() {
		return (
			<div>
			<h1>Application</h1>
			<div className="button-wrapper">
				<button 
				className={"button " + (this.state.activeItem === 'recent' ? 'active' : '')} 
				onClick={this.loadData(this.array, this.array.recent, 'decending')} >
				Show Recent
				</button>
				<button 
				className={"button " + (this.state.activeItem === 'alltime' ? 'active' : '')}  
				onClick={this.loadData(this.array, this.array.alltime, 'decending')} >
				Show Alltime
				</button>
				<button 
				className={"button " + (this.state.activeItem === 'sortRecent' ? 'active' : '')}  
				onClick={this.sortRecent}>
				Sortby Recent
				</button>
				<button 
				className={"button " + (this.state.activeItem === 'sortAlltime' ? 'active' : '')}  
				onClick={this.sortAlltime}>
				Sortby Alltime
				</button>
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
						{this.loadDefault(this.array)}
				</table>
			</div>
			</div>
		)
	}

}

export default Application;