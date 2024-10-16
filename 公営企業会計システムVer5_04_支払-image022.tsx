import React from 'react';
import styled from '@emotion/styled';

type PrinterSettingProps = {
  /** 負担行為伺兼命令書を印刷するかどうか */
  isPrintFutanGyomuiUkeKanMeiReisho: boolean;
  /** 税区分別・税率別金額合計一覧を印刷するかどうか */
  isPrintZeikubunBetsuZeiritsuBetsuKingakuGoukeiIchiran: boolean;
  /** 設定を確定するハンドラ */
  onClickOK: () => void;
  /** 設定をキャンセルするハンドラ */
  onClickCancel: () => void;
}

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
  width: 300px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 16px;
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 8px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const OKButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;
`;

const PrinterSetting: React.FC<PrinterSettingProps> = ({
  isPrintFutanGyomuiUkeKanMeiReisho,
  isPrintZeikubunBetsuZeiritsuBetsuKingakuGoukeiIchiran,
  onClickOK,
  onClickCancel,
}) => {
  return (
    <Container>
      <Title>印刷対象帳票名</Title>
      <CheckboxWrapper>
        <CheckboxLabel>
          <Checkbox type="checkbox" checked={isPrintFutanGyomuiUkeKanMeiReisho} readOnly />
          負担行為伺兼命令書(物品)
        </CheckboxLabel>
      </CheckboxWrapper>
      <CheckboxWrapper>
        <CheckboxLabel>
          <Checkbox type="checkbox" checked={isPrintZeikubunBetsuZeiritsuBetsuKingakuGoukeiIchiran} readOnly />
          税区分別・税率別金額合計一覧
        </CheckboxLabel>
      </CheckboxWrapper>
      <ButtonWrapper>
        <OKButton onClick={onClickOK}>OK</OKButton>
        <CancelButton onClick={onClickCancel}>クリア</CancelButton>
      </ButtonWrapper>
    </Container>
  );  
};

// 使用例
const App: React.FC = () => {
  return (
    <PrinterSetting
      isPrintFutanGyomuiUkeKanMeiReisho={true}
      isPrintZeikubunBetsuZeiritsuBetsuKingakuGoukeiIchiran={false}
      onClickOK={() => console.log('OKがクリックされました')}
      onClickCancel={() => console.log('キャンセルがクリックされました')}
    />
  );
};

export default App;