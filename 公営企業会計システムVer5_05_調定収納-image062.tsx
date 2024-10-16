import React from 'react';
import styled from '@emotion/styled';

type PayrollDeductionFormProps = {
  year: number;
  month: number;
  baseSalary: number;
  overtimeAllowance: number;
  workingDays: number;
  deductions: {
    label: string;
    amount: number;
  }[];
  totalDeduction: number;
  netSalary: number;
};

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const FormTitle = styled.h2`
  margin: 0;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const FormColumn = styled.div`
  flex: 1;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const FormTable = styled.table`
  width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
`;

const FormTableHeader = styled.th`
  padding: 8px;
  background-color: #ddd;
  text-align: left;
`;

const FormTableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const FormResult = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
`;

const PayrollDeductionForm: React.FC<PayrollDeductionFormProps> = ({
  year,
  month,
  baseSalary,
  overtimeAllowance,
  workingDays,
  deductions,
  totalDeduction,
  netSalary,
}) => {
  return (
    <FormWrapper>
      <FormHeader>
        <FormTitle>給与計算書</FormTitle>
        <div>
          令和 {year}年{month}月分
        </div>
      </FormHeader>

      <FormRow>
        <FormColumn>
          <FormLabel>精算対象</FormLabel>
          <FormInput type="text" value={`${year}年${month}月25日`} readOnly />
        </FormColumn>
        <FormColumn>
          <FormLabel>精算者</FormLabel>
          <FormInput type="text" value="ぎょうせい工務店" readOnly />
        </FormColumn>
      </FormRow>

      <FormRow>
        <FormColumn>
          <FormLabel>工事店</FormLabel>
          <FormInput type="text" value="ぎょうせい工務店" readOnly />
        </FormColumn>
        <FormColumn>
          <FormLabel>支給合計</FormLabel>
          <FormInput type="number" value={baseSalary + overtimeAllowance} readOnly />
        </FormColumn>
      </FormRow>

      <FormLabel>調定番号</FormLabel>
      <FormInput type="text" value="3" readOnly />

      <FormLabel>摘要</FormLabel>
      <FormInput type="text" value="前受金の調定" readOnly />

      <FormRow>
        <FormColumn>
          <FormLabel>課税区分</FormLabel>
          <FormSelect>
            <option value="課税">課税</option>
            <option value="非課税">非課税</option>
          </FormSelect>
        </FormColumn>
        <FormColumn>
          <FormLabel>税収対応予算</FormLabel>
          <FormSelect>
            <option value="対応">対応</option>
            <option value="未対応">未対応</option>
          </FormSelect>
        </FormColumn>
      </FormRow>

      <FormTable>
        <thead>
          <tr>
            <FormTableHeader>科目</FormTableHeader>
            <FormTableHeader>税</FormTableHeader>
            <FormTableHeader>構成金額</FormTableHeader>
            <FormTableHeader>内消費税額</FormTableHeader>
            <FormTableHeader>特定収入</FormTableHeader>
            <FormTableHeader>未収対応予算</FormTableHeader>
          </tr>
        </thead>
        <tbody>
          {deductions.map((deduction, index) => (
            <tr key={index}>
              <FormTableCell>{deduction.label}</FormTableCell>
              <FormTableCell>課税</FormTableCell>
              <FormTableCell>{deduction.amount.toLocaleString()}</FormTableCell>
              <FormTableCell>{(deduction.amount * 0.1).toLocaleString()}</FormTableCell>
              <FormTableCell>0</FormTableCell>
              <FormTableCell>0</FormTableCell>
            </tr>
          ))}
        </tbody>
      </FormTable>

      <FormResult>
        <div>合計課税金額: {baseSalary.toLocaleString()}</div>
        <div>合計消費税額: {overtimeAllowance.toLocaleString()}</div>
        <div>合計特定収入: 0</div>
      </FormResult>
    </FormWrapper>
  );
};

// サンプルデータを使用したコンポーネントの呼び出し例
const App: React.FC = () => {
  const payrollDeductionData: PayrollDeductionFormProps = {
    year: 4,
    month: 12,
    baseSalary: 25000,
    overtimeAllowance: 2000,
    workingDays: 22,
    deductions: [
      { label: '水道料金', amount: 10000 },
      { label: 'その他営業外費', amount: 15000 },
    ],
    totalDeduction: 25000,
    netSalary: 27000,
  };

  return <PayrollDeductionForm {...payrollDeductionData} />;
};

export default App;