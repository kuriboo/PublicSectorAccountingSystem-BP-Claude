import React from 'react';
import styled from '@emotion/styled';

interface FormData {
  fiscalYear: string;
  companyName: string;
  departmentCode: string;
  departmentName: string;
  level: string;
  position: string;
  responsibility: string;
  rangeLow: string;
  rangeHigh: string;
  estimatedAmount: string;
}

interface FinancialSurveyFormProps {
  onSubmit: (data: FormData) => void;
}

const Container = styled.div`
  width: 100%;
  padding: 20px;
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

const Select = styled.select`
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
  &:hover {
    background-color: #0056b3;
  }
`;

const FinancialSurveyForm: React.FC<FinancialSurveyFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      fiscalYear: formData.get('fiscalYear') as string,
      companyName: formData.get('companyName') as string,
      departmentCode: formData.get('departmentCode') as string,
      departmentName: formData.get('departmentName') as string,
      level: formData.get('level') as string,
      position: formData.get('position') as string,
      responsibility: formData.get('responsibility') as string,
      rangeLow: formData.get('rangeLow') as string,
      rangeHigh: formData.get('rangeHigh') as string,
      estimatedAmount: formData.get('estimatedAmount') as string,
    };
    onSubmit(data);
  };

  return (
    <Container>
      <Title>財源別固定資産明細表作成</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>作表年月日</Label>
          <Input type="text" name="fiscalYear" required />
        </FormGroup>
        <FormGroup>
          <Label>会計区分</Label>
          <Select name="companyName" required>
            <option value="">選択してください</option>
            <option value="区分1">区分1</option>
            <option value="区分2">区分2</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>作表区分</Label>
          <div>
            <label>
              <Radio type="radio" name="departmentCode" value="総括表" required />
              総括表
            </label>
            <label>
              <Radio type="radio" name="departmentCode" value="明細表" required />
              明細表
            </label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label>科目レベル</Label>
          <div>
            <label>
              <Radio type="radio" name="level" value="節" required />
              節
            </label>
            <label>
              <Radio type="radio" name="level" value="細節" required />
              細節
            </label>
            <label>
              <Radio type="radio" name="level" value="明細" required />
              明細
            </label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label>書式区分</Label>
          <div>
            <label>
              <Radio type="radio" name="position" value="有形" required />
              有形
            </label>
            <label>
              <Radio type="radio" name="position" value="無形" required />
              無形
            </label>
            <label>
              <Radio type="radio" name="position" value="すべて" required />
              すべて
            </label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label>無形の種式（減価償却費の印字）</Label>
          <div>
            <label>
              <Radio type="radio" name="responsibility" value="印字しない" required />
              印字しない
            </label>
            <label>
              <Radio type="radio" name="responsibility" value="直接控除" required />
              直接控除
            </label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label>範囲指定</Label>
          <div>
            <label>
              <Radio type="radio" name="range" value="指定なし" required />
              指定なし
            </label>
            <label>
              <Radio type="radio" name="range" value="部門別" required />
              部門別
            </label>
            <label>
              <Radio type="radio" name="range" value="施設別" required />
              施設別
            </label>
            <label>
              <Radio type="radio" name="range" value="地区別" required />
              地区別
            </label>
          </div>
          <Input type="text" name="rangeLow" placeholder="自己財源" required />
          ～
          <Input type="text" name="rangeHigh" placeholder="補助金" required />
        </FormGroup>
        <FormGroup>
          <Label>財源コード</Label>
          <Select name="estimatedAmount" required>
            <option value="">自己財源</option>
            <option value="code1">Code 1</option>
            <option value="code2">Code 2</option>
          </Select>
          ～ 
          <Select name="estimatedAmount" required>
            <option value="">補助金</option>
            <option value="code3">Code 3</option>
            <option value="code4">Code 4</option>
          </Select>
        </FormGroup>
        <Button type="submit">終了</Button>
        <Button type="button">クリア</Button>
        <Button type="button">終了</Button>
      </form>
    </Container>
  );
};

export default FinancialSurveyForm;

// Example usage
const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Submitted data:', data);
    // Handle form submission logic here
  };

  return (
    <div>
      <h1>Financial Survey</h1>
      <FinancialSurveyForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;