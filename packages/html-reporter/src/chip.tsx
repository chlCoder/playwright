/*
  Copyright (c) Microsoft Corporation.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import * as React from 'react';
import './chip.css';
import * as icons from './icons';

export const Chip: React.FunctionComponent<{
  header: JSX.Element | string,
  expanded?: boolean,
  noInsets?: boolean,
  setExpanded?: (expanded: boolean) => void,
  children?: any,
}> = ({ header, expanded, setExpanded, children, noInsets }) => {
  return <div className='chip'>
    <div className={'chip-header' + (setExpanded ? ' expanded-' + expanded : '')} onClick={() => setExpanded?.(!expanded)}>
      {setExpanded && !!expanded && icons.downArrow()}
      {setExpanded && !expanded && icons.rightArrow()}
      {header}
    </div>
    {(!setExpanded || expanded) && <div className={'chip-body' + (noInsets ? ' chip-body-no-insets' : '')}>{children}</div>}
  </div>;
};
