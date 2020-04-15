import React, { Component } from 'react';
import { data } from '../LocalApi/api';
import { CardList } from './card-list/card-list.component';
import { SearchBox } from './search-box/searchBox.component'
import '../Styles/App.style.css'

export default class App extends Component {
  // --------------------------STATE-----------------------------------------------------------------------
  state = {
    preachers: [],
    searchBox: ''
  }

  // -----------------------------------ALL FUNCTIONS---------------------------------------------------------

  // FETCHING DATA FROM API
  // componentDidMount(){
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(response => response.json())
  //   .then(users => this.setState({preachers: users}))
  // }

  // I USED THIS AS A LOCAL API WHEN THERE WAS NO INTERNET
  componentWillMount() {
    this.setState({ preachers: data })
  }

  // HERE I WAS TRYING TO FETCH FROM A LOCAHOST
  // componentDidMount(){
  //   fetch("/home/kayode/Desktop/React Projects/my-practice-arena-app/src/LocalApi/users.json")
  //   .then(response => response)
  //   // .then(users => console.log(users))
  //   .then(users => this.setState({preachers: users}))
  // }


  handleChange = ({ target: { value } }) => {
    this.setState({ searchBox: value }, () => console.log(this.state.searchBox))
  }

  // -----------------------------RENDER--------------------------------------------------------------------

  render() {
    const { preachers, searchBox } = this.state
    let filteredPreachers = preachers.filter(preacher =>
      preacher.name.toLowerCase().includes(searchBox.toLowerCase()))

    return (
      <div style={{ textAlign: 'center' }}>
        <br />
        <h1>Preachers</h1>
        <div>
          <SearchBox
            placeholder=' search preachers...'
            handleChange={this.handleChange}
          />
        </div>
        <br />
        <CardList preachers={filteredPreachers} />
      </div>
    )
  }
}