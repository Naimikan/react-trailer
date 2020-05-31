import styled from 'styled-components';

import LogicVersionTag from './index.logic';

const VersionTag = styled(LogicVersionTag)`
  display: inline-flex;

  .version-tag__link {
    text-decoration: none;

    .version-tag__version-container {
      align-items: center;
      background-color: #eeece8;
      border-radius: 4px;
      display: inline-flex;
      justify-content: center;
      overflow: hidden;
      padding: 2px 6px;
      position: relative;
      text-overflow: ellipsis;
      white-space: nowrap;
      
      .version-tag__version {
        color: #7f7c7a;
        font-size: 11px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;

export default VersionTag;
