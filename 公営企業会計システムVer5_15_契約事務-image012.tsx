import React from 'react';
import styled from '@emotion/styled';

// 特定JV登録フォームのプロパティ
type FormProps = {
  registrationType: '登録' | '訂正' | '削除';
  jvType: '特定' | '経常';
  jvCode: string;
  jvName: string;
  processDate: string;
  businessPartnerCode: string;
  businessPartnerName: string;
  departmentCode: string;
  departmentName: string;
  taxRate: number;
  isTaxIncluded: boolean;
};

// スタイル定義
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    flex-basis: 48%;
  }
`;

const Label = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  padding: 5px;
`;

const Input = styled.input`
  padding: 5px;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;

  th, td {
    padding: 5px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #f0f0f0;
    font-weight: bold;
    text-align: center;
  }
`;

// 特定JV登録フォームコンポーネント
const SpecificJvForm: React.FC<FormProps> = ({
  registrationType,
  jvType,
  jvCode,
  jvName,
  processDate,
  businessPartnerCode,
  businessPartnerName,
  departmentCode,
  departmentName,
  taxRate,
  isTaxIncluded,
}) => {
  return (
    <FormContainer>
      <FormGroup>
        <Label>登録</Label>
        <Select value={registrationType}>
          <option value="登録">登録</option>
          <option value="訂正">訂正</option>
          <option value="削除">削除</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>JV区分</Label>
        <Select value={jvType}>
          <option value="特定">特定</option>
          <option value="経常">経常</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>JVコード</Label>
        <Input type="text" value={jvCode} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>変更番号</Label>
        <Input type="text" value="002" readOnly />
      </FormGroup>
      <FormGroup>
        <Label>JV名称</Label>
        <Input type="text" value={jvName} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>発生日</Label>
        <Input type="text" value={processDate} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>明細部選択</Label>
        <Input type="text" value="行削除" readOnly />
      </FormGroup>
      <FormGroup>
        <Label>明細選択</Label>
        {/* 画像の明細部テーブルをここに実装 */}
        <Table>
          <thead>
            <tr>
              <th>業者コード</th>
              <th>業者名</th>
              <th>代表</th>
              <th>出資比率</th>
              <th>業種コード</th>
              <th>業種名</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{businessPartnerCode}</td>
              <td>{businessPartnerName}</td>
              <td>〇</td>
              <td>100 %</td>
              <td>{departmentCode}</td>
              <td>{departmentName}</td>
            </tr>
          </tbody>
        </Table>
      </FormGroup>
      <FormGroup>
        <Label>消費税率</Label>
        <Input type="number" value={taxRate} readOnly /> %
      </FormGroup>
      <FormGroup>
        <Label>税区分</Label>
        <Input
          type="checkbox"
          checked={isTaxIncluded}
          readOnly
        />{' '}
        内税
      </FormGroup>
    </FormContainer>
  );
};

// サンプルデータ
const sampleData: FormProps = {
  registrationType: '登録',
  jvType: '特定',
  jvCode: '0000000001',
  jvName: '大規模広域開発(JV案件)・特定企業工事',
  processDate: '平成29年09月04日',
  businessPartnerCode: '42810005',
  businessPartnerName: '建築一式工事',
  departmentCode: '002',
  departmentName: '建築一式工事',
  taxRate: 8,
  isTaxIncluded: true,
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>特定JV登録フォーム</h1>
      <SpecificJvForm {...sampleData} />
    </div>
  );
};

export default App;