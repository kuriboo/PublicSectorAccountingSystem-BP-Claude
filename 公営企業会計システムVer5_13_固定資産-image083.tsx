import React from 'react';
import styled from '@emotion/styled';

type FixedAssetFormProps = {
  assetCode?: string;
  assetName?: string;
  quantity?: number;
  unitPrice?: number;
  amount?: number;
  acquisitionDate?: string;
  usefulLife?: number;
  residualValue?: number;
  depreciationMethod?: 'straight-line' | 'declining-balance';
  startDepreciationDate?: string;
  endDepreciationDate?: string;
  remarks?: string;
  onSubmit?: (data: FixedAssetFormData) => void;
};

type FixedAssetFormData = {
  assetCode: string;
  assetName: string;
  quantity: number;
  unitPrice: number;
  amount: number;
  acquisitionDate: string;
  usefulLife: number;
  residualValue: number;
  depreciationMethod: 'straight-line' | 'declining-balance';
  startDepreciationDate: string;
  endDepreciationDate: string;
  remarks: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  label {
    flex: 0 0 120px;
  }

  input,
  select {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FixedAssetForm: React.FC<FixedAssetFormProps> = ({
  assetCode = '',
  assetName = '',
  quantity = 0,
  unitPrice = 0,
  amount = 0,
  acquisitionDate = '',
  usefulLife = 0,
  residualValue = 0,
  depreciationMethod = 'straight-line',
  startDepreciationDate = '',
  endDepreciationDate = '',
  remarks = '',
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: FixedAssetFormData = {
      assetCode,
      assetName,
      quantity,
      unitPrice,
      amount,
      acquisitionDate,
      usefulLife,
      residualValue,
      depreciationMethod,
      startDepreciationDate,
      endDepreciationDate,
      remarks,
    };
    onSubmit?.(data);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <label>資産番号</label>
          <input type="text" value={assetCode} readOnly />
          <label>資産名称</label>
          <input type="text" value={assetName} readOnly />
        </InputGroup>
        <InputGroup>
          <label>数量</label>
          <input type="number" value={quantity} readOnly />
          <label>単価</label>
          <input type="number" value={unitPrice} readOnly />
        </InputGroup>
        <InputGroup>
          <label>取得年月日</label>
          <input type="date" value={acquisitionDate} readOnly />
        </InputGroup>
        <InputGroup>
          <label>耐用年数</label>
          <input type="number" value={usefulLife} readOnly />
          <label>残存価額</label>
          <input type="number" value={residualValue} readOnly />
        </InputGroup>
        <InputGroup>
          <label>償却方式</label>
          <select value={depreciationMethod} disabled>
            <option value="straight-line">定額法</option>
            <option value="declining-balance">定率法</option>
          </select>
        </InputGroup>
        <InputGroup>
          <label>償却開始日</label>
          <input type="date" value={startDepreciationDate} readOnly />
          <label>償却終了日</label>
          <input type="date" value={endDepreciationDate} readOnly />
        </InputGroup>
        <InputGroup>
          <label>備考</label>
          <input type="text" value={remarks} readOnly />
        </InputGroup>
        <ButtonGroup>
          <SubmitButton type="submit">登録</SubmitButton>
        </ButtonGroup>
      </form>
    </Container>
  );
};

// Usage example
const SampleFixedAssetForm = () => {
  const handleSubmit = (data: FixedAssetFormData) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <FixedAssetForm
      assetCode="420054000"
      assetName="PC"
      quantity={1}
      unitPrice={150000}
      amount={150000}
      acquisitionDate="2022-01-01"
      usefulLife={4}
      residualValue={0}
      depreciationMethod="straight-line"
      startDepreciationDate="2022-01-01"
      endDepreciationDate="2025-12-31"
      remarks="Sample fixed asset"
      onSubmit={handleSubmit}
    />
  );
};

export default FixedAssetForm;