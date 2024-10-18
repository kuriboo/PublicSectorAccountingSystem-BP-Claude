import React from 'react';
import styled from '@emotion/styled';

type DateRange = {
  start: Date;
  end: Date;
};

type AcquisitionMethod = '全体' | 'ブロック' | 'セグメント';

type ReceivedDataType = '無し' | '有り';

interface EnterpriseAcquisitionFormProps {
  dateRange: DateRange;
  setDateRange: (dateRange: DateRange) => void;
  acquisitionMethod: AcquisitionMethod;
  setAcquisitionMethod: (method: AcquisitionMethod) => void;
  receivedData: ReceivedDataType;
  setReceivedData: (type: ReceivedDataType) => void;
  yearAndMonthSegment: string;
  setYearAndMonthSegment: (segment: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const DateInput = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;

const Radio = styled.input`
  margin-right: 5px;
`;

const EnterpriseAcquisitionForm: React.FC<EnterpriseAcquisitionFormProps> = ({
  dateRange,
  setDateRange,
  acquisitionMethod,
  setAcquisitionMethod,
  receivedData,
  setReceivedData,
  yearAndMonthSegment,
  setYearAndMonthSegment,
}) => {
  return (
    <Container>
      <FormGroup>
        <Label>範囲指定</Label>
        <Label>
          <Radio
            type="radio"
            checked={acquisitionMethod === '作業日'}
            onChange={() => setAcquisitionMethod('作業日')}
          />
          作業日
        </Label>
        <Label>
          <Radio
            type="radio"
            checked={acquisitionMethod === '仕訳日'}
            onChange={() => setAcquisitionMethod('仕訳日')}
          />
          仕訳日
        </Label>
        <DateInput
          type="date"
          value={dateRange.start.toISOString().split('T')[0]}
          onChange={(e) => setDateRange({ ...dateRange, start: new Date(e.target.value) })}
        />
        ～
        <DateInput
          type="date"
          value={dateRange.end.toISOString().split('T')[0]}
          onChange={(e) => setDateRange({ ...dateRange, end: new Date(e.target.value) })}
        />
        <Select
          value={yearAndMonthSegment}
          onChange={(e) => setYearAndMonthSegment(e.target.value)}
        >
          <option value="20">20 度より四ヶ月ごと</option>
        </Select>
      </FormGroup>
      
      <FormGroup>
        <Label>過年度損益中</Label>
        <Label>
          <Radio
            type="radio"
            checked={receivedData === '無し'}
            onChange={() => setReceivedData('無し')}
          />
          無し
        </Label>
        <Label>
          <Radio
            type="radio"
            checked={receivedData === '有り'}
            onChange={() => setReceivedData('有り')}
          />
          有り
        </Label>
      </FormGroup>

      <FormGroup>
        <Label>過年度損益中</Label>
        <Label>
          <Radio
            type="radio"
            checked={receivedData === '無し'}
            onChange={() => setReceivedData('無し')}
          />
          無し  
        </Label>
        <Label>
          <Radio
            type="radio"
            checked={receivedData === '有り'}
            onChange={() => setReceivedData('有り')}
          />
          有り
        </Label>
      </FormGroup>
      
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  const [dateRange, setDateRange] = React.useState<DateRange>({
    start: new Date(),
    end: new Date(),
  });
  const [acquisitionMethod, setAcquisitionMethod] = React.useState<AcquisitionMethod>('全体');
  const [receivedData, setReceivedData] = React.useState<ReceivedDataType>('無し');
  const [yearAndMonthSegment, setYearAndMonthSegment] = React.useState('20');

  return (
    <EnterpriseAcquisitionForm
      dateRange={dateRange}
      setDateRange={setDateRange}
      acquisitionMethod={acquisitionMethod}
      setAcquisitionMethod={setAcquisitionMethod}
      receivedData={receivedData}
      setReceivedData={setReceivedData}
      yearAndMonthSegment={yearAndMonthSegment}  
      setYearAndMonthSegment={setYearAndMonthSegment}
    />
  );
};

export default App;