import React from 'react';
import styled from '@emotion/styled';

interface LoanApplicationFormProps {
  onSubmit: (data: LoanApplicationData) => void;
}

interface LoanApplicationData {
  date: string;
  size: 'A4' | 'A4_LANDSCAPE';
  title: string;
  printSides: 'SIMPLEX' | 'DUPLEX';
  copyCount: number;
  remarks: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoanApplicationForm: React.FC<LoanApplicationFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data: LoanApplicationData = {
      date: form.elements.namedItem('date') as HTMLInputElement).value,
      size: (form.elements.namedItem('size') as HTMLSelectElement).value as 'A4' | 'A4_LANDSCAPE',
      title: (form.elements.namedItem('title') as HTMLInputElement).value,
      printSides: (form.elements.namedItem('printSides') as HTMLSelectElement).value as 'SIMPLEX' | 'DUPLEX',
      copyCount: Number((form.elements.namedItem('copyCount') as HTMLInputElement).value),
      remarks: (form.elements.namedItem('remarks') as HTMLTextAreaElement).value,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <Title>貸借対照表</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="date">作成日</Label>
          <Input type="date" id="date" name="date" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="size">サイズ</Label>
          <Select id="size" name="size" required>
            <option value="A4">A4 縦</option>
            <option value="A4_LANDSCAPE">A4 横</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="title">タイトル</Label>
          <Input type="text" id="title" name="title" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="printSides">印刷面</Label>
          <Select id="printSides" name="printSides" required>
            <option value="SIMPLEX">片面</option>
            <option value="DUPLEX">両面</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="copyCount">部数</Label>
          <Input type="number" id="copyCount" name="copyCount" min="1" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="remarks">処理概要</Label>
          <TextArea id="remarks" name="remarks" rows={4}></TextArea>
        </FormGroup>
        <ButtonContainer>
          <Button type="submit">終了</Button>
          <Button type="button">クリア</Button>
          <Button type="button">終了</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const handleSubmit = (data: LoanApplicationData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>Loan Application Example</h1>
      <LoanApplicationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;