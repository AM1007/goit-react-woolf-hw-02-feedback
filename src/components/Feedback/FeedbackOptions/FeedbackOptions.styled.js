import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  height: 40px;
  width: 90px;
  margin: 15px;
  padding: 0 5px;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1px;
  background: #ddd;
  border: 1px solid #222;
  box-shadow: 3px 3px 0 #222;
  transform: rotate(2deg);
  transition: scale 0.3s ease;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
