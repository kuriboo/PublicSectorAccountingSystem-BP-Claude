import React from 'react';
import styled from 'styled-components';

// 型定義
type AttendanceSearchProps = {
  onSearch: (params: { year: number; month: number; department: string; name: string; fromDate: string; toDate: string }) => void;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
`;

const Select = styled.select`
  padding: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #dee2e6;
`;

// コンポーネント定義
const AttendanceSearch: React.FC<AttendanceSearchProps> = ({ onSearch }) => {
  // 検索処理
  const handleSearch = () => {
    // 入力値を取得
    const year = Number((document.getElementById('year') as HTMLInputElement).value);
    const month = Number((document.getElementById('month') as HTMLSelectElement).value);
    const department = (document.getElementById('department') as HTMLSelectElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fromDate = (document.getElementById('fromDate') as HTMLInputElement).value;
    const toDate = (document.getElementById('toDate') as HTMLInputElement).value;

    // 検索パラメータを親コンポーネントに渡す
    onSearch({ year, month, department, name, fromDate, toDate });
  };

  return (
    <div>
      <Container>
        <InputGroup>
          <Label>実績年度</Label>
          <Input type="number" id="year" defaultValue={new Date().getFullYear()} />
          <Label>年度</Label>
        </InputGroup>
        <InputGroup>
          <Label>実績区分</Label>
          <Select id="month">
            <option value="1">1月</option>
            {/* 他の月のオプションを追加 */}
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>業種</Label>
          <Input type="text" id="name" />
          <Label>社名-部門名</Label>
        </InputGroup>
      </Container>
      <Container>
        <InputGroup>
          <Label>検索条件</Label>
        </InputGroup>
        <InputGroup>
          <Label>格付</Label>
          <Select id="department">
            <option value="">全て</option>
            {/* 部門のオプションを追加 */}
          </Select>
          <Label>〜</Label>
          <Select>
            <option value="">全て</option>
            {/* 部門のオプションを追加 */}
          </Select>
        </InputGroup>
        <InputGroup>
          <Label>地区</Label>
          <Input type="date" id="fromDate" />
          <Label>〜</Label>
          <Input type="date" id="toDate" />
        </InputGroup>
        <Button onClick={handleSearch}>表示</Button>
      </Container>
      <Table>
        <thead>
          <tr>
            <TableHeader>No</TableHeader>
            <TableHeader>業者コード</TableHeader>
            <TableHeader>業者名</TableHeader>
            <TableHeader>格付</TableHeader>
            <TableHeader>評可</TableHeader>
            <TableHeader>指名入札回数</TableHeader>
            <TableHeader>指名落札回数</TableHeader>
            <TableHeader>指名落札金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {/* ここに検索結果の行を動的に生成 */}
        </tbody>
      </Table>
    </div>
  );
};

// サンプルデータ
const sampleData = [
  {
    no: 1,
    code: '0000010008',
    name: 'さょうせい運送',
    rating: '特定',
    evaluation: '〇',
    bidsCount: 1,
    winsCount: 0,
    winsAmount: 0,
  },
  // 他のデータを追加
];

// 使用例
const App: React.FC = () => {
  const handleSearch = (params: { year: number; month: number; department: string; name: string; fromDate: string; toDate: string }) => {
    // 検索処理を実装
    console.log(params);
  };

  return (
    <div>
      <h1>業者実績検索</h1>
      <AttendanceSearch onSearch={handleSearch} />
      <Table>
        <thead>
          <tr>
            <TableHeader>No</TableHeader>
            <TableHeader>業者コード</TableHeader>
            <TableHeader>業者名</TableHeader>
            <TableHeader>格付</TableHeader>
            <TableHeader>評可</TableHeader>
            <TableHeader>指名入札回数</TableHeader>
            <TableHeader>指名落札回数</TableHeader>
            <TableHeader>指名落札金額</TableHeader>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((data) => (
            <tr key={data.no}>
              <TableData>{data.no}</TableData>
              <TableData>{data.code}</TableData>
              <TableData>{data.name}</TableData>
              <TableData>{data.rating}</TableData>
              <TableData>{data.evaluation}</TableData>
              <TableData>{data.bidsCount}</TableData>
              <TableData>{data.winsCount}</TableData>
              <TableData>{data.winsAmount}</TableData>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default App;