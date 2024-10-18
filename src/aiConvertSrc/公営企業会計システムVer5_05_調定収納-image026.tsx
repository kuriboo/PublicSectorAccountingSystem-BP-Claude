import React from 'react';
import styled from '@emotion/styled';

interface Props {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  searchCriteria: '任意' | '必須';
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  minAmount: number;
  maxAmount: number;
  purpose: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  flex: 2;
  padding: 4px;
`;

const Select = styled.select`
  flex: 2;
  padding: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`;

const TableHeader = styled.th`
  padding: 8px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const SearchConditionForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    searchCriteria: '任意',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    minAmount: 0,
    maxAmount: 999999999999,
    purpose: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Label>検索条件</Label>
          <Select
            name="searchCriteria"
            value={formData.searchCriteria}
            onChange={handleChange}
          >
            <option value="任意">任意</option>
            <option value="必須">必須</option>
          </Select>
        </Row>
        <Row>
          <Label>収納番号</Label>
          <Input
            type="text"
            name="storageNumber"
            value={formData.storageNumber || ''}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Label>収納日</Label>
          <Input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
          <span>〜</span>
          <Input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Label>収納時間</Label>
          <Input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
          />
          <span>〜</span>
          <Input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Label>収納金額</Label>
          <Input
            type="number"
            name="minAmount"
            value={formData.minAmount}
            onChange={handleChange}
          />
          <span>〜</span>
          <Input
            type="number"
            name="maxAmount"
            value={formData.maxAmount}
            onChange={handleChange}
          />
        </Row>
        <Row>
          <Label>摘要</Label>
          <Input
            type="text"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
          />
        </Row>
        <Button type="submit">表示</Button>
      </form>
      <Table>
        <thead>
          <tr>
            <TableHeader>収納番号</TableHeader>
            <TableHeader>収納日</TableHeader>
            <TableHeader>収納時刻</TableHeader>
            <TableHeader>収納金額</TableHeader>
            <TableHeader>摘要</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableCell>31</TableCell>
            <TableCell>2017-07-27</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4,000</TableCell>
            <TableCell>集会収納入力サンプル</TableCell>
          </tr>
          <tr>
            <TableCell>34</TableCell>
            <TableCell>2017-08-04</TableCell>
            <TableCell>2</TableCell>
            <TableCell>30,000</TableCell>
            <TableCell>敬老手教科の収納/件数: 件</TableCell>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default SearchConditionForm;

// Sample usage
const SamplePage: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Perform search based on form data
  };

  return (
    <div>
      <h1>Search Condition Form</h1>
      <SearchConditionForm onSubmit={handleSubmit} />
    </div>
  );
};