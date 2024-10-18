import React from 'react';
import styled from 'styled-components';

type RegistrationFormProps = {
  onSubmit: (data: RegistrationData) => void;
};

type RegistrationData = {
  memberType: '登録' | '訂正' | '削除';
  idType: '定期法' | '定番法(月額)' | '定率法' | '定率法(月額)';
  yearsOfService: number;
  creditRating: number;
  improvementRating: number;
  salaryRating: number;
  newSalary: number;
};

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<RegistrationData>({
    memberType: '登録',
    idType: '定期法',
    yearsOfService: 0,
    creditRating: 68.4,
    improvementRating: 0,
    salaryRating: 0,
    newSalary: 68.4,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>耐用年数マスタ</Title>
      <RadioGroup>
        <Label>
          <Input
            type="radio"
            name="memberType"
            value="登録"
            checked={formData.memberType === '登録'}
            onChange={handleChange}
          />
          登録
        </Label>
        <Label>
          <Input
            type="radio"
            name="memberType"
            value="訂正"
            checked={formData.memberType === '訂正'}
            onChange={handleChange}
          />
          訂正
        </Label>
        <Label>
          <Input
            type="radio"
            name="memberType"
            value="削除"
            checked={formData.memberType === '削除'}
            onChange={handleChange}
          />
          削除
        </Label>
      </RadioGroup>
      <RadioGroup>
        <Label>
          <Input
            type="radio"
            name="idType"
            value="定期法"
            checked={formData.idType === '定期法'}
            onChange={handleChange}
          />
          定期法
        </Label>
        <Label>
          <Input
            type="radio"
            name="idType"
            value="定番法(月額)"
            checked={formData.idType === '定番法(月額)'}
            onChange={handleChange}
          />
          定番法(月額)
        </Label>
        <Label>
          <Input
            type="radio"
            name="idType"
            value="定率法"
            checked={formData.idType === '定率法'}
            onChange={handleChange}
          />
          定率法
        </Label>
        <Label>
          <Input
            type="radio"
            name="idType"
            value="定率法(月額)"
            checked={formData.idType === '定率法(月額)'}
            onChange={handleChange}
          />
          定率法(月額) 
        </Label>
      </RadioGroup>
      <Label>
        耐用年数コード
        <Input type="number" name="yearsOfService" value={formData.yearsOfService} onChange={handleChange} />
      </Label>
      <Label>
        償却率
        <Input type="number" name="creditRating" value={formData.creditRating} onChange={handleChange} />
      </Label>
      <Label>
        改定償却率
        <Input type="number" name="improvementRating" value={formData.improvementRating} onChange={handleChange} />
      </Label>
      <Label>
        償却保証率
        <Input type="number" name="salaryRating" value={formData.salaryRating} onChange={handleChange} />
      </Label>
      <Label>
        新償却率
        <Input type="number" name="newSalary" value={formData.newSalary} onChange={handleChange} />
      </Label>
      <ButtonGroup>
        <Button type="button">前データ</Button>
        <Button type="button">次データ</Button>
        <Button type="submit">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </ButtonGroup>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const Title = styled.h2`
  margin: 0;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const SampleRegistrationForm = () => {
  const handleSubmit = (data: RegistrationData) => {
    console.log('Submitted data:', data);
  };

  return <RegistrationForm onSubmit={handleSubmit} />;
};

export default SampleRegistrationForm;