以下は、Next.js + TypeScriptを使用して、指定された画像を元にコンポーネントを生成したコードです。

import React from 'react';
import styled from '@emotion/styled';

type CompanyOrderFormProps = {
  orderDate: string;
  deliveryArea: string;
  phoneNo: string;
  faxNo: string;
  companyName: string;
  personInCharge: string;
  paymentMethod: string;
  paymentDate: string;
  paymentAmount: number;
  note: string;
  tax: number;
  subtotal: number;
  total: number;
  consumptionTax: number;
  grandTotal: number;
};

const CompanyOrderForm: React.FC<CompanyOrderFormProps> = ({
  orderDate,
  deliveryArea,
  phoneNo,
  faxNo,
  companyName,
  personInCharge,
  paymentMethod,
  paymentDate,
  paymentAmount,
  note,
  tax,
  subtotal,
  total,
  consumptionTax,
  grandTotal,
}) => {
  return (
    <StyledForm>
      <h2>支出負担行為伺入力(物品)</h2>
      <div>
        <label>負担処理日</label>
        <input type="text" value={orderDate} readOnly />
      </div>
      <div>
        <label>残独区分</label>
        <input type="text" value={deliveryArea} readOnly />
      </div>
      <div>
        <label>合議区分</label>
        <select>
          <option>省略</option>
        </select>
      </div>
      <div>
        <label>予定年度</label>
        <input type="text" />
      </div>
      <div>
        <label>契約年月日</label>
        <input type="text" />
      </div>
      <div>
        <label>契約方法</label>
        <select>
          <option>一般競争入札</option>
        </select>
      </div>
      <div>
        <label>契約番号</label>
        <input type="text" />
      </div>
      <div>
        <label>納期年月日</label>
        <input type="text" value={paymentDate} />
      </div>
      <div>
        <label>相手先</label>
        <input type="text" value="3000000000" readOnly />
        <button>事務用品株式会社</button>
      </div>
      <div>
        <label>摘要</label>
        <input type="text" value="事務用品の購入" />
      </div>
      <table>
        <thead>
          <tr>
            <th>細節</th>
            <th>支払金額</th>
            <th>明細</th>
            <th>税</th>
            <th>負担額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0002001116</td>
            <td>{paymentAmount}</td>
            <td>消耗品費</td>
            <td>{tax}</td>
            <td>{subtotal}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>負担額計</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td colSpan={4}>合計金額</td>
            <td>{grandTotal}</td>
          </tr>
          <tr>
            <td colSpan={4}>合計消費税額</td>
            <td>{consumptionTax}</td>
          </tr>
        </tfoot>
      </table>
      <div>
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>
      </div>
    </StyledForm>
  );
};

// スタイリング
const StyledForm = styled.form`
  h2 {
    text-align: center;
  }
  
  div {
    margin-bottom: 10px;
  }

  label {
    display: inline-block;
    width: 100px;
  }

  input, select {
    width: 200px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  }

  tfoot {
    font-weight: bold;
  }

  button {
    margin-top: 20px;
    padding: 5px 10px;
  }
`;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: CompanyOrderFormProps = {
    orderDate: '令和5年10月12日',
    deliveryArea: '県内',
    phoneNo: '090-1234-5678',
    faxNo: '03-1234-5678',
    companyName: '事務用品株式会社',
    personInCharge: '山田太郎',
    paymentMethod: '一般競争入札',
    paymentDate: '年 月 日',
    paymentAmount: 10000,
    note: '事務用品の購入',
    tax: 909,
    subtotal: 10000,
    total: 100000,
    consumptionTax: 909,
    grandTotal: 100909,
  };

  return <CompanyOrderForm {...sampleData} />;
};

export default CompanyOrderForm;

このコードでは、以下のポイントを考慮しています。

1. TypeScriptの型定義を使用して、コンポーネントのプロパティの型を指定しています。
2. コンポーネントはプロパティを通じてカスタマイズ可能になっています。
3. EmotionのCSS-in-JS形式を使用して、コンポーネント内にスタイリングを直接組み込んでいます。
4. コメントを適宜追加しています。
5. 値が入っていない場合の処理は特に実装していませんが、必要に応じて追加できます。
6. サンプルデータを用いて、コンポーネントの使用例を示しています。

レスポンシブデザインについては、メディアクエリを使用して適切なスタイルを設定することができます。

このコンポーネントを使用することで、指定された画像のような支出負担行為伺入力フォームを表示することができます。