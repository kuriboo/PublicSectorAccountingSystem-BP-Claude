import React from 'react';
import styled from '@emotion/styled';

interface TaxWithholdingFormProps {
  onSubmit: (data: TaxWithholdingData) => void;
}

interface TaxWithholdingData {
  type: '給与' | '賞与' | '報酬';
  taxAmount: number;
  deductionAmount: number;
  startDate: string;
  endDate: string;
  paymentAmount: number;
  paymentDate: string;
  basicDeduction: number;
  specialDeduction: number;
  taxRate: number;
}

const TaxWithholdingForm: React.FC<TaxWithholdingFormProps> = ({ onSubmit }) => {
  // フォームの状態を管理するステート
  const [formData, setFormData] = React.useState<TaxWithholdingData>({
    type: '給与',
    taxAmount: 0,
    deductionAmount: 0,
    startDate: '',
    endDate: '',
    paymentAmount: 0,
    paymentDate: '',
    basicDeduction: 1000000,
    specialDeduction: 0,
    taxRate: 0.1021,
  });

  // フォーム送信時のハンドラ
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>特定課税仕入伝票管理入力</Title>
      <RadioGroup>
        <RadioButton
          type="radio"
          name="type"
          value="給与"
          checked={formData.type === '給与'}
          onChange={() => setFormData({ ...formData, type: '給与' })}
        />
        <label>給与</label>
        <RadioButton
          type="radio"
          name="type"
          value="賞与"
          checked={formData.type === '賞与'}
          onChange={() => setFormData({ ...formData, type: '賞与' })}
        />
        <label>賞与</label>
        <RadioButton
          type="radio"
          name="type"
          value="報酬"
          checked={formData.type === '報酬'}
          onChange={() => setFormData({ ...formData, type: '報酬' })}
        />
        <label>報酬</label>
      </RadioGroup>
      
      <Row>
        <Label>税額</Label>
        <Input
          type="number"
          value={formData.taxAmount}
          onChange={(e) => setFormData({ ...formData, taxAmount: Number(e.target.value) })}
        />
      </Row>
      
      <Row>
        <Label>控除後の金額</Label>
        <Input
          type="number"
          value={formData.deductionAmount} 
          onChange={(e) => setFormData({...formData, deductionAmount: Number(e.target.value)})}
        />
      </Row>

      <Row>
        <Label>期間</Label>
        <Input
          type="date"
          value={formData.startDate}
          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
        />
        <span>〜</span>
        <Input
          type="date"
          value={formData.endDate}
          onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
        />
        <Checkbox>
          <input type="checkbox" />
          <label>課税の支出予算残圧から控除(10%控除のみ抽出)</label>
        </Checkbox>
      </Row>
      
      <Table>
        <thead>
          <tr>
            <th>種別</th>
            <th>発生源</th>
            <th>税率</th>
            <th>期間</th>
            <th>借方科目</th>
            <th>貸方科目</th>
            <th>本体金額</th>
            <th>税額</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>天引</td>
            <td>支払決定</td>
            <td>10.21%</td>
            <td>○○建築費</td>
            <td>預金利息</td>
            <td>1,000,000</td>
            <td />
            <td>電子請求入力</td>
          </tr>
        </tbody>
      </Table>

      <SubmitButton type="submit">OK</SubmitButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const RadioGroup = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  span {
    margin: 0 10px;
  }
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Checkbox = styled.div`
  margin-left: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Usage example
const App = () => {
  const handleFormSubmit = (data: TaxWithholdingData) => {
    console.log('Form submitted:', data);
    // Handle form submission logic here
  };

  return <TaxWithholdingForm onSubmit={handleFormSubmit} />;
};

export default App;