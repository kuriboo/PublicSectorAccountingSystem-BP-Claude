import React from 'react';
import styled from 'styled-components';

interface ContractInputProps {
  contractNumber?: string;
  contractYear?: number;
  contractMonth?: number;
  contractDate?: number;
  expirationDate?: string;
  limit?: number;
  payment?: string;
  completion?: string;
  selfPay?: number;
  contractorName?: string;
  contractorPosition?: string;
  remarks?: string;
  onContractNumberChange?: (value: string) => void;
  onContractYearChange?: (value: number) => void;
  onContractMonthChange?: (value: number) => void;  
  onContractDateChange?: (value: number) => void;
  onExpirationDateChange?: (value: string) => void;
  onLimitChange?: (value: number) => void;
  onPaymentChange?: (value: string) => void;
  onCompletionChange?: (value: string) => void;
  onSelfPayChange?: (value: number) => void;
  onContractorNameChange?: (value: string) => void;
  onContractorPositionChange?: (value: string) => void;
  onRemarksChange?: (value: string) => void;
}

const ContractInput: React.FC<ContractInputProps> = ({
  contractNumber = '',
  contractYear,
  contractMonth,
  contractDate,
  expirationDate = '',
  limit,
  payment = '',
  completion = '',
  selfPay,
  contractorName = '',
  contractorPosition = '',  
  remarks = '',
  onContractNumberChange,
  onContractYearChange,
  onContractMonthChange,
  onContractDateChange,
  onExpirationDateChange,
  onLimitChange,
  onPaymentChange,
  onCompletionChange,
  onSelfPayChange,
  onContractorNameChange,
  onContractorPositionChange,
  onRemarksChange,
}) => {

  // Event handlers
  const handleContractNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onContractNumberChange?.(e.target.value);
  };

  const handleContractYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onContractYearChange?.(Number(e.target.value));
  };

  const handleContractMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onContractMonthChange?.(Number(e.target.value));
  };

  const handleContractDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onContractDateChange?.(Number(e.target.value));
  };

  const handleExpirationDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onExpirationDateChange?.(e.target.value);
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onLimitChange?.(Number(e.target.value));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onPaymentChange?.(e.target.value);
  };

  const handleCompletionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCompletionChange?.(e.target.value);  
  };

  const handleSelfPayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSelfPayChange?.(Number(e.target.value));
  };

  const handleContractorNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onContractorNameChange?.(e.target.value);
  };
  
  const handleContractorPositionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onContractorPositionChange?.(e.target.value);
  };

  const handleRemarksChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onRemarksChange?.(e.target.value);
  };

  return (
    <Container>
      <Title>契約報告入力(工事)</Title>
      <Row>
        <Label>負担年度</Label>
        <span>:</span>
        <Input type="text" value={contractYear} onChange={handleContractYearChange} />
        <span>年度</span>
        <Label>負担番号</Label>
        <span>146</span>        
      </Row>
      <Row>
        <Label>契約年月日</Label>
        <Input type="text" value={contractYear} onChange={handleContractYearChange} />
        <span>年</span>
        <Input type="text" value={contractMonth} onChange={handleContractMonthChange} />
        <span>月</span>
        <Input type="text" value={contractDate} onChange={handleContractDateChange} />
        <span>日</span>
        <Label>着手日</Label>
        <Input type="text" value={contractYear} onChange={handleContractYearChange} />
        <span>年</span>
        <Input type="text" value={contractMonth} onChange={handleContractMonthChange} />
        <span>月</span>
        <Input type="text" value={contractDate} onChange={handleContractDateChange} />
        <span>日</span>
      </Row>
      <Row>
        <Label>契約番号</Label>
        <Input type="text" value={contractNumber} onChange={handleContractNumberChange} />
        <Label>期間</Label>
        <Input type="text" value={limit} onChange={handleLimitChange} />
      </Row>
      <Row>  
        <Label>契約方法</Label>
        <Select value={payment} onChange={handlePaymentChange}>
          <option value="随意契約">随意契約</option>
        </Select>
        <Label>完了日</Label>
        <Input type="text" value={completion} onChange={handleCompletionChange} />
      </Row>
      <Row>
        <Label>前払金額</Label>
        <Input type="text" value={selfPay} onChange={handleSelfPayChange} />
        <Label>契約保証金</Label>
        {/* Leave blank */}
      </Row>
      <Row>  
        <Label>支払回数</Label>
        <Input type="text" />
      </Row>
      <Row>
        <Label>自由設定内容</Label>
        <textarea rows={2} value={remarks} onChange={handleRemarksChange}></textarea>
      </Row>
      <Row>
        <Label>工事名称所</Label>  
        <Input type="text" value={contractorName} onChange={handleContractorNameChange} />
      </Row>
      <Row>
        <Label>摘要</Label>  
        <span>庁舎修繕</span>
      </Row>
      <Row>  
        <Label>相手先</Label>
        <Select value={contractorPosition} onChange={handleContractorPositionChange}>
          <option value="市内一般">市内一般</option>
        </Select>
      </Row>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  font-size: 14px;

  @media (max-width: 600px) {
    padding: 8px;
    font-size: 12px;
  }
`;

const Title = styled.h2`
  margin: 0 0 16px;
  font-size: 18px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 16px;
  }  
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const Label = styled.label`
  min-width: 100px;
  color: #666;

  @media (max-width: 600px) {
    min-width: 80px;
  }  
`;

const Input = styled.input`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 600px) {
    padding: 2px 4px;
    font-size: 12px;
  }
`;

const Select = styled.select`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;

  @media (max-width: 600px) {
    padding: 2px 4px;
    font-size: 12px;
  }  
`;

// Sample usage
const ContractInputSample: React.FC = () => {
  return (
    <div>
      <ContractInput 
        contractNumber="H30-29"
        contractYear={2023}
        contractMonth={6}
        contractDate={29}
        expirationDate="2023-12-30"
        limit={95}
        payment="随意契約"
        completion="2023-12-30"
        selfPay={10000}
        contractorName="消火栓修繕工事"
        contractorPosition="市内一般"
        remarks="入札保証、契約保証"
      />
    </div>
  );
};

export default ContractInputSample;