import React from 'react';
import styled from 'styled-components';

// 言語マスタの型定義
type Language = {
  code: string;
  name: string;
};

// 用語マスタの型定義
type Term = {
  language: string;
  term1: string;
  term2: string;
  term3: string;
  term4: string;
  name: string;
  description: string;
};

// コンポーネントのプロパティの型定義
type TermMasterProps = {
  languages: Language[];
  terms: Term[];
};

// スタイル定義
const Container = styled.div`
  font-family: sans-serif;
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
`;

const TextInput = styled.input`
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  margin-top: 8px;
`;

/**
 * 用語マスタコンポーネント
 */
const TermMaster: React.FC<TermMasterProps> = ({ languages, terms }) => {
  return (
    <Container>
      <h2>用語マスタ</h2>
      <Table>
        <thead>
          <tr>
            <th>用語番号1</th>
            <th>用語番号2</th>
            <th>名称</th>
            {languages.map((lang) => (
              <th key={lang.code}>{lang.name}</th>
            ))}
            <th>略名</th>
            <th>予備1</th>
            <th>予備2</th>
            <th>予備3</th>
            <th>予備4</th>
          </tr>
        </thead>
        <tbody>
          {terms.map((term) => (
            <tr key={`${term.term1}_${term.term2}`}>
              <td>{term.term1}</td>
              <td>{term.term2}</td>
              <td>{term.name}</td>
              {languages.map((lang) => (
                <td key={lang.code}>
                  {term.language === lang.code ? (
                    <TextInput type="text" defaultValue={term.description} />
                  ) : null}
                </td>
              ))}
              <td>
                <TextInput type="text" />
              </td>
              <td>
                <TextInput type="text" />
              </td>
              <td>
                <TextInput type="text" />
              </td>
              <td>
                <TextInput type="text" />
              </td>
              <td>
                <TextInput type="text" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button>行確定</Button>
      <Button>行ｷｬﾝｾﾙ</Button>
      <Button>終了</Button>
    </Container>
  );
};

// サンプルデータ
const sampleLanguages: Language[] = [
  { code: '01', name: '英語' },
  { code: '02', name: '日本語' },
];

const sampleTerms: Term[] = [
  {
    language: '01',
    term1: '010',
    term2: '000',
    term3: '',
    term4: '',
    name: '王者',
    description: 'champion',
  },
  {
    language: '02',
    term1: '030',
    term2: '000',
    term3: '',
    term4: '',
    name: '物品',
    description: '',
  },
];

// サンプルデータを使用してコンポーネントを表示
const App: React.FC = () => {
  return <TermMaster languages={sampleLanguages} terms={sampleTerms} />;
};

export default App;