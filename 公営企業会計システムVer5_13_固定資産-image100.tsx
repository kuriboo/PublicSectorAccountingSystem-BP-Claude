import React from 'react';
import styled from '@emotion/styled';

type Master = {
  code: string;
  name: string;
}

type MasterCodeSearchProps = {
  masterName: string;
  masters: Master[];
  onSelectMaster: (master: Master) => void;
}

const MasterCodeSearch: React.FC<MasterCodeSearchProps> = ({ masterName, masters, onSelectMaster }) => {
  const [searchCode, setSearchCode] = React.useState('');
  const [searchName, setSearchName] = React.useState('');

  // 検索条件に一致するマスタデータを抽出
  const filteredMasters = masters.filter(master =>
    master.code.includes(searchCode) && master.name.includes(searchName)
  );

  return (
    <Container>
      <Title>ユーザー固定資産名称マスタ</Title>
      <SearchContainer>
        <Label>マスタ選択</Label>
        <Select value={masterName} onChange={e => onSelectMaster(masters.find(m => m.name === e.target.value)!)}>
          {masters.map(master => (
            <option key={master.code} value={master.name}>{master.name}</option>
          ))}
        </Select>
      </SearchContainer>
      <InputContainer>
        <Input
          type="text"
          value={searchCode}
          onChange={e => setSearchCode(e.target.value)}
          placeholder="構造物符号コード"
        />
        <Input
          type="text"
          value={searchName}
          onChange={e => setSearchName(e.target.value)}
          placeholder="内容"
        />
      </InputContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>構造物符号コード</TableHeader>
              <TableHeader>内容</TableHeader>
            </tr>
          </thead>
          <tbody>
            {filteredMasters.map(master => (
              <tr key={master.code}>
                <TableData>{master.code}</TableData>
                <TableData>{master.name}</TableData>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプル利用コンポーネント
const SampleMasterCodeSearch = () => {
  const sampleMasters: Master[] = [
    { code: '000001', name: '鉄筋コンクリート造り' },
    { code: '000002', name: 'レンガ・ブロック造り' },
    { code: '000003', name: '木造モルタル造り' },
    { code: '000004', name: 'スレート造り' },
    { code: '000005', name: 'プレハブ・簡易建物' },
    { code: '000006', name: 'その他建物' },
    { code: '000007', name: '簡易附属設備' },
    { code: '000008', name: 'ポンプ' },
  ];

  const handleSelectMaster = (master: Master) => {
    console.log(`Selected master: ${master.code} - ${master.name}`);
  };

  return (
    <MasterCodeSearch
      masterName="構造物符号マスタ" 
      masters={sampleMasters}
      onSelectMaster={handleSelectMaster}
    />
  );
};

export default SampleMasterCodeSearch;

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 5px;
  margin-right: 10px;

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const TableContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  background-color: #f2f2f2;
`;

const TableData = styled.td`
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;