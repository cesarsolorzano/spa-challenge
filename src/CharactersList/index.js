import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { apikey, hash, apiPath } from '../config';
import charactersIcon from '../img/icons/characters.png';
import CharacterItem from './CharacterItem';
import Pagination from './Pagination';

class CharactersList extends Component {
 constructor(props) {
    super(props);

    this.state = {
      loading: true,
      characters: [],
    };

    this.fetchCharacters = this.fetchCharacters.bind(this);
  }

  fetchCharacters(refresh) {
    this.setState({ loading: true });
    const ts = '1';
    return axios.get(`${apiPath}/public/characters`, {
      params: {
        ts,
        apikey,
        hash,
        limit: this.props.limit,
        offset: refresh ? 0 : this.props.offset,
        orderBy: this.props.orderBy ? this.props.orderBy : null,
        nameStartsWith: this.props.name ? this.props.name : null,
      }
    }).then(res => {
        this.setState({
          characters: res.data.data.results,
          loading: false,
        });
        this.props.updateTotalAndCount(res.data.data.total, res.data.data.count);
      });
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.offset !== prevProps.offset ||
      this.props.orderBy !== prevProps.orderBy ||
      this.props.name !== prevProps.name
    ) {
      this.fetchCharacters(this.props.name !== prevProps.name);
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
        <div className="row">
          <div className="col-md-8">
            <div className="content-title">
              <img src={charactersIcon} className="pull-left icon" alt="Favorites" />
              <h2>Characters</h2>
            </div>
          </div>
          <div className="col-md-4">
            <select
              className="form-control input-lg sort-by"
              onChange={this.props.changeOrderBy}
              value={this.state.orderBy}
            >
              <option value="">Sort by</option>
              <option value="name">Name (A-Z)</option>
              <option value="-name">Name (Z-A)</option>
              <option value="-modified">First modified</option>
              <option value="modified">Last modified</option>
            </select>
          </div>
        </div>
        {
          this.state.loading &&
          <h4 className="text-center">Loading...</h4>
        }
        {
          !this.state.loading &&
          characters.map((pair, index) => {
            return (
              <div className="row" key={`row-${index}`}>
                { pair.map(character =>
                  <div className="col-md-6" key={character.id}>
                    <CharacterItem
                      character={character}
                      displayCharacterDetails={this.props.displayCharacterDetails}
                    />
                  </div>)}
              </div>
            );
          })
        }
        {
          !this.state.loading && !this.props.total &&
          <h4 className="text-center">No characters were found</h4>
        }
        <Pagination
          changePage={this.props.changePage}
          total={this.props.total}
          limit={this.props.limit}
          offset={this.props.offset}
        />
      </div>
    );
  }
}

CharactersList.propTypes = {
  limit: PropTypes.number,
  offset: PropTypes.number,
  orderBy: PropTypes.string,
  displayCharacterDetails: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  changeOrderBy: PropTypes.func.isRequired,
  updateTotalAndCount: PropTypes.func.isRequired,
};

export default CharactersList;
