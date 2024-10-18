import React from 'react';
import styled from '@emotion/styled';

type CompanyDecisionReportSettingType = {
  decisionCode: string;
  decisionName: string;
  businessType: string;
  department: string;
  director: string;
  judgmentDate: string;
  comments: string;
};

type CompanyDecisionReportSettingProps = {
  setting: CompanyDecisionReportSettingType;
  onChangeValue: (key: string, value: string | number) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  width: 120px;
  margin-right: 8px;

  @media (max-width: 600px) {
    margin-bottom: 4px;
  }
`;

const Select = styled.select`
  flex: 1;
  padding: 4px;
`;

const Input = styled.input`
  flex: 1;
  padding: 4px;
`;

const CompanyDecisionReportSetting: React.FC<CompanyDecisionReportSettingProps> = ({ setting, onChangeValue }) => {
  const { decisionCode, decisionName, businessType, department, director, judgmentDate, comments } = setting;

  // 変更イベントハンドラ
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    onChangeValue(name, value);
  };

  return (
    <Container>
      <Row>
        <Label>施設コード</Label>
        <Input type="text" name="decisionCode" value={decisionCode} onChange={handleChange} />
      </Row>
      <Row>
        <Label>詳細情報</Label>
      </Row>
      <Row>
        <Label>事業区分</Label>
        <Select name="businessType" value={businessType} onChange={handleChange}>
          <option value="1">上水道事業のみ</option>
        </Select>
      </Row>
      <Row>
        <Label>経営主体</Label>
        <Select name="department" value={department} onChange={handleChange}>
          <option value="3">市営</option>
        </Select>
      </Row>
      <Row>
        <Label>黒･赤字別</Label>
        <Select name="judgmentDate" value={judgmentDate} onChange={handleChange}>
          <option value="1">経常利益を生じた事業(黒字)</option>
        </Select>
      </Row>
      <Row>
        <Label>規模別</Label>
        <Input type="text" name="director" value={director} onChange={handleChange} />
      </Row>
      <Row>
        <Label>用途区分</Label>
        <Select name="businessType" value={businessType} onChange={handleChange}>
          <option value="1">ダム以外の表流水を主とするもの</option>
        </Select>          
      </Row>
      <Row>
        <Label>原価区分</Label>
        <Input type="text" name="comments" value={comments} onChange={handleChange} />
      </Row>
    </Container>
  );
};

// サンプルデータ
const sampleData: CompanyDecisionReportSettingType = {
  decisionCode: '010',
  decisionName: '水道事業･簡易水道事業',
  businessType: '1',
  department: '3',
  director: '5万人以上10万人未満',
  judgmentDate: '1',
  comments: '末端給水 給水原価65円以上263円未満',
};

const App: React.FC = () => {
  const handleChangeValue = (key: string, value: string | number) => {
    console.log(`Change ${key} to ${value}`);
    // 実際の変更処理を実装
  };

  return (
    <CompanyDecisionReportSetting 
      setting={sampleData}
      onChangeValue={handleChangeValue}
    />
  );  
};

export default App;