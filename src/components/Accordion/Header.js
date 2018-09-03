import { Header } from 'react-aria-accordion';
import React from 'react';
import styled, { css } from 'react-emotion';

const Heading = styled('h2')`
  margin: 0;
`;

export const buttonClassName = css`
  display: block;
  width: 100%;
  background: inherit;
  padding: 20px;
  border: none;
  font: inherit;
  text-align: left;

  :focus,
  :hover {
    background-color: #ddd;
  }
`;

const MyHeader = ({ children }) => (
  <Header>
    {({ getButtonToggleProps }) => (
      <Heading>
        <button
          {...getButtonToggleProps({
            className: buttonClassName,
          })}
        >
          {children}
        </button>
      </Heading>
    )}
  </Header>
);

export default MyHeader;
