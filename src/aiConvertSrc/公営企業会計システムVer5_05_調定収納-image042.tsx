import React from 'react';
import styled from '@emotion/styled';

type AuditInfoProps = {
  auditNo: string;
  auditName: string;
  auditAmount: string;
  tax: string;
};

const AuditInfo: React.FC<AuditInfoProps> = ({ auditNo, auditName, auditAmount, tax }) => {
  return (
    <Container>
      <Title>調定用紙登入力予算科目登録</Title>
      <Row>
        <Label>年度</Label>
        <Value>{auditNo.slice(0, 4)}</Value>
        <Spacer />
        <Label>伝票</Label>
        <Value>{auditNo.slice(4)}</Value>
      </Row>
      <Row>
        <Label>節</Label>
        <Value>{auditNo}</Value>
        <Label>細節</Label>
        <Value>{auditName}</Value>
      </Row>
      <Row>
        <Label>明細</Label>
        <Value>{auditAmount}</Value>
        <Label>内消費税</Label>
        {/* Render tax value if it exists, otherwise show hyphen */}
        <Value>{tax ? tax : '-'}</Value>
      </Row>
      <ButtonRow>
        <Button>OK</Button>
        <Button>クリア</Button>
        <CancelButton>キャンセル</CancelButton>
      </ButtonRow>
    </Container>
  );
};

// Sample data for displaying the component
const sampleData: AuditInfoProps = {
  auditNo: '00101',
  auditName: '小運料金',
  auditAmount: '0001',
  tax: '0002',
};

const AuditInfoSample: React.FC = () => {
  return (
    <div>
      <h2>AuditInfo Component Sample</h2>
      <AuditInfo {...sampleData} />
    </div>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  border: 1px solid #ccc;
  padding: 16px;
  width: 400px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  margin: 0 0 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.span`
  font-weight: bold;
  margin-right: 8px;
`;

const Value = styled.span`
  margin-right: 16px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const ButtonRow = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const Button = styled.button`
  margin-left: 8px;
`;

const CancelButton = styled(Button)`
  background: #eee;
`;

export default AuditInfoSample;