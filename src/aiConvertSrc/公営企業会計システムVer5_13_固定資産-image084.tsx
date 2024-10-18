import React from 'react';
import styled from '@emotion/styled';

type Setting = {
  title: string;
  value: string;
};

type Props = {
  date: string;
  className?: string;
  settings: Setting[];
};

const Component: React.FC<Props> = ({ date, className, settings }) => {
  return (
    <Container className={className}>
      <Header>
        <DateInput type="text" value={date} />
        <TitleSelect>
          <option>路線番号</option>
        </TitleSelect>
      </Header>
      <Table>
        <thead>
          <tr>
            <Th>タイトル</Th>
            <Th>路線番号</Th>
            <Th>自由設定内容</Th>
          </tr>
        </thead>
        <tbody>
          {settings.map((setting, index) => (
            <tr key={index}>
              <Td>{setting.title}</Td>
              <Td>{setting.value}</Td>
              <Td></Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer>
        <ExecuteButton>表示</ExecuteButton>
        <CloseButton>OK</CloseButton>
        <CancelButton>クリア</CancelButton>
        <HelpButton>キャンセル</HelpButton>
      </Footer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: Meiryo;
  background: #F0F0F0;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const DateInput = styled.input`
  margin-right: 8px;
  padding: 4px;  
`;

const TitleSelect = styled.select`
  padding: 4px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background: #f2f2f2;
  }
`;

const Th = styled.th`
  white-space: nowrap;
`;

const Td = styled.td`
  white-space: nowrap;
`;

const Footer = styled.div`
  margin-top: 16px;  
  text-align: center;
`;

const Button = styled.button`
  color: black;
  padding: 8px 16px;
  margin: 0 4px;
`;

const ExecuteButton = styled(Button)`
  background: #C8C8FF;
  border: 2px solid navy;
`;

const CloseButton = styled(Button)`
  background: #E0E0E0;
  border: 2px solid gray;  
`;

const CancelButton = styled(CloseButton)``;
const HelpButton = styled(CloseButton)``;

// サンプルデータを使用したコンポーネントの表示
const UsageExample: React.FC = () => {
  const sampleSettings: Setting[] = [
    { title: '路線番号1', value: '123' },
    { title: '路線番号2', value: '456' },
    { title: '路線番号3', value: '789' },
  ];

  return (
    <Component 
      date="001001"
      settings={sampleSettings}
    />  
  );
};

export default UsageExample;