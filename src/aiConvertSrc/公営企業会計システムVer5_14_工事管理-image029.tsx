import React from 'react';
import styled from '@emotion/styled';

type ConstructionEstimateFormProps = {
  financialSource: '01' | '自己財源';
  estimatedConstructionCost: number;
  adjustmentCoefficient: 'H29' | '年度';
  note: string;
  subsidyRate: number;
  selfPayConstructionCost: number;
  nationalSubsidyConstructionCost: number;
  selfPayConsultingCost: number;
  nationalSubsidyConsultingCost: number;
};

const ConstructionEstimateForm: React.FC<ConstructionEstimateFormProps> = ({
  financialSource = '01',
  estimatedConstructionCost = 0,
  adjustmentCoefficient = 'H29',
  note = '',
  subsidyRate = 0,
  selfPayConstructionCost = 0,
  nationalSubsidyConstructionCost = 0,
  selfPayConsultingCost = 0,
  nationalSubsidyConsultingCost = 0,
}) => {
  return (
    <Container>
      <Title>道路事業費調書</Title>
      <FormGroup>
        <Label>財源コード</Label>
        <Select value={financialSource}>
          <option value="01">01</option>
          <option value="自己財源">自己財源</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label>税抜財源工事費</Label>
        <Input type="number" value={estimatedConstructionCost} />
      </FormGroup>
      <FormGroup>
        <Label>調定年度</Label>
        <Select value={adjustmentCoefficient}>
          <option value="H29">H29</option>
          <option value="年度">年度</option>
        </Select>
        <Label>年度</Label>
        <Input type="text" value={note} />
      </FormGroup>
      <ResultGroup>
        <Label>財源別按分額率</Label>
        <Input type="number" value={subsidyRate} disabled />
      </ResultGroup>
      <ResultGroup>
        <Label>税抜財源工事費</Label>
        <Input type="number" value={selfPayConstructionCost} disabled />
      </ResultGroup>
      <ResultGroup>
        <Label>国年度按分対象額</Label>
        <Input type="number" value={nationalSubsidyConstructionCost} disabled />
      </ResultGroup>
      <ResultGroup>
        <Label>当年度按分事務費</Label>
        <Input type="number" value={selfPayConsultingCost} disabled />
      </ResultGroup>
      <ResultGroup>
        <Label>当年度按分事務費</Label>
        <Input type="number" value={nationalSubsidyConsultingCost} disabled />
      </ResultGroup>
      <ButtonGroup>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonGroup>
    </Container>
  );
};

// Styles
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.label`
  width: 180px;
  margin-right: 8px;
`;

const Select = styled.select`
  padding: 4px;
  margin-right: 8px;
`;

const Input = styled.input`
  padding: 4px;
`;

const ResultGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ButtonGroup = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 8px;
  padding: 4px 16px;
`;

// Sample usage
const SampleConstructionEstimateForm: React.FC = () => {
  return (
    <ConstructionEstimateForm
      financialSource="01"
      estimatedConstructionCost={50000}
      adjustmentCoefficient="H29"
      note="年度29"
      subsidyRate={0}
      selfPayConstructionCost={0}
      nationalSubsidyConstructionCost={0}
      selfPayConsultingCost={0}  
      nationalSubsidyConsultingCost={0}
    />
  );
};

export default SampleConstructionEstimateForm;