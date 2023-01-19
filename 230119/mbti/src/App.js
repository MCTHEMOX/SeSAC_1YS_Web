import styled from 'styled-components';
import Start from './components/Start';
import { useSelector } from 'react-redux';
import Mbti from './components/Mbti';
import GlobalStyle from './components/GlobalStyle';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);

  return (
    <>
      <GlobalStyle />
      <Main>{page === 0 ? <Start /> : <Mbti />}</Main>
      <h1>app 페이지</h1>
    </>
  );
}

export default App;
