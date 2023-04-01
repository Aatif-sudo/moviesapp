import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;
  padding-top: 25px;
  padding: 5%;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
`;

export const Heading = styled.div`
  color: #f4f4f4;
  font-family: "BasisGrotesquePro-Bold";
  font-size: 40px;
  background: transparent;
`;

export const GenreContainer = styled.div`
  margin-top: 10px;
  display: flex;
  /* justify-content: space-evenly; */
  gap: 20px;
  background: transparent;
`;
export const Genres = styled.div`
  color: #f4f4f4;
  font-family: "BasisGrotesquePro-Regular";
  font-size: 12px;
  background: transparent;
  border: 1px solid white;
  border-radius: 4px;
  padding: 2px;
  cursor: pointer;
`;

export const AllMovieList = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-gap: 60px;
  background: transparent;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
  }
`;

export const MovieName = styled.div`
  position: absolute;
  bottom: 20px;
  left: 40px;
  color: #f4f4f4;
  font-family: "BasisGrotesquePro-Bold";
  font-size: 24px;
  background: transparent;
  transition: transform 0.3s ease;
`;
export const MovieDesc = styled.div`
  display: none;
  position: absolute;
  bottom: 20px;
  left: 40px;
  color: #f4f4f4;
  font-family: "BasisGrotesquePro-Regular";
  font-size: 16px;
  background: transparent;
`;

export const MovieCard = styled.div`
  margin-top: 20px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 31px 50px rgba(0, 0, 0, 0.15);
  /* border: 2px solid black; */
  transition: transform 0.3s;
  /* height: 300px; */
  /* height: 600px; */
  :hover {
    transition: transform 0.3s;
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    ${MovieName} {
      top: 10px;
    }
    ${MovieDesc} {
      display: block;
    }
  }
  img {
    height: auto;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
