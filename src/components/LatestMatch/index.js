import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    matchStatus,
    results,
    secondInnings,
    umpires,
    venue,
  } = latestMatch

  return (
    <div className="match-container">
      <div className="first-block">
        <p className="team">{competingTeam}</p>
        <p className="font-style">{date}</p>
        <p className="font-style">{venue}</p>
        <p className="font-style">{results}</p>
      </div>
      <div className="image-container">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="img"
        />
      </div>
      <div className="second-block">
        <p className="font-style">First Innings</p>
        <p className="font-style">{firstInnings}</p>
        <p className="font-style">Second Innings</p>
        <p className="font-style">{secondInnings}</p>
        <p className="font-style">Man Of The Match</p>
        <p className="font-style">{manOfTheMatch}</p>
        <p className="font-style">Umpires</p>
        <p className="font-style">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
