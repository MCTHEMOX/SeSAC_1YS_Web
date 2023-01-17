import React from 'react';
import styled from 'styled-components';

const MyDIv = styled.div`
  background-color: orange;
`;
const MyHeading = styled.h1`
  color: blue;
`;
const MySpan = styled.span`
  background-color: pink;
  font-weight: 700;
`;

export default function TestStyled() {
  return (
    <MyDIv>
      <MyHeading>h1 tag</MyHeading>
      <MySpan>span</MySpan>
    </MyDIv>
  );
}
