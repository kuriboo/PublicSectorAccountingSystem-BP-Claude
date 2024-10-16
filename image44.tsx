import React from 'react';
import styled from '@emotion/styled';

interface TaxFreeInputProps {
  birthDate: string;
  department: string;
  title: string;
  search: string;
  orderDate: string;
  deliveryDate: string;
  basicFee: number;
  consumption: number;
  invoice: number;
  subtotal: number;
  grandTotal: number;
  memo: string;
}

const TaxFreeInput: React.FC<TaxFreeInputProps> = ({
  birthDate,
  department,
  title,
  search,
  orderDate,
  deliveryDate,
  basicFee,
  consumption,
  invoice,
  subtotal,
  grandTotal,
  memo,
}) => {
  // 入力値のバリデーションチェック
  const isValid = () => {
    if (!birthDate || !department || !title || !search || !orderDate || !deliveryDate) {
      return false;
    }
    return true;
  };

  return (
    <Container>
      <Title>特定課税仕入伝票管理入力</Title>
      <DateContainer>
        <DateLabel>伝票日付</DateLabel>
        <DateInput type="date" value={orderDate} />
        <DateLabel>～</DateLabel>
        <DateInput type="date" value={deliveryDate} />
        <TaxExemptCheckbox type="checkbox" />
        <TaxExemptLabel>課税の支出予算科目から税額中の伝票のみ抽出</TaxExemptLabel>
      </DateContainer>
      <InputContainer>
        <Label>種別</Label>
        <Select>
          <option>立替</option>
        </Select>
        <Label>発生源</Label>
        <Input type="text" value={department} />
        <Label>番号</Label>
        <Input type="text" value={search} />
        <Label>借方科目</Label>
        <Input type="text" value={title} />
        <Label>貸方科目</Label>
        <Input type="text" value={memo} />
      </InputContainer>
      <TableContainer>
        <TableHeader>
          <HeaderCell>種別</HeaderCell>
          <HeaderCell>発生源</HeaderCell>
          <HeaderCell>伝票日付</HeaderCell>
          <HeaderCell>番号</HeaderCell>
          <HeaderCell>明細</HeaderCell>
          <HeaderCell>借方科目</HeaderCell>
          <HeaderCell>貸方科目</HeaderCell>
          <HeaderCell>本体金額</HeaderCell>
          <HeaderCell>税額</HeaderCell>
          <HeaderCell>請求額</HeaderCell>
          <HeaderCell>摘要</HeaderCell>
        </TableHeader>
        <TableRow>
          <Cell>立替</Cell>
          <Cell>{department}</Cell>
          <Cell>{orderDate}</Cell>
          <Cell>{search}</Cell>
          <Cell>1</Cell>
          <Cell>{title}</Cell>
          <Cell>{memo}</Cell>
          <Cell>{basicFee.toLocaleString()}</Cell>
          <Cell>{consumption.toLocaleString()}</Cell>
          <Cell>{invoice.toLocaleString()}</Cell>
          <Cell>電子書籍購入費</Cell>
        </TableRow>
        <TableFooter>
          <FooterCell colSpan={7}>計</FooterCell>
          <FooterCell>{subtotal.toLocaleString()}</FooterCell>
          <FooterCell>{consumption.toLocaleString()}</FooterCell>
          <FooterCell>{grandTotal.toLocaleString()}</FooterCell>
          <FooterCell></FooterCell>
        </TableFooter>
      </TableContainer>
      <ButtonContainer>
        <Button disabled={!isValid()}>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const DateContainer = styled.div`
  display: flex; 
  align-items: center;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DateLabel = styled.label`
  margin-right: 8px;
`;

const DateInput = styled.input`
  margin-right: 16px;
`;

const TaxExemptCheckbox = styled.input`
  margin-right: 8px;
`;

const TaxExemptLabel = styled.label`
  font-size: 14px;

  @media (max-width: 600px) {
    margin-top: 8px;
  }
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 8px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  height: 30px;
`;

const Input = styled.input`
  height: 30px;
  padding: 4px;
`;

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const HeaderCell = styled.th`
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr``;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: right;
`;

const TableFooter = styled.tfoot`
  font-weight: bold;
`;

const FooterCell = styled.td`
  padding: 8px;
  text-align: right;
  border: 1px solid #ddd;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 8px;
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: TaxFreeInputProps = {
    birthDate: '2000/01/01',
    department: '天竜',
    title: '出張旅費',
    search: '9999999',  
    orderDate: '2028/03/27',
    deliveryDate: '2028/03/27',
    basicFee: 100000,
    consumption: 10000,
    invoice: 110000,
    subtotal: 100000,
    grandTotal: 110000,
    memo: '電子書籍購入費',
  };

  return (
    <TaxFreeInput {...sampleData} />
  );
};

export default TaxFreeInput;