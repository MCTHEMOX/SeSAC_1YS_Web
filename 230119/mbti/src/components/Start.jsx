import styled from 'styled-components';
import OrangeButton from './OrangeButton';
import { useDispatch } from 'react-redux';
import { next } from '../store/modules/mbti';

const Headers = styled.p`
  font-size: 3em;
`;

const MainImg = styled.img`
  width: inherit;
`;

const SubHeader = styled.p`
  font-size: 1.5em;
  color: #3c944c;
`;

export default function Start() {
  const dispatch = useDispatch();

  return (
    <>
      <Headers>개발자 MBTI 조사</Headers>
      <MainImg src="/images/main.jpg" alt="메인 이미지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI 를 알아 봅시다!
      </SubHeader>
      <OrangeButton text="테스트 시작" clickEvent={() => dispatch(next())} />
    </>
  );
}
