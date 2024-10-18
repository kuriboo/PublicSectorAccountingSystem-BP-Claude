import React from 'react';
import styled from 'styled-components';

type SupportItemType = 'registration' | 'correction' | 'deletion';

interface SupportedPersonData {
  id: number;
  name: string;
  relationship: string;
}

interface SupportedPersonFormProps {
  initialData?: SupportedPersonData;
  onSubmit: (data: SupportedPersonData) => void;
  onCancel: () => void;
}

const SupportedPersonForm: React.FC<SupportedPersonFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [supportItem, setSupportItem] = React.useState<SupportItemType>('registration');
  const [destinationDate, setDestinationDate] = React.useState('');
  const [name, setName] = React.useState(initialData?.name ?? '');
  const [relationship, setRelationship] = React.useState(initialData?.relationship ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: initialData?.id ?? Date.now(),
      name,
      relationship,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>支出負担入力（その他 前渡）</Title>
      <Field>
        <Label>
          <input
            type="radio"
            checked={supportItem === 'registration'}
            onChange={() => setSupportItem('registration')}
          />
          登録
        </Label>
        <Label>
          <input
            type="radio"
            checked={supportItem === 'correction'}
            onChange={() => setSupportItem('correction')}
          />
          訂正
        </Label>
        <Label>
          <input
            type="radio"
            checked={supportItem === 'deletion'}
            onChange={() => setSupportItem('deletion')}
          />
          削除
        </Label>
      </Field>
      <Field>
        <Label>負担処理日</Label>
        <Input
          type="text"
          value={destinationDate}
          onChange={(e) => setDestinationDate(e.target.value)}
        />
      </Field>
      <Field>
        <Label>事務所</Label>
        <Input type="text" value="（自担審号）" readOnly />
      </Field>
      <Field>
        <Label>年度</Label>
        <Input type="text" value="（負担審号）" readOnly />
      </Field>
      <Field>
        <Label>相手先</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Field>
      <Field>
        <Label>摘要</Label>
        <Input
          type="text"
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
        />
      </Field>
      <ButtonContainer>
        <Button type="submit">登録</Button>
        <Button type="button" onClick={onCancel}>
          クリア
        </Button>
      </ButtonContainer>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.2rem;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Label = styled.label`
  flex: 0 0 120px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Usage example
const SupportedPersonFormExample: React.FC = () => {
  const handleSubmit = (data: SupportedPersonData) => {
    console.log('Form submitted:', data);
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  const initialData: SupportedPersonData = {
    id: 1,
    name: 'John Doe',
    relationship: 'Friend',
  };

  return (
    <SupportedPersonForm
      initialData={initialData}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default SupportedPersonFormExample;