import React from 'react';
import styled from 'styled-components';

// 仕訳帳コンポーネントのプロパティの型定義
type JournalProps = {
  divisions?: string[];
  date?: {
    start: string;
    end: string;
  };
};

// 仕訳帳コンポーネント
const Journal: React.FC<JournalProps> = ({ divisions = [], date }) => {
  // 伝票種別のデフォルト値
  const defaultDivisions = ['振替分', '調定分', '支払分'];

  // 日付のデフォルト値
  const defaultDate = {
    start: '令和03年07月01日',
    end: '令和03年07月31日',
  };

  return (
    <Container>
      <Title>仕訳帳</Title>
      <Form>
        <FormGroup>
          <FormLabel>伝票種別</FormLabel>
          <FormCheckboxes>
            {defaultDivisions.map((division, index) => (
              <FormCheckbox key={index}>
                <input type="checkbox" checked={divisions.includes(division)} readOnly />
                <span>{division}</span>
              </FormCheckbox>
            ))}
          </FormCheckboxes>
        </FormGroup>
        <FormGroup>
          <FormLabel>日付</FormLabel>
          <FormDateRange>
            <FormDate>{date?.start || defaultDate.start}</FormDate>
            <span>〜</span>
            <FormDate>{date?.end || defaultDate.end}</FormDate>
          </FormDateRange>
        </FormGroup>
      </Form>
      <ButtonGroup>
        <Button>CSV出力</Button>
        <Button>クリア</Button>
        <Button primary>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData: JournalProps = {
  divisions: ['振替分', '調定分'],
  date: {
    start: '令和03年07月01日',
    end: '令和03年07月31日',
  },
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>仕訳帳コンポーネントの使用例</h1>
      <Journal {...sampleData} />
    </div>
  );
};

export default App;

// スタイリング
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.div`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const FormCheckboxes = styled.div`
  display: flex;
`;

const FormCheckbox = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;

  input[type='checkbox'] {
    margin-right: 5px;
  }
`;

const FormDateRange = styled.div`
  display: flex;
  align-items: center;
`;

const FormDate = styled.span`
  margin: 0 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  background-color: ${({ primary }) => (primary ? '#007bff' : '#fff')};
  color: ${({ primary }) => (primary ? '#fff' : '#007bff')};
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0056b3' : '#e0e0e0')};
  }
`;