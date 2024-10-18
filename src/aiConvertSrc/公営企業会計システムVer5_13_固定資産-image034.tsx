import React from 'react';
import styled from '@emotion/styled';

type InvestmentDetailsProps = {
  productName: string;
  managementFee: number;
  custodyFee: number;
  redemptionFee: number;
  unitPrice: number;
  quantity: number;
  totalAmount: number;
};

const InvestmentDetails: React.FC<InvestmentDetailsProps> = ({
  productName,
  managementFee,
  custodyFee,
  redemptionFee,
  unitPrice,
  quantity,
  totalAmount,
}) => {
  return (
    <Container>
      <Header>
        <Title>投資概要</Title>
        <Details>
          <Label>資産番号</Label>
          <Value>8002500</Value>
          <Label>資産名称</Label>
          <Value>{productName}</Value>
          <Label>改良金額</Label>
          <Value>1,500</Value>
        </Details>
      </Header>
      
      <Table>
        <TableHeader>
          <HeaderCell>管理名称</HeaderCell>
          <HeaderCell>管理規格名称</HeaderCell>
          <HeaderCell>現在数量</HeaderCell>
          <HeaderCell>改良数量</HeaderCell>
          <HeaderCell>単位</HeaderCell>
          <HeaderCell>現在金額</HeaderCell>
          <HeaderCell>改良金額</HeaderCell>
        </TableHeader>
        <TableRow>
          <Cell>{productName}</Cell>
          <Cell>φ75</Cell>
          <Cell>4.00</Cell>
          <Cell>0.00 本</Cell>
          <Cell>本</Cell>
          <Cell>7,000,000</Cell>
          <Cell>1,500</Cell>
        </TableRow>
      </Table>
      
      <Footer>
        <ManagementFee>
          <FeeLabel>管理手数料:</FeeLabel>
          <FeeValue>{managementFee}</FeeValue>
        </ManagementFee>
        <CustodyFee>  
          <FeeLabel>管理規格:</FeeLabel>
          <FeeValue>φ75</FeeValue>
        </CustodyFee>
        <RedemptionFee>
          <FeeLabel>現在数量:</FeeLabel>
          <FeeValue>4.00</FeeValue>
        </RedemptionFee>
        <UnitPrice>
          <FeeLabel>改良数量:</FeeLabel>  
          <FeeInput type="number" />
        </UnitPrice>
        <Quantity>
          <FeeLabel>単位:</FeeLabel>
          <FeeValue>本</FeeValue>
        </Quantity>
        <TotalAmount>
          <FeeLabel>現在金額:</FeeLabel>
          <FeeValue>7,000,000</FeeValue>
        </TotalAmount>
        <TotalAmount>
          <FeeLabel>改良金額:</FeeLabel>
          <FeeValue>1,500</FeeValue>  
        </TotalAmount>
        
        <ButtonContainer>
          <CancelButton>キャンセル</CancelButton>  
          <ConfirmButton>行確定</ConfirmButton>
        </ButtonContainer>
      </Footer>
      
    </Container>
  );
};

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  margin-right: 5px;
  &:not(:last-child)::after {
    content: '・';
    margin-left: 5px;
  }
`;

const Value = styled.span`
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.tr`
  background-color: #f0f0f0;
`;

const HeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const Cell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ManagementFee = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CustodyFee = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RedemptionFee = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const UnitPrice = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const FeeLabel = styled.span`
  margin-right: 5px;
`;

const FeeValue = styled.span`
  font-weight: bold;
`;

const FeeInput = styled.input`
  width: 100px;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #ccc;
  border: none;
  margin-right: 10px;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

// Sample usage
const InvestmentDetailsExample: React.FC = () => {
  const sampleData: InvestmentDetailsProps = {
    productName: 'DIP(A1)鋼管管',
    managementFee: 0.75,
    custodyFee: 4.00,
    redemptionFee: 0,
    unitPrice: 7000000,
    quantity: 1,
    totalAmount: 1500,
  };

  return <InvestmentDetails {...sampleData} />;
};

export default InvestmentDetailsExample;