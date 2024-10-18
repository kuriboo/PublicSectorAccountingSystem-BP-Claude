import React from 'react';
import styled from '@emotion/styled';

interface BudgetProps {
  section1: {
    節: string;
    細節: string;
    明細: string;
    税区分: string;
  };
  section2: {
    予算額: number;
    決当額: number;
    差額: number;
  };
  section3: {
    年度: string;
    前年度予算額: number;
    前年度決当額: number;
    前年度差額: number;
  };
  section4: {
    年度: string;
    前年度予算額: number;
    前年度決当額: number;
    前年度差額: number;
  };
  table: {
    発生元予算科目: string;
    予算科目名称: string;
    税区分: string;
    予算額: number;
    決当額: number;
    差額: number;
    元当差額: number;
  }[];
}

const Budget: React.FC<BudgetProps> = ({ section1, section2, section3, section4, table }) => {
  return (
    <Container>
      <Header>自動財源元当</Header>
      <Row>
        <Column>
          <Section>
            <SectionTitle>元当先</SectionTitle>
            <SectionContent>
              <div>節: {section1.節 || '---'}</div>
              <div>細節: {section1.細節 || '---'}</div>
              <div>明細: {section1.明細 || '---'}</div>
            </SectionContent>
            <SectionFooter>税区分: {section1.税区分 || '不課税'}</SectionFooter>
          </Section>
        </Column>
        <Column>
          <Section>
            <SectionTitle>前年度</SectionTitle>
            <SectionContent>
              <div>予算額: {section3.前年度予算額 || 0}</div>
              <div>決当額: {section3.前年度決当額 || 0}</div>      
              <div>差額: {section3.前年度差額 || 0}</div>
            </SectionContent>
          </Section>
          <Section>
            <SectionTitle>当年度</SectionTitle>
            <SectionContent>
              <div>予算額: {section2.予算額 || 0}</div>
              <div>決当額: {section2.決当額 || 0}</div>
              <div>差額: {section2.差額 || 0}</div>
            </SectionContent>
          </Section>
        </Column>
        <Column>
          <Section>
            <SectionTitle>前年度</SectionTitle>
            <SectionContent>
              <div>予算額($): {section4.前年度予算額 || 0}</div>
              <div>決当額($): {section4.前年度決当額 || 0}</div>
              <div>元当差額: {section4.前年度差額 || 0}</div>
              <div>元当差額: {section4.前年度差額 || 0}</div>
            </SectionContent>
            <SectionFooter>元当額明細</SectionFooter>
          </Section>
        </Column>
      </Row>
      {table.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>発生元予算科目</th>
              <th>予算科目名称</th>
              <th>税区分</th>
              <th>予算額</th>
              <th>決当額($)</th>
              <th>差額額($)</th>
              <th>元当差額</th>
            </tr>
          </thead>
          <tbody>
            {table.map((row, index) => (
              <tr key={index}>
                <td>{row.発生元予算科目}</td>
                <td>{row.予算科目名称}</td>
                <td>{row.税区分}</td>
                <td>{row.予算額}</td>
                <td>{row.決当額}</td>
                <td>{row.差額}</td>
                <td>{row.元当差額}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <ButtonContainer>
        <Button type="button">OK</Button>
        <Button type="button">クリア</Button>
        <Button type="button">キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// Sample usage
const App: React.FC = () => {
  const sampleData: BudgetProps = {
    section1: {
      節: '0021(0912_特別(英))',
      細節: '0001 工事検査費(特別)',
      明細: '0003 不課税',
      税区分: '不課税',
    },
    section2: {
      予算額: 0,
      決当額: 0,
      差額: 0,
    },
    section3: {
      年度: '前年度',
      前年度予算額: 0,
      前年度決当額: 0,
      前年度差額: 0,
    },
    section4: {
      年度: '当年度',
      前年度予算額: 0,
      前年度決当額: 0,
      前年度差額: 0,
    },
    table: [
      {
        発生元予算科目: '0012900900002000-1',
        予算科目名称: 'その他雑収益',
        税区分: '課税',
        予算額: 81360,
        決当額: 2000000,
        差額: 2000000,
        元当差額: -1918640,
      },
    ],
  };

  return <Budget {...sampleData} />;
};

export default App;

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Section = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
`;

const SectionContent = styled.div`
  margin-bottom: 10px;
`;

const SectionFooter = styled.div`
  font-size: 12px;
  color: #666;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;