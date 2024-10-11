import React from 'react';
import styled from '@emotion/styled';

type Props = {
  companyName: string;
  location: string;
  name: string;
  title: string;
  workNumber: string;
  registrationDate: string;
  expirationDate: string;
  paymentTerm: string;
  contractNumber: string;
  taxAmount: number;
  totalAmount: number;
};

const RegisterInfo: React.FC<Props> = ({
  companyName,
  location,
  name,
  title,
  workNumber,
  registrationDate,
  expirationDate,
  paymentTerm,
  contractNumber,
  taxAmount,
  totalAmount,
}) => {
  return (
    <Container>
      <Title>納入通知書登録</Title>
      <CompanyInfo>
        <Row>
          <Label>発注者情報</Label>
          <Value>{companyName}</Value>
        </Row>
        <Row>
          <Label>住所</Label>
          <Value>{location}</Value>
        </Row>
        <Row>
          <Label>氏名</Label>
          <Value>{name}</Value>
        </Row>
        <Row>
          <Label>電話番号</Label>
          <Value>{workNumber}</Value>
        </Row>
      </CompanyInfo>
      <WorkInfo>
        <Row>
          <Label>工事代理人情報</Label>
        </Row>
        <Row>
          <Label>工事店</Label>
          <Value>{title}</Value>
        </Row>
        <Row>
          <Label>住所</Label>
          <Value>東西県府中市一番町4丁目7番地7</Value>
        </Row>
        <Row>
          <Label>電話番号</Label>
          <Value>555-5555</Value>
        </Row>
      </WorkInfo>
      <DeliveryInfo>
        <Row>
          <Label>納定日</Label>
          <Value>{registrationDate}</Value>
        </Row>
        <Row>
          <Label>納期</Label>
          <Value>{expirationDate}</Value>
        </Row>
        <Row>
          <Label>取消日</Label>
          <Value>年 月 日</Value>
        </Row>
        <Row>
          <Label>摘要</Label>
          <Value>{contractNumber}</Value>
        </Row>
      </DeliveryInfo>
      <Table>
        <thead>
          <tr>
            <Th>区分</Th>
            <Th>納付分類区分名</Th>
            <Th>税</Th>
            <Th>口径変更</Th>
            <Th>形状寸法</Th>
            <Th>積込/抜</Th>
            <Th>単価</Th>
            <Th>数量</Th>
            <Th>調定金額</Th>
            <Th>内消費税額</Th>
            <Th>備考</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>未収</Td>
            <Td>加入金負担金</Td>
            <Td>特定収入</Td>
            <Td>13mm</Td>
            <Td>157,500</Td>
            <Td>1</Td>
            <Td>157,500</Td>
            <Td>{taxAmount}</Td>
            <Td>{totalAmount}</Td>
          </tr>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Styles
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
`;

const CompanyInfo = styled.div`
  margin-bottom: 20px;
`;

const WorkInfo = styled.div`
  margin-bottom: 20px;
`;

const DeliveryInfo = styled.div`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 120px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const Th = styled.th`
  background-color: #f0f0f0;
  padding: 10px;
  text-align: left;
  border: 1px solid #ccc;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
`;

// Sample usage
const App: React.FC = () => {
  const sampleData: Props = {
    companyName: '千葉市中央区以下に掲載がない場合',
    location: '千葉市中央区以下に掲載がない場合',
    name: '行政太郎',
    title: '○○○○○○○',
    workNumber: '555-5555',
    registrationDate: '令和04年12月19日',
    expirationDate: '令和5年01月02日',
    paymentTerm: '納入後払い',
    contractNumber: '適用上段567890123456789',
    taxAmount: 157500,
    totalAmount: 1575000,
  };

  return <RegisterInfo {...sampleData} />;
};

export default App;