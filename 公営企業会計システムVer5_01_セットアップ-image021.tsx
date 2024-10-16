import React from 'react';
import styled from '@emotion/styled';

type FormData = {
  year: string;
  code: string;
  name: string;
  taxRate1: number;
  taxRate1EndDate: string;
  taxRate2: number;
  taxRate2StartDate: string;
  reductionRate: number;
  entryTaxRate: number;
  basicReductionAmount: number;
  taxableBaseAmount: number;
  longTermFlag: boolean;
  midTermFlag: boolean;
  providePrepayment: boolean;
};

type TaxFormProps = {
  initialData?: FormData;
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
};

const TaxForm: React.FC<TaxFormProps> = ({ 
  initialData = {
    year: '',
    code: '',
    name: '',
    taxRate1: 0,
    taxRate1EndDate: '',
    taxRate2: 0,
    taxRate2StartDate: '',
    reductionRate: 0,
    entryTaxRate: 0,
    basicReductionAmount: 0,
    taxableBaseAmount: 0,
    longTermFlag: false,
    midTermFlag: false,
    providePrepayment: false,
  },
  onSubmit,
  onCancel
}) => {
  const [formData, setFormData] = React.useState<FormData>(initialData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData(prevData => ({
      ...prevData,
      [name]: fieldValue
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <FormHeader>
        <Label>年度</Label>
        <Input type="text" name="year" value={formData.year} onChange={handleChange} />
        <Label>コード</Label>  
        <Input type="text" name="code" value={formData.code} onChange={handleChange} />
        <Label>略名</Label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} />
      </FormHeader>

      <FormBody>
        <FormRow>
          <Label>税区分</Label>
          <Select name="taxRate1" value={formData.taxRate1} onChange={handleChange}>
            <option value={0}>課税1</option>
            {/* Add other options */}
          </Select>
          <Label>税率計上区分</Label>  
          <Select name="taxRate1EndDate" value={formData.taxRate1EndDate} onChange={handleChange}>
            <option value="">年度末未払計上1</option>
            {/* Add other options */}
          </Select>
        </FormRow>

        <FormRow>
          <Label>消費税</Label>
          <Input type="number" name="taxRate2" value={formData.taxRate2} onChange={handleChange} />
          <span>%</span>
        </FormRow>
        
        <FormRow>  
          <Label>収入区分</Label>
          <Select name="taxRate2StartDate" value={formData.taxRate2StartDate} onChange={handleChange}>
            <option value="">課税1</option>
            {/* Add other options */}
          </Select>
        </FormRow>

        <FormRow>
          <Label>端数処理</Label>  
          <Select name="reductionRate" value={formData.reductionRate} onChange={handleChange}>
            <option value={2}>2 切捨</option>
            {/* Add other options */}
          </Select>
        </FormRow>
        
        <FormRow>
          <Label>補助科目税区分フラグ</Label>
          <InputRadio
            type="radio"
            name="entryTaxRate" 
            value="1"
            checked={formData.entryTaxRate === 1}
            onChange={handleChange}
          />
          <span>税抜</span>  
          <InputRadio 
            type="radio"
            name="entryTaxRate"
            value="2"  
            checked={formData.entryTaxRate === 2}
            onChange={handleChange}
          />
          <span>税込</span>
        </FormRow>

        <FormRow>
          <Label>基本税率基準額</Label>  
          <Input 
            type="number"
            name="basicReductionAmount"
            value={formData.basicReductionAmount}
            onChange={handleChange}
          />
          <span>円</span>

          <Label>基準額</Label>  
          <Input
            type="number" 
            name="taxableBaseAmount"
            value={formData.taxableBaseAmount}
            onChange={handleChange}
          />
          <span>円</span>
        </FormRow>
        
        <FormRow>
          <Label>事業</Label>
          <InputCheckbox
            type="checkbox"
            name="longTermFlag"
            checked={formData.longTermFlag}
            onChange={handleChange}  
          />
          <span>長期利益会計</span>

          <InputCheckbox
            type="checkbox" 
            name="midTermFlag"
            checked={formData.midTermFlag}
            onChange={handleChange}
          />  
          <span>中期利益会計</span>
        </FormRow>

        <FormRow>
          <Label>仮払内訳</Label>
          <InputCheckbox
            type="checkbox"
            name="providePrepayment" 
            checked={formData.providePrepayment}
            onChange={handleChange}
          />
          <span>仮払科目を表示</span>  
        </FormRow>
        
      </FormBody>
      
      <FormFooter>
        <Button onClick={onCancel}>キャンセル</Button>  
        <Button primary onClick={handleSubmit}>確認</Button>
      </FormFooter>
    </FormContainer>
  );
};

// Styled components
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  background-color: #f0f0f0;
`;

const FormHeader = styled.div`
  display: grid;  
  grid-template-columns: 80px 1fr;
  gap: 8px;
  align-items: center;
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormRow = styled.div` 
  display: grid;
  grid-template-columns: 160px 80px 1fr;
  gap: 8px;  
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;  

const InputRadio = styled.input`
  margin-right: 4px;
`;

const InputCheckbox = styled.input`
  margin-right: 4px;  
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.primary ? '#007bff' : '#ccc'};
  color: ${props => props.primary ? '#fff' : '#000'};
  cursor: pointer;

  &:hover {
    opacity: 0.8;  
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end; 
  gap: 8px;
`;

// Sample usage
const SampleUsage: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);  
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <TaxForm 
      initialData={{
        year: '2023',
        code: '0001',
        name: 'Sample Tax',
        taxRate1: 1,
        taxRate1EndDate: '2023-12-31',
        taxRate2: 10, 
        taxRate2StartDate: '2023-01-01',
        reductionRate: 2,
        entryTaxRate: 1,
        basicReductionAmount: 1000,
        taxableBaseAmount: 10000,
        longTermFlag: true,
        midTermFlag: false,
        providePrepayment: true,
      }}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
    />  
  );
};

export default TaxForm;