import React from 'react';
import styled from '@emotion/styled';

type ScheduleSettingProps = {
  progress: number;
  startDate: string;
  endDate: string;
  startHour: string;
  endHour: string;
  description: string;
};

const ScheduleSetting: React.FC<ScheduleSettingProps> = ({
  progress,
  startDate,
  endDate,
  startHour,
  endHour,
  description,
}) => {
  // プログレスバーの幅を計算
  const progressWidth = `${progress}%`;

  return (
    <Container>
      <Title>シーリング設定</Title>
      <ProgressBar>
        <ProgressBarFill style={{ width: progressWidth }} />
        <ProgressText>{progress}%</ProgressText>
      </ProgressBar>
      <DateRangeContainer>
        <DateRangeLabel>
          <input type="radio" checked readOnly />
          予算科目
        </DateRangeLabel>
        <DateRangeInput
          type="text"
          value={startDate}
          placeholder="開始日付"
          readOnly
        />
        <DateRangeSeparator>〜</DateRangeSeparator>
        <DateRangeInput type="text" value={endDate} placeholder="終了日付" readOnly />
      </DateRangeContainer>
      <HourRangeContainer>
        <HourRangeLabel>
          <input type="radio" />
          予算科目
        </HourRangeLabel>
        <HourRangeInput
          type="text"
          value={startHour}
          placeholder="開始時間"
          readOnly
        />
        <HourRangeSeparator>〜</HourRangeSeparator>
        <HourRangeInput type="text" value={endHour} placeholder="終了時間" readOnly />
      </HourRangeContainer>
      <Description>{description}</Description>
      <ButtonContainer>
        <Button color="#eee">エラー確認</Button>
        <Button color="#d0d0d0">キャンセル</Button>
        <Button color="#8eb4e2">OK</Button>
        <Button color="#f08300">終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

const ProgressBar = styled.div`
  background-color: #ddd;
  border-radius: 4px;
  height: 20px;
  margin-bottom: 16px;
  position: relative;
`;

const ProgressBarFill = styled.div`
  background-color: #8eb4e2;
  border-radius: 4px;
  height: 100%;
`;

const ProgressText = styled.span`
  color: #555;
  font-size: 14px;
  position: absolute;
  right: 8px;
  top: 2px;
`;

const DateRangeContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
`;

const DateRangeLabel = styled.label`
  margin-right: 8px;
`;

const DateRangeInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 4px;
  padding: 4px;
  width: 120px;
`;

const DateRangeSeparator = styled.span`
  margin: 0 4px;
`;

const HourRangeContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 16px;
`;

const HourRangeLabel = styled.label`
  margin-right: 8px;
`;

const HourRangeInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 4px;
  padding: 4px;
  width: 80px;
`;

const HourRangeSeparator = styled.span`
  margin: 0 4px;
`;

const Description = styled.p`
  color: #555;
  font-size: 14px;
  margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: ${props => props.color};
  border: none;
  border-radius: 4px;
  color: #333;
  cursor: pointer;
  font-size: 14px;
  margin-left: 8px;
  padding: 8px 16px;

  &:hover {
    opacity: 0.8;
  }
`;

// サンプルデータ
const sampleData: ScheduleSettingProps = {
  progress: 80.25,
  startDate: '2023/06/24',
  endDate: '9999/99/99',
  startHour: '000000',
  endHour: '999999',
  description: '画面で指定した率で新年度の科目の予算枠を作成します。',
};

const App: React.FC = () => {
  return (
    <div>
      <h1>シーリング設定サンプル</h1>
      <ScheduleSetting {...sampleData} />
    </div>
  );
};

export default App;