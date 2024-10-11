import React from 'react';
import styled from '@emotion/styled';

type ConstructionScheduleFormProps = {
  onSubmit: (data: ConstructionScheduleData) => void;
};

type ConstructionScheduleData = {
  constructionCode: string;
  accountCode: string;
  years: number;
  tax: 'included' | 'excluded' | 'none';
  amount: number;
};

const ConstructionScheduleForm: React.FC<ConstructionScheduleFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ConstructionScheduleData>({
    constructionCode: '',
    accountCode: '',
    years: 0,
    tax: 'none',
    amount: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Label>工事台帳年度</Label>
        <Input
          type="text"
          name="constructionCode"
          value={formData.constructionCode}
          onChange={handleChange}
          required
        />
        <span>年度</span>
        <Label>工事名称（第1工区）</Label>
        <Input
          type="text"
          name="constructionName"
          value="下水道工事に伴う配水管移設工事"
          disabled
        />
      </FormField>
      
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>関連区分</Th>
              <Th>収支区分</Th>
              <Th>年度</Th>
              <Th>番号</Th>
              <Th>税抜金額</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>工事負担</Td>
              <Td>計上除外</Td>
              <Td>平成29</Td>
              <Td>2</Td>
              <Td>247,630</Td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>

      <FormField>
        <Label>関連区分</Label>
        <Select name="accountCode" value={formData.accountCode} onChange={handleChange}>
          <option value="工事負担">工事負担</option>
        </Select>
      </FormField>

      <FormField>
        <Label>収支区分</Label>
        <Select name="accountCode" value={formData.accountCode} onChange={handleChange}>
          <option value="計上除外">計上除外</option>
        </Select>
      </FormField>
      
      <FormField>
        <Label>年度</Label>
        <Input
          type="text"
          name="years"
          value={formData.years}
          onChange={handleChange}
          required
        />
        <span>年度</span>
      </FormField>

      <FormField>
        <Label>番号</Label>
        <Input
          type="number"
          name="number"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </FormField>

      <FormField>
        <Label>税抜金額</Label>
        <Input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </FormField>
      
      <ButtonContainer>
        <Button type="button">確定</Button>
        <Button type="button">キャンセル</Button>
        <SubmitButton type="submit">終了</SubmitButton>
      </ButtonContainer>
    </Form>
  );
};

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
`;

const Td = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: white;
`;

// Sample usage
const App: React.FC = () => {
  const handleSubmit = (data: ConstructionScheduleData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>Construction Schedule Form</h1>
      <ConstructionScheduleForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;