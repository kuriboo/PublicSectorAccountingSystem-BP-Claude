import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  id: string;
  name: string;
  period: string;
  segment: string;
  action: string;
  collect: string;
};

type Props = {
  data: FormData[];
  onSubmit: (data: FormData) => void;
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 5px;
`;

const Select = styled.select`
  padding: 5px;
`;

const SubmitButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const CollectSection = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const CollectLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const ActionButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const AccountMasterForm: React.FC<Props> = ({ data, onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: FormData = {
      id: formData.get('id') as string,
      name: formData.get('name') as string,
      period: formData.get('period') as string,
      segment: formData.get('segment') as string,
      action: formData.get('action') as string,
      collect: formData.get('collect') as string,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <Title>決算統計表項目別金額集計マスタ</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="id" placeholder="決算統計処理年度" required />
        <Input type="text" name="name" placeholder="業種・事業コード" required />
        <Select name="period" required>
          <option value="">年度</option>
          {/* Options for period */}
        </Select>
        <Input type="text" name="segment" placeholder="行/列" required />
        <SubmitButton type="submit">表示</SubmitButton>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>振替コード</th>
            <th>振替略名</th>
            <th>性質コード</th>
            <th>性質略名</th>
            <th>決統セグメント</th>
            <th>集計対象</th>
            <th>加減区分</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.period}</td>
              <td>{row.segment}</td>
              <td>{row.action}</td>
              <td>{row.collect}</td>
              <td>加算</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <CollectSection>
        <CollectLabel>
          <Input type="radio" name="collect" value="仕訳" />
          仕訳
        </CollectLabel>
        <CollectLabel>
          <Input type="radio" name="collect" value="予算科目" />
          予算科目
        </CollectLabel>
        <CollectLabel>
          <Input type="radio" name="collect" value="予算科目" />
          予算科目
        </CollectLabel>
        <CollectLabel>
          <Input type="radio" name="collect" value="予算消費科目" />
          予算消費科目
        </CollectLabel>
      </CollectSection>
      <ActionButtons>
        <ActionButton type="button">OK</ActionButton>
        <ActionButton type="button">クリア</ActionButton>
        <ActionButton type="button">終了</ActionButton>
      </ActionButtons>
    </Container>
  );
};

export default AccountMasterForm;

// Sample usage
const sampleData: FormData[] = [
  {
    id: '1/1/01/001/001/0',
    name: '下水道使用料',
    period: '',
    segment: '',
    action: '',
    collect: '加算',
  },
];

const SampleUsage: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
  };

  return <AccountMasterForm data={sampleData} onSubmit={handleSubmit} />;
};