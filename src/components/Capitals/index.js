import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {capitalId: countryAndCapitalsList[0].id}

  changeCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  render() {
    const {capitalId} = this.state
    const countryObject = countryAndCapitalsList.filter(
      eachItem => eachItem.id === capitalId,
    )[0]
    const {country} = countryObject

    return (
      <div className="bg-container">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <div className="capitals-cont">
            <select onChange={this.changeCapital}>
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <h1 className="country-heading">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
