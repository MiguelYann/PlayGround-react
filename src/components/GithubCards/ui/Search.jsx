import React from 'react';
import serviceProfiler from '../provider/serviceProfile';
import * as PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  handlerSubmit = async (e) => {
    const { submitProfile } = this.props;
    const { userInput } = this.state;
    const uriProfile = `https://api.github.com/users/${userInput}`;
    e.preventDefault();

    const aProfile = await serviceProfiler(uriProfile);
    submitProfile(aProfile.data);
    this.setState({ userInput: '' });
  };

  handlerInput = (e) => this.setState({ userInput: e.target.value });

  render() {
    const { userInput } = this.state;
    return (
      <>
        <form action="" onSubmit={this.handlerSubmit}>
          <input
            className="input-profile"
            placeholder="Enter your Github's pseudo"
            type="text"
            value={userInput}
            onChange={this.handlerInput}
            required
          />
          <button type="button" className="btn-profile">
            Add User
          </button>
        </form>
      </>
    );
  }
}

Search.propTypes = {
  submitProfile: PropTypes.func.isRequired,
};

export default Search;
