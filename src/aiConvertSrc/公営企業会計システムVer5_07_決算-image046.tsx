import React from 'react';
import styled from 'styled-components';

// 経営分析マスタ保守のプロパティの型定義
type KeieiBunsekiMasterProps = {
  year: number;
  registrationType: '登録' | '訂正' | '削除';
  data: {
    code: string;
    item: string;
    industryAverage: string;
    unit: string;
  }[];
  values: number[];
};

// スタイルコンポーネントの定義
const Container = styled.div`
  font-family: sans-serif;
`;

const Title = styled.h2`
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const Input = styled.input`
  width: 60px;
`;

// 経営分析マスタ保守コンポーネント
const KeieiBunsekiMaster: React.FC<KeieiBunsekiMasterProps> = ({ 
  year,
  registrationType,
  data,
  values
}) => {
  // 登録タイプのラジオボタンを変更したときのハンドラ
  const handleRegistrationTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <Title>経営分析マスタ保守</Title>
      <div>
        {/* 会計年度 */}
        <span>平成{year}年度</span>

        {/* 登録タイプのラジオボタン */}
        <span>
          <input type="radio" name="registrationType" value="登録" checked={registrationType === '登録'} onChange={handleRegistrationTypeChange} />
          登録
          <input type="radio" name="registrationType" value="訂正" checked={registrationType === '訂正'} onChange={handleRegistrationTypeChange} />  
          訂正
          <input type="radio" name="registrationType" value="削除" checked={registrationType === '削除'} onChange={handleRegistrationTypeChange} />
          削除  
        </span>
      </div>
      
      <Table>
        <thead>
          <tr>
            <th>分析コード</th>
            <th>分析項目名</th>
            <th>固定資産構成比率</th>
            <th>単位</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.code}>
              <td>{row.code}</td>
              <td>{row.item}</td>
              <td>{row.industryAverage}</td>
              <td>{row.unit}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* 値の入力欄 */}  
      <div>
        {values.map((value, i) => (
          <span key={i}>
            平成{year + i}年度 <Input type="number" value={value} />
          </span>
        ))}
      </div>

      {/* ボタン */}
      <div>
        <button>OK</button>
        <button>クリア</button>
        <button>終了</button>  
      </div>
    </Container>
  );
};

// サンプルデータを使用したコンポーネントの表示
const App: React.FC = () => {
  const data = [
    { code: '001', item: '固定資産', industryAverage: '-', unit: '×100' },
    { code: '011', item: '　固定資産', industryAverage: '固定資産/流動資産・純延払金', unit: '' },
    // 残りのデータ...
  ];

  const values = [10000000, 20000000, 30000000, 40000000];

  return (
    <KeieiBunsekiMaster
      year={29}
      registrationType="登録"
      data={data}
      values={values}
    />
  );
};

export default App;