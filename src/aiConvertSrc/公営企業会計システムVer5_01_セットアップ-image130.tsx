import React from 'react';
import styled from '@emotion/styled';

type SupportRequest = {
  id: number;
  division: string;
  summary: string;
};

type SupportRequestMasterProps = {
  supportRequests: SupportRequest[];
  onSelectSupportRequest: (supportRequest: SupportRequest) => void;
};

const SupportRequestMaster: React.FC<SupportRequestMasterProps> = ({
  supportRequests,
  onSelectSupportRequest,
}) => {
  return (
    <Container>
      <Title>支払分割指示マスタ</Title>
      <SearchSection>
        <SearchInput type="text" placeholder="登録・訂正・削除" />
      </SearchSection>
      <SupportRequestList>
        <ListHeader>
          <Column>分割相手先</Column>
          <Column>明細番号</Column>
          <Column>編集</Column>
          <Column>行削除</Column>
        </ListHeader>
        {supportRequests.map((supportRequest) => (
          <ListItem key={supportRequest.id} onClick={() => onSelectSupportRequest(supportRequest)}>
            <Column>{supportRequest.id}</Column>
            <Column>{supportRequest.division}</Column>
            <EditButton>編集</EditButton>
            <DeleteButton>行削除</DeleteButton>
          </ListItem>
        ))}
      </SupportRequestList>
      <SupportRequestDetails>
        <DetailRow>
          <Label>相手先設定</Label>
          <Input type="text" defaultValue="明細番号1" />
          <Search>検索</Search>
        </DetailRow>
        <DetailTable>
          <TableHeader>
            <TableColumn>明細番号</TableColumn>
            <TableColumn>コード</TableColumn>
            <TableColumn>略称</TableColumn>
            <TableColumn>適用</TableColumn>
          </TableHeader>
          <TableRow>
            <TableColumn>1</TableColumn>
            <TableColumn>0000000000099</TableColumn>
            <TableColumn>ぎょうせい</TableColumn>
            <TableColumn>有</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>2</TableColumn>
            <TableColumn>9999999999999</TableColumn>
            <TableColumn>ぎょうせい大阪</TableColumn>
            <TableColumn></TableColumn>
          </TableRow>
        </DetailTable>
        <ButtonSection>
          <ConfirmButton>確定</ConfirmButton>
          <CancelButton>キャンセル</CancelButton>
        </ButtonSection>
      </SupportRequestDetails>
      <BottomSection>
        <PreviousButton>前データ</PreviousButton>
        <NextButton>次データ</NextButton>
        <OKButton>OK</OKButton>
        <ClearButton>クリア</ClearButton>
        <CloseButton>終了</CloseButton>
      </BottomSection>
    </Container>
  );
};

// Sample data for demonstration
const sampleSupportRequests: SupportRequest[] = [
  { id: 5585, division: '行政企業', summary: '適格請求書発行事業者登録番号(T999000000000000)' },
  { id: 6681, division: 'ぎょうせい', summary: '適格請求書発行事業者登録番号(T999000000000000)' },
];

const SupportRequestMasterDemo: React.FC = () => {
  const handleSelectSupportRequest = (supportRequest: SupportRequest) => {
    console.log('Selected Support Request:', supportRequest);
  };

  return (
    <SupportRequestMaster
      supportRequests={sampleSupportRequests}
      onSelectSupportRequest={handleSelectSupportRequest}
    />
  );
};

// Styled components
const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const SearchSection = styled.div`
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 5px;
`;

const SupportRequestList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

const ListHeader = styled.li`
  display: flex;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const EditButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const SupportRequestDetails = styled.div`
  margin-bottom: 20px;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;
`;

const Search = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const DetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #f5f5f5;
`;

const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const TableColumn = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
`;

const ButtonSection = styled.div`
  margin-top: 20px;
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PreviousButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const NextButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const OKButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const ClearButton = styled.button`
  padding: 10px 20px;
  background-color: #ffc107;
  color: #000;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export default SupportRequestMasterDemo;