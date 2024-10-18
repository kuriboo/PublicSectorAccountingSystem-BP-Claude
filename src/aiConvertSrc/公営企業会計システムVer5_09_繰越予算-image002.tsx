import React from 'react';
import styled from 'styled-components';

interface ReserveWaterCheckProps {
  title: string;
  startValue?: string;
  endValue?: string;
}

const ReserveWaterCheck: React.FC<ReserveWaterCheckProps> = ({
  title,
  startValue = '',
  endValue = '',
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InputContainer>
        <Input type="text" defaultValue={startValue} /> ～ <Input type="text" defaultValue={endValue} />
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.div`
  margin-right: 10px;
  white-space: nowrap;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100px;
  padding: 5px;
  margin: 0 5px;
  box-sizing: border-box;
`;

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <ReserveWaterCheck title="pH範囲" />
      <ReserveWaterCheck 
        title="所属別出力"
        startValue="000000"
        endValue="9999999"
      />
    </div>
  );
};

export default App;