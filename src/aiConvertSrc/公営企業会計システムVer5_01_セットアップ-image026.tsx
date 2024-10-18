import React from 'react';
import styled from 'styled-components';

// 予算科目マスタの型定義
type Subject = {
  code: string;
  name: string;
  amount: number;
};

// 仕訳コードの型定義
type JournalCode = {
  code: string;
  name: string;
  amount: number;
};

// コンポーネントのプロパティの型定義
type Props = {
  subjects: Subject[];
  journalCodes: JournalCode[];
  onCancel: () => void;
  onOk: (subject: Subject, journalCode: JournalCode, amount: number) => void;
};

const JournalEntryForm: React.FC<Props> = ({ subjects, journalCodes, onCancel, onOk }) => {
  // 選択中の予算科目
  const [selectedSubject, setSelectedSubject] = React.useState<Subject | undefined>(subjects[0]);
  // 選択中の仕訳コード 
  const [selectedJournalCode, setSelectedJournalCode] = React.useState<JournalCode | undefined>(journalCodes[0]);
  // 金額
  const [amount, setAmount] = React.useState(0);

  // 予算科目の選択ハンドラ
  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    const subject = subjects.find((s) => s.code === code);
    setSelectedSubject(subject);
  };

  // 仕訳コードの選択ハンドラ  
  const handleJournalCodeChange = (code: string) => {
    const journalCode = journalCodes.find((j) => j.code === code);
    setSelectedJournalCode(journalCode);
  };

  // OKボタンクリックハンドラ
  const handleOk = () => {
    if (selectedSubject && selectedJournalCode) {
      onOk(selectedSubject, selectedJournalCode, amount);
    }
  };

  return (
    <Container>
      <Title>予算仕訳マスタ</Title>
      <FormGroup>
        <Label>予算科目区分</Label>
        <Select value={selectedSubject?.code} onChange={handleSubjectChange}>
          {subjects.map((subject) => (
            <option key={subject.code} value={subject.code}>
              {subject.name}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>節</Label>
        <Input type="text" value={selectedSubject?.code.slice(0, 6)} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>細節</Label>
        <Input type="text" value={selectedSubject?.code.slice(6)} readOnly />
      </FormGroup>
      <FormGroup>
        <Label>明細</Label>
        <Input type="text" value="0001" readOnly />
      </FormGroup>
      <ButtonGroup>
        <Button color="primary" onClick={() => handleJournalCodeChange('000444')}>
          臨時開示から住人確定経理力
        </Button>
        <Button color="secondary" onClick={() => handleJournalCodeChange('044001')}>
          住居の口座開示予防の経定
        </Button>
        <Button color="accent" onClick={() => handleJournalCodeChange('100001')}>
          予算仕訳
        </Button>
      </ButtonGroup>
      <Table>
        <thead>
          <tr>
            <th>仕訳コード</th>
            <th>仕訳内容</th>
            <th>構成比</th>
          </tr>
        </thead>
        <tbody>
          {journalCodes.map((code) => (
            <tr key={code.code}>
              <td>{code.code}</td>
              <td>{code.name}</td>
              <td>{code.amount}%</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonGroup>
        <Button color="default" onClick={onCancel}>
          前データ
        </Button>
        <Button color="default" onClick={onCancel}>
          次データ
        </Button>
        <Button color="primary" onClick={handleOk}>
          OK
        </Button>
        <Button color="default" onClick={onCancel}>
          クリア
        </Button>
        <Button color="default" onClick={onCancel}>
          終了
        </Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleSubjects: Subject[] = [
  { code: '0020101001', name: '原発・給料', amount: 0 },
  { code: '0020001001', name: '給料', amount: 0 },
  { code: '0020002001', name: '賞与', amount: 0 },
];

const sampleJournalCodes: JournalCode[] = [
  { code: '000444', name: '臨時開示から住人確定経理力', amount: 70 },
  { code: '044001', name: '住居の口座開示予防の経定', amount: 20 },
  { code: '100001', name: '予算仕訳', amount: 10 },
];

// サンプル使用コンポーネント
const SampleUsage: React.FC = () => {
  const handleCancel = () => {
    console.log('Canceled');
  };

  const handleOk = (subject: Subject, journalCode: JournalCode, amount: number) => {
    console.log('OK:', subject, journalCode, amount);
  };

  return (
    <JournalEntryForm
      subjects={sampleSubjects}
      journalCodes={sampleJournalCodes}
      onCancel={handleCancel}
      onOk={handleOk}
    />
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 120px;
`;

const Select = styled.select`
  width: 200px;
  padding: 5px;
`;

const Input = styled.input`
  width: 100px;
  padding: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

const Button = styled.button<{ color: string }>`
  padding: 10px 20px;
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Table = styled.table`
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;

export default SampleUsage;