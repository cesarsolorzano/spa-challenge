import React, { Component } from 'react';

import './App.css';

import Header from './Header';
import Footer from './Footer';
import CharactersList from './CharactersList';
import CharacterPage from './CharacterPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: null,
      name: '',
      orderBy: '',
      total: 0,
      offset: 0,
    }

    this.limit = 10;

    this.onSearchChange = this.onSearchChange.bind(this);
    this.displayCharacterDetails = this.displayCharacterDetails.bind(this);
    this.goBack = this.goBack.bind(this);
    this.changePage = this.changePage.bind(this);
    this.changeOrderBy = this.changeOrderBy.bind(this);
    this.updateTotalAndCount = this.updateTotalAndCount.bind(this);
  }
  
  onSearchChange(event) {
    this.setState({ name: event.target.value, offset: 0, character: null });
  }

  displayCharacterDetails(character) {
    this.setState({ character });
  }

  changePage(page) {
    const offset = (page - 1) * this.limit;
    if (page > 0 && offset <= this.state.total) {
      this.setState({ offset });
    }
  }

  changeOrderBy(event) {
    const orderBy = event.target.value ? event.target.value : null;
    this.setState({ orderBy });
  }

  goBack() {
    this.setState({ character: null });
  }

  updateTotalAndCount(total, count ) {
    this.setState({ total, count });
  }

  render() {
    return (
      <div className="app">
        <Header name={this.state.name} onSearchChange={this.onSearchChange} />
        <div className="content">
          <div className="characters-content">
            {
              !this.state.character &&
              <CharactersList
                limit={this.limit}
                offset={this.state.offset}
                orderBy={this.state.orderBy}
                total={this.state.total}
                count={this.state.count}
                name={this.state.name}
                changePage={this.changePage}
                changeOrderBy={this.changeOrderBy}
                displayCharacterDetails={this.displayCharacterDetails}
                updateTotalAndCount={this.updateTotalAndCount}
              />
            }
            {
              this.state.character &&
              <CharacterPage
                key={this.state.character.id}
                character={this.state.character}
                goBack={this.goBack}
              />
            }
          </div>
          <div className="favorites-content">
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
