import React from 'react';
import styled from 'styled-components';

// 予約タイプを表す型定義
type ReservationType = '普通' | '定期' | '学割' | '小分類';

// コンポーネントのプロパティを定義
interface SplitReservationFormProps {
  selectedType: ReservationType;
  adultCount: number;
  childCount: number;
  divisionCode: string;
  onTypeChange: (type: ReservationType) => void;
  onAdultCountChange: (count: number) => void;
  onChildCountChange: (count: number) => void;
  onDivisionCodeChange: (code: string) => void;
  onOkClick: () => void;
  onCancelClick: () => void;
  onClearClick: () => void;
}

// スタイル付きコンポーネントを定義
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 60px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// コンポーネントを定義
const SplitReservationForm: React.FC<SplitReservationFormProps> = ({
  selectedType,
  adultCount,
  childCount,
  divisionCode,
  onTypeChange,
  onAdultCountChange,
  onChildCountChange,
  onDivisionCodeChange,
  onOkClick,
  onCancelClick,
  onClearClick,
}) => {
  return (
    <FormWrapper>
      <Row>
        <Label>予約タイプ:</Label>
        <Select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value as ReservationType)}
        >
          <option value="普通">普通</option>
          <option value="定期">定期</option>
          <option value="学割">学割</option>
          <option value="小分類">小分類</option>
        </Select>
      </Row>
      <Row>
        <Label>大人:</Label>
        <Input
          type="number"
          min={0}
          value={adultCount}
          onChange={(e) => onAdultCountChange(Number(e.target.value))}
        />
        <Label>中人:</Label>
        <Input
          type="number"
          min={0}
          value={childCount}
          onChange={(e) => onChildCountChange(Number(e.target.value))}
        />
      </Row>
      <Row>
        <Label>小分類:</Label>
        <Input
          type="text"
          value={divisionCode}
          onChange={(e) => onDivisionCodeChange(e.target.value)}
        />
      </Row>
      <ButtonGroup>
        <Button onClick={onOkClick}>OK</Button>
        <Button onClick={onCancelClick}>クリア</Button>
        <Button onClick={onClearClick}>キャンセル</Button>
      </ButtonGroup>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: SplitReservationFormProps = {
  selectedType: '普通',
  adultCount: 1,
  childCount: 0,
  divisionCode: '099',
  onTypeChange: (type) => console.log('選択されたタイプ:', type),
  onAdultCountChange: (count) => console.log('大人の人数:', count),
  onChildCountChange: (count) => console.log('中人の人数:', count),
  onDivisionCodeChange: (code) => console.log('小分類コード:', code),
  onOkClick: () => console.log('OKがクリックされました'),
  onCancelClick: () => console.log('キャンセルがクリックされました'),
  onClearClick: () => console.log('クリアがクリックされました'),
};

// 使用例コンポーネント
const UsageExample: React.FC = () => {
  return (
    <div>
      <h2>予約分割設定フォーム</h2>
      <SplitReservationForm {...sampleData} />
    </div>
  );
};

export default UsageExample;