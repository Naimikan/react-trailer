import React from 'react';
import PropTypes from 'prop-types';

const VersionTag = ({
  className,
  href,
  name,
  version,
}) => (
  <div className={`version-tag ${className}`}>
    <a
      className="version-tag__link"
      alt={`${name} package`}
      href={href || `https://www.npmjs.com/package/${name}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="version-tag__version-container">
        <span className="version-tag__version">{version}</span>
      </div>
    </a>
  </div>
);

VersionTag.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  name: PropTypes.string,
  version: PropTypes.string,
};

VersionTag.defaultProps = {
  className: '',
  href: '',
  name: '',
  version: '',
};

export default VersionTag;
