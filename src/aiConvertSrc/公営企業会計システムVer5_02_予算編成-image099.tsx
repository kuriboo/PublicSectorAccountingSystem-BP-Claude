import React from 'react';
import styled from 'styled-components';

// 補正前と補正後の金額情報を表すインターフェース
interface AmountData {
  今回補正: number;
  前期: number;
  supplement: number;
  今回計上: number;
  増減: number;
}

// コンポーネントのプロパティを表すインターフェース
interface CorrectAmountProps {
  補正前: AmountData;
  補正後: AmountData;
  科目名称: string;
  onClickSupplementDesc: () => void;
}

// スタイル付きコンポーネント
const CorrectAmountWrapper = styled.div`
  font-size: 14px;
  
  table {
    border-collapse: collapse;
    width: 100%;

    th, td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: right;
    }

    th {
      background-color: #f2f2f2;
    }
  }

  button {
    padding: 4px 8px;
    margin-left: 8px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;

    table {
      th, td {
        padding: 4px;
      }
    }
  }
`;

// 補正前後の金額を表示するコンポーネント
const CorrectAmount: React.FC<CorrectAmountProps> = ({
  補正前,
  補正後,
  科目名称,
  onClickSupplementDesc,
}) => {
  return (
    <CorrectAmountWrapper>
      <h3>{科目名称}</h3>
      <table>
        <thead>
          <tr>
            <th>補正前</th>
            <th>今回補正</th>
            <th>前期</th>
            <th>前期繰越額</th>
            <th>今回計上</th>
            <th>増減</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{補正前.今回補正.toLocaleString()}</td>
            <td>{補正前.前期.toLocaleString()}</td>
            <td>{補正前.supplement.toLocaleString()} <button onClick={onClickSupplementDesc}>補正説明</button></td>
            <td>{補正前.今回計上.toLocaleString()}</td>
            <td>{補正前.増減.toLocaleString()}</td>
          </tr>
          <tr>
            <td>{補正後.今回補正.toLocaleString()}</td>
            <td>{補正後.前期.toLocaleString()}</td>
            <td>{補正後.supplement.toLocaleString()} (※)</td>  
            <td>{補正後.今回計上.toLocaleString()}</td>
            <td>{補正後.増減.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </CorrectAmountWrapper>
  );
};

// サンプルデータ
const sampleData: CorrectAmountProps = {
  補正前: {
    今回補正: 50400000,
    前期: 12000000,
    supplement: 38400000,
    今回計上: -8400000,
    増減: 42000000,
  },
  補正後: {
    今回補正: 33000000,
    前期: 0,
    supplement: 27480000,
    今回計上: 0,
    増減: 33000000,
  },
  科目名称: '水道料金',
  onClickSupplementDesc: () => {
    console.log('補正説明ボタンがクリックされました');
  },
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>補正前後の金額表示</h1>
      <CorrectAmount {...sampleData} />
    </div>
  );
};

export default App;