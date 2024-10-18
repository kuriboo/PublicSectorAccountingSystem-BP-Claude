import React from 'react';
import styled from '@emotion/styled';

interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
}

interface ReservationData {
  reservationType: string;
  selectedRoom: string;
  taxInvoice: 'personal' | 'corporate';
  paymentMethod: 'creditCard' | 'electronicTransfer';
  dailyAmount: string;
  periodFrom: string;
  periodTo: string;
  taxRate: string;
  subjectLevels: string[];
  taxSpecification: 'specify' | 'doNotSpecify';
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReservationData>({
    reservationType: '個人予約',
    selectedRoom: '',
    taxInvoice: 'personal',
    paymentMethod: 'creditCard',
    dailyAmount: '',
    periodFrom: '',
    periodTo: '',
    taxRate: '10',
    subjectLevels: [],
    taxSpecification: 'specify',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    if (type === 'checkbox') {
      const checkbox = event.target as HTMLInputElement;
      setFormData(prevData => ({
        ...prevData,
        subjectLevels: checkbox.checked
          ? [...prevData.subjectLevels, value]
          : prevData.subjectLevels.filter(level => level !== value),
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>予算種別</Label>
        <Select 
          name="reservationType"
          value={formData.reservationType}
          onChange={handleChange}
        >
          <option value="個人予約">個人予約</option>
          <option value="法人予約">法人予約</option>
          <option value="団体予約">団体予約</option>
        </Select>
      </FormGroup>

      <FormGroup>
        <Label>回数</Label>
        <Input
          type="text"
          name="selectedRoom"
          value={formData.selectedRoom}
          onChange={handleChange}
        />
      </FormGroup>
      
      <FormGroup>
        <Label>帳票種別</Label>
        <RadioGroup>
          <RadioLabel>
            <Radio
              type="radio"
              name="taxInvoice"
              value="personal"
              checked={formData.taxInvoice === 'personal'}
              onChange={handleChange}
            />
            科目別
          </RadioLabel>
          
          <RadioLabel>
            <Radio
              type="radio"
              name="taxInvoice"
              value="corporate"
              checked={formData.taxInvoice === 'corporate'} 
              onChange={handleChange}
            />
            所属別
          </RadioLabel>
        </RadioGroup>
      </FormGroup>

      <FormGroup>
        <Label>科目レベル</Label>
        <CheckboxGroup>
          {['日', '節', '細節', '明細'].map(level => (
            <CheckboxLabel key={level}>
              <Checkbox
                type="checkbox"
                name="subjectLevels"
                value={level}
                checked={formData.subjectLevels.includes(level)}
                onChange={handleChange}
              />
              {level}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </FormGroup>

      <FormGroup>
        <Label>範囲指定</Label>
        <InputGroup>
          <Input
            type="text"
            name="periodFrom"
            value={formData.periodFrom}
            onChange={handleChange}
            placeholder="所属"
          />
          <Span>〜</Span>
          <Input
            type="text"
            name="periodTo"
            value={formData.periodTo}
            onChange={handleChange}
            placeholder="所属"
          />
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <Label>税率指定</Label>
        <InputGroup>
          <Input
            type="text"
            name="taxRate"
            value={formData.taxRate}
            onChange={handleChange}
          />
          <Span>%</Span>
        </InputGroup>
        <RadioGroup>
          <RadioLabel>
            <Radio
              type="radio"
              name="taxSpecification"
              value="doNotSpecify"
              checked={formData.taxSpecification === 'doNotSpecify'}
              onChange={handleChange}
            />
            指定しない
          </RadioLabel>
          <RadioLabel>
            <Radio
              type="radio"
              name="taxSpecification"
              value="specify"
              checked={formData.taxSpecification === 'specify'}
              onChange={handleChange}
            />
            指定する
          </RadioLabel>
        </RadioGroup>
      </FormGroup>
      
      <Button type="submit">終了</Button>
    </Form>
  );
};

// Styled components
const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Span = styled.span`
  color: #666;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const SampleReservationForm = () => {
  const handleReservationSubmit = (data: ReservationData) => {
    console.log('Reservation submitted:', data);
    // Handle form submission
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <ReservationForm onSubmit={handleReservationSubmit} />
    </div>
  );
};

export default SampleReservationForm;