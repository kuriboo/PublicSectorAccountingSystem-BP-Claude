import React from 'react';
import styled from 'styled-components';

// 表の行のプロパティの型定義
type RowProps = {
  label: string;
  value: string;
};

// 表のプロパティの型定義
type TableProps = {
  title: string;
  rows: RowProps[];
  note?: string;
};

// 表のコンポーネント
const Table: React.FC<TableProps> = ({ title, rows, note }) => {
  return (
    <TableWrapper>
      <Title>{title}</Title>
      <TableContent>
        {rows.map((row, index) => (
          <Row key={index}>
            <RowLabel>{row.label}</RowLabel>
            <RowValue>{row.value}</RowValue>
          </Row>
        ))}
      </TableContent>
      {note && <Note>{note}</Note>}
    </TableWrapper>
  );
};

// 出力区分のプロパティの型定義
type OutputProps = {
  checked: boolean;
  label: string;
};

// 出力区分のコンポーネント 
const Output: React.FC<OutputProps> = ({ checked, label }) => {
  return (
    <OutputWrapper>
      <input type="checkbox" checked={checked} readOnly />
      <OutputLabel>{label}</OutputLabel>
    </OutputWrapper>
  );
};

// サンプルデータ
const sampleData = {
  tableProps: {
    title: '在庫状況警告表範囲入力',
    rows: [
      {
        label: '決裁区分',
        value: '管理者 予物',
      },
      {
        label: '保管場所',
        value: '000000 〜 999999',
      },
      {
        label: '品番',
        value: '000000000 〜 999999999',
      },
    ],
    note: '納期期限が本人力のデータも印字する。',
  },
  outputProps: {
    checked: true,
    label: '在庫割れのみ',
  },
};

// サンプルコンポーネント
const SampleComponent: React.FC = () => {
  return (
    <Wrapper>
      <Table {...sampleData.tableProps} />
      <Output {...sampleData.outputProps} />
      <ButtonWrapper>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button primary>終了</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

// スタイリング
const Wrapper = styled.div`
  font-family: sans-serif;
  padding: 20px;
  background: #f0f0f0;
  width: 100%;
  box-sizing: border-box;
`;

const TableWrapper = styled.div`
  background: white;
  padding: 10px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const TableContent = styled.div`
  display: table;
  width: 100%;
`;

const Row = styled.div`
  display: table-row;
  &:nth-child(even) {
    background: #f8f8f8;
  } 
`;

const RowLabel = styled.div`
  display: table-cell;
  padding: 5px;
`;

const RowValue = styled.div`
  display: table-cell;
  padding: 5px;
`;

const Note = styled.div`
  margin-top: 10px;
  font-size: 0.8em;
`;

const OutputWrapper = styled.div`
  margin-bottom: 20px;
`;

const OutputLabel = styled.span`
  margin-left: 5px;
`; 

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 8px 15px;
  margin: 0 10px;
  border: none;
  background: ${(props) => (props.primary ? '#3366cc' : '#ccc')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  font-weight: ${(props) => (props.primary ? 'bold' : 'normal')};
  border-radius: 3px;
  cursor: pointer;
`;

export default SampleComponent;