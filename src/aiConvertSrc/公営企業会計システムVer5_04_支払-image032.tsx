import React from 'react';
import styled from '@emotion/styled';

type PrinterOptions = {
  reserveGovernmentPrintJob: boolean;
  reserveBankPrintJob: boolean;
  reservePostPrintJob: boolean;
};

type PrintFormProps = {
  title: string;
  options: PrinterOptions;
  onClickOK: () => void;
  onClickClear: () => void;
  onClickCancel: () => void;
};

const PrintForm: React.FC<PrintFormProps> = ({
  title,
  options,
  onClickOK,
  onClickClear,
  onClickCancel,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <OptionsContainer>
        <Option>
          <input
            type="checkbox"
            checked={options.reserveGovernmentPrintJob}
            readOnly
          />
          <label>予定負担行為伺書(工事) とりまとめ</label>
        </Option>
        <Option>
          <input
            type="checkbox"
            checked={options.reserveBankPrintJob}
            readOnly
          />
          <label>予定負担行為伺書(工事)</label>
        </Option>
        <Option>
          <input
            type="checkbox"
            checked={options.reservePostPrintJob}
            readOnly
          />
          <label>入札執行依頼書(工事)</label>
        </Option>
      </OptionsContainer>
      <ButtonsContainer>
        <Button onClick={onClickOK}>OK</Button>
        <Button onClick={onClickClear}>クリア</Button>
        <Button onClick={onClickCancel}>キャンセル</Button>
      </ButtonsContainer>
    </Container>
  );
};

// サンプルデータ
const sampleOptions: PrinterOptions = {
  reserveGovernmentPrintJob: true,
  reserveBankPrintJob: false,
  reservePostPrintJob: false,
};

const SamplePrintForm: React.FC = () => {
  const handleClickOK = () => {
    console.log('OKがクリックされました');
  };

  const handleClickClear = () => {
    console.log('クリアがクリックされました');
  };

  const handleClickCancel = () => {
    console.log('キャンセルがクリックされました');
  };

  return (
    <PrintForm
      title="印刷対象帳票の選択(工事)"
      options={sampleOptions}
      onClickOK={handleClickOK}
      onClickClear={handleClickClear}
      onClickCancel={handleClickCancel}
    />
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  width: 100%;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default PrintForm;