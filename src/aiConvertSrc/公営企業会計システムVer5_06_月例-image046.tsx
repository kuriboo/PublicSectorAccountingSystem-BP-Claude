import React from 'react';
import styled from 'styled-components';

type DivisionType = '伝票種別' | '振替分' | '調定分' | '支払分';
type PeriodType = '全体' | 'ブロック' | 'セグメント';

interface WorkReportFormProps {
  defaultDivisionType?: DivisionType;
  defaultFromDate?: string;
  defaultToDate?: string;
  defaultPeriodType?: PeriodType;
  defaultOption?: string;
}

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 200px;
  padding: 5px;
  font-size: 16px;
`;

const Input = styled.input`
  width: 200px;
  padding: 5px;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const WorkReportForm: React.FC<WorkReportFormProps> = ({
  defaultDivisionType = '伝票種別',
  defaultFromDate = '',
  defaultToDate = '',
  defaultPeriodType = '全体',
  defaultOption = '20',
}) => {
  return (
    <Container>
      <Title>仕訳帳</Title>
      <FormGroup>
        <Label>範囲指定</Label>
        <Select defaultValue={defaultDivisionType}>
          <option value="伝票種別">伝票種別</option>
          <option value="振替分">振替分</option>
          <option value="調定分">調定分</option>  
          <option value="支払分">支払分</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>日付</Label>
        <Input type="date" defaultValue={defaultFromDate} /> ～ <Input type="date" defaultValue={defaultToDate} />
      </FormGroup>
      <FormGroup>
        <Label>集計対象</Label>
        <Select defaultValue={defaultPeriodType}>
          <option value="全体">全体</option>
          <option value="ブロック">ブロック</option>
          <option value="セグメント">セグメント</option>
        </Select>
        <Select defaultValue={defaultOption}>
          <option value="20">20</option>
          {/* Add more options */}
        </Select>  
      </FormGroup>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonGroup>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>Work Report</h1>
      <WorkReportForm
        defaultFromDate="2022-12-13"
        defaultToDate="2022-12-13"
        defaultOption="20"
      />
    </div>
  );  
};

export default App;