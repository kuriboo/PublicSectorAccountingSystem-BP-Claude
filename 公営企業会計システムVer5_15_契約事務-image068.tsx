import React from 'react';
import styled from '@emotion/styled';

type SearchItem = {
  code: string;
  name: string;
  unitPrice: number;
};

type InspectionFormProps = {
  searchItems: SearchItem[];
  onSearch: (code: string) => void;
  onRegister: () => void;
  onCancel: () => void;
};

const InspectionForm: React.FC<InspectionFormProps> = ({
  searchItems,
  onSearch,
  onRegister,
  onCancel,
}) => {
  const [selectedCode, setSelectedCode] = React.useState('');
  const [unitPrice, setUnitPrice] = React.useState(0);
  const [rankCode, setRankCode] = React.useState('');
  const [totalPrice, setTotalPrice] = React.useState(0);

  // 検査項目選択時の処理
  const handleSelectCode = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const code = event.target.value;
    setSelectedCode(code);

    // 選択した検査項目の単価を取得
    const selectedItem = searchItems.find((item) => item.code === code);
    if (selectedItem) {
      setUnitPrice(selectedItem.unitPrice);
    } else {
      setUnitPrice(0);
    }
  };

  // 検査ランク選択時の処理
  const handleSelectRank = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRankCode(event.target.value);
  };

  // 検査点数変更時の処理
  const handleTotalPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const price = Number(event.target.value);
    setTotalPrice(price);
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>明細種別</Th>
            <Th>行削除</Th>
            <Th>検査点数</Th>
          </tr>
        </thead>
        <tbody>
          {searchItems.map((item) => (
            <tr key={item.code}>
              <Td>{item.code}: {item.name}</Td>
              <Td></Td>
              <Td>{item.unitPrice.toLocaleString()}</Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <SearchArea>
        <label>
          検査項目
          <select value={selectedCode} onChange={handleSelectCode}>
            <option value="">選択してください</option>
            {searchItems.map((item) => (
              <option key={item.code} value={item.code}>
                {item.code}:{item.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          検査点数
          <Input type="number" value={unitPrice} readOnly />
        </label>
        <Button onClick={() => onSearch(selectedCode)}>行確定</Button>
        <Button onClick={onCancel}>行キャンセル</Button>
      </SearchArea>

      <RankArea>
        <label>
          検査ランク
          <select value={rankCode} onChange={handleSelectRank}>
            <option value="">選択してください</option>
            <option value="001:A">001:A</option>
            <option value="100:~90">100:~90</option>
          </select>
        </label>
        <label>
          評点合計
          <Input type="number" value={totalPrice} onChange={handleTotalPriceChange} />
        </label>
        <Button onClick={onRegister}>自動計算</Button>
      </RankArea>

      <ButtonArea>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonArea>
    </Container>
  );
};

// サンプルデータ
const sampleData: SearchItem[] = [
  { code: '001', name: '施行能力', unitPrice: 15000 },
  { code: '002', name: '現場管理(請求率)', unitPrice: 12000 },
  { code: '003', name: '施工者の熱意・努力', unitPrice: 20000 },
  { code: '004', name: '品質管理(客先)', unitPrice: 11000 },
  { code: '005', name: '施行計画・工程管理', unitPrice: 15000 },  
  { code: '007', name: '出来形管理', unitPrice: 12000 },
  { code: '008', name: '完成(出来形)', unitPrice: 12000 },
];

// 表示用コンポーネント
const App: React.FC = () => {
  const handleSearch = (code: string) => {
    console.log('検索:', code);
  };

  const handleRegister = () => {
    console.log('登録');
  };

  const handleCancel = () => {
    console.log('キャンセル');
  };

  return (
    <InspectionForm
      searchItems={sampleData}
      onSearch={handleSearch}
      onRegister={handleRegister}
      onCancel={handleCancel}
    />
  );
};

export default App;

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const Th = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
`;

const SearchArea = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    margin-bottom: 8px;
  }

  select {
    margin-left: 8px;
  }
`;

const RankArea = styled.div`
  margin-bottom: 16px;

  label {
    display: block;
    margin-bottom: 8px;
  }

  select {
    margin-left: 8px;
  }
`;

const Input = styled.input`
  margin-left: 8px;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 8px;
`;

const ButtonArea = styled.div`
  text-align: center;
`;