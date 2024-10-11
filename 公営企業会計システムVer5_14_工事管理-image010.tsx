import React from 'react';
import styled from '@emotion/styled';

type WorkNumberSearchFormProps = {
  projectNumber: string;
  projectName: string;
  projectManager: string;
  onSubmit: () => void;
};

const WorkNumberSearchForm: React.FC<WorkNumberSearchFormProps> = ({
  projectNumber,
  projectName,
  projectManager,
  onSubmit,
}) => {
  return (
    <Container>
      <Title>工区番号検索</Title>
      <Table>
        <tbody>
          <tr>
            <th>事業</th>
            <td>{projectNumber}</td>
          </tr>
          <tr>
            <th>施策</th>
            <td>{projectName}</td>
          </tr>
          <tr>
            <th>施策内訳</th>
            <td>{projectManager}</td>
          </tr>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button onClick={onSubmit}>表示</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;

  th {
    background-color: #d0d0d0;
    padding: 8px;
    text-align: left;
    width: 100px;
  }

  td {
    padding: 8px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <WorkNumberSearchForm
      projectNumber="06 水道広報展示関係改良事業"
      projectName="01 水道広報展示関係改良事業"
      projectManager="0001 日常的な水道広報事業"
      onSubmit={handleSubmit}
    />
  );
};

export default App;