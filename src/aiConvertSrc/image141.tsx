import React from 'react';

import { useState } from 'react';
import styled from '@emotion/styled';

type MasterType = {
  code: string;
  name: string;
};

type Props = {
  title?: string;
  masters: MasterType[];
  onRegister: (code: string, name: string) => void;
};

const Container = styled.div`
  width: 100%;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const MasterTypeRadio = styled.div`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 4px;
  }
`;

const Button = styled.button`
  padding: 4px 8px;
  margin-right: 8px;
`;

const MasterMaintenance: React.FC<Props> = ({ title = 'システム固定資産名称マスタ', masters, onRegister }) => {
  const [masterType, setMasterType] = useState<string>(''); // マスタ種別
  const [code, setCode] = useState<string>(''); // 異動区分コード
  const [name, setName] = useState<string>(''); // 名称

  // 登録ボタン押下時の処理
  const handleRegister = () => {
    if (!code || !name) return; // コードと名称が入力されていない場合は処理しない
    onRegister(code, name);
    setCode('');
    setName('');
  };

  return (
    <Container>
      <Title>{title}</Title>
      <MasterTypeRadio>
        <label>
          <input
            type="radio"
            value="異動区分マスタ"
            checked={masterType === '異動区分マスタ'}
            onChange={() => setMasterType('異動区分マスタ')}
          />
          異動区分マスタ
        </label>
        {/* その他のマスタ種別のラジオボタン */}
      </MasterTypeRadio>
      <div>
        <label>
          異動区分コード
          <Input type="text" value={code} onChange={(e) => setCode(e.target.value)} />
        </label>
        <label>
          名称
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <Button onClick={handleRegister}>登録</Button>
      <Table>
        <thead>
          <tr>
            <th>異動区分コード</th>
            <th>名称</th>
          </tr>
        </thead>
        <tbody>
          {masters.map((master) => (
            <tr key={master.code}>
              <td>{master.code}</td>
              <td>{master.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

// Usage example
const masters: MasterType[] = [
  { code: '01', name: '取得' },
  { code: '11', name: '一部除却' },
  { code: '12', name: '全除却' },
  { code: '21', name: '改良' },
  // ...
];

const App: React.FC = () => {
  const handleRegister = (code: string, name: string) => {
    console.log(`Registered: code=${code}, name=${name}`);
    // マスタ登録処理を実装
  };

  return <MasterMaintenance masters={masters} onRegister={handleRegister} />;
};

export default App;