import React from 'react';
import styled from '@emotion/styled';

interface BusinessHoursProps {
  date: string;
  openTime: string;
  closeTime: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const DateText = styled.p`
  margin-bottom: 20px;
`;

const HoursContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const HoursText = styled.p`
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const BusinessHours: React.FC<BusinessHoursProps> = ({ date, openTime, closeTime }) => {
  // 例外処理: 日付、開始時間、終了時間のいずれかが空の場合はデフォルト値を設定
  const formattedDate = date || 'YYYY年MM月DD日';
  const formattedOpenTime = openTime || '00:00';
  const formattedCloseTime = closeTime || '00:00';

  return (
    <Container>
      <Title>営業時間</Title>
      <DateText>作業日: {formattedDate}</DateText>
      <HoursContainer>
        <HoursText>開始時間: {formattedOpenTime}</HoursText>
        <HoursText>終了時間: {formattedCloseTime}</HoursText>
      </HoursContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: BusinessHoursProps = {
    date: '平成29年09月04日',
    openTime: '00:00',
    closeTime: '99:99',
  };

  return <BusinessHours {...sampleData} />;
};

export default BusinessHours;