import React from 'react';
import styled from 'styled-components';

interface SoumutenkenFormProps {
  // 作表日のデフォルト値
  defaultSakuHyoDate?: string;
  // 集計対象のデフォルト値
  defaultShukeiTaisho?: '全社' | 'ブロック' | 'セグメント';
  // 「帳簿のみ保存」のチェックボックスのデフォルト値
  defaultSaveChoBo?: boolean;
  // 「適格請求書発行事業者以外」のチェックボックスのデフォルト値 
  defaultSaveIneligibleClaimant?: boolean;
  // 「課税金額が0円」のチェックボックスのデフォルト値
  defaultSaveZeroTaxableAmount?: boolean;
  // OKボタンをクリックした時のイベントハンドラ
  onOk?: () => void;
  // クリアボタンをクリックした時のイベントハンドラ  
  onClear?: () => void;
  // 終了ボタンをクリックした時のイベントハンドラ
  onEnd?: () => void;
}

const SoumutenkenForm: React.FC<SoumutenkenFormProps> = ({
  defaultSakuHyoDate = '',
  defaultShukeiTaisho = '全社',
  defaultSaveChoBo = false,
  defaultSaveIneligibleClaimant = false,
  defaultSaveZeroTaxableAmount = false,
  onOk,
  onClear,
  onEnd,
}) => {
  // 作表日の状態管理
  const [sakuHyoDate, setSakuHyoDate] = React.useState(defaultSakuHyoDate);
  
  // 集計対象の状態管理
  const [shukeiTaisho, setShukeiTaisho] = React.useState(defaultShukeiTaisho);

  // 「帳簿のみ保存」のチェックボックスの状態管理
  const [saveChoBo, setSaveChoBo] = React.useState(defaultSaveChoBo);

  // 「適格請求書発行事業者以外」のチェックボックスの状態管理
  const [saveIneligibleClaimant, setSaveIneligibleClaimant] = React.useState(defaultSaveIneligibleClaimant);

  // 「課税金額が0円」のチェックボックスの状態管理  
  const [saveZeroTaxableAmount, setSaveZeroTaxableAmount] = React.useState(defaultSaveZeroTaxableAmount);

  return (
    <Container>
      <Title>総勘定元帳作成</Title>
      
      <Form>
        <FormField>
          <Label>作表日</Label>
          <DateInputs>
            <DateInput
              type="text"
              value={sakuHyoDate}
              onChange={(e) => setSakuHyoDate(e.target.value)}  
            />
            <DateDelimiter>～</DateDelimiter>
            <DateInput type="text" disabled />
          </DateInputs>
        </FormField>

        <FormField>
          <Label>作表区分</Label>
          <RadioInputs>
            <RadioInput
              type="radio"
              checked={shukeiTaisho === '日'}
              onChange={() => setShukeiTaisho('日')}
            />
            <RadioLabel>日</RadioLabel>
            <RadioInput
              type="radio" 
              checked={shukeiTaisho === '前'}
              onChange={() => setShukeiTaisho('前')}
            />
            <RadioLabel>前</RadioLabel>
          </RadioInputs>
        </FormField>
        
        <FormField>
          <Label>集計仕訳</Label>
          <Select
            value={defaultShukeiTaisho}
            onChange={(e) => setShukeiTaisho(e.target.value as typeof defaultShukeiTaisho)}
          >
            <option value="全社">全社</option>  
            <option value="ブロック">ブロック</option>
            <option value="セグメント">セグメント</option>
          </Select>
        </FormField>

        <CheckboxField>
          <Checkbox
            type="checkbox"
            checked={saveChoBo}
            onChange={(e) => setSaveChoBo(e.target.checked)}
          />
          <CheckboxLabel>「帳簿のみ保存」のみの伝票を出力する</CheckboxLabel>
        </CheckboxField>
        
        <CheckboxField>
          <Checkbox
            type="checkbox" 
            checked={saveIneligibleClaimant}
            onChange={(e) => setSaveIneligibleClaimant(e.target.checked)}
          />
          <CheckboxLabel>適格請求書発行事業者以外のみの伝票を出力する</CheckboxLabel>  
        </CheckboxField>

        <CheckboxField>
          <Checkbox
            type="checkbox"
            checked={saveZeroTaxableAmount} 
            onChange={(e) => setSaveZeroTaxableAmount(e.target.checked)}
          />
          <CheckboxLabel>課税金額が0円の課税行のみで64円する</CheckboxLabel>
        </CheckboxField>
      </Form>
      
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>  
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onEnd}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Form = styled.div`
  display: flex;  
  flex-direction: column;
  gap: 16px;
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 100px;
`;

const DateInputs = styled.div`
  display: flex;
  align-items: center;
`;

const DateInput = styled.input`
  width: 120px;
  padding: 4px;
`;

const DateDelimiter = styled.span`
  margin: 0 8px;  
`;

const RadioInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RadioInput = styled.input``;

const RadioLabel = styled.label``;

const Select = styled.select`
  padding: 4px;
`;

const CheckboxField = styled.div`
  display: flex;  
  align-items: center;
  gap: 8px;
`;

const Checkbox = styled.input``;

const CheckboxLabel = styled.label``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
`;

// Usage example
const App: React.FC = () => {
  return (
    <SoumutenkenForm
      defaultSakuHyoDate="2022-03-01"  
      defaultShukeiTaisho="ブロック"
      defaultSaveChoBo={true}
      defaultSaveIneligibleClaimant={false}
      defaultSaveZeroTaxableAmount={true}
      onOk={() => console.log('OK clicked')}
      onClear={() => console.log('Clear clicked')}
      onEnd={() => console.log('End clicked')}
    />
  );
};

export default SoumutenkenForm;