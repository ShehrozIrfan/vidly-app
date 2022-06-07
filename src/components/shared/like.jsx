import React, { Component } from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = 'fa fa-';
    classes += this.props.movie.isFavorite ? 'heart' : 'heart-o';
    return (
      <div>
        <i
          className={classes}
          aria-hidden="true"
          onClick={() => this.props.handleFavorite(this.props.movie)}
          style={{ cursor: 'pointer' }}
        ></i>
      </div>
    );
  }
}

export default Like;
