import React from 'react';
import styled from '@emotion/styled';

interface ExecutionSettingProps {
  fiscalYear: number;
  executionDate: string;
  startDate: string;
  endDate: string;
  morning?: boolean;
  afternoon?: boolean;
  midnight?: boolean;
}

const ExecutionSettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SettingRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const SettingLabel = styled.label`
  width: 100px;
`;

const SettingInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 150px;
`;

const SettingRadio = styled.input`
  margin-right: 5px;
`;

const ExecutionSetting: React.FC<ExecutionSettingProps> = ({
  fiscalYear,
  executionDate,
  startDate,
  endDate,
  morning,
  afternoon,
  midnight,
}) => {
  return (
    <ExecutionSettingContainer>
      <SettingRow>
        <SettingLabel>年度</SettingLabel>
        <SettingInput type="text" defaultValue={fiscalYear} />
        <span>年度</span>
      </SettingRow>
      <SettingRow>
        <SettingLabel>予算編成区分</SettingLabel>
        <SettingInput type="text" defaultValue={executionDate} />
        <span>補正</span>
      </SettingRow>
      <SettingRow>
        <SettingLabel>回数</SettingLabel>
        <SettingInput type="number" defaultValue={1} />
        <span>回補正予算</span>
      </SettingRow>
      <SettingRow>
        <SettingLabel>予算科目</SettingLabel>
        <SettingInput type="text" defaultValue={startDate} />
        <span>～</span>
        <SettingInput type="text" defaultValue={endDate} />
      </SettingRow>
      <SettingRow>
        <SettingLabel>所属</SettingLabel>
        <SettingInput type="text" defaultValue="000000" />
        <span>～</span>
        <SettingInput type="text" defaultValue="999999" />
      </SettingRow>
      <SettingRow>
        <SettingRadio type="radio" defaultChecked={morning} />
        <span>前</span>
        <SettingRadio type="radio" defaultChecked={afternoon} />
        <span>後前</span>
        <SettingRadio type="radio" defaultChecked={midnight} />
        <span>明細</span>
      </SettingRow>
    </ExecutionSettingContainer>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <ExecutionSetting
      fiscalYear={2022}
      executionDate="令和29年06月09日"
      startDate="0000000000000000"
      endDate="9999999999999999"
      morning={false}
      afternoon={true}
      midnight={false}
    />
  );
};

export default App;