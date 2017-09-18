import React from 'react';

class Search extends React.Component {

  handleFilter(e){
    this.props.updateSearch(e.target.value)
  }

  render () {
    return (
      <div className="search">
      <input type="text" placeholder="elige una peli" onChange={this.handleFilter.bind(this)}/>
      </div>
    );
  }
}

export default Search;
