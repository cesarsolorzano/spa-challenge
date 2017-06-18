import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { apikey, hash, apiPath } from '../config';
import CharactersList from './CharactersList';
import Pagination from './Pagination';

class CharactersListContainer extends Component {
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
        <CharactersList
          characters={characters}
          loading={this.state.loadin}
          orderBy={this.props.orderBy}
          displayCharacterDetails={this.props.displayCharacterDetails}
          changeOrderBy={this.props.changeOrderBy}
        />
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

CharactersListContainer.propTypes = {
  limit: PropTypes.number,
  offset: PropTypes.number,
  orderBy: PropTypes.string,
  displayCharacterDetails: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
  changeOrderBy: PropTypes.func.isRequired,
  updateTotalAndCount: PropTypes.func.isRequired,
};

export default CharactersListContainer;
