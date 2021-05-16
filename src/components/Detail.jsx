import React from "react";
import styled from "styled-components";
function Detail() {
  return (
    <Container>
      <Background>
        <img alt="bao background" src="./images/backg-1.jpg" />
      </Background>
      <ImageTitle>
        <img src="./images/backg-1-title.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="./images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="./images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddToWatchlistButton>
          <span>+</span>
        </AddToWatchlistButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />"
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 * 7m * Animation~{"\n"}</SubTitle>

      <Description>Lorem ipsum dolor sit amet~{"\n"}, consectetur adipiscing elit. Nam at elit risus. Curabitur condimentum mattis felis, ac congue purus aliquet faucibus. Etiam nisl est, vehicula et feugiat fringilla, aliquet quis urna. Quisque convallis sit amet sapien a volutpat. Fusce elementum, ex ac auctor blandit, magna nunc iaculis turpis, eu cursus elit urna et est. Praesent volutpat euismod dui pretium consectetur. Praesent mi quam, egestas ut vestibulum nec, ullamcorper at augue.</Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw +5px);
  position: relative;
  margin-left:45px;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  min-width: 200px;
  width: 35vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin: 0.25em;
  /* box-sizing: inherit; */
  /* margin-left: 25px; */
  margin-bottom: 1em;
  min-height: 2em;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;

  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(249, 249, 249);
  color: rgba(249, 249, 249);
  text-transform: uppercase;
`;

const AddToWatchlistButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  span {
    font-size: 32px;
  }
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(249, 249, 249);
  cursor: pointer;
  margin-right: 22px;
  span {
    color: rgba(249, 249, 249);
  }
`;

const GroupWatchButton = styled(AddToWatchlistButton)`
  background-color: black;
  padding-right: 0px;
`;

const SubTitle = styled.div`
background-color:(0,0,0);
color: (249,249,249,0);
font-size:15px;
min-height:20px;
margin-top:26px;
`;

const Description = styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color: (249, 249, 249);
`