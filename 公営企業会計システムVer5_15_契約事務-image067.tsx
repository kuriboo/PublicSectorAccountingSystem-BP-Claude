import React from 'react';
import styled from '@emotion/styled';

interface InspectionData {
  relationNumber: string;
  carNumber: string;
  expirationDate: string;
}

interface InspectionFormProps {
  inspectionData: InspectionData;
  onConfirm: () => void;
  onCancel: () => void;
}

const InspectionForm: React.FC<InspectionFormProps> = ({ inspectionData, onConfirm, onCancel }) => {
  const { relationNumber, carNumber, expirationDate } = inspectionData;

  return (
    <FormContainer>
      <Title>検査関係者</Title>
      <InputContainer>
        <Label>関係者区分</Label>
        <Input value={relationNumber || '002:監督員（検査)'} readOnly />
      </InputContainer>
      <InputContainer>
        <Label>担当者</Label>
        <Input value={carNumber || '999999'} readOnly />
        <Button onClick={onConfirm}>行確定</Button>
      </InputContainer>
      <InputContainer>
        <Label>任命日</Label>
        <Input value={expirationDate || '平成28年06月06日'} readOnly />
        <CancelButton onClick={onCancel}>行ｷｬﾝｾﾙ</CancelButton>
      </InputContainer>
      <InputContainer>
        <Label>業者側関係者</Label>
        <Input value="現場代理人" readOnly />
      </InputContainer>
      <InputContainer>
        <Label>主任技術者</Label>
        <Input value="技術者A" readOnly />
      </InputContainer>
      <InputContainer>
        <Label>現場責任者</Label>
        <Input value="現場責任者A" readOnly />
      </InputContainer>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 200px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
`;

// Usage example
const App: React.FC = () => {
  const sampleData: InspectionData = {
    relationNumber: '002:監督員（検査)',
    carNumber: '999999',
    expirationDate: '平成28年06月06日',
  };

  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <div>
      <h1>Inspection Form Example</h1>
      <InspectionForm
        inspectionData={sampleData}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default App;