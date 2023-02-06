// Write your code here
// "latest_match_details": {
//     "umpires": "CB Gaffaney, VK Sharma",
//     "result": "Kolkata Knight Riders Won by 7 wickets",
//     "man_of_the_match": "Shubman Gill",
//     "id": "1216545",
//     "date": "2020-09-26",
//     "venue": "At Sheikh Zayed Stadium, Abu Dhabi",
//     "competing_team": "Sunrisers Hyderabad",
//     "competing_team_logo": "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png",
//     // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
//     "first_innings": "Sunrisers Hyderabad",
//     "second_innings": "Kolkata Knight Riders",
//     "match_status": "Won",
//   },

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedData = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    ManOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  const {
    umpires,
    result,
    ManOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedData
  return (
    <div className="match-container">
      <div className="result-container">
        <p className="team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="para">{venue}</p>
        <p className="para">{result}</p>
      </div>
      <img
        className="logo"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />
      <div className="result-container">
        <h1 className="headings">First Innings</h1>
        <p className="paragraphs">{firstInnings}</p>
        <h1 className="headings">Second Innings</h1>
        <p className="paragraphs">{secondInnings}</p>
        <h1 className="headings">MAN OF THE MATCH</h1>
        <p className="paragraphs">{ManOfTheMatch}</p>
        <h1 className="headings">Umpires</h1>
        <p className="paragraphs">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
