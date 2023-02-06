// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const updatedData = {
    result: recentMatchDetails.result,
    id: recentMatchDetails.id,
    date: recentMatchDetails.date,
    venue: recentMatchDetails.venue,
    competingTeam: recentMatchDetails.competing_team,
    competingTeamLogo: recentMatchDetails.competing_team_logo,
    firstInnings: recentMatchDetails.first_innings,
    secondInnings: recentMatchDetails.second_innings,
    matchStatus: recentMatchDetails.match_status,
  }

  const {result, competingTeam, competingTeamLogo, matchStatus} = updatedData

  let matchStatusClassName = ''

  if (matchStatus === 'Won') {
    matchStatusClassName = 'won'
  } else {
    matchStatusClassName = 'lost'
  }

  return (
    <li className="match-card-container">
      <img
        className="logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="heading-1">{competingTeam}</p>
      <p className="para-1">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
