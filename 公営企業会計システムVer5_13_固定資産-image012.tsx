import React from 'react';
import styled from '@emotion/styled';

interface FormData {
  date: string;
  workType: string;
  meetingType: string;
  projectNumber: string;
  salesNumber: string;
  registrationNumber: string;
  dueDate: string;
}

interface Props {
  initialData?: FormData;
  onSubmit: (data: FormData) => void;
}

// スタイリング
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネント
const RegistrationForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>(
    initialData || {
      date: '',
      workType: '',
      meetingType: '',
      projectNumber: '',
      salesNumber: '',
      registrationNumber: '',
      dueDate: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container>
      <Title>取得改良一覧表作成</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>作成年月日</Label>
          <Input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>作業区分</Label>
          <div>
            <Input
              type="radio"
              name="workType"
              value="評価作業前"
              checked={formData.workType === '評価作業前'}
              onChange={handleChange}
            />{' '}
            評価作業前
            <Input
              type="radio"
              name="workType"
              value="評価作業無し"
              checked={formData.workType === '評価作業無し'}
              onChange={handleChange}
            />{' '}
            評価作業無し
          </div>
        </FormGroup>
        <FormGroup>
          <Label>会計区分</Label>
          <div>
            <Input
              type="radio"
              name="meetingType"
              value="指定なし"
              checked={formData.meetingType === '指定なし'}
              onChange={handleChange}
            />{' '}
            指定なし
            <Input
              type="radio"
              name="meetingType"
              value="会計区分コード"
              checked={formData.meetingType === '会計区分コード'}
              onChange={handleChange}
            />{' '}
            会計区分コード
          </div>
        </FormGroup>
        <FormGroup>
          <Label>範囲指定</Label>
          <div>
            <Label>
              開始番号{' '}
              <Input
                type="text"
                name="projectNumber"
                value={formData.projectNumber}
                onChange={handleChange}
              />
            </Label>
            <Label>
              終了番号{' '}
              <Input
                type="text"
                name="salesNumber"
                value={formData.salesNumber}
                onChange={handleChange}
              />
            </Label>
            <Label>
              資産番号{' '}
              <Input
                type="text"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                required
              />
            </Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label>
            取得年月日{' '}
            <Input
              type="text"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </Label>
        </FormGroup>
        <Button type="submit">終了</Button>
      </form>
    </Container>
  );
};

// サンプルデータと使用例
const sampleData: FormData = {
  date: '令和06年02月21日',
  workType: '評価作業前',
  meetingType: '指定なし',
  projectNumber: '00000000',
  salesNumber: '99999999',
  registrationNumber: '999999999',
  dueDate: '令和06年03月31日',
};

const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
    // ここで送信処理を行う
  };

  return <RegistrationForm initialData={sampleData} onSubmit={handleSubmit} />;
};

export default App;