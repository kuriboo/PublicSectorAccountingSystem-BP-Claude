import React from 'react';
import styled from '@emotion/styled';

interface WaterMasterProps {
  items?: string[];
  onSubmit?: (code: string, name: string) => void;
}

const WaterMaster: React.FC<WaterMasterProps> = ({ items = [], onSubmit }) => {
  const [code, setCode] = React.useState('');
  const [name, setName] = React.useState('');

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(code, name);
    }
  };

  return (
    <Container>
      <Title>給排水マスタ</Title>
      <StyledHr />
      <InfoSection>
        <InfoItem>
          <InfoLabel>標準版動作確認画面様</InfoLabel>
          <InfoValue>上下水道局 2017 999NM ○○者</InfoValue>
          <InfoDate>平成30年02月27日</InfoDate>
        </InfoItem>
      </InfoSection>
      <FormSection>
        <FormRow>
          <FormLabel>登録</FormLabel>
          <Select>
            <option>計正</option>
            <option>削除</option>
          </Select>
        </FormRow>
        <FormRow>
          <FormLabel>コード</FormLabel>
          <Input value={code} onChange={e => setCode(e.target.value)} />
        </FormRow>
        <FormRow>
          <FormLabel>名称</FormLabel>
          <Input value={name} onChange={e => setName(e.target.value)} />
        </FormRow>
      </FormSection>
      <TableSection>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>コード</TableHeaderCell>
              <TableHeaderCell>名称</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{`0${index + 1}`}</TableCell>
                <TableCell>{item}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableSection>
      <ButtonSection>
        <SubmitButton onClick={handleSubmit}>終了</SubmitButton>
        <ClearButton>クリア</ClearButton>
        <RegistButton>登録</RegistButton>
      </ButtonSection>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
`;

const StyledHr = styled.hr`
  margin-bottom: 20px;
`;

const InfoSection = styled.div`
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: baseline;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const InfoValue = styled.span`
  margin-right: 10px; 
`;

const InfoDate = styled.span`
  font-size: 12px;
`;

const FormSection = styled.div`
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const FormLabel = styled.label`
  width: 100px;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 14px;
`;

const TableSection = styled.div`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead``;

const TableRow = styled.tr``;

const TableHeaderCell = styled.th`
  border: 1px solid #ccc;
  padding: 5px;
`;

const TableBody = styled.tbody``;

const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 5px;
`;

const ButtonSection = styled.div`
  text-align: center;
`;

const SubmitButton = styled.button`
  margin: 0 10px;
  padding: 5px 20px;
  font-size: 16px;
`;

const ClearButton = styled.button`
  margin: 0 10px;  
  padding: 5px 20px;
  font-size: 16px;
`;

const RegistButton = styled.button`
  margin: 0 10px;
  padding: 5px 20px; 
  font-size: 16px;
`;

// Usage example
const App: React.FC = () => {
  const items = ['武蔵水', '雨水', '汚水', '雑排水', 'その他'];

  const handleSubmit = (code: string, name: string) => {
    console.log('Submitted:', code, name);
  };

  return <WaterMaster items={items} onSubmit={handleSubmit} />;
};

export default App;