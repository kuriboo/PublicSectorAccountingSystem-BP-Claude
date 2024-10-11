import React, { useState } from 'react';
import styled from '@emotion/styled';

interface WaterChargeSystemProps {
  initialBranchCode: string;
  initialAccountNumber: string;
}

interface FormData {
  accountName: string;
  accountKana: string;
  isTransfer: boolean;
  zipCode: string;
  address: string;
  isCreditCard: boolean;
  bankName: string;
  branchName: string;
  accountType: string;
  accountHolder: string;
  effectiveDate: string;
}

const WaterChargeSystem: React.FC<WaterChargeSystemProps> = ({ initialBranchCode, initialAccountNumber }) => {
  const [branchCode, setBranchCode] = useState(initialBranchCode);
  const [accountNumber, setAccountNumber] = useState(initialAccountNumber);
  const [formData, setFormData] = useState<FormData>({
    accountName: '',
    accountKana: '',
    isTransfer: false,
    zipCode: '',
    address: '',
    isCreditCard: false,
    bankName: '',
    branchName: '',
    accountType: '',
    accountHolder: '',
    effectiveDate: '',
  });

  const handleSubmit = () => {
    // Handle form submission
    console.log(formData);
  };

  return (
    <Container>
      <Header>
        <Title>公営企業会計システム</Title>
        <Subtitle>総務課 予算・会計担当 ぎょうせい太郎</Subtitle>
        <Date>平成29年09月05日</Date>
      </Header>
      <Form>
        <Row>
          <Label>業者</Label>
          <Input value={branchCode} onChange={(e) => setBranchCode(e.target.value)} />
          <Label>ぎょうせい工務店</Label>
        </Row>
        <Row>
          <Button>明細編集</Button>
          <Button primary>行削除</Button>
        </Row>
        <Table>
          <TableHeader>
            <TableRow>
              <HeaderCell>変更届出日</HeaderCell>
              <HeaderCell>業者名</HeaderCell>
              <HeaderCell>略名</HeaderCell>
              <HeaderCell>提示枠</HeaderCell>
              <HeaderCell>JV区分</HeaderCell>
              <HeaderCell>登録区分</HeaderCell>
              <HeaderCell>資本金</HeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <Cell>平成29年09月05日</Cell>
              <Cell>ぎょうせい工務店</Cell>
              <Cell>ぎょうせい工務店</Cell>
              <Cell>キヤビイコヴズテソ</Cell>
              <Cell>通常</Cell>
              <Cell>本登録</Cell>
              <Cell />
            </TableRow>
          </TableBody>
        </Table>
        <FormSection>
          <SectionTitle>業者名</SectionTitle>
          <Input value={formData.accountName} onChange={(e) => setFormData({ ...formData, accountName: e.target.value })} />
          <SectionTitle>略名</SectionTitle>
          <Input value={formData.accountKana} onChange={(e) => setFormData({ ...formData, accountKana: e.target.value })} />
          <Row>
            <Checkbox checked={formData.isTransfer} onChange={(e) => setFormData({ ...formData, isTransfer: e.target.checked })}>
              本登録
            </Checkbox>
            <Checkbox checked={!formData.isTransfer} onChange={(e) => setFormData({ ...formData, isTransfer: !e.target.checked })}>
              仮登録
            </Checkbox>
          </Row>
          <SectionTitle>資本金</SectionTitle>
          <Row>
            <Input value={formData.bankName} onChange={(e) => setFormData({ ...formData, bankName: e.target.value })} />
            <Label>千円</Label>
          </Row>
          <Row>
            <Label>区分別職員数</Label>
            <Input type="number" value={formData.branchName} onChange={(e) => setFormData({ ...formData, branchName: e.target.value })} />
            <Label>千円</Label>
          </Row>
          <Row>
            <Label>総職員数</Label>
            <Input type="number" value={formData.branchName} onChange={(e) => setFormData({ ...formData, branchName: e.target.value })} />
            <Label>千円</Label>
          </Row>
          <Row>
            <Label>営業年数</Label>
            <Input type="number" value={formData.branchName} onChange={(e) => setFormData({ ...formData, branchName: e.target.value })} />
            <Label>年</Label>
          </Row>
          <Row>
            <Checkbox checked={formData.isCreditCard} onChange={(e) => setFormData({ ...formData, isCreditCard: e.target.checked })}>
              完成高
            </Checkbox>
            <Checkbox checked={formData.isCreditCard} onChange={(e) => setFormData({ ...formData, isCreditCard: e.target.checked })}>
              総職員数
            </Checkbox>
            <Checkbox checked={!formData.isCreditCard} onChange={(e) => setFormData({ ...formData, isCreditCard: !e.target.checked })}>
              営業年数
            </Checkbox>
          </Row>
        </FormSection>
      </Form>
      <Footer>
        <FooterButton>OK</FooterButton>
        <FooterButton>クリア</FooterButton>
        <FooterButton primary onClick={handleSubmit}>
          終了
        </FooterButton>
      </Footer>
    </Container>
  );
};

// Sample data for demonstration
const sampleData: WaterChargeSystemProps = {
  initialBranchCode: '0000001111',
  initialAccountNumber: 'ぎょうせい工務店',
};

const WaterChargeSystemDemo: React.FC = () => {
  return <WaterChargeSystem {...sampleData} />;
};

export default WaterChargeSystemDemo;

// Styled components
const Container = styled.div`
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 10px;
  text-align: right;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  margin: 5px 0;
`;

const Date = styled.p`
  margin: 0;
`;

const Form = styled.div`
  margin-bottom: 20px;
`;

const Row = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
`;

const Button = styled.button<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? '#007bff' : '#fff')};
  border: 1px solid #007bff;
  border-radius: 3px;
  color: ${(props) => (props.primary ? '#fff' : '#007bff')};
  cursor: pointer;
  font-size: 14px;
  margin-right: 10px;
  padding: 5px 10px;

  &:hover {
    background-color: #0069d9;
    color: #fff;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  margin-bottom: 20px;
  width: 100%;
`;

const TableHeader = styled.thead`
  background-color: #f8f9fa;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const HeaderCell = styled.th`
  border: 1px solid #dee2e6;
  padding: 10px;
  text-align: left;
`;

const Cell = styled.td`
  border: 1px solid #dee2e6;
  padding: 10px;
`;

const FormSection = styled.div`
  border: 1px solid #dee2e6;
  margin-bottom: 20px;
  padding: 10px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 10px;
`;

const Checkbox = styled.label`
  align-items: center;
  display: flex;
  margin-right: 10px;
`;

const Footer = styled.footer`
  text-align: right;
`;

const FooterButton = styled(Button)`
  font-size: 16px;
  padding: 10px 20px;
`;