import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  renderFlats = () => {
    return this.props.flats.map((flat, index) => {
      return <Flat flat={flat} key={flat.lat} index={index} selectFlat={this.props.selectFlat}/>
    });
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderFlats()}
      </div>
    );
  }
}

export default FlatList;
