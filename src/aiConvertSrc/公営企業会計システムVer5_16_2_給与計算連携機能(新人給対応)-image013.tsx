import React from 'react';
import styled from 'styled-components';

// 先行支出命令書発行フォームの型定義
type FormData = {
  paymentCategory: string;
  startDate: string;
  endDate: string;
  travelPurpose: string;
  bank: string;
};

// 先行支出命令書発行フォームコンポーネント
const ExpenseOrderForm: React.FC = () => {
  // フォームの状態管理
  const [formData, setFormData] = React.useState<FormData>({
    paymentCategory: '新規',
    startDate: '',
    endDate: '',
    travelPurpose: '出張する',
    bank: '保存年限',
  });

  // ラジオボタンの変更ハンドラ
  const handlePaymentCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, paymentCategory: event.target.value });
  };

  // 日付の変更ハンドラ
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // ラジオボタンの変更ハンドラ
  const handleTravelPurposeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, travelPurpose: event.target.value });
  };

  // セレクトボックスの変更ハンドラ
  const handleBankChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, bank: event.target.value });
  };

  return (
    <FormWrapper>
      <Title>給与支出命令書発行</Title>
      <FormGroup>
        <Label>発行区分</Label>
        <RadioGroup>
          <Radio
            type="radio"
            value="新規"
            checked={formData.paymentCategory === '新規'}
            onChange={handlePaymentCategoryChange}
          />
          <RadioLabel>新規</RadioLabel>
          <Radio
            type="radio"
            value="再発行"
            checked={formData.paymentCategory === '再発行'}
            onChange={handlePaymentCategoryChange}
          />
          <RadioLabel>再発行</RadioLabel>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>発行対象</Label>
        <InputGroup>
          <Input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleDateChange}
          />
          <InputSeparator>~</InputSeparator>
          <Input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleDateChange}
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Label>負担行為同意</Label>
        <RadioGroup>
          <Radio
            type="radio"
            value="出張する"
            checked={formData.travelPurpose === '出張する'}
            onChange={handleTravelPurposeChange}
          />
          <RadioLabel>出張する</RadioLabel>
          <Radio
            type="radio"
            value="出張しない"
            checked={formData.travelPurpose === '出張しない'}
            onChange={handleTravelPurposeChange}
          />
          <RadioLabel>出張しない</RadioLabel>
        </RadioGroup>
      </FormGroup>
      <FormGroup>
        <Label>伝票印字用自由設定項目</Label>
        <Select value={formData.bank} onChange={handleBankChange}>
          <option value="保存年限">保存年限</option>
          {/* その他のオプションを追加 */}
        </Select>
      </FormGroup>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

// スタイリング用のコンポーネント
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-right: 8px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Radio = styled.input`
  margin-right: 4px;
`;

const RadioLabel = styled.label`
  margin-right: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 8px;
`;

const InputSeparator = styled.span`
  margin: 0 8px;
`;

const Select = styled.select`
  width: 200px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
`;

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>先行支出命令書発行フォーム</h1>
      <ExpenseOrderForm />
    </div>
  );
};

export default App;