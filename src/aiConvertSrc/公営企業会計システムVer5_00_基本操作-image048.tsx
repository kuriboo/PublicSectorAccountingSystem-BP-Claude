import React from 'react';
import styled from '@emotion/styled';

type CsvExportFormProps = {
  onSubmit: (data: CsvExportFormData) => void;
};

type CsvExportFormData = {
  supportDuration: boolean;
  supportPeriod: boolean;
  storeCode: boolean;
  transactionType: string;
  orderType: boolean;
  startDate: string;
  image1: string;
  image2: string;
  oneTimePayment: string;
  monthlyPayment12: string;
  monthlyAmount: string;
  contractTerm: string;
  contractType: string;
};

const CsvExportForm: React.FC<CsvExportFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<CsvExportFormData>({
    supportDuration: true,
    supportPeriod: true,
    storeCode: true,
    transactionType: '',
    orderType: true,
    startDate: '',
    image1: '',
    image2: '',
    oneTimePayment: '',
    monthlyPayment12: '',
    monthlyAmount: '',
    contractTerm: '',
    contractType: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <label>
          <input
            type="checkbox"
            name="supportDuration"
            checked={formData.supportDuration}
            onChange={handleChange}
          />
          支出負担年度
        </label>
        <label>
          <input
            type="checkbox"
            name="supportPeriod"
            checked={formData.supportPeriod}
            onChange={handleChange}
          />
          支出負担番号
        </label>
        <label>
          <input
            type="checkbox"
            name="storeCode"
            checked={formData.storeCode}
            onChange={handleChange}
          />
          事業回数
        </label>
      </FormGroup>

      <FormGroup>
        <label>
          支払種別区分(桁): 
          <select
            name="transactionType"
            value={formData.transactionType}
            onChange={handleChange}
          >
            <option value="">--</option>
            <option value="コード">コード</option>
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            name="orderType"
            checked={formData.orderType}
            onChange={handleChange}
          />
          注文回数
        </label>
      </FormGroup>

      <FormGroup>
        <label>
          負担処理年月日: 
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </label>
      </FormGroup>

      <FormGroup>
        <label>
          摘要1:
          <input
            type="text"
            name="image1"
            value={formData.image1}
            onChange={handleChange}
          /> 
        </label>
        <label>
          摘要2:
          <input
            type="text"
            name="image2"
            value={formData.image2}
            onChange={handleChange}
          />
        </label>
      </FormGroup>

      <FormGroup>
        <label>
          一時契約先(相手先)フラグ(桁):
          <input
            type="text"
            name="oneTimePayment"
            value={formData.oneTimePayment}
            onChange={handleChange}
          />
        </label>
      </FormGroup>

      <FormGroup>
        <label>
          契約先(相手先)コード(12桁):
          <input
            type="text"
            name="monthlyPayment12"
            value={formData.monthlyPayment12}
            onChange={handleChange}
          />
        </label>
      </FormGroup>

      <FormGroup>
        <label>
          契約先(相手先)名称:
          <input
            type="text"
            name="monthlyAmount"
            value={formData.monthlyAmount}
            onChange={handleChange}
          />
        </label>
      </FormGroup>

      <FormGroup>
        <label>
          契約方法コード(3桁): 
          <input
            type="text"
            name="contractTerm"
            value={formData.contractTerm}
            onChange={handleChange}
          />
        </label>
        <label>
          契約方法名称:
          <input
            type="text"
            name="contractType"
            value={formData.contractType}
            onChange={handleChange}
          />
        </label>
      </FormGroup>

      <SubmitButton type="submit">CSV出力</SubmitButton>
    </Form>
  );
};

// Styling
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  input[type="text"],
  input[type="date"],
  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Sample usage
const SampleCsvExportForm: React.FC = () => {
  const handleSubmit = (data: CsvExportFormData) => {
    console.log('Form submitted:', data);
    // Perform CSV export logic here
  };

  return (
    <div>
      <h1>CSV Export Form</h1>
      <CsvExportForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SampleCsvExportForm;