import React from 'react';
import styled from 'styled-components';

type BankTransferProps = {
  representativeName: string;
  representativeNameKana: string;
  amount: number;
  onRepresentativeNameChange: (name: string) => void;
  onRepresentativeNameKanaChange: (nameKana: string) => void;
};

const BankTransfer: React.FC<BankTransferProps> = ({
  representativeName,
  representativeNameKana,
  amount,
  onRepresentativeNameChange,
  onRepresentativeNameKanaChange,
}) => {
  return (
    <Container>
      <Title>振込先情報</Title>
      <Table>
        <tbody>
          <TableRow>
            <TableHeader>相手先</TableHeader>
            <TableData>{representativeName}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>相手先名称</TableHeader>
            <TableData>{representativeNameKana}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>振込先金額</TableHeader>
            <TableData>{amount.toLocaleString()}円</TableData>
          </TableRow>
        </tbody>
      </Table>
      
      <Section>
        <SectionTitle>代表者明細編集</SectionTitle>
        <InputRow>
          <InputLabel>相手先</InputLabel>
          <Input
            type="text"
            value={representativeName}
            onChange={(e) => onRepresentativeNameChange(e.target.value)}
          />
        </InputRow>
        <InputRow>
          <InputLabel>相手先名称</InputLabel>
          <Input
            type="text"
            value={representativeNameKana}
            onChange={(e) => onRepresentativeNameKanaChange(e.target.value)}
          />
        </InputRow>
      </Section>
      
      <Section>
        <SectionTitle>振込先情報</SectionTitle>
        <InputRow>
          <InputLabel>預金種別</InputLabel>
          <Input type="text" value="普通預金" readOnly />
        </InputRow>
        <InputRow>
          <InputLabel>口座番号</InputLabel>
          <Input type="text" value="0987456" readOnly />
        </InputRow>
        <InputRow>
          <InputLabel>銀行</InputLabel>
          <Input type="text" value="三菱東京UFJ銀行" readOnly />
        </InputRow>
        <InputRow>
          <InputLabel>支店</InputLabel>
          <Input type="text" value="リズム支店" readOnly />
        </InputRow>
      </Section>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  font-weight: bold;
`;

const TableData = styled.td`
  padding: 10px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  flex: 0 0 100px;
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
`;

// Sample usage
const SampleBankTransfer: React.FC = () => {
  const [representativeName, setRepresentativeName] = React.useState('さようせい');
  const [representativeNameKana, setRepresentativeNameKana] = React.useState('サヨウセイ');

  return (
    <BankTransfer
      representativeName={representativeName}
      representativeNameKana={representativeNameKana}
      amount={10000}
      onRepresentativeNameChange={setRepresentativeName}
      onRepresentativeNameKanaChange={setRepresentativeNameKana}
    />
  );
};

export default SampleBankTransfer;