import React from 'react';
import styled from '@emotion/styled';

// 用語マスタの型定義
type Term = {
  開語番号: string;
  開語番号2: string;
  名称: string;
  略名: string;
  予備1: string;
  予備2: string;
  予備3: string;
  予備4: string;
}

// 用語マスタコンポーネントのProps型定義
type TermMasterProps = {
  terms: Term[];
  onSave: (terms: Term[]) => void;
  onCancel: () => void;
  onClose: () => void;
}

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }

  th {
    background-color: #f0f0f0;
    text-align: center;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  border-top: 1px solid #ccc;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
`;

// 用語マスタコンポーネント
const TermMaster: React.FC<TermMasterProps> = ({
  terms,
  onSave,
  onCancel,
  onClose
}) => {
  // ステート管理
  const [editingTerms, setEditingTerms] = React.useState<Term[]>(terms);

  // 保存ボタンクリック時の処理
  const handleSave = () => {
    onSave(editingTerms);
  };

  // 入力値変更時の処理
  const handleChange = (rowIndex: number, key: keyof Term, value: string) => {
    const newTerms = [...editingTerms];
    newTerms[rowIndex][key] = value;
    setEditingTerms(newTerms);
  };

  return (
    <Container>
      <Header>
        <Title>用語マスタ</Title>
        <div>
          <Button onClick={onCancel}>キャンセル</Button>
          <Button onClick={handleSave}>OK</Button>
          <Button onClick={onClose}>終了</Button>
        </div>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>開語番号</th>
            <th>開語番号2</th>
            <th>名称</th>
            <th>略名</th>
            <th>予備1</th>
            <th>予備2</th>
            <th>予備3</th>
            <th>予備4</th>
          </tr>
        </thead>
        <tbody>
          {editingTerms.map((term, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <Input
                  value={term.開語番号}
                  onChange={e => handleChange(rowIndex, '開語番号', e.target.value)}
                />
              </td>
              <td>
                <Input
                  value={term.開語番号2}
                  onChange={e => handleChange(rowIndex, '開語番号2', e.target.value)}
                />
              </td>
              <td>
                <Input
                  value={term.名称}
                  onChange={e => handleChange(rowIndex, '名称', e.target.value)}
                />
              </td>
              <td>
                <Input
                  value={term.略名}
                  onChange={e => handleChange(rowIndex, '略名', e.target.value)}
                />
              </td>
              <td>
                <Input
                  value={term.予備1}
                  onChange={e => handleChange(rowIndex, '予備1', e.target.value)}
                />
              </td>
              <td>
                <Input
                  value={term.予備2}
                  onChange={e => handleChange(rowIndex, '予備2', e.target.value)}
                />
              </td>
              <td>
                <Input
                  value={term.予備3}
                  onChange={e => handleChange(rowIndex, '予備3', e.target.value)}
                />
              </td>
              <td>
                <Input
                  value={term.予備4}
                  onChange={e => handleChange(rowIndex, '予備4', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer>
        <div>
          <Button onClick={onCancel}>キャンセル</Button>
          <Button onClick={handleSave}>OK</Button>
          <Button onClick={onClose}>終了</Button>
        </div>
      </Footer>
    </Container>
  );
};

// サンプルデータ
const sampleTerms: Term[] = [
  {
    開語番号: '011',
    開語番号2: '000',
    名称: '市上下水道部3階 第1研修室',
    略名: '',
    予備1: '',
    予備2: '',
    予備3: '',
    予備4: ''
  },
  {
    開語番号: '202',
    開語番号2: '000',
    名称: '市上下水道部3階 202会議室',
    略名: '',
    予備1: '',
    予備2: '',
    予備3: '',
    予備4: ''
  },
  {
    開語番号: '301',
    開語番号2: '000',
    名称: '市上下水道部3階 301会議室',
    略名: '',
    予備1: '',
    予備2: '',
    予備3: '',
    予備4: ''
  }
];

// 使用例
const App: React.FC = () => {
  const handleSave = (updatedTerms: Term[]) => {
    console.log('Updated terms:', updatedTerms);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  const handleClose = () => {
    console.log('Closed');
  };

  return (
    <TermMaster
      terms={sampleTerms}
      onSave={handleSave}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};

export default App;