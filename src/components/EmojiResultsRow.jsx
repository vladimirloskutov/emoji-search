import React from 'react';
import PropTypes from 'prop-types';
import './EmojiResultsRow.css';

const EmojiResultsRow = (props) => {
  const { title, symbol } = props;
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  return (
    <div className="component-emoji-results-row">
      <img
        alt={title}
        src={src}
      />
      <span className="title">
        {title}
      </span>
    </div>
  );
};

EmojiResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};

EmojiResultsRow.defaultProps = {
  title: '',
  symbol: '',
};

export default EmojiResultsRow;
