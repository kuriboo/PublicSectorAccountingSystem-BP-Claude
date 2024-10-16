import React from 'react';
import styled from '@emotion/styled';

// プロパティの型定義
type ButtonProps = {
  label: string;
  onClick?: () => void;
};

// ボタンコンポーネント
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

// ボタンのスタイリング
const StyledButton = styled.button`
  background-color: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

// 税込処理コンポーネント
const TaxIncluded: React.FC = () => {
  return <StyledTaxIncluded>税込</StyledTaxIncluded>;
};

// 税込のスタイリング
const StyledTaxIncluded = styled.span`
  color: #666;
  font-size: 12px;
  margin-left: 4px;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

// 確認ダイアログのプロパティ型定義 
type ConfirmDialogProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

// 確認ダイアログコンポーネント
const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ 
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <StyledOverlay>
      <StyledDialog>
        <StyledMessage>{message}</StyledMessage>
        <StyledButtonContainer>
          <Button label="キャンセル" onClick={onCancel} />
          <Button label="OK" onClick={onConfirm} />
        </StyledButtonContainer>
      </StyledDialog>
    </StyledOverlay>
  );
};

// 確認ダイアログのスタイリング
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDialog = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

const StyledMessage = styled.p`
  margin-bottom: 20px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

// サンプルデータ
const sampleData = {
  message: 'この操作を実行しますか？',
  onConfirm: () => console.log('Confirmed'),
  onCancel: () => console.log('Canceled'),
};

// 使用例コンポーネント
const UsageExample: React.FC = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  const handleButtonClick = () => {
    setShowDialog(true);
  };

  const handleConfirm = () => {
    sampleData.onConfirm();
    setShowDialog(false);
  };

  const handleCancel = () => {
    sampleData.onCancel();
    setShowDialog(false);  
  };

  return (
    <div>
      <h1>確認ダイアログの例</h1>
      <p>
        商品の価格: 1,000円 <TaxIncluded />
      </p>
      <Button label="削除" onClick={handleButtonClick} />
      {showDialog && (
        <ConfirmDialog
          message={sampleData.message}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default UsageExample;