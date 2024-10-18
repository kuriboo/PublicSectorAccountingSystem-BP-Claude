import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  companyNumber: string;
  productNumber: string;
  companyPhone: string;
  productPhone: string;
};

type Props = {
  onSubmit: (data: FormData) => void;
};

const CompanyProductForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    companyNumber: '',
    productNumber: '',
    companyPhone: '',
    productPhone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>新聞入力</Title>
      <Row>
        <Label>
          保管場所
          <Input
            type="text"
            name="companyNumber"
            value={formData.companyNumber}
            onChange={handleChange}
          />
        </Label>
        <Label>
          〜
          <Input
            type="text"
            name="productNumber"
            value={formData.productNumber}
            onChange={handleChange}
          />
        </Label>
      </Row>
      <Row>
        <Label>
          品番
          <Input
            type="text"
            name="companyPhone"
            value={formData.companyPhone}
            onChange={handleChange}
          />
        </Label>
        <Label>
          〜
          <Input
            type="text"
            name="productPhone"
            value={formData.productPhone}
            onChange={handleChange}
          />
        </Label>
      </Row>
      <SubmitButton type="submit">OK</SubmitButton>
    </Form>
  );
};

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
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

// Example usage
const ExampleUsage: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
  };

  return (
    <div>
      <h1>Company Product Form Example</h1>
      <CompanyProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default ExampleUsage;