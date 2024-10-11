import React from 'react';
import styled from 'styled-components';

// 科目変換テーブルの型定義
type SubjectTableProps = {
  orgCode: string;
  newCode: string;
  dateCode: string;
  note: string;
  beforeNote: string;
  afterNote: string;
};

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  width: 120px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 3px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SubjectTable: React.FC<SubjectTableProps> = ({
  orgCode = '',
  newCode = '',
  dateCode = '',
  note = '',
  beforeNote = '',
  afterNote = '',
}) => {
  return (
    <Container>
      <Row>
        <Label>会計年度</Label>
        <RadioGroup>
          <label><input type="radio" name="year" defaultChecked />平成29 :</label>
          <label><Input type="text" value={dateCode} readOnly /></label>
        </RadioGroup>
      </Row>
      <Row>
        <Label>会計区分</Label>
        <Input type="text" defaultValue="01" />
      </Row>
      <Row>
        <Label>日コード</Label>
        <Input type="text" defaultValue={orgCode} />
      </Row>
      <Row>
        <Label>管理コード</Label>
        <Input type="text" defaultValue="0001" />
      </Row>
      <Row>
        <Label>検索項目コード</Label>
        <Input type="text" defaultValue={newCode} />
      </Row>
      <Row>
        <Label>任意コード</Label>
        <Input type="text" />
      </Row>
      <Row>
        <Label>未払対象フラグ</Label>
        <RadioGroup>
          <label><input type="radio" name="unpaid" defaultChecked /> 0 or 1</label>
        </RadioGroup>
      </Row>
      <Row>
        <Label>預り金支払除外フラグ</Label>
        <RadioGroup>
          <label><input type="radio" name="deposit" defaultChecked /> 0 or 1</label>
        </RadioGroup>
      </Row>
      <Row>
        <Label>前月未未払対象フラグ</Label>
        <RadioGroup>
          <label><input type="radio" name="prevUnpaid" defaultChecked /> 0 or 1</label>
        </RadioGroup>
      </Row>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// サンプルデータ
const sampleData: SubjectTableProps = {
  orgCode: '0000001',
  newCode: '000001', 
  dateCode: '0905',
  note: '科目変換する料日コードです。会計期間日コードでは必ず指定してください。',
  beforeNote: '科目変換前のコードです。',
  afterNote: '科目変換後のコードをここに指定します。',
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>科目変換会計システム</h1>
      <SubjectTable {...sampleData} />
    </div>
  );  
};

export default App;