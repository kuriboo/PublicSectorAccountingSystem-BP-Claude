import React from 'react';
import styled from 'styled-components';

// 予算納付税額算出表のプロパティ型定義
type TaxCalculationFormProps = {
  companyName?: string;
  year?: number;
  branch?: string;
  period?: number;
  filingDate?: string;
};

// 予算納付税額算出表のスタイル定義
const TaxCalculationFormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: inline-block;
  margin-right: 10px;
  min-width: 100px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  text-align: right;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 予算納付税額算出表コンポーネント
const TaxCalculationForm: React.FC<TaxCalculationFormProps> = ({
  companyName = '',
  year = new Date().getFullYear(),
  branch = '',
  period = 1,
  filingDate = '',
}) => {
  return (
    <TaxCalculationFormWrapper>
      <FormGroup>
        <Label>会計年度</Label>
        <Input type="number" defaultValue={year} />
        年度
      </FormGroup>
      <FormGroup>
        <Label>予算編成区分</Label>
        <Select defaultValue={branch}>
          <option value="">選択してください</option>
          <option value="本店">本店</option>
          <option value="支店">支店</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>回数</Label>
        <Input type="number" defaultValue={period} />
      </FormGroup>
      <FormGroup>
        <Label>最終査定値</Label>
        <Input type="text" defaultValue={filingDate} /> 回
      </FormGroup>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </TaxCalculationFormWrapper>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>予算納付税額算出表</h1>
      <TaxCalculationForm
        companyName="株式会社サンプル"
        year={2023}
        branch="本店"
        period={1}
        filingDate="2023年9月30日"
      />
    </div>
  );
};

export default App;