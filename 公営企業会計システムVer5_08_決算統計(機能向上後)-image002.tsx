import React from 'react';
import styled from '@emotion/styled';

interface DecisionMakerProps {
  code: string;
  years: number;
  industry: string;
  position: string;
  companyName: string;
  department: string;
  onDecisionChange: (decision: string) => void;
  onSimpleDecisionChange: (simpleDecision: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
`;

const Header = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 2;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 2;
  resize: vertical;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const DecisionMaker: React.FC<DecisionMakerProps> = ({
  code,
  years,
  industry,
  position,
  companyName,
  department,
  onDecisionChange,
  onSimpleDecisionChange,
}) => {
  return (
    <Container>
      <Header>決算統計データ移行</Header>
      <Row>
        <Label>令和{years}年度</Label>
      </Row>
      <Row>
        <Label>業種・事業コード</Label>
        <Input value={code} readOnly />
      </Row>
      <Row>
        <Label>水道・簡易水道事業</Label>
      </Row>
      <div>
        <div>分析した決算統計金額を集計し、各表項目へ反映します。</div>
        <div>（再実行によって、決算統計数値保守で再度した金額が消えてしまいますが..）</div>
      </div>
      <div>
        <div>企業債データを取り込みます。</div>
        <Row>
          <Label>表番号</Label>
          <Input />
        </Row>
        <Row>
          <Label>施設</Label>
          <Input />
        </Row>
      </div>
      <div>
        <div>簡易水道データを取り込みます。</div>
        <Input />
      </div>
      <Textarea
        rows={5}
        value="決算分析処理後の金額集計、企業債データおよび簡易水道データの取り込みを行い、調査表の金額へ反映します。
企業債データは起債管理システムから出力したファイルを取り込みます。
簡易水道データの取り込みは、水道事業と簡易水道事業を別データベースで運用している場合、簡易水道事業の
決算統計調査表出力機能から出力したdatファイルを、水道事業側で取り込みます。
（簡易水道の取り込みは、決算統計年度別管理マスタの簡易水道取込区分が設定されている場合に表示されます。）"
        readOnly
      />
      <RadioGroup>
        <Label>
          <input type="radio" name="decision" value="execute" onChange={(e) => onDecisionChange(e.target.value)} />
          OK
        </Label>
        <Label>
          <input type="radio" name="decision" value="cancel" onChange={(e) => onDecisionChange(e.target.value)} />
          クリア
        </Label>
        <Label>
          <input type="radio" name="decision" value="end" onChange={(e) => onDecisionChange(e.target.value)} />
          終了
        </Label>
      </RadioGroup>
    </Container>
  );
};

export default DecisionMaker;

// Usage example:
const App: React.FC = () => {
  const handleDecisionChange = (decision: string) => {
    console.log('Decision changed:', decision);
  };

  const handleSimpleDecisionChange = (simpleDecision: string) => {
    console.log('Simple decision changed:', simpleDecision);
  };

  return (
    <DecisionMaker
      code="010"
      years={2}
      industry="水道・簡易水道事業"
      position=""
      companyName=""
      department=""
      onDecisionChange={handleDecisionChange}
      onSimpleDecisionChange={handleSimpleDecisionChange}
    />
  );
};