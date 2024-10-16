import React from 'react';
import styled from 'styled-components';

interface PublicBookingDataType {
  newYear: number;
  endYear: number;
}

interface BookingInfoProps {
  publicBookingData: PublicBookingDataType;
}

// Styled components
const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

/**
 * 公開予約データ作成画面のコンポーネント
 * @param publicBookingData 公開予約データ
 */
const BookingInfo: React.FC<BookingInfoProps> = ({ publicBookingData }) => {
  const { newYear, endYear } = publicBookingData;

  return (
    <Container>
      <Title>公開概要</Title>
      <InfoText>{`前年度の経常または新規科目の積算基礎データを新年度に複写します。

新年度を指定して下さい。

積み上げフラグは「積み上げない」で作成されます。

この処理は、年度内1回のみ実行可能です。処理後は、「積算基礎参照」
を御利用下さい。`}</InfoText>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const publicBookingData: PublicBookingDataType = {
    newYear: 2024,
    endYear: 6,
  };

  return (
    <div>
      <h1>公開企業会計システム</h1>
      <BookingInfo publicBookingData={publicBookingData} />
    </div>
  );
};

export default App;