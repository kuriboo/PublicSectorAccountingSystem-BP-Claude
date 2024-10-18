import React from 'react';
import styled from '@emotion/styled';

type BorrowingDetailsProps = {
  companyName: string;
  borrowingDate: string;
  borrowingPeriod: number;
  appraisalMethod: string;
  borrowingType: string[];
  consumptionTaxType: string[];
  tax: number;
  taxAmount: number;
  totalAmount: number;
  borrowingDetails: string[];
  printSetting: string;
};

const BorrowingDetails: React.FC<BorrowingDetailsProps> = ({
  companyName,
  borrowingDate,
  borrowingPeriod,
  appraisalMethod,
  borrowingType,
  consumptionTaxType,
  tax,
  taxAmount,
  totalAmount,
  borrowingDetails,
  printSetting,
}) => {
  // 値が入っていない場合のデフォルト値を設定
  const defaultBorrowingType = borrowingType.length > 0 ? borrowingType : [''];
  const defaultConsumptionTaxType = consumptionTaxType.length > 0 ? consumptionTaxType : [''];
  const defaultBorrowingDetails = borrowingDetails.length > 0 ? borrowingDetails : [''];

  return (
    <Container>
      <Title>調定日締解除入力（調定用振替）</Title>
      <CompanyInfo>
        <Label>業者番号</Label>
        <Value>{companyName}</Value>
      </CompanyInfo>
      <BorrowingInfo>
        <InfoItem>
          <Label>年度</Label>
          <Value>3</Value>
        </InfoItem>
        <InfoItem>
          <Label>伝票日付</Label>
          <Value>{borrowingDate}</Value>
        </InfoItem>
        <InfoItem>
          <Label>摘要</Label>
          <Value>未収更正</Value>
        </InfoItem>
      </BorrowingInfo>
      <TableContainer>
        <TableHeader>
          <HeaderItem>借方科目</HeaderItem>
          <HeaderItem>借方細節</HeaderItem>
          <HeaderItem>貸方科目</HeaderItem>
          <HeaderItem>貸方細節</HeaderItem>
        </TableHeader>
        <TableBody>
          <BodyRow>
            <BodyItem>{defaultBorrowingType[0]}</BodyItem>
            <BodyItem>{defaultConsumptionTaxType[0]}</BodyItem>
            <BodyItem>{defaultBorrowingType[1] || ''}</BodyItem>
            <BodyItem>{defaultConsumptionTaxType[1] || ''}</BodyItem>
          </BodyRow>
          <BodyRow>
            <BodyItem>原/津・備/消結品課</BodyItem>
            <BodyItem>事務用/消結品</BodyItem>
            <BodyItem>郵水・備/消結品課</BodyItem>
            <BodyItem>事務用/消結品</BodyItem>
          </BodyRow>
          <BodyRow>
            <BodyItem>対応予算</BodyItem>
            <BodyItem>税区分</BodyItem>
            <BodyItem>平成29年度</BodyItem>
            <BodyItem>税区分</BodyItem>
            <BodyItem>課税</BodyItem>
          </BodyRow>
        </TableBody>
      </TableContainer>
      <SummaryContainer>
        <SummaryItem>
          <SummaryLabel>件数</SummaryLabel>
          <SummaryValue>{borrowingPeriod}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>消費税率</SummaryLabel>
          <SummaryValue>{tax}%</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>税込金額</SummaryLabel>
          <SummaryValue>{taxAmount.toLocaleString()}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>税抜金額</SummaryLabel>
          <SummaryValue>{totalAmount.toLocaleString()}</SummaryValue>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>消費税額</SummaryLabel>
          <SummaryValue>{(taxAmount - totalAmount).toLocaleString()}</SummaryValue>
        </SummaryItem>
      </SummaryContainer>
      <PrintSettingContainer>
        <PrintSettingLabel>仕訳区分</PrintSettingLabel>
        <PrintSettingValue>{printSetting}</PrintSettingValue>
      </PrintSettingContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const BorrowingInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const Value = styled.span``;

const TableContainer = styled.div`
  margin-bottom: 20px;
`;

const TableHeader = styled.div`
  display: flex;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

const HeaderItem = styled.div`
  flex: 1;
`;

const TableBody = styled.div``;

const BodyRow = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const BodyItem = styled.div`
  flex: 1;
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SummaryItem = styled.div`
  display: flex;
  align-items: center;
`;

const SummaryLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const SummaryValue = styled.span``;

const PrintSettingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const PrintSettingLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const PrintSettingValue = styled.span``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  border: none;
  background-color: #ccc;
  cursor: pointer;

  &:hover {
    background-color: #aaa;
  }
`;

// 使用例
const App: React.FC = () => {
  const borrowingDetailsData: BorrowingDetailsProps = {
    companyName: '未収更正',
    borrowingDate: '平成29年06月21日',
    borrowingPeriod: 0,
    appraisalMethod: '消費税計算',
    borrowingType: ['その他未収金', 'その他未収金'],
    consumptionTaxType: ['その他未収金', 'その他未収金'],
    tax: 0,
    taxAmount: 1000,
    totalAmount: 1000,
    borrowingDetails: ['未収更正', '未収更正'],
    printSetting: '動作仕訳',
  };

  return (
    <div>
      <BorrowingDetails {...borrowingDetailsData} />
    </div>
  );
};

export default App;