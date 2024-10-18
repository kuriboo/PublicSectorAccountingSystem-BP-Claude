import React from 'react';
import styled from '@emotion/styled';

interface SampleData {
  date: string;
  company: string;
  region: string;
  period: string;
  usage: string;
  flowRate: number;
  taxRate: number;
  calculation: string;
}

interface ComponentProps {
  data: SampleData;
}

const Component: React.FC<ComponentProps> = ({ data }) => {
  // 必須項目のチェック
  if (!data.date || !data.company || !data.region || !data.period) {
    return <div>必須項目が入力されていません。</div>;
  }

  return (
    <Container>
      <Title>料日名称表示レベル</Title>
      <Table>
        <tbody>
          <tr>
            <HeaderCell>予算科目</HeaderCell>
            <DataCell>{data.date}</DataCell>
          </tr>
          <tr>
            <HeaderCell>名称</HeaderCell>
            <DataCell>{data.company}</DataCell>
          </tr>
          <tr>
            <HeaderCell>所属</HeaderCell>
            <DataCell>{data.region}</DataCell>
          </tr>
        </tbody>  
      </Table>

      <FieldSet>
        <Legend>最終行番号</Legend>
        <Field>
          <Label>末番号</Label>
          <Input type="number" defaultValue={10} />
        </Field>
        <Field>
          <Label>流用理由</Label>
          <Input type="text" defaultValue="法廷福利費からの流用" />
        </Field>
        <Field>
          <Label>流用純正</Label>
          <RadioGroup>
            <Radio type="radio" name="calculation" defaultChecked />
            <RadioLabel>未処理</RadioLabel>
            <Radio type="radio" name="calculation" />
            <RadioLabel>補正流用預かり</RadioLabel>
            <Radio type="radio" name="calculation" />
            <RadioLabel>流用戻しのみ</Radio>
          </RadioGroup>
        </Field>
        <Field>
          <Label>区分</Label>
          <Select defaultValue="非課税">
            <option>課税</option>
            <option>非課税</option>
          </Select>
        </Field>
        <Table>
          <tbody>
            <tr>
              <HeaderCell>部位回数</HeaderCell>
              <DataCell>{data.usage}回</DataCell>
            </tr>
            <tr>
              <HeaderCell>流用額(税込)</HeaderCell>
              <DataCell>{data.flowRate.toLocaleString()}円</DataCell>
            </tr>
            <tr>
              <HeaderCell>流用額(税抜)</HeaderCell>
              <DataCell>{Math.round(data.flowRate / (1 + data.taxRate)).toLocaleString()}円</DataCell>
            </tr>
          </tbody>
        </Table>
        <Field>
          <Label>消費税率</Label>
          <Input type="number" defaultValue={data.taxRate * 100} />%
        </Field>
        <Field>
          <Label>消費税額</Label>
          <Input type="number" value={Math.round(data.flowRate * data.taxRate)} disabled />円
        </Field>
        <Field>  
          <Label>税区分</Label>
          <Input type="text" defaultValue="非課税" />
        </Field>
      </FieldSet>
      
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <CancelButton>キャンセル</CancelButton>
      </ButtonGroup>
    </Container>
  );
};

const sampleData: SampleData = {
  date: '2021/04/01',
  company: '共済組合管理/非',
  region: '本社',
  period: '下水道課',  
  usage: '1',
  flowRate: 15000,
  taxRate: 0.1,
  calculation: '未処理',
};

export default function App() {
  return <Component data={sampleData} />;  
}

// Styled Components

const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin: 0 0 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const HeaderCell = styled.td`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 5px;
  font-weight: bold;
  white-space: nowrap;
  @media (max-width: 600px) {
    white-space: normal;
  }  
`;

const DataCell = styled.td`
  border: 1px solid #ccc;
  padding: 5px;
`;

const FieldSet = styled.fieldset`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
`;

const Legend = styled.legend`
  padding: 0 5px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  @media (max-width: 600px) {    
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;  
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ButtonGroup = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;
`;