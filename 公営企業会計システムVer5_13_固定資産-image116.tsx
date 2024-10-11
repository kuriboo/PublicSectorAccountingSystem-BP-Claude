import React from 'react';
import styled from '@emotion/styled';

interface FormData {
  資産番号: string;
  資産名称: string;
  取得区分: string;
  取得年月日: string;
  負担年度: string;
  負担番号: string;
  完了年月日: string;
  備考: string;
  稼働円管: string;
  税込額: number;
  消費税率: number;
  消費税額: number;
  検査: boolean;
  緊急: boolean;
  完了: boolean;
}

interface Props {
  initialData?: FormData;
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 8px;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  text-align: right;
  
  @media (max-width: 600px) {
    text-align: left;
  }
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PercentInput = styled(Input)`
  width: 50px;
`;

const ButtonContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const PropertyRegistrationForm: React.FC<Props> = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = React.useState<FormData>(initialData || {
    資産番号: '',
    資産名称: '',
    取得区分: '購入',
    取得年月日: '',
    負担年度: '',
    負担番号: '',
    完了年月日: '',
    備考: '',
    稼働円管: '月分計上',
    税込額: 0,
    消費税率: 8,
    消費税額: 0,
    検査: false,
    緊急: false,
    完了: false,
  });

  // Handle form input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevData => ({ ...prevData, [name]: newValue }));
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>資産番号</Label>
      <Input type="text" name="資産番号" value={formData.資産番号} onChange={handleChange} />
      
      <Label>資産名称</Label>
      <Input type="text" name="資産名称" value={formData.資産名称} onChange={handleChange} />
      
      <Label>取得区分</Label>
      <Input type="text" name="取得区分" value={formData.取得区分} onChange={handleChange} />
      
      <Label>取得年月日</Label>
      <Input type="text" name="取得年月日" value={formData.取得年月日} onChange={handleChange} />
      
      <Label>負担年度</Label>
      <Input type="text" name="負担年度" value={formData.負担年度} onChange={handleChange} />
      
      <Label>負担番号</Label>
      <Input type="text" name="負担番号" value={formData.負担番号} onChange={handleChange} />
      
      <Label>完了年月日</Label>
      <Input type="text" name="完了年月日" value={formData.完了年月日} onChange={handleChange} />
      
      <Label>備考</Label>
      <Textarea name="備考" value={formData.備考} onChange={handleChange} rows={4} />
      
      <Label>稼働円管</Label>
      <Input type="text" name="稼働円管" value={formData.稼働円管} onChange={handleChange} />
      
      <Label>税込額</Label>
      <Input type="number" name="税込額" value={formData.税込額} onChange={handleChange} />
      
      <Label>消費税率</Label>
      <PercentInput type="number" name="消費税率" value={formData.消費税率} onChange={handleChange} /> %
      
      <Label>消費税額</Label>
      <Input type="number" name="消費税額" value={formData.消費税額} onChange={handleChange} disabled />
      
      <CheckboxContainer>
        <Input type="checkbox" name="検査" checked={formData.検査} onChange={handleChange} />
        <Label>検査</Label>
      </CheckboxContainer>
      
      <CheckboxContainer>
        <Input type="checkbox" name="緊急" checked={formData.緊急} onChange={handleChange} />
        <Label>緊急</Label>
      </CheckboxContainer>
         
      <CheckboxContainer>
        <Input type="checkbox" name="完了" checked={formData.完了} onChange={handleChange} />
        <Label>完了</Label>
      </CheckboxContainer>

      <ButtonContainer>
        <Button type="submit">OK</Button>
        <Button type="button" onClick={onCancel}>クリア</Button>
        <Button type="button">キャンセル</Button>
      </ButtonContainer>
    </Form>
  );
};

// Sample usage
const SamplePropertyRegistrationForm = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <PropertyRegistrationForm
      initialData={{
        資産番号: '70012',
        資産名称: 'ネットフェンス新設工事',
        取得区分: '購入',
        取得年月日: '平成29年07月25日',
        負担年度: '平成29',
        負担番号: '',
        完了年月日: '',
        備考: '',
        稼働円管: '月分計上',
        税込額: 0,
        消費税率: 8,
        消費税額: 0,
        検査: false,
        緊急: false,
        完了: false,
      }}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />
  );
};

export default SamplePropertyRegistrationForm;