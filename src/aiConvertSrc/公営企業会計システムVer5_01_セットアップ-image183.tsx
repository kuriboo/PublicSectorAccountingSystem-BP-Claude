import React from 'react';
import styled from '@emotion/styled';

// 財源マスタのプロパティの型定義
type MasterFormProps = {
  code: string;
  name: string;
  abbreviation: string;
  taxMethod: number;
  debitTax: number;
  creditTax: number;
  isTopLevel: number;
  order: number;
};

// 財源マスタフォームコンポーネント
const MasterForm: React.FC<MasterFormProps> = ({
  code,
  name,
  abbreviation,
  taxMethod,
  debitTax,
  creditTax,
  isTopLevel,
  order,
}) => {
  return (
    <FormWrapper>
      <FormHeader>財源マスタ</FormHeader>
      <FormBody>
        <FormGroup>
          <label>財源コード</label>
          <input type="text" value={code} />
        </FormGroup>
        <FormGroup>
          <label>名称</label>
          <input type="text" value={name} />
        </FormGroup>
        <FormGroup>
          <label>略称</label>
          <input type="text" value={abbreviation} />
        </FormGroup>
        <FormGroup>
          <label>直接区分コード</label>
          <select value={taxMethod}>
            <option value={1}>直接</option>
            <option value={2}>間接</option>
          </select>
        </FormGroup>
        <TaxGroup>
          <label>税抜金額</label>
          <input type="number" value={debitTax} />
          <input type="number" value={creditTax} />
        </TaxGroup>
        <FormGroup>
          <label>計上区分コード</label>
          <select value={isTopLevel}>
            <option value={1}>計上</option>
            <option value={0}>非計上</option>
          </select>
        </FormGroup>
        <FormGroup>
          <label>出資区分コード</label>
          <select value={order}>
            <option value={0}>出資</option>
            <option value={1}>非出資</option>
          </select>
        </FormGroup>
      </FormBody>
      <FormFooter>
        <button>前データ</button>
        <button>次データ</button>
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>
      </FormFooter>
    </FormWrapper>
  );
};

// サンプルデータ
const sampleData: MasterFormProps = {
  code: '01',
  name: '一般財源経費',
  abbreviation: '一般財源',
  taxMethod: 1,
  debitTax: 0,
  creditTax: 0,
  isTopLevel: 1,
  order: 0,
};

// 表示用コンポーネント
const App: React.FC = () => {
  return (
    <div>
      <h1>財源マスタ 登録・編集</h1>
      <MasterForm {...sampleData} />
    </div>
  );  
};

// スタイリング
const FormWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
`;

const FormHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const FormBody = styled.div`
  display: grid;
  grid-gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  
  label {
    flex: 1;
  }
  
  input, select {
    flex: 2;
    padding: 4px;
  }
`;

const TaxGroup = styled.div`
  display: flex;
  align-items: center;
  
  label {
    flex: 1;
  }
  
  input {
    flex: 1;
    padding: 4px;
    margin-right: 8px;
  }
`;

const FormFooter = styled.div`
  margin-top: 16px;
  text-align: center;
  
  button {
    margin: 0 8px;
  }
`;

export default App;