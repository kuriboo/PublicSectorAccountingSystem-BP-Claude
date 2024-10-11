import React from 'react';
import styled from 'styled-components';

// 耐用年数マスタの型定義
type EnduranceYearMasterProps = {
  registerCode: string;
  ordinarySeason: boolean;
  extraordinarySeason: boolean;
  ordinaryAccountTitle: boolean;
  extraordinaryAccountTitle: boolean;
  enduranceYearCode: string;
  usefulLife: number;
  revisionRate: number;
  registrationTaxRate: number;
  newVehicleTaxRate: number;
};

// スタイル定義
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const RadioGroup = styled.div`
  margin-bottom: 8px;
`;

const RadioLabel = styled.label`
  margin-right: 16px;
`;

const CheckboxGroup = styled.div`
  margin-bottom: 16px;
`;

const CheckboxLabel = styled.label`
  margin-right: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 8px;
`;

const InputLabel = styled.label`
  display: inline-block;
  width: 120px;
`;

const Input = styled.input`
  width: 100px;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 24px;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 0 8px;
`;

// 耐用年数マスタコンポーネント
const EnduranceYearMaster: React.FC<EnduranceYearMasterProps> = ({
  registerCode,
  ordinarySeason,
  extraordinarySeason,
  ordinaryAccountTitle,
  extraordinaryAccountTitle,
  enduranceYearCode,
  usefulLife,
  revisionRate,
  registrationTaxRate,
  newVehicleTaxRate,
}) => {
  return (
    <Container>
      <Title>耐用年数マスタ</Title>

      {/* 登録コード */}
      <RadioGroup>
        <RadioLabel>
          <input type="radio" name="registerCode" value="登録" checked={registerCode === '登録'} /> 登録
        </RadioLabel>
        <RadioLabel>
          <input type="radio" name="registerCode" value="訂正" checked={registerCode === '訂正'} /> 訂正
        </RadioLabel>
        <RadioLabel>
          <input type="radio" name="registerCode" value="削除" checked={registerCode === '削除'} /> 削除
        </RadioLabel>
      </RadioGroup>

      {/* 増却方法 */}
      <CheckboxGroup>
        <CheckboxLabel>
          <input type="checkbox" checked={ordinarySeason} /> 定率法
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" checked={extraordinarySeason} /> 定額法(月額)
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" checked={ordinaryAccountTitle} /> 定率法
        </CheckboxLabel>
        <CheckboxLabel>
          <input type="checkbox" checked={extraordinaryAccountTitle} /> 定額法(月額)
        </CheckboxLabel>
      </CheckboxGroup>

      {/* 各入力フィールド */}
      <InputGroup>
        <InputLabel>耐用年数コード</InputLabel>
        <Input type="text" value={enduranceYearCode} />
      </InputGroup>
      <InputGroup>
        <InputLabel>償却率</InputLabel>
        <Input type="number" value={revisionRate} />
      </InputGroup>
      <InputGroup>
        <InputLabel>改定償却率</InputLabel>
        <Input type="number" value={registrationTaxRate} />
      </InputGroup>
      <InputGroup>
        <InputLabel>償却保証率</InputLabel>
        <Input type="number" value={newVehicleTaxRate} />
      </InputGroup>
      <InputGroup>
        <InputLabel>新償却率</InputLabel>
        <Input type="number" value={usefulLife} />
      </InputGroup>

      {/* ボタン */}
      <ButtonGroup>
        <Button>前データ</Button>
        <Button>次データ</Button>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// 使用例
const sampleData: EnduranceYearMasterProps = {
  registerCode: '登録',
  ordinarySeason: true,
  extraordinarySeason: false,
  ordinaryAccountTitle: true,
  extraordinaryAccountTitle: false,
  enduranceYearCode: '000',
  usefulLife: 68.40,
  revisionRate: 0.00,
  registrationTaxRate: 0.00,
  newVehicleTaxRate: 68.40,
};

const App: React.FC = () => {
  return (
    <div>
      <h1>耐用年数マスタ 使用例</h1>
      <EnduranceYearMaster {...sampleData} />
    </div>
  );
};

export default App;