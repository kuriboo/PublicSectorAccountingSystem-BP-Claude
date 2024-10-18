import React from 'react';
import styled from 'styled-components';

type PaymentSlipProps = {
  date?: string;
  slipNumber?: string;
  title?: string;
  payee?: string;
  paymentDate?: string;
  paymentAmount?: number;
  stampRecipient?: string;
  department?: string;
  accountTitle?: string;
  costDetail?: string;
  expenseName?: string;
  expenseAmount?: number;
  note?: string;
};

const PaymentSlip: React.FC<PaymentSlipProps> = ({
  date = '',
  slipNumber = '',
  title = '',
  payee = '',
  paymentDate = '',
  paymentAmount = 0,
  stampRecipient = '',
  department = '',
  accountTitle = '',
  costDetail = '',
  expenseName = '',
  expenseAmount = 0,
  note = '',
}) => {
  return (
    <Container>
      <Header>
        <Title>支払伝票（単票）</Title>
        <DateNumber>
          <Item>
            <Label>伝票NO</Label>
            <Value>{slipNumber}</Value>
          </Item>
          <Item>
            <Label>年月日</Label>
            <Value>{date}</Value>
          </Item>
        </DateNumber>
      </Header>
      
      <Table>
        <TableHeader>
          <Row>
            <Cell>所属</Cell>
            <Cell>氏名</Cell>
            <Cell>件名</Cell>
            <Cell>支払金額</Cell>
            <Cell>着席者</Cell>
            <Cell>保管係長</Cell>
            <Cell>係</Cell>
            <Cell>起案者</Cell>
          </Row>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>{department}</Cell>
            <Cell>{payee}</Cell>
            <Cell>{title}</Cell>
            <Cell>{paymentAmount.toLocaleString()}</Cell>
            <Cell />
            <Cell />
            <Cell />
            <Cell />
          </Row>
        </TableBody>
      </Table>
      
      <Grid>
        <Column>
          <SubHeader>借方科目</SubHeader>
          <GridBody>
            <GridRow>
              <GridCell>事業費用</GridCell>
            </GridRow>
            <GridRow>
              <GridCell>{accountTitle}</GridCell>
            </GridRow>
            <GridRow>
              <GridCell>{costDetail}</GridCell>
            </GridRow>
            <GridRow>
              <GridCell>{expenseName}</GridCell>
            </GridRow>
          </GridBody>
        </Column>
        
        <Column>
          <SubHeader>貸方科目</SubHeader>
          <GridBody>
            <GridRow>
              <GridCell>現金預金</GridCell>
            </GridRow>
            <GridRow>
              <GridCell>普通預金</GridCell>
            </GridRow>
            <GridRow>
              <GridCell>普通預金</GridCell>
            </GridRow>
            <GridRow>
              <GridCell>普通預金</GridCell>
            </GridRow>
          </GridBody>
        </Column>
        
        <AmountColumn>
          <SubHeader>金額</SubHeader>
          <AmountGrid>
            <AmountRow>
              <AmountCell>{paymentAmount.toLocaleString()}</AmountCell>
            </AmountRow>
            <AmountRow>
              <AmountCell>{paymentAmount.toLocaleString()}</AmountCell>
            </AmountRow>
          </AmountGrid>
        </AmountColumn>
      </Grid>
      
      <Footer>
        <NoteBox>
          <SubHeader>摘要</SubHeader>
          <NoteCell>{note}</NoteCell>
        </NoteBox>
        <SignBox>
          <Sign>提出者確認</Sign>
          <Sign>取入区分</Sign>
        </SignBox>
      </Footer>
      
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SamplePaymentSlip = () => {
  const sampleData: PaymentSlipProps = {
    date: '2023年3月27日',
    slipNumber: '27-000451',
    title: 'サンプル支払伝票',
    payee: '山田太郎',
    paymentDate: '2023年4月1日',
    paymentAmount: 100000,
    stampRecipient: '受領者',
    department: '経理部',
    accountTitle: '旅費交通費',
    costDetail: '3月出張旅費',
    expenseName: '新幹線代',
    expenseAmount: 80000,
    note: '3月分の出張旅費精算',
  };

  return <PaymentSlip {...sampleData} />;
};

// スタイリング
const Container = styled.div`
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ccc;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const DateNumber = styled.div`
  display: flex;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  
  &:first-child {
    margin-left: 0;
  }
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-right: 8px;
`;

const Value = styled.div`
  font-size: 14px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
`;

const TableHeader = styled.thead`
  background-color: #f0f0f0;
`;

const Row = styled.tr``;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
  text-align: center;
`;

const TableBody = styled.tbody``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 200px;
  grid-gap: 16px;
  margin-bottom: 24px;
`;

const Column = styled.div``;

const SubHeader = styled.h3`
  font-size: 18px;
  font-weight: bold;
  padding: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  text-align: center;
`;

const GridBody = styled.div`
  border: 1px solid #ccc;
  border-top: none;
`;

const GridRow = styled.div`
  padding: 8px;
  border-top: 1px solid #ccc;
`;

const GridCell = styled.div`
  font-size: 14px;
`;

const AmountColumn = styled.div``;

const AmountGrid = styled.div`
  border: 1px solid #ccc;
  border-top: none;
`;

const AmountRow = styled.div`
  padding: 8px;
  border-top: 1px solid #ccc;
  text-align: right;
`;

const AmountCell = styled.div`
  font-size: 14px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NoteBox = styled.div`
  flex: 1;
`;

const NoteCell = styled.div`
  padding: 8px;
  border: 1px solid #ccc;
  border-top: none;
  font-size: 14px;
`;

const SignBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Sign = styled.div`
  margin-top: 8px;
  font-size: 14px;
`;

export default SamplePaymentSlip;
