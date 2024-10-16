import React from 'react';
import styled from '@emotion/styled';

type Department = {
  code: string;
  name: string;
  segment: string;
};

type MaskManagementFormProps = {
  departments: Department[];
  onSubmit: (values: { dateFrom: string; dateTo: string; departmentCode: string }) => void;
};

const MaskManagementForm: React.FC<MaskManagementFormProps> = ({ departments, onSubmit }) => {
  const [dateFrom, setDateFrom] = React.useState('');
  const [dateTo, setDateTo] = React.useState('');
  const [departmentCode, setDepartmentCode] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ dateFrom, dateTo, departmentCode });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>会計年度</Label>
        <Value>平成29</Value>
        <Value>年度</Value>
      </FormGroup>
      <FormGroup>
        <Label>予算科目</Label>
        <Value>
          <RadioButton type="radio" name="accountType" value="register" defaultChecked />
          登録
          <RadioButton type="radio" name="accountType" value="payment" />
          削除
        </Value>
      </FormGroup>
      <FormGroup>
        <Label>科目明細別管理コード関連付け</Label>
        <Value>
          <DateInput
            type="text"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            placeholder="科目コード"
          />
          <Span>〜</Span>
          <DateInput
            type="text"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            placeholder="999999999999999999"
          />
        </Value>
      </FormGroup>
      <FormGroup>
        <Label>科目明細別管理コード関連付け</Label>
        <Table>
          <thead>
            <tr>
              <HeaderCell>明細コード</HeaderCell>
              <HeaderCell>管理名称</HeaderCell>
              <HeaderCell>セグメント</HeaderCell>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>
                <TableInput type="text" />
              </TableCell>
              <TableCell>管理名称</TableCell>
              <TableCell>
                <TableSelect>
                  <option value="">選択してください</option>
                  {departments.map((department) => (
                    <option key={department.code} value={department.code}>
                      {department.segment}
                    </option>
                  ))}
                </TableSelect>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      </FormGroup>
      <SubmitButton type="submit">確定</SubmitButton>
    </Form>
  );
};

// Sample data for demonstration
const sampleDepartments: Department[] = [
  { code: '0001', name: '管理部門', segment: 'セグメント1' },
  { code: '0002', name: '営業部門', segment: 'セグメント2' },
];

// Usage example
const App: React.FC = () => {
  const handleSubmit = (values: { dateFrom: string; dateTo: string; departmentCode: string }) => {
    console.log(values);
  };

  return <MaskManagementForm departments={sampleDepartments} onSubmit={handleSubmit} />;
};

export default App;

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
  min-width: 150px;
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RadioButton = styled.input`
  margin-right: 0.5rem;
`;

const DateInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Span = styled.span`
  margin: 0 0.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const HeaderCell = styled.th`
  padding: 0.5rem;
  background-color: #f0f0f0;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  padding: 0.5rem;
`;

const TableInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TableSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;