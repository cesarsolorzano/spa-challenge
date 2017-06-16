import React, { Component } from 'react';
import axios from 'axios';

import { apikey, hash, apiPath } from '../config';
import charactersIcon from '../img/icons/characters.png';
import CharacterItem from './CharacterItem';

class CharactersList extends Component {
 constructor(props) {
    super(props);

    this.state = {
      loading: true,
      characters: [],
      offset: 0,
      total: 0,
      count: 0,
    };

    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    const ts = '1';
    axios.get(`${apiPath}/public/characters`, {
      params: {
        ts,
        apikey,
        hash,
        limit: 10,
        offset: this.state.offset,
      }
    }).then(res => {
        this.setState({
          characters: res.data.data.results,
          total: res.data.data.total,
          count: res.data.data.count,
          loading: false,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.offset !== prevState.offset) {
      this.setState({ loading: true });
      const ts = '1';
      axios.get(`${apiPath}/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          limit: 10,
          offset: this.state.offset,
        }
      }).then(res => {
        this.setState({
          characters: res.data.data.results,
          total: res.data.data.total,
          count: res.data.data.count,
          loading: false,
        });
      });
    }
  }

  changePage(type) {
    if (type) {
      this.setState({ offset: this.state.offset + this.state.count });
    } else {
      this.setState({ offset: this.state.offset - this.state.count });
    }
  }

  render() {
    const characters = this.state.characters.reduce((acc, val, index) => {
      if (index % 2 === 0) {
        acc.push([val]);
      } else {
        acc[acc.length - 1].push(val);
      }
      return acc;
    }, []);

    return (
      <div>
        <div className="content-title">
          <img src={charactersIcon} className="pull-left icon" alt="Favorites" />
          <h2>Characters</h2>
        </div>
        {
          this.state.loading &&
          <h4>Loading...</h4>
        }
        {
          !this.state.loading &&
          characters.map((pair, index) => {
            return (
              <div className="row" key={`row-${index}`}>
                { pair.map(character =>
                  <div className="col-md-6" key={character.id}>
                    <CharacterItem
                      name={character.name}
                      description={character.description}
                      thumbnail={character.thumbnail}
                    />
                  </div>)}
              </div>
            );
          })
        }
        <nav>
          <ul className="pagination">
            <li>
              <a href="#" onClick={() => this.changePage(false)}>
                <span>&laquo;</span>
              </a>
            </li>
            <li>
              <a href="#" onClick={this.changePage}>
                <span>&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default CharactersList;
