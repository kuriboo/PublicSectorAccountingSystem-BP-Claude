import React from 'react';
import styled from '@emotion/styled';

// 騎手情報の型定義
interface JockeyInfo {
  id: number;
  name: string;
  birthday: string;
  birthplace: string;
  firstRaceDate: string;
  totalRaces: number;
  totalWins: number;
  totalPrize: number;
}

// スタイルコンポーネント
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  color: #1e88e5;
  margin-bottom: 20px;
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
    background-color: #f0f0f0;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #1e88e5;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;  
  }
`;

// 騎手土地明細コンポーネント
const JockeyLedger: React.FC<{ jockey: JockeyInfo }> = ({ jockey }) => {
  // 未定義の値をハイフンで表示
  const displayValue = (value: string | number | undefined) => {
    return value ?? '-';
  };

  return (
    <Container>
      <Title>騎手土地明細</Title>
      <Table>
        <tbody>
          <tr>
            <th>整理番号</th>
            <td>{displayValue(jockey.id)}</td>
          </tr>
          <tr>
            <th>騎手番号</th>
            <td>{displayValue(jockey.id)}</td>
          </tr>
          <tr>
            <th>取得地名称</th>
            <td>騎手名</td>
          </tr>
          <tr>
            <th>地番</th>
            <td>S館地</td>
          </tr>
          <tr>
            <th>地目</th>
            <td>{displayValue(jockey.birthplace)}</td>
          </tr>
          <tr>
            <th>登記年月日</th>
            <td>{displayValue(jockey.firstRaceDate)}</td>
          </tr>
          <tr>
            <th>土地明細編集</th>
            <td>
              <label>
                異動年月日
                <input type="text" value={jockey.birthday} readOnly />
              </label>
            </td>
          </tr>
          <tr>
            <th>整理番号</th>
            <td>{displayValue(jockey.id)}</td>
          </tr>
          <tr>
            <th>公図面積</th>
            <td>{displayValue(jockey.totalRaces)}</td>
          </tr>
          <tr>
            <th>実測面積</th>
            <td>{displayValue(jockey.totalWins)}</td>
          </tr>
          <tr>
            <th>異動価額</th>
            <td>{displayValue(jockey.totalPrize)}</td>
          </tr>  
          <tr>
            <th>摘要</th>
            <td>関東</td>
          </tr>
          <tr>
            <th>元所有者氏名</th>
            <td>さくらはい太郎</td>
          </tr>
          <tr>
            <th>元所有者住所</th>
            <td>騎手市騎区</td>
          </tr>
        </tbody>
      </Table>
      <ButtonContainer>
        <Button>行確定</Button>
        <Button>行キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleJockey: JockeyInfo = {
  id: 1200,
  name: '矢口長二',
  birthday: '2018-05-31',
  birthplace: '行政市行政区行水池',
  firstRaceDate: 'H26.05.12',
  totalRaces: 7000,
  totalWins: 7100,
  totalPrize: 5000000,
};

// 使用例
const SampleUsage: React.FC = () => {
  return (
    <div>
      <h1>騎手土地明細の例</h1>
      <JockeyLedger jockey={sampleJockey} />
    </div>
  );  
};

export default SampleUsage;