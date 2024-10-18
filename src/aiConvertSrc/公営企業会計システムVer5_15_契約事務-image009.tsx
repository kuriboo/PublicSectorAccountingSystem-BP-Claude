以下は、指定されたガイドラインに従って生成したNext.js + TypeScriptのコンポーネントのコードです。

import React from 'react';
import styled from 'styled-components';

interface JobTransferFormProps {
  title: string;
  fiscalYear: number;
  department: string;
  jobType: string;
  transferData: TransferData[];
}

interface TransferData {
  code: string;
  name: string;
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  total: number;
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  width: 100px;
`;

const FormInput = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const JobTransferForm: React.FC<JobTransferFormProps> = ({
  title,
  fiscalYear,
  department,
  jobType,
  transferData,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Form>
        <FormRow>
          <FormLabel>年度</FormLabel>
          <FormInput type="text" value={fiscalYear} readOnly />
        </FormRow>
        <FormRow>
          <FormLabel>受付区分</FormLabel>
          <FormInput type="text" value={department} readOnly />
        </FormRow>
      </Form>
      <Table>
        <thead>
          <tr>
            <TableHeader>業種コード</TableHeader>
            <TableHeader>業種</TableHeader>
            <TableHeader>A</TableHeader>
            <TableHeader>B</TableHeader>
            <TableHeader>C</TableHeader>
            <TableHeader>D</TableHeader>
            <TableHeader>E</TableHeader>
            <TableHeader>合計</TableHeader>
          </tr>
        </thead>
        <tbody>
          {transferData.map((data, index) => (
            <tr key={index}>
              <TableCell>{data.code}</TableCell>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.a}</TableCell>
              <TableCell>{data.b}</TableCell>
              <TableCell>{data.c}</TableCell>
              <TableCell>{data.d}</TableCell>
              <TableCell>{data.e}</TableCell>
              <TableCell>{data.total}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default JobTransferForm;

// Sample usage
const sampleData: TransferData[] = [
  { code: '007', name: '屋根工事', a: 0, b: 0, c: 0, d: 0, e: 0, total: 32 },
  { code: '026', name: '水道施設工事', a: 177, b: 138, c: 0, d: 0, e: 0, total: 0 },
  // ... other sample data
];

const SampleUsage: React.FC = () => {
  return (
    <JobTransferForm
      title="自動格付処理"
      fiscalYear={29}
      department="工事"
      jobType="委託区分"
      transferData={sampleData}
    />
  );
};

このコンポーネントは、職種別の転職者数を表示するフォームを生成します。プロパティを通じて、タイトル、年度、受付区分、業種別データをカスタマイズできます。styled-componentsを使用して、レスポンシブなデザインとスタイリングを適用しています。サンプルデータを使用して、コンポーネントの使用例も示しています。