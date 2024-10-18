import React from 'react';
import styled from '@emotion/styled';

type SupportDecisionInputProps = {
  registDate?: string;
  decisionDate?: string;
  supportType?: string;
  applicationDate?: string;
  supportAmount?: number;
  note?: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
  min-width: 120px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  flex: 1;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  flex: 1;
`;

const Textarea = styled.textarea`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  flex: 1;
  resize: vertical;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SupportDecisionInput: React.FC<SupportDecisionInputProps> = ({
  registDate = '',
  decisionDate = '',
  supportType = '',
  applicationDate = '',
  supportAmount = 0,
  note = '',
}) => {
  return (
    <Container>
      <Row>
        <Label>登録日</Label>
        <Input type="date" defaultValue={registDate} />
      </Row>
      <Row>
        <Label>決定日</Label>
        <Input type="date" defaultValue={decisionDate} />
      </Row>
      <Row>
        <Label>支払方法</Label>
        <Select defaultValue={supportType}>
          <option value="">選択してください</option>
          <option value="口座振込">口座振込</option>
          {/* その他の支払方法のオプションを追加 */}
        </Select>
      </Row>
      <Row>
        <Label>請求書番号</Label>
        <Input type="text" defaultValue={applicationDate} />
      </Row>
      <Row>
        <Label>決定額</Label>
        <Input type="number" defaultValue={supportAmount} />
      </Row>
      <Row>
        <Label>備考欄</Label>
        <Textarea defaultValue={note} />
      </Row>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};



// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>支出決定入力</h1>
      <SupportDecisionInput
        registDate="2023-06-01"
        decisionDate="2023-06-05"
        supportType="口座振込"
        applicationDate="1234567890"
        supportAmount={10000}
        note="サンプルデータです。"
      />
    </div>
  );
};

export default App;