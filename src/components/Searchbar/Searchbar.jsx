import React, { Component } from 'react';

class Searchbar extends Component {
  state = { value: '' };

  render() {
    return (
      <form>
        <input
          placeholder="Search"
          //  className={s.input}
          type="text"
          //  value={this.state.name}
          name="search"
          //  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          //  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          //  onChange={this.handleChange}
        />
        <button>Search</button>
      </form>
    );
  }
}

export default Searchbar;
