以下は、指定された要件に従って作成したNext.js + TypeScriptのコンポーネントです。

```tsx
import React from 'react';
import styled from 'styled-components';

// 分類名とコードのインターフェース
interface ClassificationItem {
  name: string;
  code: string;
}

// コンポーネントのプロパティ
interface SplitSettingProps {
  classifications: ClassificationItem[];
  onCodeChange: (index: number, code: string) => void;
}

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;
  width: 100px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 200px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// 分類設定コンポーネント
const SplitSetting: React.FC<SplitSettingProps> = ({ classifications, onCodeChange }) => {
  return (
    <Container>
      {classifications.map((item, index) => (
        <Row key={index}>
          <Label>{item.name}</Label>
          <Input
            type="text"
            value={item.code}
            onChange={(e) => onCodeChange(index, e.target.value)}
          />
        </Row>
      ))}
      <Row>
        <Button>確定</Button>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </Row>
    </Container>
  );
};

// サンプルデータ
const sampleData: ClassificationItem[] = [
  { name: '総務課', code: '0000001' },
  { name: '営業課', code: '0000002' },
  { name: '給排水課', code: '0000003' },
  { name: '水道管設備課', code: '0000004' },
  { name: '水道建設課', code: '0000005' },
  { name: '水道用センター', code: '0000006' },
  { name: '経営企画課', code: '0000007' },
];

// 使用例
const SplitSettingExample: React.FC = () => {
  const handleCodeChange = (index: number, code: string) => {
    // コード変更時の処理
    console.log(`Code changed at index ${index}: ${code}`);
  };

  return <SplitSetting classifications={sampleData} onCodeChange={handleCodeChange} />;
};

export default SplitSettingExample;
```

このコンポーネントは、分類名とコードの一覧を表示し、コードの編集と確定、キャンセル等のボタンを提供します。`classifications`プロパティに分類名とコードの配列を渡し、`onCodeChange`プロパティにコード変更時のコールバック関数を指定します。

コンポーネント内では、styled-componentsを使用してスタイリングを行っており、レスポンシブデザインにも対応しています。また、サンプルデータを用いた使用例も同じファイル内に実装しています。

例外処理としては、分類名やコードが空の場合の処理は含まれていませんが、必要に応じて追加することができます。