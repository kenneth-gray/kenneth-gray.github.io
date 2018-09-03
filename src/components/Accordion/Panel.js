import { Panel } from 'react-aria-accordion';
import React from 'react';
import styled from 'react-emotion';

const Div = styled('div')`
  padding: 20px;
  border-top: 1px solid #ddd;
`;

const MyPanel = ({ children }) => (
  <Panel>
    {({ getPanelProps }) => <Div {...getPanelProps()}>{children}</Div>}
  </Panel>
);

export default MyPanel;
