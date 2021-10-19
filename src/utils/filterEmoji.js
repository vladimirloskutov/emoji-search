import emojiList from './emojiList.json';

export default (searchText, maxResults) => (
  emojiList.filter(({ title, keywords }) => {
    if (title.includes(searchText)) {
      return true;
    }
    if (keywords.includes(searchText)) {
      return true;
    }
    return false;
  }).slice(0, maxResults)
);
