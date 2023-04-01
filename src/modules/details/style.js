import styled from "styled-components";

export const DetailsContainer = styled.div`
  min-height: 100vh;
  position: relative;
  /* padding-top: 25p; */
  /* padding: 20px; */
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);

  img {
    height: 100vh;
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const DetailsBox = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  background: transparent;
  padding: 25px;
`;

export const MovieName = styled.div`
  color: #f4f4f4;
  font-family: "BasisGrotesquePro-Bold";
  font-size: 40px;
  background: none;
  transition: transform 0.3s ease;
`;

export const MovieRating = styled.div`
  color: #f4f4f4;
  font-family: "BasisGrotesquePro-Bold";
  font-size: 18px;
  background: none;
  transition: transform 0.3s ease;
`;

export const MovieDesc = styled.div`
  margin-top: 10px;
  color: #f4f4f4;
  font-family: "BasisGrotesquePro-Bold";
  font-size: 24px;
  background: none;
  transition: transform 0.3s ease;
`;

export const OtherDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 40px;
  left: 40px;
  background: transparent;
  padding: 25px;
`;
