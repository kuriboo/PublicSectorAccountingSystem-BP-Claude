import React from 'react';
import styled from 'styled-components';

// チェックボックスのプロパティ型定義
interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

// チェックボックスコンポーネント
const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

// チェックボックスのスタイリング
const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const CheckboxInput = styled.input`
  margin-right: 8px;
`;

const CheckboxLabel = styled.span`
  font-size: 14px;
`;

// ボタンのプロパティ型定義
interface ButtonProps {
  label: string;
  onClick: () => void;
}

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

// ボタンのスタイリング
const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// 印刷対象帳票名コンポーネント
const PrintTargetForm: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(true);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleButtonClick = (label: string) => {
    console.log(`Clicked button: ${label}`);
    // ボタンクリック時の処理を実装
  };

  return (
    <div>
      <h3>印刷対象帳票名</h3>
      <Checkbox
        label="変更予定支出負担行為伺書（一般）とりまとめ"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isChecked && (
        <>
          <Button label="OK" onClick={() => handleButtonClick('OK')} />
          <Button label="クリア" onClick={() => handleButtonClick('クリア')} />
          <Button label="キャンセル" onClick={() => handleButtonClick('キャンセル')} />
        </>
      )}
    </div>
  );
};

export default PrintTargetForm;