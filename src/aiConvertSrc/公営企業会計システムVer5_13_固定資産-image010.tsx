import React from 'react';
import styled from '@emotion/styled';

interface ReferenceListFormProps {
  onSubmit: (data: ReferenceListFormData) => void;
}

interface ReferenceListFormData {
  accountDivision: string;
  rangeStartNumber: string;
  rangeEndNumber: string;
  periodStartDate: string;
  periodEndDate: string;
}

const ReferenceListForm: React.FC<ReferenceListFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<ReferenceListFormData>({
    accountDivision: '会計区分別',
    rangeStartNumber: '',
    rangeEndNumber: '',
    periodStartDate: '',
    periodEndDate: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <FormContainer>
      <FormHeader>取得資産リスト作成</FormHeader>
      <FormBody>
        <FormField>
          <label>作表年月日</label>
          <input type="text" value="令和29年09月11日" readOnly />
        </FormField>
        <FormField>
          <label>会計区分</label>
          <select name="accountDivision" value={formData.accountDivision} onChange={handleChange}>
            <option value="印字しない">印字しない</option>
            <option value="会計区分別">会計区分別</option>
          </select>
        </FormField>
        <FormField>
          <label>範囲指定</label>
          <input
            type="text"
            name="rangeStartNumber"
            value={formData.rangeStartNumber}
            onChange={handleChange}
            placeholder="～"
          />
          <input
            type="text"
            name="rangeEndNumber"
            value={formData.rangeEndNumber}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>取得年月日</label>
          <input
            type="text"
            name="periodStartDate"
            value={formData.periodStartDate}
            onChange={handleChange}
            placeholder="平成29年04月01日"
          />
          <span>～</span>
          <input
            type="text"
            name="periodEndDate"
            value={formData.periodEndDate}
            onChange={handleChange}
            placeholder="平成30年03月31日"
          />
        </FormField>
      </FormBody>
      <FormFooter>
        <button type="button">OK</button>
        <button type="button">クリア</button>
        <button type="submit">終了</button>
      </FormFooter>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormHeader = styled.h2`
  margin: 0 0 16px;
  font-size: 20px;
  text-align: center;
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  label {
    flex: 0 0 100px;
  }

  input,
  select {
    flex: 1;
    padding: 4px;
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;

  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

// サンプルデータを使用した表示用コンポーネント
const SampleReferenceListForm = () => {
  const handleSubmit = (data: ReferenceListFormData) => {
    console.log('Submitted data:', data);
  };

  return <ReferenceListForm onSubmit={handleSubmit} />;
};

export default ReferenceListForm;