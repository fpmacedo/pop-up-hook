import styled from 'styled-components';
import { CheckCircle } from '@styled-icons/feather';

export const Popup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const PopUpInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border-radius: 20px;
  background: white;
  padding-bottom: 50px;
  padding-top: 20px;
`;

export const FiAlertCircleIcon = styled(CheckCircle)`
  color: #00ff00;
  max-width: 150px;
`;
