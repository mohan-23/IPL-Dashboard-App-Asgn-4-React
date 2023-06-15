import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getIplItemDetails()
  }

  getIplItemDetails = async () => {
    const response = await fetch(`https://apis.ccbp.in/ipl`)
    const data = await response.json()

    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <div className="ipl-bg">
        <div className="ipl-container">
          <h1 className="ipl-heading">IPL Dashboard</h1>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <ul className="ipl-list-container">
              {teamsList.map(eachTeam => (
                <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
