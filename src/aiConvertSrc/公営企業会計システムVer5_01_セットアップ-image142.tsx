import React from 'react';
import styled from 'styled-components';

// 決裁合議者マスタの型定義
type MasterData = {
  id: string;
  name: string;
  department: string;
  position: string;
};

// 決裁合議者マスタのプロパティの型定義
type Props = {
  data: MasterData[];
  onSave: (data: MasterData[]) => void;
  onCancel: () => void;
};

// 決裁合議者マスタコンポーネント
const DecisionMakerMaster: React.FC<Props> = ({ data, onSave, onCancel }) => {
  // 状態管理
  const [masterData, setMasterData] = React.useState<MasterData[]>(data);
  const [editingRow, setEditingRow] = React.useState<number | null>(null);

  // 行追加
  const handleAddRow = () => {
    const newData: MasterData = { id: '', name: '', department: '', position: '' };
    setMasterData([...masterData, newData]);
    setEditingRow(masterData.length);
  };

  // 行編集
  const handleEditRow = (index: number) => {
    setEditingRow(index);
  };

  // 入力変更
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof MasterData, index: number) => {
    const newData = [...masterData];
    newData[index][field] = e.target.value;
    setMasterData(newData);
  };

  // 保存
  const handleSave = () => {
    // データの検証
    const isValid = masterData.every(data => data.id && data.name && data.department && data.position);
    
    if (!isValid) {
      alert('未入力の項目があります。');
      return;
    }

    onSave(masterData);
  };

  return (
    <Container>
      <h2>決裁合議者マスタ</h2>
      <Table>
        <thead>
          <tr>
            <th>合議者コード</th>
            <th>名称</th>
            <th>部門</th>
            <th>職位</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {masterData.map((data, index) => (
            <tr key={index}>
              <td>
                <input type="text" value={data.id} onChange={e => handleChange(e, 'id', index)} disabled={editingRow !== index} />
              </td>
              <td>
                <input type="text" value={data.name} onChange={e => handleChange(e, 'name', index)} disabled={editingRow !== index} />
              </td>
              <td>
                <input type="text" value={data.department} onChange={e => handleChange(e, 'department', index)} disabled={editingRow !== index} />
              </td>
              <td>
                <input type="text" value={data.position} onChange={e => handleChange(e, 'position', index)} disabled={editingRow !== index} />
              </td>
              <td>
                {editingRow === index ? (
                  <button onClick={() => setEditingRow(null)}>完了</button>
                ) : (
                  <button onClick={() => handleEditRow(index)}>編集</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button onClick={handleAddRow}>行追加</button>
      <Footer>
        <button onClick={handleSave}>登録</button>
        <button onClick={onCancel}>キャンセル</button>
      </Footer>
    </Container>
  );
};

// サンプルデータ
const sampleData: MasterData[] = [
  { id: '01', name: '鈴木一郎', department: '営業部', position: '部長' },
  { id: '02', name: '山田太郎', department: '人事部', position: '課長' },
];

// 使用例
const App: React.FC = () => {
  const handleSave = (data: MasterData[]) => {
    console.log(data);
    // 保存処理
  };

  const handleCancel = () => {
    // キャンセル処理
  };

  return <DecisionMakerMaster data={sampleData} onSave={handleSave} onCancel={handleCancel} />;
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }

  input {
    width: 100%;
    padding: 4px;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 16px;

  button {
    margin: 0 8px;
  }
`;

export default App;