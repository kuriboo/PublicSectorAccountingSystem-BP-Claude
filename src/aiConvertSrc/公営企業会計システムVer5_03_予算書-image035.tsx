import React from 'react';
import styled from '@emotion/styled';

type ConsumptionTaxSettingProps = {
  initialTaxMethod?: '3' | '2'; // 初期課税方式（'3': 総額, '2': 内税）
  initialTaxRate?: number; // 初期消費税率（％）
  onSave?: (taxMethod: '3' | '2', taxRate: number) => void; // 保存ボタン押下時のコールバック
};

const ConsumptionTaxSetting: React.FC<ConsumptionTaxSettingProps> = ({
  initialTaxMethod = '3',
  initialTaxRate = 8,
  onSave,
}) => {
  const [taxMethod, setTaxMethod] = React.useState<'3' | '2'>(initialTaxMethod);
  const [taxRate, setTaxRate] = React.useState<number>(initialTaxRate);

  const handleTaxMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaxMethod(e.target.value as '3' | '2');
  };

  const handleTaxRateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTaxRate(Number(e.target.value));
  };

  const handleSave = () => {
    onSave?.(taxMethod, taxRate);
  };

  return (
    <Container>
      <Row>
        <FieldTitle>課税方式</FieldTitle>
        <div>
          <RadioButton
            type="radio"
            id="tax-inclusive"
            value="3"
            checked={taxMethod === '3'}
            onChange={handleTaxMethodChange}
          />
          <label htmlFor="tax-inclusive">総額</label>
          <RadioButton
            type="radio"
            id="tax-exclusive"
            value="2"
            checked={taxMethod === '2'}
            onChange={handleTaxMethodChange}
          />
          <label htmlFor="tax-exclusive">内税</label>
        </div>
      </Row>
      <Row>
        <FieldTitle>消費税率</FieldTitle>
        <Select value={taxRate} onChange={handleTaxRateChange}>
          <option value={8}>8%</option>
          <option value={10}>10%</option>
        </Select>
      </Row>
      <InfoText>
        ※計上23年課税期間の千円未満
        <br />
        「決算見込登録」画面で税込金額を千円丸めで入力しておく必要があります。
      </InfoText>
      <Row>
        <FieldTitle>特定収入額計算用 消費税率</FieldTitle>
        <div>8%</div>
      </Row>
      <Row>
        <CheckboxLabel>
          <input type="checkbox" />
          貯蔵品の印字はしない
        </CheckboxLabel>
      </Row>
      <ButtonRow>
        <Button onClick={handleSave}>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonRow>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const FieldTitle = styled.div`
  width: 150px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const Select = styled.select`
  padding: 5px;
`;

const InfoText = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
`;

// 使用例
const App: React.FC = () => {
  const handleSave = (taxMethod: '3' | '2', taxRate: number) => {
    console.log('税率設定保存:', taxMethod, taxRate);
  };

  return (
    <div>
      <h1>消費税設定</h1>
      <ConsumptionTaxSetting onSave={handleSave} />
    </div>
  );
};

export default App;