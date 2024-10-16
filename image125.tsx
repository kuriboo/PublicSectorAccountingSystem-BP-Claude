import React from 'react';
import styled from 'styled-components';

// 型定義
type ConvertReportProps = {
  data: Array<{
    no: number;
    convertDate: string;
    result: string;
    outputFile: string;
  }>;
};

// スタイル定義
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const Notice = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #666;
`;

/**
 * 固定資産コンバート取消のレポートコンポーネント
 */
const ConvertReport: React.FC<ConvertReportProps> = ({ data }) => {
  return (
    <Container>
      <Title>固定資産コンバート取消</Title>
      <Table>
        <thead>
          <tr>
            <th>No.</th>
            <th>コンバート日時</th>
            <th>変動区分</th>
            <th>取込ファイル名</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.no}</td>
              <td>{item.convertDate}</td>
              <td>{item.result}</td>
              <td>{item.outputFile}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Notice>
        ・固定資産コンバート最終で登録した固定資産情報を削除します。<br />
        ・コンバートを行った日時を指定して取消を行います。指定した日時にコンバートしたすべての固定資産情報が削除されます。<br />
        ただし、コンバート後、異動が発生した固定資産がある場合は、コンバート取消を行うことはできません。<br />
        コンバート後の異動をすべて削除してから、コンバート取消を行ってください。<br />
        ・当年度に行ったコンバートのみ取り消すことができます。<br /> 
        ・コンバート取消を行った場合、データを元に戻すことはできません。
      </Notice>
    </Container>
  );
};

export default ConvertReport;

// 使用例
const sampleData = [
  {
    no: 1,
    convertDate: '平成30年06月25日 10:54:55',
    result: '電算移行',
    outputFile: '固定資産情報201806251054____.zip',
  },
  {
    no: 2,
    convertDate: '平成30年06月19日 15:57:28',
    result: '電算移行', 
    outputFile: '固定資産情報201806191457____.zip',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>固定資産コンバート取消レポート</h1>
      <ConvertReport data={sampleData} />
    </div>
  );
};