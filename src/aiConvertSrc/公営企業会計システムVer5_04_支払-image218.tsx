import React from 'react';
import styled from '@emotion/styled';

// 指定日付の型定義
type SpecifiedDate = '有' | '無' | '令和03年11月12日';

// コンポーネントのプロパティの型定義
interface PrintSettingsProps {
  title?: string;
  showTitleBar?: boolean;
  showCollectionDate?: boolean;
  showNumber3Digits?: boolean;
  showCarriedOverDate?: boolean;
  showDivisionCodeAndName?: boolean;
  disablePreRegistration?: boolean;
  disableRegistration?: boolean;
  specifiedDate?: SpecifiedDate;
}

// スタイルを定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 300px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  margin-left: 8px;
`;

// 印刷レイアウト設定コンポーネント
const PrintSettings: React.FC<PrintSettingsProps> = ({
  title = '印刷レイアウト',
  showTitleBar = true,
  showCollectionDate = true,
  showNumber3Digits = true,
  showCarriedOverDate = true, 
  showDivisionCodeAndName = true,
  disablePreRegistration = true,
  disableRegistration = true,
  specifiedDate = '令和03年11月12日',
}) => {
  return (
    <Container>
      {showTitleBar && <Title>{title}</Title>}
      
      <CheckboxContainer>
        <Checkbox type="checkbox" checked={showCollectionDate} readOnly />
        <span>調定伺書</span>
      </CheckboxContainer>

      <CheckboxContainer>  
        <Checkbox type="checkbox" checked={showNumber3Digits} readOnly />
        <span>収納伝票(3桁)</span>
      </CheckboxContainer>

      <CheckboxContainer>
        <Checkbox type="checkbox" checked={showCarriedOverDate} readOnly /> 
        <span>収納済通知書</span>
      </CheckboxContainer>
      
      <CheckboxContainer>
        <Checkbox type="checkbox" checked={showDivisionCodeAndName} readOnly />
        <span>送入調定伺書命令書(前受金精算時)</span>  
      </CheckboxContainer>

      <CheckboxContainer>
        <Checkbox type="checkbox" checked={disablePreRegistration} readOnly />
        <span>前受金振替精算書</span>
      </CheckboxContainer>

      <div>
        再発行印字：<input type="radio" checked readOnly /> 有 <input type="radio" readOnly /> 無
      </div>
      <div> 
        調定日印字：<input type="radio" checked readOnly /> 有 <input type="radio" readOnly /> 無
      </div>
      <div>
        精算日印字：<input type="radio" readOnly /> 全精算日 <input type="radio" checked readOnly /> 指定日 {specifiedDate}
      </div>
        
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>印刷レイアウト設定の例</h1>
      <PrintSettings />
    </div>
  );  
};

export default App;