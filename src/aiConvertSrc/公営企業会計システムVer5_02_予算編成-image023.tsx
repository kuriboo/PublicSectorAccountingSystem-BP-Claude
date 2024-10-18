import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  jobType: '事業別' | '所属別';
  printType: '見積要求額' | '査定額';
  orderNumber: string;
  amount: string;
  businessDate: string;
  expirationDate: string;
};

type Props = {
  initialData?: FormData;
  onSubmit: (data: FormData) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    max-width: 600px;
    margin: auto;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  flex: 1;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  flex: 1;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const RequestForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>(
    initialData || {
      jobType: '事業別',
      printType: '見積要求額',
      orderNumber: '',
      amount: '',
      businessDate: '',
      expirationDate: '',
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>事業別見積予算集計表(当初)作成</Title>
      <FormGroup>
        <Label>区分:</Label>
        <Select
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
        >
          <option value="事業別">事業別</option>
          <option value="所属別">所属別</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>印字区分:</Label>
        <Select
          name="printType"
          value={formData.printType}
          onChange={handleChange}
        >
          <option value="見積要求額">見積要求額</option>
          <option value="査定額">査定額</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>所属:</Label>
        <Input
          name="orderNumber"
          value={formData.orderNumber}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>所属:</Label>
        <Input name="amount" value={formData.amount} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label>事業科目:</Label>
        <Input
          name="businessDate"
          value={formData.businessDate}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>事業科目:</Label>
        <Input
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
        />
      </FormGroup>
      <ButtonGroup>
        <Button type="button">クリア</Button>
        <Button type="button" onClick={handleSubmit}>
          終了
        </Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div>
      <RequestForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;