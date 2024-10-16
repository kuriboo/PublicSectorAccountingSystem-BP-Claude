import React from 'react';
import styled from '@emotion/styled';

interface Book {
  number: string;
  name: string;
  amount: number;
}

interface PublicOfferingFormProps {
  books: Book[];
}

const PublicOfferingForm: React.FC<PublicOfferingFormProps> = ({ books }) => {
  return (
    <Container>
      <Title>資本的収支明細書備考入力</Title>
      <Subtitle>総務課予算・会計担当　さようせい太郎　令和02年05月26日</Subtitle>
      <FormContainer>
        <Row>
          <Label>平成31</Label>
          <Select>
            <option>年度</option>
          </Select>
        </Row>
        <Row>
          <InputRow>
            <Input type="text" value="008" readOnly />
            <Input type="text" value="01" readOnly />
            <Input type="text" value="01" readOnly />
            <Input type="text" value="01" readOnly />
          </InputRow>
          <CompanyName>企業債収入</CompanyName>
        </Row>
        <Table>
          <TableHeader>
            <TableHeaderCell>印字区分</TableHeaderCell>
            <TableHeaderCell>印字区分名称</TableHeaderCell>
            <TableHeaderCell>印字名称</TableHeaderCell>
            <TableHeaderCell>印字金額</TableHeaderCell>
          </TableHeader>
          <TableBody>
            {books.map((book, index) => (
              <TableRow key={index}>
                <TableCell>{book.number}</TableCell>
                <TableCell>備考名称: 企業印字</TableCell>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.amount.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ButtonContainer>
          <Button>ＯＫ</Button>
          <Button>クリア</Button>
          <Button>終了</Button>
        </ButtonContainer>
      </FormContainer>
      <Note>資本的収支明細書に印字する備考の登録を行います。</Note>
    </Container>
  );
};

const Container = styled.div`
  font-family: sans-serif;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 100px;
`;

const Select = styled.select`
  width: 100px;
  margin-left: 10px;
`;

const InputRow = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 40px;
  margin-right: 10px;
  text-align: center;
`;

const CompanyName = styled.div`
  margin-left: 20px;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

const TableHeader = styled.tr`
  background-color: #f0f0f0;
`;

const TableHeaderCell = styled.th`
  padding: 5px;
  text-align: left;
  border: 1px solid #ccc;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 5px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
`;

const Note = styled.div`
  margin-top: 20px;
  font-size: 14px;
`;

// Sample usage
const SampleBooks: Book[] = [
  { number: '01', name: '企業債収入', amount: 5000000 },
];

const App: React.FC = () => {
  return (
    <div>
      <PublicOfferingForm books={SampleBooks} />
    </div>
  );
};

export default App;