// 検査項目コンポーネント
import React from 'react';
import styled from '@emotion/styled';

type InspectionItem = {
  code: string;
  name: string;
  price: number;
};

type InspectionItemsProps = {
  items: InspectionItem[];
};

const InspectionItemsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const InspectionItems: React.FC<InspectionItemsProps> = ({ items }) => {
  return (
    <InspectionItemsTable>
      <thead>
        <tr>
          <th>検査項目区分</th>
          <th>検査点数</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.code}>
            <td>{item.name}</td>
            <td>{item.price.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </InspectionItemsTable>
  );
};

// 検査項目選択コンポーネント 
type InspectionSelectorProps = {
  items: InspectionItem[];
  selectedItem: InspectionItem | null;
  onItemSelect: (item: InspectionItem) => void;
  onPriceChange: (price: number) => void;
};

const InspectionSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
`;

const InspectionItemSelector: React.FC<InspectionSelectorProps> = ({
  items,
  selectedItem,
  onItemSelect,
  onPriceChange,
}) => {
  const handleItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    const item = items.find((item) => item.code === selectedCode);
    if (item) {
      onItemSelect(item);
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price = Number(e.target.value);
    onPriceChange(price);
  };

  return (
    <InspectionSelector>
      <select value={selectedItem?.code} onChange={handleItemChange}>
        <option value="">選択してください</option>
        {items.map((item) => (
          <option key={item.code} value={item.code}>
            {item.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={selectedItem?.price || ''}
        onChange={handlePriceChange}
      />
      <button>行確定</button>
      <button>行キャンセル</button>
    </InspectionSelector>
  );
};

// 検査ランク選択コンポーネント
type InspectionRankSelectorProps = {
  ranks: string[];
  selectedRank: string;
  onRankChange: (rank: string) => void;
  coefficient: number;
  onCoefficientChange: (coefficient: number) => void;
};

const InspectionRankSelector: React.FC<InspectionRankSelectorProps> = ({
  ranks,
  selectedRank,
  onRankChange,
  coefficient,
  onCoefficientChange,
}) => {
  const handleRankChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onRankChange(e.target.value);
  };

  const handleCoefficientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onCoefficientChange(value);
  };

  return (
    <div>
      <select value={selectedRank} onChange={handleRankChange}>
        {ranks.map((rank) => (
          <option key={rank} value={rank}>
            {rank}
          </option>
        ))}
      </select>
      <input
        type="number"
        step="0.01"
        value={coefficient}
        onChange={handleCoefficientChange}
      />
      <button>自動計算</button>
    </div>
  );
};

// 検査項目コンポーネントの使用例
const InspectionItemsExample = () => {
  const inspectionItems: InspectionItem[] = [
    { code: '001', name: '施行能力', price: 15000 },
    { code: '002', name: '現場管理(諸手続)', price: 12000 },
    { code: '003', name: '施工者の熱意・努力', price: 20000 },
    { code: '004', name: '品質管理(資材)', price: 11000 },
    { code: '005', name: '施行計画・工程管理', price: 15000 },
    { code: '006', name: '出来形管理', price: 12000 },
    { code: '007', name: '完成(出来形)', price: 12000 },
  ];

  const [selectedItem, setSelectedItem] = React.useState<InspectionItem | null>(null);
  const [price, setPrice] = React.useState<number>(0);

  const ranks = ['001:A', '100:〜90'];
  const [selectedRank, setSelectedRank] = React.useState(ranks[0]);
  const [coefficient, setCoefficient] = React.useState<number>(97.0);

  return (
    <div>
      <h2>検査項目</h2>
      <InspectionItems items={inspectionItems} />
      
      <InspectionItemSelector
        items={inspectionItems}
        selectedItem={selectedItem}
        onItemSelect={setSelectedItem}
        onPriceChange={setPrice}
      />

      <InspectionRankSelector
        ranks={ranks}
        selectedRank={selectedRank}
        onRankChange={setSelectedRank}
        coefficient={coefficient}
        onCoefficientChange={setCoefficient}
      />
      <button>OK</button>
      <button>クリア</button>
      <button>キャンセル</button>
    </div>
  );
};

export default InspectionItemsExample;