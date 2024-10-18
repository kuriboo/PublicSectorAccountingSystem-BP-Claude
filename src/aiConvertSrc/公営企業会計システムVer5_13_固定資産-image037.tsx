import React from 'react';
import styled from '@emotion/styled';

type ContainerProps = {
  title: string;
};

type FormData = {
  membershipType: string;
  range: {
    startNumber: string;
    endNumber: string;
  };
  expirationDate: {
    startDate: string;
    endDate: string;
  };
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const MembershipListForm: React.FC<ContainerProps> = ({ title }) => {
  const [formData, setFormData] = React.useState<FormData>({
    membershipType: '',
    range: {
      startNumber: '',
      endNumber: '',
    },
    expirationDate: {
      startDate: '',
      endDate: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      range: {
        ...prevData.range,
        [name]: value,
      },
    }));
  };

  const handleExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      expirationDate: {
        ...prevData.expirationDate,
        [name]: value,
      },
    }));
  };

  const handleSubmit = () => {
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <FormGroup>
        <Label>
          <Radio
            type="radio"
            name="membershipType"
            value="newMembership"
            checked={formData.membershipType === 'newMembership'}
            onChange={handleChange}
          />
          新規発行
        </Label>
        <Label>
          <Radio
            type="radio"
            name="membershipType"
            value="renewMembership"
            checked={formData.membershipType === 'renewMembership'}
            onChange={handleChange}
          />
          会計区分別
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>範囲指定</Label>
        <Input
          type="text"
          name="startNumber"
          value={formData.range.startNumber}
          onChange={handleRangeChange}
        />
        ～
        <Input
          type="text"
          name="endNumber"
          value={formData.range.endNumber}
          onChange={handleRangeChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>資産番号</Label>
        <Input type="text" name="assetNumber" value="0" readOnly />
        ～
        <Input type="text" name="assetNumber" value="9999999999" readOnly />
      </FormGroup>
      <FormGroup>
        <Label>改良年月日</Label>
        <Input
          type="text"
          name="startDate"
          value={formData.expirationDate.startDate}
          onChange={handleExpirationDateChange}
        />
        ～
        <Input
          type="text"
          name="endDate"
          value={formData.expirationDate.endDate}
          onChange={handleExpirationDateChange}
        />
      </FormGroup>
      <Button type="button" onClick={handleSubmit}>
        OK
      </Button>
      <Button type="button">クリア</Button>
      <Button type="button">終了</Button>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <MembershipListForm title="改良資産リスト作成" />
    </div>
  );
};

export default App;