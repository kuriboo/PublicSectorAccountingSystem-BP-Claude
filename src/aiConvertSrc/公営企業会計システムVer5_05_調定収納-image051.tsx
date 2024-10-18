import React from 'react';
import styled from '@emotion/styled';

type PublicChargeSystemInputProps = {
  fiscalYear: number;
  ageAtTheEndOfFiscalYear: number;
  dateOfBirth: string;
  admissionDate: string;
  dischargeDate: string;
  waterLightHeatExpenses: number;
  specificCost: number;
  longTermCareFee: number;
  numberOfDaysInFacility: number;
  totalExpense: number;
  personalExpense: number;
}

const Container = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 4px;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const PublicChargeSystemInput: React.FC<PublicChargeSystemInputProps> = ({
  fiscalYear,
  ageAtTheEndOfFiscalYear,
  dateOfBirth,
  admissionDate,
  dischargeDate,
  waterLightHeatExpenses,
  specificCost,
  longTermCareFee,
  numberOfDaysInFacility,
  totalExpense,
  personalExpense,
}) => {
  return (
    <Container>
      <Label>納入通知書再発行入力</Label>
      <div>
        <Label>年度</Label>
        <Input type="number" value={fiscalYear} readOnly />
      </div>
      <div>
        <Label>調定番号</Label>
        <Input type="text" value="65" readOnly />
      </div>
      <div>
        <Label>納入期限</Label>
        <Input type="date" value={admissionDate} readOnly />
      </div>
      <div>
        <Label>摘要</Label>
        <Input type="text" value="水道料金の調定" readOnly />
      </div>
      <div>
        <Label>督促有無</Label>
        <Input type="text" value="有 無" readOnly />
      </div>
      <div>
        <Label>督促情報</Label>
        <Input type="text" placeholder="住所" />
        <Input type="text" placeholder="料金" />
      </div>
      <Table>
        <thead>
          <tr>
            <th>調定科目</th>
            <th>調定細節</th>
            <th>調定明細(旧税)</th>
            <th>税</th>
            <th>調定金額</th>
            <th>内消費税額</th>
            <th>特定収入</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>水道料金</td>
            <td>水道料金</td>
            <td>水道料金(旧税)</td>
            <td>{waterLightHeatExpenses}</td>
            <td>{totalExpense}</td>
            <td>0</td>
            <td>{specificCost}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const sampleData: PublicChargeSystemInputProps = {
    fiscalYear: 29,
    ageAtTheEndOfFiscalYear: 65,
    dateOfBirth: '1958/08/30',
    admissionDate: '2023/08/13',
    dischargeDate: '2023/08/30',
    waterLightHeatExpenses: 3000,
    specificCost: 222,
    longTermCareFee: 3000,
    numberOfDaysInFacility: 1,
    totalExpense: 3000,
    personalExpense: 0,
  };

  return (
    <div>
      <h1>PublicChargeSystemInput Component Example</h1>
      <PublicChargeSystemInput {...sampleData} />
    </div>
  );
};

export default App;