import React from 'react';
import styled from 'react-emotion';

import Accordion from 'react-aria-accordion';

const Div = styled('div')`
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const MyAccordion = ({ children }) => (
  <Accordion>{() => <Div>{children}</Div>}</Accordion>
);

export default MyAccordion;
