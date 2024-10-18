import React from 'react';
import styled from '@emotion/styled';

interface AssetManagementFormProps {
  companyCode: string;
  assetCode: string;
  onSubmit: (data: { [key: string]: string }) => void;
}

const AssetManagementForm: React.FC<AssetManagementFormProps> = ({
  companyCode,
  assetCode,
  onSubmit,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: { [key: string]: string } = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value.toString();
    }
    onSubmit(data);
  };

  return (
    <FormContainer>
      <Header>
        <Label>アセットマネジメント用語マスタ</Label>
        <AdminInfo>
          <div>行政市水道事業会計</div>
          <div>予算・会計担当 ぎょうせい太郎</div>
          <div>平成29年09月12日</div>
        </AdminInfo>
      </Header>
      <CompanyInfo>
        <div>
          <Label>担当会社</Label>
          <Input value={companyCode} disabled />
        </div>
        <div>
          <Label>明細区分</Label>
          <Input value="行削除" disabled />
        </div>
      </CompanyInfo>
      <TableContainer>
        <form onSubmit={handleSubmit}>
          <Table>
            <thead>
              <Row>
                <HeaderCell>用語番号</HeaderCell>
                <HeaderCell>名称</HeaderCell>
                <HeaderCell>内容1</HeaderCell>
                <HeaderCell>内容2</HeaderCell>
                <HeaderCell>内容3</HeaderCell>
                <HeaderCell>内容4</HeaderCell>
                <HeaderCell>内容5</HeaderCell>
              </Row>
            </thead>
            <tbody>
              <Row>
                <Cell>1</Cell>
                <Cell>
                  <Input defaultValue="I 理地盤" />
                </Cell>
                <Cell>
                  <Input />
                </Cell>
                <Cell>
                  <Input />
                </Cell>
                <Cell>
                  <Input />
                </Cell>
                <Cell>
                  <Input />
                </Cell>
                <Cell>
                  <Input />
                </Cell>
              </Row>
              <Row>
                <Cell>2</Cell>
                <Cell>
                  <Input defaultValue="II 理地盤" />
                </Cell>
                <Cell>
                  <Input />
                </Cell>
                <Cell>
                  <Input />
                </Cell>
                <Cell>
                  <Input />
                </Cell>
                <Cell>
                  <Input />
                </Cell>
                <Cell>
                  <Input />
                </Cell>
              </Row>
            </tbody>
          </Table>
          <TermContainer>
            <Label>明細編集</Label>
            <div>
              <Label>用語番号</Label>
              <Input defaultValue={assetCode} disabled />
            </div>
            <div>
              <Label>内容1</Label>
              <Input name="content1" />
            </div>
            <div>
              <Label>内容2</Label>
              <Input name="content2" />
            </div>
            <div>
              <Label>内容3</Label>
              <Input name="content3" />
            </div>
            <div>
              <Label>内容4</Label>
              <Input name="content4" />
            </div>
            <div>
              <Label>内容5</Label>
              <Input name="content5" />
            </div>
          </TermContainer>
          <ButtonContainer>
            <Button type="button">前データ</Button>
            <Button type="button">次データ</Button>
            <Button type="submit">行確定</Button>
            <CancelButton type="button">キャンセル</CancelButton>
            <Button type="button">終了</Button>
          </ButtonContainer>
        </form>
      </TableContainer>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  font-family: 'Meiryo UI', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const AdminInfo = styled.div`
  text-align: right;
  font-size: 14px;
`;

const CompanyInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const TableContainer = styled.div`
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: #f5f5f5;
  }
`;

const HeaderCell = styled.th`
  background-color: #e5e5e5;
  padding: 10px;
  text-align: left;
  white-space: nowrap;
`;

const Cell = styled.td`
  padding: 10px;
`;

const TermContainer = styled.div`
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background-color: #6c757d;

  &:hover {
    background-color: #545b62;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = (data: { [key: string]: string }) => {
    console.log(data);
  };

  return (
    <AssetManagementForm
      companyCode="C00007"
      assetCode="1"
      onSubmit={handleSubmit}
    />
  );
};

export default App;