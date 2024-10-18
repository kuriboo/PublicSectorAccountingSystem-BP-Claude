import React from 'react';
import styled from '@emotion/styled';

interface AddressFormProps {
  postalCode1?: string;
  postalCode2?: string;
  prefecture?: string;
  city?: string;
  town?: string;
  building?: string;
  roomNumber?: string;
  telephoneNumber?: string;
  onSubmit: (formData: AddressFormData) => void;
}

interface AddressFormData {
  postalCode1: string;
  postalCode2: string;
  prefecture: string;
  city: string;
  town: string;
  building: string;
  roomNumber: string;
  telephoneNumber: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 400px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
  min-width: 100px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const Select = styled.select`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const AddressForm: React.FC<AddressFormProps> = ({
  postalCode1 = '',
  postalCode2 = '',
  prefecture = '',
  city = '',
  town = '',
  building = '',
  roomNumber = '',
  telephoneNumber = '',
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: AddressFormData = {
      postalCode1: postalCode1,
      postalCode2: postalCode2,
      prefecture: prefecture,
      city: city,
      town: town,
      building: building,
      roomNumber: roomNumber,
      telephoneNumber: telephoneNumber,
    };
    onSubmit(formData);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row>
          <Label>郵便番号</Label>
          <Input type="text" value={postalCode1} placeholder="000" maxLength={3} />
          <span>-</span>
          <Input type="text" value={postalCode2} placeholder="0000" maxLength={4} />
        </Row>
        <Row>
          <Label>都道府県</Label>
          <Select value={prefecture}>
            <option value="">選択してください</option>
            {/* 都道府県のオプションをここに追加 */}
          </Select>
        </Row>
        <Row>
          <Label>市区町村</Label>
          <Input type="text" value={city} />
        </Row>
        <Row>
          <Label>町域</Label>
          <Input type="text" value={town} />
        </Row>
        <Row>
          <Label>建物名</Label>
          <Input type="text" value={building} />
        </Row>
        <Row>
          <Label>部屋番号</Label>
          <Input type="text" value={roomNumber} />
        </Row>
        <Row>
          <Label>電話番号</Label>
          <Input type="tel" value={telephoneNumber} />
        </Row>
        <ButtonContainer>
          <Button type="submit">OK</Button>
          <Button type="button">キャンセル</Button>
        </ButtonContainer>
      </form>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const handleSubmit = (formData: AddressFormData) => {
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>Address Form Example</h1>
      <AddressForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;