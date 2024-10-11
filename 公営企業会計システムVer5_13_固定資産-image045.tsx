import React from 'react';
import styled from '@emotion/styled';

type InvestmentData = {
  code: string;
  name: string;
  unitPrice: number;
  holdingQuantity: number;
  managementFee: number;
}

type Props = {
  investmentNumber: string;
  receiptNumber: string;
  managementName: string;
  holdingAmount: number;
  investmentData: InvestmentData;
}

const ReserveConfirmation: React.FC<Props> = ({ 
  investmentNumber,
  receiptNumber, 
  managementName,
  holdingAmount,
  investmentData,
}) => {
  // 管理手数料の計算
  const calcManagementFee = (unitPrice: number, quantity: number, feeRate: number): number => {
    return Math.floor(unitPrice * quantity * feeRate);
  }

  // 取得金額の計算
  const calcAcquisitionAmount = (unitPrice: number, quantity: number): number => {
    return unitPrice * quantity;
  }

  return (
    <Container>
      <Title>取得予約確認入力</Title>
      <Row>
        <RowTitle>資産番号</RowTitle>
        <RowValue>{investmentNumber}</RowValue>
      </Row>
      <Row>
        <RowTitle>取得価額</RowTitle>
        <RowValue>{holdingAmount.toLocaleString()}</RowValue>
      </Row>
      <DetailContainer>
        <Row>
          <RowTitle>明細種類</RowTitle>
          <RowValue>行削除</RowValue>
        </Row>
        <DetailRow>
          <DetailTitle>名称コード</DetailTitle>
          <DetailTitle>規格コード</DetailTitle>
          <DetailTitle>管理名称</DetailTitle>
          <DetailTitle>管理規格名称</DetailTitle>
          <DetailTitle>取得数量</DetailTitle>
          <DetailTitle>単位</DetailTitle>
          <DetailTitle>取得金額</DetailTitle>
        </DetailRow>
        <DetailRow>
          <DetailValue>{investmentData.code}</DetailValue>
          <DetailValue>{receiptNumber}</DetailValue>
          <DetailValue>{investmentData.name}</DetailValue>
          <DetailValue>{managementName}</DetailValue>
          <DetailValue>{investmentData.holdingQuantity.toLocaleString()}</DetailValue>
          <DetailValue>本</DetailValue>
          <DetailValue>{calcAcquisitionAmount(investmentData.unitPrice, investmentData.holdingQuantity).toLocaleString()}</DetailValue>
        </DetailRow>
      </DetailContainer>
      <Row>
        <RowTitle>取得金額計</RowTitle>
        <RowValue>{calcAcquisitionAmount(investmentData.unitPrice, investmentData.holdingQuantity).toLocaleString()}</RowValue>
      </Row>
      <Row>
        <RowTitle>管理名称</RowTitle>
        <RowValue>{investmentData.name}</RowValue>
      </Row>
      <Row>
        <RowTitle>管理規格</RowTitle>
        <RowValue>¥{investmentData.unitPrice.toLocaleString()}</RowValue>
      </Row>
      <Row>
        <RowTitle>単価コード</RowTitle>
        <RowValue>{investmentData.code}</RowValue>
      </Row>
      <Row>
        <RowTitle>取得数量</RowTitle>
        <RowValue>{investmentData.holdingQuantity.toLocaleString()}</RowValue>
      </Row> 
      <Row>
        <RowTitle>単位</RowTitle>
        <RowValue>本</RowValue>
      </Row>
      <Row>
        <RowTitle>取得金額</RowTitle>
        <RowValue>{holdingAmount.toLocaleString()}</RowValue>
      </Row>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <CancelButton>キャンセル</CancelButton>
      </ButtonContainer>
    </Container>
  );
}

// Usage example
const App: React.FC = () => {
  const sampleData: Props = {
    investmentNumber: "8002020",
    receiptNumber: "000001", 
    managementName: "DIP(A1)群投信",
    holdingAmount: 5000000,
    investmentData: {
      code: "000001",
      name: "DIP(A1)群投信",
      unitPrice: 75,
      holdingQuantity: 20000,
      managementFee: 5000000,
    }
  };

  return (
    <ReserveConfirmation {...sampleData} />
  );
}

// Styles
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const RowTitle = styled.div`
  font-weight: bold;
`;

const RowValue = styled.div``;

const DetailContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const DetailTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const DetailValue = styled.div`
  font-size: 12px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #a71d2a;
  }
`;

export default ReserveConfirmation;