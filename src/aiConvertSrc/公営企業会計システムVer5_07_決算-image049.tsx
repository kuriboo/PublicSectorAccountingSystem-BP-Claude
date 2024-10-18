import React from 'react';
import styled from 'styled-components';

// 経営分析表の型定義
interface KeieiBunsekiProps {
  sakujoNengappi: string; // 作成日
  kiteiCode: string; // 分析コード
  processDate: string; // 処理概要
  collectDate: string; // 集計日時
}

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  padding: 8px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 経営分析表コンポーネント
const KeieiBunseki: React.FC<KeieiBunsekiProps> = ({
  sakujoNengappi,
  kiteiCode,
  processDate,
  collectDate,
}) => {
  return (
    <Container>
      <Title>経営分析表</Title>
      <Table>
        <tbody>
          <tr>
            <TableHeader>作成日</TableHeader>
            <TableCell>{sakujoNengappi || '-'}</TableCell>
          </tr>
          <tr>
            <TableHeader>分析コード</TableHeader>
            <TableCell>{kiteiCode || '-'}</TableCell>
          </tr>
        </tbody>
      </Table>
      <div>
        <p>処理概要</p>
        <p>{processDate || '経営分析を作成します。'}</p>
      </div>
      <p>集計日時 {collectDate || '未設定'}</p>
      <ButtonContainer>
        <Button>CSV出力</Button>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: KeieiBunsekiProps = {
  sakujoNengappi: '平成29年8月04日',
  kiteiCode: '000   ~   999',
  processDate: '',
  collectDate: '平成29年07月31日 17時15分',
};

// 使用例
const SampleUsage: React.FC = () => {
  return (
    <div>
      <h1>経営分析表の使用例</h1>
      <KeieiBunseki {...sampleData} />
    </div>
  );
};

export default KeieiBunseki;