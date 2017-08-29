import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const bandLi = this.props.store.getState().bands.map((band) => {
      return <li>{band}</li>;
    });
    return (
      <div>

        {bandLi}
      </div>
    );
  }
};

export default Bands;
