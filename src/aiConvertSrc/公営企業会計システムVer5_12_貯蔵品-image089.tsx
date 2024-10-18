import React from 'react';
import styled from '@emotion/styled';

type MaskAssignmentProps = {
  year: number;
  month: number;
  date: number;
  companyName: string;
  department: string;
  position: string;
  note: string;
  confirmationDate: string;
  onClose: () => void;
  onCancel: () => void;
  onConfirm: () => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 500px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.span`
  width: 80px;
  font-weight: bold;
`;

const Value = styled.span`
  flex: 1;
`;

const NoteText = styled.p`
  white-space: pre-wrap;
`;

const RadioGroup = styled.div`
  margin-top: 10px;
`;

const RadioLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  
  background-color: ${({ color }) => color};
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;

const MaskAssignment: React.FC<MaskAssignmentProps> = ({
  year,
  month,
  date,
  companyName,
  department,
  position,
  note,
  confirmationDate,
  onClose,
  onCancel,
  onConfirm,
}) => {
  return (
    <Container>
      <Title>貯蔵品次年度マスタ作成</Title>
      <Row>
        <Label>年度</Label>
        <Value>
          {year}年{month}月{date}日
        </Value>
      </Row>
      <Row>
        <Label>会社名</Label>
        <Value>{companyName}</Value>
      </Row>
      <Row>
        <Label>部署</Label>
        <Value>{department}</Value>
      </Row>
      <Row>
        <Label>役職</Label>
        <Value>{position}</Value>
      </Row>
      <NoteText>{note}</NoteText>
      <RadioGroup>
        <RadioLabel>
          <input type="radio" name="maskType" value="keep" /> 保管場所種別マスタ
        </RadioLabel>
        <RadioLabel>
          <input type="radio" name="maskType" value="assign" /> 貯蔵品年度別単価割当マスタ
        </RadioLabel>
      </RadioGroup>
      <Row>
        <Label>最終更新日時</Label>
        <Value>{confirmationDate}</Value>
      </Row>
      <ButtonGroup>
        <Button color="#808080" onClick={onClose}>
          終了
        </Button>
        <Button color="#808080" onClick={onCancel}>
          クリア
        </Button>
        <Button color="#4169e1" onClick={onConfirm}>
          終了
        </Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <MaskAssignment
      year={2023}
      month={2}
      date={19}
      companyName="行政市水道事業会計"
      department="料金課"
      position="管理者"
      note="本年度のマスタ内容を新年度に繰写します。本年度を指定して下さい。
※対象となるマスタは以下の通りです。

- 保管場所種別マスタ
- 貯蔵品年度別単価割当マスタ

※新年度のマスタが設定されている場合は、新年度のマスタを削除してから
　本年度のマスタ内容を複写します。
※当処理は何回でも実行可能ですが、新年度マスタ修正後に当処理を実行した場合は
　新年度修正分が破棄されますので、ご注意してください。"
      confirmationDate="令和05年02月19日 10時38分"
      onClose={() => console.log('Closed')}
      onCancel={() => console.log('Canceled')}
      onConfirm={() => console.log('Confirmed')}
    />
  );
};

export default App;