import React from 'react';
import { Link } from 'react-router-dom';

export default function Board() {
  return (
    <h2>
      게시판 페이지
      <Link to="1">
        <h2>게시글 1번 보여주기</h2>
      </Link>
      <Link to="2">
        <h2>게시글 2번 보여주기</h2>
      </Link>
    </h2>
  );
}
