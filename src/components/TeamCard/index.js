// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamsList} = this.props
    const {name, id, teamImageUrl} = teamsList
    return (
      <Link to={`/team-matches/${id}`}>
        <li className="card-container">
          <img className="team-logo" src={teamImageUrl} alt={`${name}`} />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
