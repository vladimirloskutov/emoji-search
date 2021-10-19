import React from 'react';
import PropTypes from 'prop-types';
import EmojiResultsRow from './EmojiResultsRow';

const EmojiResults = (props) => {
  const { emojiData } = props;

  return (
    <div className="component-emoji-results">
      {
        emojiData.map((emoji) => (
          <EmojiResultsRow
            key={emoji.symbol}
            symbol={emoji.symbol}
            title={emoji.title}
          />
        ))
      }
    </div>
  );
};

EmojiResults.propTypes = {
  emojiData: PropTypes.arrayOf,
};

EmojiResults.defaultProps = {
  emojiData: [],
};

export default EmojiResults;
