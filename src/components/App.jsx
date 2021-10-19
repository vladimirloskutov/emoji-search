import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';
import emojiList from '../utils/emojiList.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: emojiList,
    };
  }

  handleSearchChange = (e) => {
    console.log(e.target.value);
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
