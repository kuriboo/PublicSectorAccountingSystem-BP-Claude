import React from 'react';
import styled from 'styled-components';

type CompanyType = '印字しない' | '会計区分別';

interface Props {
  year: number;
  month: number;
  day: number;
  companyType: CompanyType;
  managementFee: number;
  certificationFee: number;
  otherFees: number;
  totalFees: number;
  usePreviousYearData: boolean;
  previousYearManagementFee?: number;
  previousYearCertificationFee?: number;
  previousYearOtherFees?: number;
  previousYearTotalFees?: number;
  onOk: () => void;
  onCancel: () => void;
  onPrint: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  flex: 1;
`;

const Input = styled.input`
  flex: 2;
  padding: 5px;
`;

const Select = styled.select`
  flex: 2;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const AssignmentAdjustmentForm: React.FC<Props> = ({
  year,
  month, 
  day,
  companyType,
  managementFee,
  certificationFee,
  otherFees,
  totalFees,
  usePreviousYearData,
  previousYearManagementFee,
  previousYearCertificationFee,
  previousYearOtherFees,
  previousYearTotalFees,
  onOk,
  onCancel,
  onPrint,
}) => {
  return (
    <Container>
      {/* 作成日 */}
      <Row>
        <Label>作成日:</Label>
        <span>{year}年{month}月{day}日</span>
      </Row>

      {/* 会計区分 */}
      <Row>
        <Label>会計区分:</Label>
        <Select value={companyType}>
          <option value="印字しない">印字しない</option>
          <option value="会計区分別">会計区分別</option>
        </Select>
      </Row>

      {/* 当期金額 */}
      <Row>
        <Label>管理業務料:</Label>
        <Input type="number" value={managementFee} readOnly />
      </Row>
      <Row>
        <Label>認証業務料:</Label>
        <Input type="number" value={certificationFee} readOnly />
      </Row>
      <Row>
        <Label>管理規格:</Label>
        <Input type="number" value={otherFees} readOnly />
      </Row>
      <Row>
        <Label>合計金額:</Label>
        <Input type="number" value={totalFees} readOnly />
      </Row>

      {/* 前期金額 */}
      <Row>
        <Label>管理業務料:</Label>
        <Input type="number" value={previousYearManagementFee} readOnly />
      </Row>
      <Row>
        <Label>認証業務料:</Label>
        <Input type="number" value={previousYearCertificationFee} readOnly />
      </Row>
      <Row>
        <Label>管理規格:</Label>
        <Input type="number" value={previousYearOtherFees} readOnly />
      </Row>
      <Row>
        <Label>合計金額:</Label>
        <Input type="number" value={previousYearTotalFees} readOnly />
      </Row>

      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button onClick={onPrint}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Sample usage
const SampleAssignmentAdjustmentForm: React.FC = () => {
  const handleOk = () => {
    console.log('OK clicked');
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  const handlePrint = () => {
    console.log('Print clicked');
  };

  return (
    <AssignmentAdjustmentForm
      year={2029}
      month={9}
      day={12}
      companyType="会計区分別"
      managementFee={1000000}
      certificationFee={999999999}
      otherFees={100000}
      totalFees={999999}
      usePreviousYearData
      previousYearManagementFee={2000000}
      previousYearCertificationFee={888888}
      previousYearOtherFees={200000}
      previousYearTotalFees={888888}
      onOk={handleOk}
      onCancel={handleCancel}      
      onPrint={handlePrint}
    />
  );
};

export default AssignmentAdjustmentForm;