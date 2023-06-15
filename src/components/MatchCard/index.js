import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {competingTeamLogo, competingTeam, results, matchStatus} = matchCard

  const style = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="match-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="item-img"
      />
      <p className="item-heading">{competingTeam}</p>
      <p className="item-style">{results}</p>
      <p className={`item-style ${style}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
