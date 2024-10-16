import React from 'react';
import styled from '@emotion/styled';

// 指名業者一覧表のプロパティ型定義
type PropsType = {
  startDate: string;
  endDate: string;
  selectedDivision: string;
};

// 指名業者一覧表コンポーネント
const NominatedContractorList: React.FC<PropsType> = ({ startDate, endDate, selectedDivision }) => {
  // 指名番号と受付番号の例としてダミーデータを定義
  const dummyContractorNumber = '0000000';
  const dummyReceptionNumber = '99999999';

  return (
    <Container>
      <Title>指名業者一覧表</Title>
      <DateRange>
        登録期間：{startDate} 〜 {endDate}
      </DateRange>
      <DivisionSelect value={selectedDivision}>
        <option>委付区分を選択</option>
        {/* 委付区分のオプションを動的に生成 */}
      </DivisionSelect>
      <NumberInputs>
        <Label>
          受付番号 <Input value={dummyContractorNumber} />
        </Label>
        <Label>
          受付番号 <Input value={dummyReceptionNumber} />
        </Label>
      </NumberInputs>
      <Buttons>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </Buttons>
    </Container>
  );
};

// スタイリング用のコンポーネント
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const DateRange = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

const DivisionSelect = styled.select`
  margin-bottom: 16px;
  padding: 4px;
`;

const NumberInputs = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  padding: 4px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
`;

// 使用例として、ダミーデータを渡してコンポーネントを表示
const UsageExample: React.FC = () => {
  const dummyStartDate = '平成29年04月01日';
  const dummyEndDate = '平成30年03月31日';
  const dummySelectedDivision = '工事';

  return (
    <NominatedContractorList
      startDate={dummyStartDate}
      endDate={dummyEndDate}
      selectedDivision={dummySelectedDivision}
    />
  );
};

export default NominatedContractorList;