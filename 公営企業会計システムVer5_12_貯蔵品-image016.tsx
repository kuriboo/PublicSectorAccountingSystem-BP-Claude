import React from 'react';
import styled from 'styled-components';

// 発注済入庫入力フォームのプロパティ型定義
type OrderEntryFormProps = {
  accountingDate: string;
  orderNumber: string;
  supplierCode: string;
  supplierName: string;
  departmentCode: string;
  departmentName: string;
  deliveryDate: string;
  paymentMethod: string;
  contractNumber: string;
  remarks: string;
  expenseItem: string;
};

// 発注済入庫入力フォームコンポーネント
const OrderEntryForm: React.FC<OrderEntryFormProps> = ({
  accountingDate,
  orderNumber,
  supplierCode,
  supplierName,
  departmentCode,
  departmentName,
  deliveryDate,
  paymentMethod,
  contractNumber,
  remarks,
  expenseItem,
}) => {
  return (
    <FormContainer>
      <FormTitle>発注済入庫入力(移動平均)</FormTitle>
      <FormContent>
        <FormGroup>
          <Label>入庫日</Label>
          <Input type="text" value={accountingDate} readOnly />
        </FormGroup>
        <FormGroup>
          <Label>保管場所</Label>
          <Input type="text" value="00000" readOnly />
          <Input type="text" value="保管場所名" readOnly />
        </FormGroup>
        <FormGroup>
          <Label>所属</Label>
          <Input type="text" value="9999999" readOnly />
          <Input type="text" value="予算編成保管庫関" readOnly />
        </FormGroup>
        <FormGroup>
          <Label>入庫区分</Label>
          <Input type="text" value="041001" readOnly />
          <Input type="text" value="[会計]○期購入庫仕訳" readOnly />
        </FormGroup>
        <FormGroup>
          <Label>発注年度</Label>
          <Input type="text" value="H30" readOnly />
          <Label>年度</Label>
          <Input type="text" value="契約発注番号" readOnly />
          <Input type="text" value="8" readOnly />
        </FormGroup>
        <FormGroup>
          <Label>発注内容</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>工事名・場所</Label>
          <Input type="text" />
        </FormGroup>
        <FormGroup>
          <Label>摘要</Label>
          <Input type="text" />
        </FormGroup>

        <FormTable>
          <thead>
            <tr>
              <th>品番</th>
              <th>品名</th>
              <th>規格</th>
              <th>入庫数</th>
              <th>単位</th>
              <th>単価</th>
              <th>金額</th>
              <th>入庫予定日</th>
              <th>発注残数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>000-0701.015</td>
              <td>塩ビ管</td>
              <td>φ200㎜</td>
              <td>2.000 m</td>
              <td>本</td>
              <td>2,500.00</td>
              <td>5,000</td>
              <td>2017/06/15</td>
              <td>2.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}>金額合計</td>
              <td>0</td>
              <td colSpan={2}>入庫予定日</td>
            </tr>
            <tr>
              <td colSpan={6}>消費税</td>
              <td>0</td>
              <td colSpan={2}>2017/06/15</td>
            </tr>
            <tr>
              <td colSpan={6}>合計金額</td>
              <td>2,500</td>
              <td colSpan={2}>発注残数</td>
            </tr>
          </tfoot>
        </FormTable>
        
        <FormFooter>
          <Button>OK</Button>
          <Button>クリア</Button>
          <Button>終了</Button>
        </FormFooter>
      </FormContent>
    </FormContainer>
  );
};

// スタイリング用のコンポーネント
const FormContainer = styled.div`
  font-family: 'Meiryo UI', sans-serif;
  background-color: #f0f0f0;
  padding: 16px;
`;

const FormTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const FormContent = styled.div`
  background-color: #fff;
  padding: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  width: 100px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  margin-right: 8px;
  width: 150px;

  &[readonly] {
    background-color: #f0f0f0;
  }
`;

const FormTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  thead {
    background-color: #f0f0f0;
  }

  tfoot {
    font-weight: bold;
  }
`;

const FormFooter = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
`;

// サンプルデータを用いた使用例
const App: React.FC = () => {
  const sampleData: OrderEntryFormProps = {
    accountingDate: 'H30.06.25',
    orderNumber: '000-0701.015',
    supplierCode: '9999999',
    supplierName: '予算編成保管庫関',
    departmentCode: '041001',
    departmentName: '[会計]○期購入庫仕訳',
    deliveryDate: 'H30',
    paymentMethod: '',
    contractNumber: 'ヶ庄',
    remarks: 'ヶ庄工事',
    expenseItem: '行削除',
  };

  return (
    <div>
      <OrderEntryForm {...sampleData} />
    </div>
  );
};

export default App;