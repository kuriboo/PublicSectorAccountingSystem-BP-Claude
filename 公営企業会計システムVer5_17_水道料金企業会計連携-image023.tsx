// 会計連携データ出力のコンポーネント
import React from 'react';
import styled from '@emotion/styled';

// 連携データの型定義
type OutputData = {
  label: string;
  toDate: string;
  fromDate: string;
};

type DataOutputProps = {
  title: string;
  data: OutputData[];
};

const DataOutput: React.FC<DataOutputProps> = ({ title, data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {data.map((item, index) => (
        <DataRow key={index}>
          <DataLabel>{item.label}</DataLabel>
          <DateInput value={item.fromDate} readOnly />
          <Separator>~</Separator>
          <DateInput value={item.toDate} readOnly />
        </DataRow>
      ))}
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const DataRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const DataLabel = styled.label`
  margin-right: 10px;
`;

const DateInput = styled.input`
  border: 1px solid #ccc;
  padding: 5px;
  width: 100px;
`;

const Separator = styled.span`
  margin: 0 5px;
`;

// 使用例
const AccountingDataOutputForm: React.FC = () => {
  const sampleData: OutputData[] = [
    { label: '調定日', fromDate: '平成29年  6月  1日', toDate: '平成29年  6月30日' },
    { label: '調定変正日', fromDate: '平成29年  6月  1日', toDate: '平成29年  6月30日' },
  ];

  const sampleInvoiceData: OutputData[] = [
    { label: '収納年月日', fromDate: '', toDate: '' },
    { label: '収納処理年月日', fromDate: '', toDate: '' },
  ];

  return (
    <div>
      <h2>会計連携データ出力</h2>
      <DataOutput title="調定" data={sampleData} />
      <DataOutput title="収納" data={sampleInvoiceData} />
    </div>
  );
};

export default AccountingDataOutputForm;