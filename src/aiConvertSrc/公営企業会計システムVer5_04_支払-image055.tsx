import React from 'react';
import styled from '@emotion/styled';

type PrintRequestFormProps = {
  // プロパティの型定義
  onConfirm: () => void;
  onCancel: () => void;
};

const PrintRequestForm: React.FC<PrintRequestFormProps> = ({ onConfirm, onCancel }) => {
  return (
    <FormContainer>
      <Title>印刷対象帳票名</Title>
      <OptionContainer>
        <Option>
          <input type="checkbox" id="estimate" defaultChecked />
          <label htmlFor="estimate">負担行為伺兼命令書(工事)</label>
        </Option>
        <Option>
          <input type="checkbox" id="contract" defaultChecked />
          <label htmlFor="contract">契約分析 税率別金額合計一覧</label>
        </Option>
      </OptionContainer>
      <ButtonContainer>
        <Button onClick={onConfirm}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <PrintRequestForm onConfirm={handleConfirm} onCancel={handleCancel} />
  );
};

// スタイリング
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  color: #333;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Option = styled.div`
  margin-bottom: 10px;

  label {
    margin-left: 8px;
    font-size: 16px;
    color: #555;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default PrintRequestForm;