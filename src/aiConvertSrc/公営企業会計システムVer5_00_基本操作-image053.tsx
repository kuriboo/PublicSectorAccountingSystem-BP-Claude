import React from 'react';
import styled from '@emotion/styled';

type CsvImportDialogProps = {
  onOk: () => void;
  onCancel: () => void;
};

const CsvImportDialog: React.FC<CsvImportDialogProps> = ({ onOk, onCancel }) => {
  return (
    <DialogContainer>
      <Title>CSV出力</Title>
      <OptionsContainer>
        <Option>
          <input type="radio" id="cut" name="csv-option" />
          <label htmlFor="cut">切り文字</label>
        </Option>
        <Option>
          <input type="radio" id="comma" name="csv-option" defaultChecked />
          <label htmlFor="comma">カンマ</label>
        </Option>
        <Option>
          <input type="radio" id="tab" name="csv-option" />
          <label htmlFor="tab">タブ</label>
        </Option>
      </OptionsContainer>
      <OptionsContainer>
        <Option>
          <input type="radio" id="surrounding" name="surrounding-option" defaultChecked />
          <label htmlFor="surrounding">「」の有無</label>
        </Option>
        <Option>
          <input type="radio" id="no-surrounding" name="surrounding-option" />
          <label htmlFor="no-surrounding">あり</label>
        </Option>
        <Option>
          <input type="radio" id="with-surrounding" name="surrounding-option" />
          <label htmlFor="with-surrounding">なし</label>
        </Option>
      </OptionsContainer>
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        <CancelButton onClick={onCancel}>キャンセル</CancelButton>
      </ButtonContainer>
    </DialogContainer>
  );
};

// Styling
const DialogContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin: 0 0 20px;
`;

const OptionsContainer = styled.div`
  margin-bottom: 10px;
`;

const Option = styled.div`
  margin-bottom: 5px;
  
  label {
    margin-left: 5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
`;

// Sample usage
const SampleUsage: React.FC = () => {
  const handleOk = () => {
    // Handle OK button click
    console.log('OK clicked');
  };

  const handleCancel = () => {
    // Handle Cancel button click 
    console.log('Cancel clicked');
  };

  return (
    <div>
      <h1>CSV Import Dialog Sample</h1>
      <CsvImportDialog onOk={handleOk} onCancel={handleCancel} />
    </div>
  );
};

export default SampleUsage;