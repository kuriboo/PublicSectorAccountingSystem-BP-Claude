import React from 'react';
import styled from '@emotion/styled';

type PrinterSettingProps = {
  isChecked: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

const PrinterSetting: React.FC<PrinterSettingProps> = ({ isChecked, onConfirm, onCancel }) => {
  return (
    <Container>
      {/* 印刷対象帳票名 */}
      <Label>印刷対象帳票名</Label>
      <Checkbox type="checkbox" checked={isChecked} readOnly />
      <span>支出負担行為伺書(その他 前渡)</span>

      {/* ボタン */}
      <ButtonContainer>
        <Button onClick={onConfirm}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SamplePrinterSetting: React.FC = () => {
  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleCancel = () => {
    console.log('Canceled');
  };

  return (
    <PrinterSetting
      isChecked={true}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

export default SamplePrinterSetting;

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 8px;
    width: 100%;
  }
`;