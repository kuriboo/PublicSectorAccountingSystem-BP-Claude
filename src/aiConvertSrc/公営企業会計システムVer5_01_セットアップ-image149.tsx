import React from 'react';
import styled from '@emotion/styled';

type MasterData = {
  code: string;
  name: string;
};

type TableData = {
  year: string;
  office: string;
  staffCode: string;
  positionCode: string;
  amount: number;
  totalAmount: number;
};

type Props = {
  staffMaster: MasterData[];
  positionMaster: MasterData[];
  data: TableData[];
};

const Container = styled.div`
  font-family: sans-serif;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Select = styled.select`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 5px;
    text-align: center;
  }

  th {
    background-color: #f0f0f0;
  }
`;

const Component: React.FC<Props> = ({ staffMaster, positionMaster, data }) => {
  // コードからマスタデータの名称を取得する関数
  const getNameByCode = (code: string, master: MasterData[]) => {
    const item = master.find(v => v.code === code);
    return item ? item.name : '';
  };

  return (
    <Container>
      <Title>所属担当マスタ</Title>

      <div>
        <Label>所属</Label>
        <Input type="text" defaultValue="000001" />
        <Label>総務課</Label>
        <Button>行削除</Button>
      </div>

      <div>
        <Label>担当</Label>
        <Select defaultValue="00001">
          {staffMaster.map(item => (
            <option key={item.code} value={item.code}>{item.name}</option>
          ))}
        </Select>
        <Label>氏名</Label>
        <Input type="text" defaultValue="ぎょうせい一郎" readOnly />
        <Label>役名</Label>
        <Select defaultValue="00008">
          {positionMaster.map(item => (
            <option key={item.code} value={item.code}>{item.name}</option>
          ))}
        </Select>
        <Button>行追加</Button>
      </div>

      <Table>
        <thead>
          <tr>
            <th>年度</th>
            <th>所属</th>
            <th>担当</th>
            <th>APウルフコード</th>
            <th>APウルフ名称</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.year}</td>
              <td>{row.office}</td>
              <td>{getNameByCode(row.staffCode, staffMaster)}</td>
              <td>{row.amount}</td>
              <td>{row.totalAmount}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </div>
    </Container>
  );
};

// サンプルデータを使用した表示用コンポーネント
const SampleData: React.FC = () => {
  const staffMaster: MasterData[] = [
    { code: '00001', name: 'ぎょうせい一郎' },
    { code: '00002', name: '○○ ○○○○' },
    { code: '00009', name: '△△' },
    { code: '00108', name: '2017年度 工水の補助ありの' },
  ];

  const positionMaster: MasterData[] = [
    { code: '00001', name: 'ぎょうせい一郎' },
    { code: '00002', name: '○○ ○○○○' },
    { code: '00004', name: '○○ ○○○○' },
    { code: '00006', name: '○○ ○○○○' },
    { code: '00007', name: '2017年度 土・下・工水の補助あ' },
    { code: '00008', name: 'ぎょうせい八郎' },
    { code: '00100', name: '△△' },
  ];

  const sampleData: TableData[] = [
    { year: '平成29', office: '総務課', staffCode: '00001', positionCode: '00008', amount: 3000000, totalAmount: 8000000 },
    { year: '平成29', office: '総務課', staffCode: '00002', positionCode: '00008', amount: 3000000, totalAmount: 8000000 },
    { year: '平成29', office: '総務課', staffCode: '00003', positionCode: '00004', amount: 2000000, totalAmount: 2000000 },
  ];

  return (
    <Component 
      staffMaster={staffMaster}
      positionMaster={positionMaster} 
      data={sampleData}
    />
  );
};

export default SampleData;