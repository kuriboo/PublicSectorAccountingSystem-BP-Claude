import React from 'react';
import styled from '@emotion/styled';

type FixedTermContractProps = {
  currentYear: number;
  currentMonth: number;
  nextYear: number;
  nextMonth: number;
  note: string;
};

const FixedTermContract: React.FC<FixedTermContractProps> = ({
  currentYear,
  currentMonth,
  nextYear,
  nextMonth,
  note,
}) => {
  return (
    <Container>
      <Title>固定資産年次更新取消</Title>
      <DateInfo>
        <DateItem>
          <Label>当期会計年度</Label>
          <Value>
            {currentYear}年{currentMonth.toString().padStart(2, '0')}月
          </Value>
        </DateItem>
        <DateItem>
          <Label>前期会計年度</Label>
          <Value>
            {nextYear}年{nextMonth.toString().padStart(2, '0')}月
          </Value>
        </DateItem>
      </DateInfo>
      <Note>{note}</Note>
      <ButtonGroup>
        <Button>エラー確認</Button>
        <SubmitButton>OK</SubmitButton>
        <CancelButton>終了</CancelButton>
      </ButtonGroup>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  width: 400px;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const DateInfo = styled.div`
  margin-bottom: 20px;
`;

const DateItem = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 120px;
  font-weight: bold;
`;

const Value = styled.div`
  flex: 1;
`;

const Note = styled.div`
  margin-bottom: 20px;
  white-space: pre-wrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;
  color: #fff;

  &:hover {
    background-color: #5a6268;
  }
`;

// 使用例
const App: React.FC = () => {
  return (
    <FixedTermContract
      currentYear={2023}
      currentMonth={6}
      nextYear={2028}
      nextMonth={6}
      note={`平成30年度の処理会計年度を取り消し、平成29年度へ戻す処理を行います。

異動データを含め、年次更新後に登録更新された固定資産データは全て削除されます。
また、予測データは全て削除されます。
複数年度を連続して取り消すことはできません。

年次更新取消処理が完了するまでは、各異動処理及びマスタメンテナンスによる
固定資産データの更新を行わないでください。`}
    />
  );
};

export default App;