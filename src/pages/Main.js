import styled from "styled-components";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const webtoonMain = [
  {
    id: 0,
    title: "낙향문사전",
    wirtter: "바킹독",
    img: "https://image-comic.pstatic.net/webtoon/746534/thumbnail/thumbnail_IMAG21_2df4002b-4597-4eed-8cdd-cb77eb73ad83.jpg",
  },
  {
    id: 1,
    title: "천하제일 대사형",
    wirtter: "YooN/북미혼",
    img: "https://image-comic.pstatic.net/webtoon/802278/thumbnail/thumbnail_IMAG21_1f75b2d4-e3cd-4a9f-917e-635557178b08.jpg",
  },
  {
    id: 2,
    title: "사신",
    wirtter: "임재원/설봉",
    img: "https://image-comic.pstatic.net/webtoon/799837/thumbnail/thumbnail_IMAG21_97023c54-e37e-4dca-9c62-9bf3b04413ce.jpg",
  },
  {
    id: 3,
    title: "광마회귀",
    wirtter: "JP/이히/유진성",
    img: "https://image-comic.pstatic.net/webtoon/776601/thumbnail/thumbnail_IMAG21_7365135131254864183.jpg",
  },
  {
    id: 4,
    title: "남궁세가 비인격",
    wirtter: "해사",
    img: "https://image-comic.pstatic.net/webtoon/827744/thumbnail/thumbnail_IMAG21_a94e2923-a434-4dc1-925f-a2ba4005a122.jpg",
  },
];

const Wrap = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 500px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const ConWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Con = styled.div`
  width: 220px;
  height: 300px;
  /* background-color: lightgrey; */
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    color: #000;
  }

  img {
    width: 220px;
    height: 300px;
  }

  h3 {
    margin: 10px 0;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #444;
  }
`;

const BgWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 800px;
  background: #f1f1f1 url() no-repeat center / cover;
  margin: 0 auto;
`;

const Main = () => {
  return (
    <>
      <BgWrapper>
        <Wrap>
          <ConWrap>
            {webtoonMain.map((webtoon) => (
              <Con key={webtoon.id}>
                <Link to={`/sub/${webtoon.id}`}>
                  <img src={webtoon.img} alt={webtoon.title} />
                  <h3>{webtoon.title}</h3>
                  <p>{webtoon.wirtter}</p>
                </Link>
              </Con>
            ))}
          </ConWrap>
        </Wrap>
      </BgWrapper>
    </>
  );
};

export default Main;
