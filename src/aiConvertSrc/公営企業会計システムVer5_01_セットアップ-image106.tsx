import React from 'react';
import styled from 'styled-components';

// 契約条件のインターフェース
interface ContractTerm {
  label: string;
  checked: boolean;
}

// コンポーネントのプロパティ
interface ContractTermsProps {
  terms: ContractTerm[];
  onTermChange: (index: number) => void;
}

// コンポーネントのスタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h3`
  margin-top: 0;
`;

const TermList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const TermItem = styled.li`
  margin-bottom: 10px;
`;

const TermLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const TermCheckbox = styled.input`
  margin-right: 10px;
`;

// 契約条件コンポーネント
const ContractTerms: React.FC<ContractTermsProps> = ({ terms, onTermChange }) => {
  // 契約条件の変更ハンドラ
  const handleTermChange = (index: number) => {
    onTermChange(index);
  };

  return (
    <Container>
      <Title>補てん財源告知回答画面</Title>
      <TermList>
        {terms.map((term, index) => (
          <TermItem key={index}>
            <TermLabel>
              <TermCheckbox
                type="checkbox"
                checked={term.checked}
                onChange={() => handleTermChange(index)}
              />
              {term.label}
            </TermLabel>
          </TermItem>
        ))}
      </TermList>
    </Container>
  );
};

export default ContractTerms;

// 使用例
const App: React.FC = () => {
  // サンプルデータ
  const sampleTerms: ContractTerm[] = [
    { label: '翌年度への繰越工事資金', checked: false },
    { label: '前年度繰越資金（未発行企業債）', checked: true },
    { label: '復活繰替前年度繰越資金', checked: true },
    { label: '前年度からの繰越工事資金', checked: true },
    { label: '未発行企業債', checked: false },
    { label: '（繰越）未処分利益剰余金', checked: false },
    { label: '減価償却金', checked: false },
    { label: '建設改良積立金', checked: false },
  ];

  // 契約条件の変更ハンドラ
  const handleTermChange = (index: number) => {
    // 実際の処理を実装
    console.log(`Term ${index} changed`);
  };

  return (
    <div>
      <h1>契約条件</h1>
      <ContractTerms terms={sampleTerms} onTermChange={handleTermChange} />
    </div>
  );
};