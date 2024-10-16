import React from 'react';
import styled from '@emotion/styled';

// 資産情報の型定義
type AssetData = {
  date: string;
  transactionNumber: number;
  detail: string;
  amount: number;
  unit: string;
  totalAmount: number;
};

// 資産情報コンポーネントのプロパティ型定義
type AssetInfoProps = {
  data: AssetData[];
};

// 資産情報の表示コンポーネント
const AssetInfo: React.FC<AssetInfoProps> = ({ data }) => {
  return (
    <Container>
      <Title>資産情報一覧</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>異動年月日</TableHeader>
            <TableHeader>資産名称</TableHeader>
            <TableHeader>摘要内容</TableHeader>
            <TableHeader>異動数量</TableHeader>
            <TableHeader>単位</TableHeader>
            <TableHeader>異動金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.transactionNumber}</TableCell>
              <TableCell>{item.detail}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.unit}</TableCell>
              <TableCell>{item.totalAmount.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {/* 異動構成明細 */}
      <ChangeDetail>
        <ChangeDetailTitle>異動構成明細</ChangeDetailTitle>
        <ChangeDetailItem>
          <ChangeDetailLabel>異動年月日</ChangeDetailLabel>
          <ChangeDetailValue>平成30年06月31日</ChangeDetailValue>
        </ChangeDetailItem>
        <ChangeDetailItem>
          <ChangeDetailLabel>摘要内容</ChangeDetailLabel>
          <ChangeDetailValue>
            <input type="text" defaultValue="統計コンクリート造り" />
          </ChangeDetailValue>
        </ChangeDetailItem>
        <ChangeDetailItem>
          <ChangeDetailLabel>異動数量</ChangeDetailLabel>
          <ChangeDetailValue>
            <input type="number" defaultValue={3000} />
          </ChangeDetailValue>
        </ChangeDetailItem>
        <ChangeDetailItem>
          <ChangeDetailLabel>単価</ChangeDetailLabel>
          <ChangeDetailValue>
            <input type="text" defaultValue="個" />
          </ChangeDetailValue>
        </ChangeDetailItem>
        <ChangeDetailItem>
          <ChangeDetailLabel>異動金額</ChangeDetailLabel>
          <ChangeDetailValue>
            <input type="number" defaultValue={3000000} />
          </ChangeDetailValue>
        </ChangeDetailItem>
        <ChangeDetailButtons>
          <ActionButton>行追加</ActionButton>
          <ActionButton>行キャンセル</ActionButton>
        </ChangeDetailButtons>
      </ChangeDetail>

      <Buttons>
        <ConfirmButton>OK</ConfirmButton>
        <CancelButton>クリア</CancelButton>
        <CancelButton>キャンセル</CancelButton>
      </Buttons>
    </Container>
  );
};

// サンプルデータを使用した呼び出し例
const SampleAssetInfo: React.FC = () => {
  const sampleData: AssetData[] = [
    {
      date: '2018-03-31',
      transactionNumber: 1,
      detail: '統計コンクリート造り',
      amount: 30.00,
      unit: '個',
      totalAmount: 3000000,
    },
  ];

  return <AssetInfo data={sampleData} />;
};

// スタイルコンポーネント
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ChangeDetail = styled.div`
  margin-bottom: 20px;
`;

const ChangeDetailTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ChangeDetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ChangeDetailLabel = styled.div`
  width: 120px;
  font-weight: bold;
`;

const ChangeDetailValue = styled.div`
  flex: 1;

  input {
    width: 100%;
    padding: 5px;
  }
`;

const ChangeDetailButtons = styled.div`
  text-align: right;
  margin-top: 10px;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
`;

const Buttons = styled.div`
  text-align: right;
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #6c757d;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;

export default SampleAssetInfo;