import React from 'react';
import styled from '@emotion/styled';

type PublicAssistanceWorkProps = {
  startDate: string;
  endDate: string;
  checked: boolean;
  onCheck: (checked: boolean) => void;
  amount: number;
  isDeduction: boolean;
  onDeductionChange: (isDeduction: boolean) => void;
  isSupporting: boolean;
  onSupportingChange: (isSupporting: boolean) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 400px;
`;

const DateRange = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const AmountInput = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const PublicAssistanceWork: React.FC<PublicAssistanceWorkProps> = ({
  startDate,
  endDate,
  checked,
  onCheck,
  amount,
  isDeduction,
  onDeductionChange,
  isSupporting,
  onSupportingChange,
}) => {
  return (
    <Container>
      <DateRange>
        <span>{startDate}</span>
        <span>~</span>
        <span>{endDate}</span>
      </DateRange>
      <CheckboxLabel>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheck(e.target.checked)}
        />
        <span>起案所属別改ページ</span>
      </CheckboxLabel>
      <AmountInput>
        <span>所属</span>
        <input type="number" value={amount} readOnly />
        <span>~</span>
        <span>所属</span>
        <input type="number" value={amount} readOnly />
      </AmountInput>
      <div>
        <label>
          <input
            type="radio"
            checked={isDeduction}
            onChange={() => onDeductionChange(true)}
          />
          <span>指定しない</span>
        </label>
        <label>
          <input
            type="radio"
            checked={!isDeduction}
            onChange={() => onDeductionChange(false)}
          />
          <span>指定する</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            checked={isSupporting}
            onChange={() => onSupportingChange(true)}
          />
          <span>連携する</span>
        </label>
        <label>
          <input
            type="radio"
            checked={!isSupporting}
            onChange={() => onSupportingChange(false)}
          />
          <span>連携しない</span>
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" />
          <span>未連携</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>連携済み(決裁中)</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>決裁完了</span>
        </label>
        <div>※連携する場合、「未連携」のみ出力対象となります。</div>
        <div>「未連携」には、連携先システムで削除された伝票も含まれます。</div>
      </div>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <PublicAssistanceWork
      startDate="令和05年03月14日"
      endDate="令和05年06月14日"
      checked={false}
      onCheck={(checked) => console.log('Checked:', checked)}
      amount={9999999}
      isDeduction={false}
      onDeductionChange={(isDeduction) => console.log('Deduction:', isDeduction)}
      isSupporting={false}
      onSupportingChange={(isSupporting) => console.log('Supporting:', isSupporting)}
    />
  );
};

export default App;