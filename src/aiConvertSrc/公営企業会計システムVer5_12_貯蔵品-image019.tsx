import React from 'react';
import styled from '@emotion/styled';

// 契約発注入力のプロパティ型定義
type ContractOrderInputProps = {
  contractDate: string;
  orderNumber: string;
  deliveryDate: string;
  orderCompany: string;
  orderDepartment: string;
  customerNumber: string;
  customerName: string;
  paymentMethod: string;
  paymentTerm: string;
  expireDate: string;
  postageFee: number;
  discount: number;
  tax: number;
  total: number;
  amountCollected: number;
  comment: string;
};

// スタイルコンポーネント定義
const ContractOrderInputContainer = styled.div`
  padding: 16px;
  background-color: #f0f0f0;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ContractTable = styled.table`
  width: 100%;
  margin-top: 16px;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const ButtonGroup = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// 契約発注入力コンポーネント
const ContractOrderInput: React.FC<ContractOrderInputProps> = ({
  contractDate,
  orderNumber,
  deliveryDate,
  orderCompany,
  orderDepartment,
  customerNumber,
  customerName,
  paymentMethod,
  paymentTerm,
  expireDate,
  postageFee,
  discount,
  tax,
  total,
  amountCollected,
  comment,
}) => {
  return (
    <ContractOrderInputContainer>
      <h2>契約発注入力</h2>
      <InputGroup>
        <Label>契約年月日</Label>
        <Input type="text" value={contractDate} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>発注番号</Label>
        <Input type="text" value={orderNumber} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>納期</Label>
        <Input type="text" value={deliveryDate} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>発注業者</Label>
        <Input type="text" value={orderCompany} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>発注部門</Label>
        <Input type="text" value={orderDepartment} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>顧客コード</Label>
        <Input type="text" value={customerNumber} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>顧客名</Label>
        <Input type="text" value={customerName} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>支払方法</Label>
        <Select value={paymentMethod} readOnly>
          <option value="振込">振込</option>
          <option value="手形">手形</option>
        </Select>
      </InputGroup>
      <InputGroup>
        <Label>支払サイト</Label>
        <Input type="text" value={paymentTerm} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>有効期限</Label>
        <Input type="text" value={expireDate} readOnly />
      </InputGroup>
      <ContractTable>
        <thead>
          <tr>
            <TableHeader>品番</TableHeader>
            <TableHeader>品名</TableHeader>
            <TableHeader>数量</TableHeader>
            <TableHeader>単価</TableHeader>
            <TableHeader>金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>100001</TableCell>
            <TableCell>DJP(A1)棒鋼</TableCell>
            <TableCell>8.75</TableCell>
            <TableCell>2.00</TableCell>
            <TableCell>13,230.00</TableCell>
          </tr>
        </tbody>
      </ContractTable>
      <InputGroup>
        <Label>消費税率</Label>
        <Input type="text" value="8%" readOnly />
      </InputGroup>
      <InputGroup>
        <Label>郵送料</Label>
        <Input type="number" value={postageFee} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>値引額</Label>
        <Input type="number" value={discount} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>消費税額</Label>
        <Input type="number" value={tax} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>合計</Label>
        <Input type="number" value={total} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>入金額</Label>
        <Input type="number" value={amountCollected} readOnly />
      </InputGroup>
      <InputGroup>
        <Label>摘要</Label>
        <Input type="text" value={comment} readOnly />
      </InputGroup>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </ContractOrderInputContainer>
  );
};

// 使用例
const App: React.FC = () => {
  // サンプルデータ
  const sampleData: ContractOrderInputProps = {
    contractDate: '平成29年09月19日',
    orderNumber: '9999999',
    deliveryDate: '平成29年09月19日',
    orderCompany: '001637 掛川水道が完生土分析測定業務委託',
    orderDepartment: '',
    customerNumber: '0000000013',
    customerName: 'ぎょうせいコンサ',
    paymentMethod: '振込',
    paymentTerm: '3',
    expireDate: '平成29年09月19日',
    postageFee: 0,
    discount: 0,
    tax: 2116,
    total: 28576,
    amountCollected: 0,
    comment: '',
  };

  return (
    <div>
      <ContractOrderInput {...sampleData} />
    </div>
  );
};

export default App;