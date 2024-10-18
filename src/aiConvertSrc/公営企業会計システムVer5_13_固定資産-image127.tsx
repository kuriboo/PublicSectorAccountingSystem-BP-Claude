import React from 'react';
import styled from 'styled-components';

// 取得資産リストの型定義
type Asset = {
  date: string;
  number: number;
  instrumentCode: string;
  instrumentName: string;
  amount: number;
  unit: string;
  acquisitionValue: number;
};

type AssetListProps = {
  assets: Asset[];
};

// 取得資産明細編集の型定義
type AssetDetailFormProps = {
  date: string;
  instrumentCode: string;
  instrumentName: string;
  amount: number;
  unit: string;
  acquisitionValue: number;
  onSave: () => void;
  onCancel: () => void;
};

// スタイルコンポーネント
const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const Button = styled.button`
  padding: 4px 8px;
  margin-right: 8px;
`;

// 取得資産リストコンポーネント
const AssetList: React.FC<AssetListProps> = ({ assets }) => {
  return (
    <Container>
      <h2>取得資産管理入力</h2>
      <p>※ここで入力したデータは累計に反映されます。<br/>更新後「構造資産累計マスタ画面」にご確認下さい。</p>
      
      <Table>
        <thead>
          <tr>
            <th>異動年月日</th>
            <th>伝番号</th>
            <th>構造コード・通り</th>
            <th>構造資産の名称</th>
            <th>異動数量</th>
            <th>単位</th>
            <th>異動金額</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={index}>
              <td>{asset.date}</td>
              <td>{asset.number}</td>
              <td>{asset.instrumentCode}</td>
              <td>{asset.instrumentName}</td>
              <td>{asset.amount}</td>
              <td>{asset.unit}</td>
              <td>{asset.acquisitionValue}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// 取得資産明細編集コンポーネント 
const AssetDetailForm: React.FC<AssetDetailFormProps> = ({
  date,
  instrumentCode,
  instrumentName,
  amount,
  unit,
  acquisitionValue,
  onSave,
  onCancel,
}) => {
  return (
    <Container>
      <h3>異動構造明細編集</h3>
      <div>
        <label>異動年月日</label>
        <input type="text" value={date} readOnly />
      </div>
      <div>
        <label>構造内容</label>
        <input type="text" value={instrumentCode} readOnly />
        <input type="text" value={instrumentName} readOnly />
      </div>
      <div>
        <label>異動数量</label>
        <input type="number" value={amount} />
      </div>
      <div>
        <label>単位</label>
        <input type="text" value={unit} readOnly />
      </div>
      <div>  
        <label>異動金額</label>
        <input type="number" value={acquisitionValue} />
      </div>
      <div>
        <Button onClick={onSave}>登録</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </div>
    </Container>
  );
};

// サンプルデータ
const sampleAssets: Asset[] = [
  {
    date: '2018-03-31',
    number: 1,
    instrumentCode: '統筋コンクリ-ト造り',
    instrumentName: '',
    amount: 80.00,
    unit: '個',
    acquisitionValue: 3000000,
  },
];

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <AssetList assets={sampleAssets} />
      <hr />
      <AssetDetailForm
        date={sampleAssets[0].date}
        instrumentCode={sampleAssets[0].instrumentCode}
        instrumentName={sampleAssets[0].instrumentName}
        amount={sampleAssets[0].amount}
        unit={sampleAssets[0].unit}
        acquisitionValue={sampleAssets[0].acquisitionValue}
        onSave={() => console.log('Saved')}
        onCancel={() => console.log('Cancelled')}
      />
    </div>
  );
};

export default App;