import styled from "styled-components";

const HeaderWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 80px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  a {
    text-decoration: none;
    color: #000;
  }
`;

const Header = () => {
  return (
    <HeaderWrap>
      <h3>
        <a href="#">
          무협<span>툰</span>
        </a>
      </h3>
      <img src="" alt="" />
    </HeaderWrap>
  );
};

export default Header;
