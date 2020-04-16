import React from 'react';
import * as PropTypes from 'prop-types';
import CardList from './CardList';
import Search from './Search';

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      profiles: [],
    };
  }

  removeProfile = (aProfile) => {
    const { profiles } = this.state;
    const profilesClone = [...profiles];
    const indexToDelete = profilesClone.findIndex((profile) => profile.name === aProfile.name);
    profilesClone.splice(indexToDelete, 1);
    this.setState({ profiles: profilesClone });
  };

  addProfile = (profile) => {
    this.setState((prevState) => {
      if (!prevState.profiles.length) {
        return { profiles: [...prevState.profiles, profile] };
      }
      const excludeProfiles = prevState.profiles.filter(
        (currentProfile) => currentProfile.id === profile.id
      );

      return {
        profiles: !excludeProfiles.length
          ? [...prevState.profiles, profile]
          : [...prevState.profiles],
      };
    });
  };

  render() {
    const { appTitle } = this.props;
    const { profiles } = this.state;

    const fontFamily = 'Jetbrains Mono';
    const styleText = {
      fontFamily,
      width: '50%',
      margin: '50px 50%',
      color: 'black',
    };

    return (
      <div>
        <h2 style={{ ...styleText }}>{appTitle}</h2>
        <div style={{ display: 'grid' }}>
          <Search submitProfile={this.addProfile} />
          <CardList profiles={profiles} deleteItem={this.removeProfile} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  appTitle: PropTypes.string.isRequired,
};
