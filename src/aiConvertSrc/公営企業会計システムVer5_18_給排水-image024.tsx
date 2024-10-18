import React from 'react';
import styled from '@emotion/styled';

type MasterListProps = {
  startDate: string;
  endDate: string;
  exclude?: boolean;
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  width: 300px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const DateRange = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const DateItem = styled.div`
  display: flex;
  align-items: center;
`;

const DateLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const DateValue = styled.span`
  font-family: monospace;
`;

const Checkbox = styled.div`
  margin-bottom: 10px;
`;

const CheckboxLabel = styled.label`
  margin-left: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const MasterList: React.FC<MasterListProps> = ({ startDate, endDate, exclude = false }) => {
  // Format the date range
  const formattedStartDate = startDate.replace(/(\d{4})(\d{2})(\d{2})/g, '$1/$2/$3');
  const formattedEndDate = endDate.replace(/(\d{4})(\d{2})(\d{2})/g, '$1/$2/$3');

  return (
    <Container>
      <Title>指定工事店マスタリスト</Title>
      <DateRange>
        <DateItem>
          <DateLabel>工事店</DateLabel>
          <DateValue>{formattedStartDate}</DateValue>
        </DateItem>
        <span>～</span>
        <DateItem>
          <DateLabel>工事店</DateLabel>
          <DateValue>{formattedEndDate}</DateValue>
        </DateItem>
      </DateRange>
      <Checkbox>
        <input type="checkbox" id="exclude" checked={exclude} readOnly />
        <CheckboxLabel htmlFor="exclude">作表日時点で有効期限切れの工事店のみ出力</CheckboxLabel>
      </Checkbox>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

export default MasterList;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <MasterList startDate="20051128" endDate="99999999999" />
    </div>
  );
};