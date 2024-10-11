import React from 'react';
import styled from '@emotion/styled';

interface ReservationDetailProps {
  date: string;
  managementNumber: string;
  name: string;
  bankCode: string;
  bankName: string;
  branchCode: string;
  branchName: string;
  accountType: string;
  accountNumber: string;
}

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
`;

const DetailItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const ItemLabel = styled.span`
  color: #666;
  width: 120px;
`;

const ItemValue = styled.span`
  color: #333;
`;

const ReservationDetail: React.FC<ReservationDetailProps> = ({
  date,
  managementNumber,
  name,
  bankCode,
  bankName,
  branchCode,
  branchName,
  accountType,
  accountNumber,
}) => {
  return (
    <Container>
      <Title>予約者明細表作成</Title>
      <DetailItem>
        <ItemLabel>作表年月日</ItemLabel>
        <ItemValue>{date}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>管理指定</ItemLabel>
        <ItemValue>{managementNumber}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>報開指定</ItemLabel>
        <ItemValue>{name}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>管理名称</ItemLabel>
        <ItemValue>{bankCode}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>～</ItemLabel>
        <ItemValue>{bankName || '-'}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>管理規格</ItemLabel>
        <ItemValue>{branchCode}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>～</ItemLabel>
        <ItemValue>{branchName || '-'}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>取得年度</ItemLabel>
        <ItemValue>{accountType}</ItemValue>
      </DetailItem>
      <DetailItem>
        <ItemLabel>～</ItemLabel>
        <ItemValue>{accountNumber || '-'}</ItemValue>
      </DetailItem>
    </Container>
  );
};

// 使用例
const SampleData: ReservationDetailProps = {
  date: '平成29年09月11日',
  managementNumber: '総務課 予算・会計担当 ぎょうせい太郎',
  name: '000000',
  bankCode: '999999', 
  bankName: '000000',
  branchCode: '999999',
  branchName: '平成29年度',
  accountType: '平成29年度',
  accountNumber: '',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>予約者詳細</h1>
      <ReservationDetail {...SampleData} />
    </div>
  );  
};

export default App;