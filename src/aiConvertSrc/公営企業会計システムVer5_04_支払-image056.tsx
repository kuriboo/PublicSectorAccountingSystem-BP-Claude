import React from 'react';
import styled from '@emotion/styled';

type ContractFormProps = {
  requestDate: string;
  contractPeriodStart: string;
  contractPeriodEnd: string;
  location: string;
  contractorName: string;
  paymentDate: string;
  paymentMethod: '登録' | '訂正' | '削除';
  taxRate: number;
  baseAmount: number;
  consumptionTax: number;
  totalAmount: number;
  subject: string;
  memo: string;
};

const ContractForm: React.FC<ContractFormProps> = ({
  requestDate,
  contractPeriodStart,
  contractPeriodEnd,
  location,
  contractorName,
  paymentDate,
  paymentMethod,
  taxRate,
  baseAmount,
  consumptionTax,
  totalAmount,
  subject,
  memo,
}) => {
  return (
    <FormWrapper>
      <Title>工事請求書入力</Title>
      <Subtitle>行政市水道事業会計 管理者 経理担当 業者用 平成31年04月17日</Subtitle>
      <FieldGroup>
        <Field>
          <Label>請求処理日</Label>
          <Input type="text" value={requestDate} readOnly />
        </Field>
        <Field>
          <Label>処理番号</Label>
          <Input type="text" value="3662" readOnly />
        </Field>
      </FieldGroup>
      <FieldGroup>
        <Field>
          <Label>支払日</Label>
          <Input type="text" value={paymentDate} />
        </Field>
        <RadioGroup>
          <RadioButton type="radio" id="register" name="paymentMethod" value="登録" checked={paymentMethod === '登録'} readOnly />
          <RadioLabel htmlFor="register">登録</RadioLabel>
          <RadioButton type="radio" id="modify" name="paymentMethod" value="訂正" checked={paymentMethod === '訂正'} readOnly  />
          <RadioLabel htmlFor="modify">訂正</RadioLabel>
          <RadioButton type="radio" id="delete" name="paymentMethod" value="削除" checked={paymentMethod === '削除'} readOnly  />
          <RadioLabel htmlFor="delete">削除</RadioLabel>
        </RadioGroup>
      </FieldGroup>
      <Field>
        <Label>摘要</Label>
        <textarea name="subject" value={subject} readOnly></textarea>
      </Field>
      <Grid>
        <GridItem>
          <Label>支払先</Label>
          <div>{contractorName}</div>
        </GridItem>
        <GridItem>
          <Label>支払回数残</Label>
          <div>1 回</div>
        </GridItem>
      </Grid>
      <Table>
        <TableRow>
          <TableHeader>負担残額</TableHeader>
          <TableHeader>決定額</TableHeader>
          <TableHeader>消費税額</TableHeader>
        </TableRow>
        <TableRow>
          <TableData>{baseAmount.toLocaleString()}</TableData>
          <TableData>{totalAmount.toLocaleString()}</TableData>
          <TableData>{consumptionTax}</TableData>
        </TableRow>
      </Table>
      <Table>
        <TableRow>
          <TableHeader>事務機</TableHeader>
          <TableHeader>事業細目</TableHeader>
          <TableHeader>事業明細</TableHeader>
          <TableHeader>税率</TableHeader>
          <TableHeader>決定額</TableHeader>
          <TableHeader>消費税額</TableHeader>
        </TableRow>
        <TableRow>
          <TableData>事務机</TableData>
          <TableData>事務机</TableData>
          <TableData>事務机</TableData>
          <TableData>{taxRate}</TableData>
          <TableData>{totalAmount.toLocaleString()}</TableData>
          <TableData>{consumptionTax}</TableData>
        </TableRow>
      </Table>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

// Styled components
const FormWrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;

const Subtitle = styled.div`
  margin-bottom: 16px;
`;

const FieldGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RadioButton = styled.input`
  margin-right: 4px;
`;

const RadioLabel = styled.label`
  margin-right: 8px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
`;

const TableData = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

// Sample usage
const App: React.FC = () => {
  const sampleData: ContractFormProps = {
    requestDate: '平成31年03月31日',
    contractPeriodStart: '',
    contractPeriodEnd: '',
    location: '1号',
    contractorName: 'さようせい事務用品株式会社',
    paymentDate: '年_月_日',
    paymentMethod: '登録',
    taxRate: 3662,
    baseAmount: 10000,
    consumptionTax: 92000,
    totalAmount: 10000,
    subject: '6月 町口法mm配水管布設工事',
    memo: '',
  };

  return <ContractForm {...sampleData} />;
};

export default App;