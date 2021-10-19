import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';
import filterEmoji from '../utils/filterEmoji';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji('', 10),
    };
  }

  handleSearchChange = (e) => {
    this.setState({
      filteredEmoji: filterEmoji(e.target.value, 10),
    });
  };

  render() {
    const { filteredEmoji } = this.state;
    return (
      <div>
        <Header />
        <SearchInput
          textChange={this.handleSearchChange}
        />
        <EmojiResults
          emojiData={filteredEmoji}
        />
      </div>
    );
  }
}
