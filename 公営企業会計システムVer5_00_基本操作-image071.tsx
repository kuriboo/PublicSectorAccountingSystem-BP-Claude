import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface ExportProps {
  fileName?: string;
  folderName?: string;
}

// Define styled components
const ExportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Define the Export component
const Export: React.FC<ExportProps> = ({ fileName = '', folderName = '' }) => {
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform export logic here
    console.log('Exporting:', fileName, folderName);
  };

  return (
    <ExportContainer>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Label htmlFor="fileName">ファイル名(N):</Label>
          <Input type="text" id="fileName" defaultValue={fileName} />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="folderName">フォルダの種類(T):</Label>
          <Input type="text" id="folderName" defaultValue={folderName} />
        </InputContainer>
        <ButtonContainer>
          <Button type="submit">保存(S)</Button>
          <Button type="button">キャンセル</Button>
        </ButtonContainer>
      </form>
    </ExportContainer>
  );
};

// Example usage of the Export component
const ExportExample: React.FC = () => {
  return (
    <div>
      <h2>Export Example</h2>
      <Export fileName="Export20170908" folderName="新規のフォルダ" />
    </div>
  );
};

export default ExportExample;