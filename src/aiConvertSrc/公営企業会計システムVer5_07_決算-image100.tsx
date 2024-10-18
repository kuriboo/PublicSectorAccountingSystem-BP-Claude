import React from 'react';
import styled from 'styled-components';

// Define types for component props
interface PublicEntranceExamFormProps {
  fiscalYear: number;
  examPeriod: string;
  applicationPeriod: string;
  examinationMethod: string;
  individualApplicable: boolean;
}

// Define styled components
const FormContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

const FormLabel = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
`;

const FormValue = styled.div`
  margin-bottom: 20px;
`;

const FormSection = styled.div`
  margin-bottom: 30px;
`;

// Define main component
const PublicEntranceExamForm: React.FC<PublicEntranceExamFormProps> = ({
  fiscalYear,
  examPeriod,
  applicationPeriod,
  examinationMethod,
  individualApplicable,
}) => {
  return (
    <FormContainer>
      {/* 範囲指定 section */}
      <FormSection>
        <FormLabel>会計年度</FormLabel>
        <FormValue>
          {fiscalYear ? `平成${fiscalYear}年度` : '-'}
        </FormValue>

        <FormLabel>試験期間</FormLabel>
        <FormValue>
          {examPeriod || '-'}
        </FormValue>

        <FormLabel>申込期間</FormLabel>
        <FormValue>
          {applicationPeriod || '-'}
        </FormValue>
      </FormSection>

      {/* 計算方法 section */}  
      <FormSection>
        <FormLabel>仕入控除税額計算</FormLabel>
        <FormValue>
          {examinationMethod || '-'}
        </FormValue>

        <FormLabel>個別申告方式</FormLabel>
        <FormValue>
          {individualApplicable ? '有' : '無'}
        </FormValue>
      </FormSection>
    </FormContainer>
  );
};

// Define sample data and example usage component
const sampleData: PublicEntranceExamFormProps = {
  fiscalYear: 31,
  examPeriod: '平成31年04月01日 〜 令和02年03月31日',
  applicationPeriod: '平成31年04月01日 〜 令和02年03月31日',
  examinationMethod: '仕入控除額計算',
  individualApplicable: true,
};

const ExampleUsage: React.FC = () => {
  return (
    <div>
      <h2>特定収入金額及び内訳書(計算表2)</h2>
      <PublicEntranceExamForm {...sampleData} />
    </div>
  );
};

export default ExampleUsage;