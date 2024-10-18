import React from 'react';
import styled from '@emotion/styled';

type OutgoingTransferData = {
  id: string;
  date: string;
  time: string;
  amount: number;
  fee: number;
  total: number;
  purpose: string;
  sender: string;
  receiver: string;
};

type Props = {
  data: OutgoingTransferData;
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 5px;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const DataField = styled.div`
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  font-weight: bold;
`;

const OutgoingTransfer: React.FC<Props> = ({ data }) => {
  // 例外処理: データが存在しない場合はエラーメッセージを表示
  if (!data) {
    return <div>データが見つかりませんでした。</div>;
  }

  return (
    <Container>
      <DataField>
        <Label>ID: </Label>
        {data.id}
      </DataField>
      <DataField>
        <Label>日付: </Label>
        {data.date}
      </DataField>
      <DataField>
        <Label>時間: </Label>
        {data.time}
      </DataField>
      <DataField>
        <Label>金額: </Label>
        {data.amount}
      </DataField>
      <DataField>
        <Label>手数料: </Label>
        {data.fee}
      </DataField>
      <DataField>
        <Label>合計: </Label>
        {data.total}
      </DataField>
      <DataField>
        <Label>振込依頼人: </Label>
        {data.sender}
      </DataField>
      <DataField>
        <Label>受取人: </Label>
        {data.receiver}
      </DataField>
    </Container>
  );
};

// サンプルデータを用いたOutgoingTransferコンポーネントの使用例
const SampleUsage: React.FC = () => {
  const sampleData: OutgoingTransferData = {
    id: '00201013836002010118',
    date: '2016/3/24',
    time: '15:32',
    amount: 1000,
    fee: 0,
    total: 1000,
    purpose: 'お支払い',
    sender: 'テスト　太郎',
    receiver: '山田　花子',
  };

  return (
    <div>
      <h2>振込明細</h2>
      <OutgoingTransfer data={sampleData} />
    </div>
  );
};

export default OutgoingTransfer;