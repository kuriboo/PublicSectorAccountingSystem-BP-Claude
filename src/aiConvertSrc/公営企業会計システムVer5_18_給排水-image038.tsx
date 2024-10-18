import React from 'react';
import styled from '@emotion/styled';

// 受付登録フォームのPropsの型定義
type RegistrationFormProps = {
  onSubmit: (data: RegistrationData) => void;
};

// 登録データの型定義
type RegistrationData = {
  status: string;
  startDate: string;
  endDate: string;
  staffList: string[];
  representativeName: string;
  representativePhone: string;
  workLocation: string;
  workContent: string;
  requesterName: string;
  requesterDepartment: string;
  requesterPhone: string;
};

// 受付登録フォームコンポーネント
const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  // フォームの状態管理
  const [formData, setFormData] = React.useState<RegistrationData>({
    status: '受付審査',
    startDate: '',
    endDate: '',
    staffList: [],
    representativeName: '',
    representativePhone: '',
    workLocation: '',
    workContent: '',
    requesterName: '',
    requesterDepartment: '',
    requesterPhone: '',
  });

  // フォーム送信時の処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // 入力値変更時の処理
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormSection>
        <SectionTitle>受付情報</SectionTitle>
        <FormField>
          <label>ステータス</label>
          <select name="status" value={formData.status} onChange={handleChange} required>
            <option value="受付審査">受付審査</option>
            <option value="訂正">訂正</option>
            <option value="削除">削除</option>
          </select>
        </FormField>
        <FormField>
          <label>受付年月日</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>受付番号</label>
          <input type="text" value="年月日" disabled />
        </FormField>
      </FormSection>

      <FormSection>
        <SectionTitle>申請者情報</SectionTitle>
        <FormField>
          <label>施工場所</label>
          <input
            type="text"
            name="workLocation"
            value={formData.workLocation}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>住所</label>
          <textarea name="workContent" value={formData.workContent} onChange={handleChange} />
        </FormField>
        <FormField>
          <label>電話番号</label>
          <input
            type="tel"
            name="representativePhone"
            value={formData.representativePhone}
            onChange={handleChange}
          />
        </FormField>
      </FormSection>

      <FormSection>
        <SectionTitle>工事代理人情報</SectionTitle>
        <FormField>
          <label>工事店</label>
          <input
            type="text"
            name="requesterName"
            value={formData.requesterName}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <label>一時工事店</label>
          <input
            type="text"
            name="requesterDepartment"
            value={formData.requesterDepartment}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <label>住所</label>
          <textarea name="workContent" value={formData.workContent} onChange={handleChange} />
        </FormField>
        <FormField>
          <label>電話番号</label>
          <input
            type="tel"
            name="requesterPhone"
            value={formData.requesterPhone}
            onChange={handleChange}
          />
        </FormField>
      </FormSection>

      <SubmitButton type="submit">登録</SubmitButton>
    </Form>
  );
};

// スタイリング
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormSection = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  select,
  textarea {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// サンプルデータ
const sampleData: RegistrationData = {
  status: '受付審査',
  startDate: '2023-06-01',
  endDate: '',
  staffList: ['江東区新木場', '施工場所', '136-0082'],
  representativeName: '新木場株式会社',
  representativePhone: '03-1234-5678',
  workLocation: '新木場1-1-1',
  workContent: 'テスト工事',
  requesterName: '代表者',
  requesterDepartment: '代表者部署',
  requesterPhone: '090-1234-5678',
};

// 使用例
const App: React.FC = () => {
  const handleRegistration = (data: RegistrationData) => {
    console.log('Registration data:', data);
    // 登録処理を行う
  };

  return (
    <div>
      <h1>公衆工事受付システム</h1>
      <RegistrationForm onSubmit={handleRegistration} />
    </div>
  );
};

export default App;