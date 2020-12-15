import React, { useState, useContext, createContext } from 'react';
import {
  Container,
  Frame,
  Inner,
  Title,
  Header,
  Body,
  Item,
} from '../accordion/styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, SetToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, SetToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, SetToggleShow } = useContext(ToggleContext);
  return (
    <Header onClick={() => SetToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/close-slim.png`}
          alt="Close"
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/add.png`}
          alt="Open"
        />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
