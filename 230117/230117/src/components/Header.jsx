import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
          <li>
            <a href="/">홈페이지</a>
          </li>
          <li>
            <Link to="/profile">프로필 페이지</Link>
          </li>
          <li>
            <Link to="/board">게시판 페이지</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
