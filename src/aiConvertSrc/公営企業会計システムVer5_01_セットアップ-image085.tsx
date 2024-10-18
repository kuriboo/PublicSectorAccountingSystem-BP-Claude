import React from 'react';
import styled from 'styled-components';

// 募集条件の型定義
type CollectConditionProps = {
  collectNumber?: number;
  projectName?: string;
  cf?: number;
  goldPoint?: number;
  ageLimit?: number;
  indent?: boolean;
  impressionLimit?: boolean;
};

// 募集条件コンポーネント
const CollectCondition: React.FC<CollectConditionProps> = ({
  collectNumber = 20,
  projectName = '当年度純利益',
  cf = 1,
  goldPoint = 1,
  ageLimit = 1,
  indent = false,
  impressionLimit = false,
}) => {
  return (
    <Container>
      <Title>募集条件</Title>
      <Content>
        <Row>
          <RowTitle>集計番号</RowTitle>
          <RowValue>{collectNumber}</RowValue>
        </Row>
        <Row>
          <RowTitle>項目名称1</RowTitle>
          <RowValue>{projectName}</RowValue>
        </Row>
        <Row>
          <RowTitle>CF区分</RowTitle>
          <RowValue>{cf === 1 ? '業務活動によるキャッシュ・フロー' : '-'}</RowValue>
        </Row>
        <Row>
          <RowTitle>金額(千円区分)</RowTitle>
          <RowValue>{goldPoint === 1 ? '各社千円・金額に印す' : '-'}</RowValue>
        </Row>
        <Row>
          <RowTitle>改行区分</RowTitle>
          <RowValue>{ageLimit === 1 ? '1行改行' : '-'}</RowValue>
        </Row>
        <Row>
          <RowTitle>インデント</RowTitle>
          <RowValue>{indent ? '☑' : '□'} 帳票出力無し</RowValue>
        </Row>
        <ButtonArea>
          <Button color="#2196f3">編集</Button>
          <Button color="#f44336">行削除</Button>
        </ButtonArea>
      </Content>
      
      <TableTitle>集計先行番号</TableTitle>
      <Table>
        <TableRow>
          <TableHeader>集計先行番号</TableHeader>
          <TableHeader>加減区分</TableHeader>
        </TableRow>
        <TableRow>
          <TableData>260</TableData>
          <TableData>+</TableData>
        </TableRow>
      </Table>
      
      <Footer>
        <FooterButton>OK</FooterButton>
        <FooterButton>クリア</FooterButton>
        <FooterButton>キャンセル</FooterButton>
      </Footer>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  return (
    <CollectCondition
      collectNumber={10}
      projectName="売上高"
      cf={2}
      goldPoint={2}
      ageLimit={2}
      indent={true}
      impressionLimit={true}
    />
  );
};

// スタイリング
const Container = styled.div`
  font-family: sans-serif;
  border: 1px solid #ccc;
  padding: 16px;
  width: 400px;
`;

const Title = styled.h2`
  margin: 0 0 16px;
`;

const Content = styled.div`
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const RowTitle = styled.div`
  width: 180px;
`;

const RowValue = styled.div`
  flex: 1;
`;

const ButtonArea = styled.div`
  text-align: right;
  margin-top: 16px;
`;

const Button = styled.button<{ color: string }>`
  background-color: ${(props) => props.color};
  color: #fff;
  border: none;
  padding: 6px 16px;
  margin-left: 8px;
  cursor: pointer;
`;

const TableTitle = styled.div`
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeader = styled.th`
  background-color: #ddd;
  padding: 8px;
  text-align: left;
`;

const TableData = styled.td`
  padding: 8px;
`;

const Footer = styled.div`
  text-align: center;
`;

const FooterButton = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
`;

export default CollectCondition;