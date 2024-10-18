import React from 'react';
import styled from '@emotion/styled';

type Props = {
  title: string;
  startYear: number;
  endYear: number;
  startMonth: number;
  endMonth: number;
  description: string;
  onClickOk: () => void;
  onClickCancel: () => void;
  onClickEnd: () => void;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
`;

const DateRange = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const DateInput = styled.input`
  width: 100px;
  padding: 5px;
  margin-right: 10px;
`;

const Description = styled.p`
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const WorkHistoryEditor: React.FC<Props> = ({
  title,
  startYear,
  endYear,
  startMonth, 
  endMonth,
  description,
  onClickOk,
  onClickCancel,
  onClickEnd,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <DateRange>
        <DateInput type="number" defaultValue={startYear} />年
        <DateInput type="number" defaultValue={startMonth} />月
        〜
        <DateInput type="number" defaultValue={endYear} />年
        <DateInput type="number" defaultValue={endMonth} />月
      </DateRange>
      <Description>{description}</Description>
      <ButtonContainer>
        <Button onClick={onClickOk}>OK</Button>
        <Button onClick={onClickCancel}>クリア</Button>
        <Button onClick={onClickEnd}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const ExampleUsage: React.FC = () => {
  const handleClickOk = () => {
    console.log('OK clicked');
  };

  const handleClickCancel = () => {
    console.log('Cancel clicked');
  };
  
  const handleClickEnd = () => {
    console.log('End clicked');  
  };

  return (
    <WorkHistoryEditor
      title="比較貸借対照表"
      startYear={2023}
      endYear={9999999999}
      startMonth={4}
      endMonth={3}
      description="過去4年分の金額と構成比率を算出したB/S利用の比較表を税抜金額で作成します。"
      onClickOk={handleClickOk}
      onClickCancel={handleClickCancel} 
      onClickEnd={handleClickEnd}
    />
  );
};

export default ExampleUsage;