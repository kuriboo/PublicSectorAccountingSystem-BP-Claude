import React from 'react';
import styled from 'styled-components';

// 支出負担行為伺書作成画面のプロパティ
type CreateExpenseRequestFormProps = {
  onCancel?: () => void;
  onClear?: () => void;
  onPrint?: () => void;
};

// 支出負担行為伺書作成画面コンポーネント
const CreateExpenseRequestForm: React.FC<CreateExpenseRequestFormProps> = ({
  onCancel,
  onClear,
  onPrint,
}) => {
  return (
    <Container>
      <Title>支出負担行為伺書作成(一般)</Title>
      <ButtonContainer>
        <Button onClick={onCancel}>キャンセル</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onPrint}>印刷</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// サンプルデータを使用して表示用コンポーネントを実装
const SampleCreateExpenseRequestForm: React.FC = () => {
  const handleCancel = () => {
    console.log('キャンセルボタンがクリックされました');
  };

  const handleClear = () => {
    console.log('クリアボタンがクリックされました');
  };

  const handlePrint = () => {
    console.log('印刷ボタンがクリックされました');
  };

  return (
    <CreateExpenseRequestForm
      onCancel={handleCancel}
      onClear={handleClear}
      onPrint={handlePrint}
    />
  );
};

export default SampleCreateExpenseRequestForm;