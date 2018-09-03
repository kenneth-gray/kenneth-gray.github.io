import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import Accordion, { Section, Header, Panel } from '../components/Accordion';

const InputGroup = styled('div')`
  :not(:last-child) {
    padding-bottom: 20px;
  }
`;

const ReactAriaAccordion = () => (
  <div>
    <h1>React Aria Accordion</h1>
    <Accordion>
      <Section defaultExpanded>
        <Header>Personal Information</Header>
        <Panel>
          <InputGroup>
            <label htmlFor="name">Name</label>
            <div>
              <input id="name" type="text" />
            </div>
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <div>
              <input id="email" type="email" />
            </div>
          </InputGroup>
        </Panel>
      </Section>
      <Section>
        <Header>Billing Address</Header>
        <Panel>
          <InputGroup>
            <label htmlFor="billing-address1">Address 1</label>
            <div>
              <input id="billing-address1" type="text" />
            </div>
          </InputGroup>
          <InputGroup>
            <label htmlFor="billing-address2">Address 2</label>
            <div>
              <input id="billing-address2" type="text" />
            </div>
          </InputGroup>
          <InputGroup>
            <label htmlFor="billing-city">City</label>
            <div>
              <input id="billing-city" type="text" />
            </div>
          </InputGroup>
          <InputGroup>
            <label htmlFor="billing-postcode">Postcode</label>
            <div>
              <input id="billing-postcode" type="text" />
            </div>
          </InputGroup>
        </Panel>
      </Section>
      <Section>
        <Header>Shipping Address</Header>
        <Panel>
          <InputGroup>
            <label htmlFor="shipping-address1">Address 1</label>
            <div>
              <input id="shipping-address1" type="text" />
            </div>
          </InputGroup>
          <InputGroup>
            <label htmlFor="shipping-address2">Address 2</label>
            <div>
              <input id="shipping-address2" type="text" />
            </div>
          </InputGroup>
          <InputGroup>
            <label htmlFor="shipping-city">City</label>
            <div>
              <input id="shipping-city" type="text" />
            </div>
          </InputGroup>
          <InputGroup>
            <label htmlFor="shipping-postcode">Postcode</label>
            <div>
              <input id="shipping-postcode" type="text" />
            </div>
          </InputGroup>
        </Panel>
      </Section>
    </Accordion>
    <br />
    <Link to="/">Home</Link>
  </div>
);

export default ReactAriaAccordion;
