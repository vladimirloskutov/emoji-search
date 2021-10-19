import React from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';
import emojiList from '../utils/emojiList.json';

const App = () => {
  const handleSearchChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Header />
      <SearchInput
        textChange={handleSearchChange}
      />
      <EmojiResults
        emojiData={emojiList}
      />
    </div>
  );
};

export default App;
