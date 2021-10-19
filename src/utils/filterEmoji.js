import emojiList from './emojiList.json';

export default (searchText, maxResults) => (
  emojiList.filter(({ title, keywords }) => {
    if (title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    if (keywords.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  }).slice(0, maxResults)
);
