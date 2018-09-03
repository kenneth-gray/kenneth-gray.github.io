import React from 'react';
import { Section } from 'react-aria-accordion';
import { css } from 'react-emotion';

import { buttonClassName } from './Header';

const className = css`
  :not(:first-child) {
    .${buttonClassName} {
      border-top: 1px solid #ddd;
    }
  }
`;

const MySection = ({ defaultExpanded, children }) => (
  <Section defaultExpanded={defaultExpanded}>
    {({ getSectionProps }) => (
      <div {...getSectionProps({ className })}>{children}</div>
    )}
  </Section>
);

export default MySection;
