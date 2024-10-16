import React from 'react';
import styled from '@emotion/styled';

interface UserSummaryProps {
  code: string;
  name: string;
  reading: string;
  onOk?: () => void;
  onCancel?: () => void;
}

const UserSummary: React.FC<UserSummaryProps> = ({
  code,
  name,
  reading,
  onOk,
  onCancel,
}) => {
  return (
    <Container>
      <Title>調定用振替入力予算科目登録</Title>
      <Table>
        <tbody>
          <tr>
            <th>節</th>
            <td>{code ?? '--'}</td>
          </tr>
          <tr>
            <th>細節</th>
            <td>{name ?? '--'}</td>
          </tr>
          <tr>
            <th>明細</th>
            <td>{reading ?? '--'}</td>
          </tr>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

export default UserSummary;

// Styles
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 16px;

  th {
    text-align: left;
    padding: 4px;
    white-space: nowrap;
  }

  td {
    padding: 4px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const UserSummaryExample: React.FC = () => {
  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <UserSummary
      code="001020619"
      name="外・その他雑収益"
      reading="地補収益・外・不"
      onOk={handleOk}
      onCancel={handleCancel}
    />
  );
};