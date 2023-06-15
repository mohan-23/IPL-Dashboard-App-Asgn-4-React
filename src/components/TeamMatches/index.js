import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    isLoading: true,
    recentMatches: [],
    bannerImage: '',
    testId: 'loader',
  }

  componentDidMount() {
    this.renderTeamDetails()
  }

  renderTeamDetails = async () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const bannerImg = data.team_banner_url

    const latestMatch = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      results: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const recentMatch = data.recent_matches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      results: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))

    this.setState({
      latestMatchDetails: latestMatch,
      recentMatches: recentMatch,
      isLoading: false,
      bannerImage: bannerImg,
    })
  }

  render() {
    const {
      latestMatchDetails,
      isLoading,
      recentMatches,
      bannerImage,
      testId,
    } = this.state
    console.log(latestMatchDetails)
    console.log(recentMatches)

    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div data-testid={testId} className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="banner-section">
            <img src={bannerImage} alt="team banner" className="banner-img" />
            <p className="latest-match">Latest Matches</p>
            <LatestMatch latestMatch={latestMatchDetails} />
            <ul className="match-card-list-container">
              {recentMatches.map(eachCard => (
                <MatchCard matchCard={eachCard} key={eachCard.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
