import React from 'react';
import styled from '@emotion/styled';

type ContractMasterMaintenanceProps = {
  updateYear: number; // 工事管理マスタ保守の年度
  newOldSelectionValue: '年次更新行' | '年次更新不可'; // 年次更新有無フラグ
  nextFiscalYearProcessFlagValue: '未作成' | '作成済'; // 次年度マスタ作成区分
};

const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const ContractMasterMaintenance: React.FC<ContractMasterMaintenanceProps> = ({
  updateYear,
  newOldSelectionValue,
  nextFiscalYearProcessFlagValue,
}) => {
  return (
    <Container>
      <Title>工事管理マスタ保守</Title>
      <FormGroup>
        <Label>工事合議年度</Label>
        <Input type="number" value={updateYear} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>年次更新有無フラグ</Label>
        <RadioGroup>
          <RadioLabel>
            <input
              type="radio"
              checked={newOldSelectionValue === '年次更新行'}
              readOnly
            />
            年次更新行
          </RadioLabel>
          <RadioLabel>
            <input
              type="radio"
              checked={newOldSelectionValue === '年次更新不可'}
              readOnly
            />
            年次更新不可
          </RadioLabel>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>次年度マスタ作成区分</Label>
        <Select value={nextFiscalYearProcessFlagValue}>
          <option value="未作成">未作成</option>
          <option value="作成済">作成済</option>
        </Select>
      </FormGroup>
      <Button>OK</Button>
      <Button>クリア</Button>
      <Button>終了</Button>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <ContractMasterMaintenance
      updateYear={2023}
      newOldSelectionValue="年次更新行"
      nextFiscalYearProcessFlagValue="未作成"
    />
  );
};

export default App;