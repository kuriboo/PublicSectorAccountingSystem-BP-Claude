import React from 'react';
import styled from 'styled-components';

// プロパティの型定義
type FinancialSourceMasterProps = {
  mode?: '登録' | '訂正' | '削除';
  financialSourceCode?: string;
  financialSourceName?: string;
  status?: '1' | '0';
  taxCountingCode?: '1' | '0';
  taxCountingName?: string;
  calcTaxCode?: '0' | '1';
  calcTaxName?: string;
  accountTitle?: '計上';
  outgoingCode?: '0' | '1';
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const FieldSet = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

// コンポーネントの実装
const FinancialSourceMaster: React.FC<FinancialSourceMasterProps> = ({
  mode = '登録',
  financialSourceCode = '',
  financialSourceName = '',
  status = '1',
  taxCountingCode = '1',
  taxCountingName = '',
  calcTaxCode = '0',
  calcTaxName = '',
  accountTitle = '計上',
  outgoingCode = '0',
}) => {
  return (
    <Container>
      <FieldSet>
        <Label>財源マスタ</Label>
        <Label>
          <RadioButton type="radio" name="mode" value="登録" defaultChecked={mode === '登録'} />
          登録
        </Label>
        <Label>
          <RadioButton type="radio" name="mode" value="訂正" defaultChecked={mode === '訂正'} />
          訂正
        </Label>
        <Label>
          <RadioButton type="radio" name="mode" value="削除" defaultChecked={mode === '削除'} />
          削除
        </Label>
      </FieldSet>

      <FieldSet>
        <Label>財源コード</Label>
        <Input type="text" defaultValue={financialSourceCode} />
      </FieldSet>
      
      <FieldSet>
        <Label>名称</Label>
        <Input type="text" defaultValue={financialSourceName} />
      </FieldSet>
      
      <FieldSet>
        <Label>略称</Label>
        <Input type="text" />
      </FieldSet>
      
      <FieldSet>
        <Label>債権分類</Label>
        <Select>
          <option value="1" defaultValue={status === '1'}>債権内訳</option>
          <option value="0" defaultValue={status === '0'}>債権項目</option>
        </Select>
      </FieldSet>
      
      <FieldSet>
        <Label>総工事費</Label>
        <Label>
          税抜金額 <Input type="number" defaultValue={taxCountingCode === '0' ? 0 : ''} />  
        </Label>
        <Label>
          消費税額 <Input type="number" defaultValue={taxCountingCode === '0' ? 0 : ''} />
        </Label>
      </FieldSet>
      
      <FieldSet>
        <Label>総事務費</Label>
        <Label>
          税抜金額 <Input type="number" defaultValue={calcTaxCode === '0' ? 0 : ''} />
        </Label>
        <Label>  
          消費税額 <Input type="number" defaultValue={calcTaxCode === '0' ? 0 : ''} />
        </Label>
      </FieldSet>
      
      <FieldSet>
        <Label>計上区分コード</Label>
        <Select defaultValue={accountTitle}>
          <option value="計上">計上</option>
          {/* 他の選択肢 */}
        </Select>
      </FieldSet>
      
      <FieldSet>
        <Label>出資区分コード</Label>
        <Select defaultValue={outgoingCode === '0' ? '市水' : '県水'}>
          <option value="0">市水</option>  
          <option value="1">県水</option>
        </Select>
      </FieldSet>
    </Container>
  );
};

export default FinancialSourceMaster;

// 使用例
const SampleData: FinancialSourceMasterProps = {
  financialSourceCode: '01',  
  financialSourceName: '国庫補助金（下水道）',
  status: '0',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>財源マスタ</h1>
      <FinancialSourceMaster {...SampleData} />
    </div>
  );  
};