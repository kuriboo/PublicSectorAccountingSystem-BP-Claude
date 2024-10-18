import React from 'react';
import styled from '@emotion/styled';

interface ReservationDetailProps {
  date: string;
  reservationFee: number;
  reservationTax: number;
  serviceFee: number;
  serviceTax: number;
  checked?: boolean;
}

const ReservationDetail: React.FC<ReservationDetailProps> = ({
  date,
  reservationFee,
  reservationTax,
  serviceFee,
  serviceTax,
  checked = false,
}) => {
  return (
    <Container>
      <Title>出庫予定明細書作成</Title>
      <DateText>作表年月日　{date}</DateText>
      <Table>
        <Row>
          <RowTitle>保管場所</RowTitle>
          <RowValue>000000</RowValue>
          <RowTitle>保管場所</RowTitle>
          <RowValue>999999</RowValue>
        </Row>
        <Row>
          <RowTitle>工事名場所</RowTitle>
          <RowValue>000000</RowValue>
          <RowTitle>工事名場所</RowTitle>
          <RowValue>999999</RowValue>
        </Row>
      </Table>
      <Checkbox>
        <input type="checkbox" checked={checked} readOnly />
        <CheckboxLabel>工事名称場所を文字のみで入力した場合もOKです</CheckboxLabel>
      </Checkbox>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const DateText = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Table = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const RowTitle = styled.div`
  font-weight: bold;
`;

const RowValue = styled.div`
  text-align: right;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
`;

// サンプルデータを使用した表示用コンポーネント
const App: React.FC = () => {
  const reservationDetailData: ReservationDetailProps = {
    date: '平成29年09月15日',
    reservationFee: 100000,
    reservationTax: 10000,
    serviceFee: 20000,
    serviceTax: 2000,
    checked: true,
  };

  return (
    <div>
      <ReservationDetail {...reservationDetailData} />
    </div>
  );
};

export default App;