import React from 'react';
import styled from '@emotion/styled';

interface RepairHistoryFormProps {
  onSubmit: (data: RepairHistoryData) => void;
}

interface RepairHistoryData {
  insuranceType: string;
  completionYear: string;
  emergencyGrade: string;
  dateFrom: string;
  dateTo: string;
  valueLowerLimit: number;
  valueUpperLimit: number;
  repairAmount: number;
  partsAmount: number;
  region: string;
  district: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 1.2rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

const RepairHistoryForm: React.FC<RepairHistoryFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: フォームデータの収集とバリデーション
    const data: RepairHistoryData = {
      insuranceType: '',
      completionYear: '',
      emergencyGrade: '', 
      dateFrom: '',
      dateTo: '',
      valueLowerLimit: 0,
      valueUpperLimit: 0,
      repairAmount: 0,
      partsAmount: 0,
      region: '',
      district: '',
    };
    onSubmit(data);
  };

  return (
    <Container>
      <Title>修繕履歴管理一覧表</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>範囲指定</Label>
          <Select name="insuranceType">
            <option value="">修繕</option>
            {/* TODO: 選択肢の追加 */}
          </Select>
          <Select name="completionYear">
            <option value="">完了</option>
            {/* TODO: 選択肢の追加 */}
          </Select>
          <Select name="emergencyGrade">
            <option value="">緊急</option>
            {/* TODO: 選択肢の追加 */}
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>着手年月日</Label>
          <Input type="date" name="dateFrom" />
          <span>～</span>
          <Input type="date" name="dateTo" />
        </FormGroup>
        <FormGroup>
          <Label>資産番号</Label>
          <Input type="number" name="valueLowerLimit" placeholder="0" />
          <span>～</span>
          <Input type="number" name="valueUpperLimit" placeholder="9999999999" />
        </FormGroup>
        <FormGroup>
          <Label>調定</Label>
          <Input type="number" name="repairAmount" placeholder="0000000" />
          <span>～</span>
          <Input type="number" name="partsAmount" placeholder="999999999" />
        </FormGroup>
        <FormGroup>
          <Label>部門</Label>
          <Input type="number" name="region" placeholder="001" />
          <span>県水部門</span>
        </FormGroup>  
        <FormGroup>
          <Label>施設</Label>
          <Input type="number" name="district" placeholder="01000" />
          <span>上水道</span>
        </FormGroup>
        <FormGroup>
          <Label>所属</Label>
          <Input type="number" name="division" placeholder="000004" />
          <span>水道管路維持課</span>
        </FormGroup>
        <ButtonGroup>
          <Button type="submit">OK</Button>
          <Button type="reset">クリア</Button>
          <Button type="button">終了</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

// サンプルデータと使用例
const sampleData: RepairHistoryData = {
  insuranceType: '修繕',
  completionYear: '完了',
  emergencyGrade: '緊急',
  dateFrom: '2029-04-01',
  dateTo: '2030-06-30', 
  valueLowerLimit: 0,
  valueUpperLimit: 9999999999,
  repairAmount: 0,
  partsAmount: 999999999,
  region: '001',
  district: '01000',
};

const App: React.FC = () => {
  const handleSubmit = (data: RepairHistoryData) => {
    console.log(data);
    // TODO: フォーム送信処理
  };

  return (
    <div>
      <RepairHistoryForm onSubmit={handleSubmit} />
      <h3>Sample Data:</h3>
      <pre>{JSON.stringify(sampleData, null, 2)}</pre>
    </div>
  );
};

export default App;