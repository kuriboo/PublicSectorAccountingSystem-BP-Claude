import React, { useState } from 'react';
import styled from 'styled-components';

// 製品分類インターフェース
interface Classification {
  id: string;
  name: string;
}

// プロパティインターフェース
interface ProductClassificationProps {
  classifications: Classification[];
  onOk?: (selectedClassifications: Classification[]) => void;
  onCancel?: () => void;
  onClose?: () => void;
}

// 製品分類選択コンポーネント
const ProductClassification: React.FC<ProductClassificationProps> = ({
  classifications,
  onOk,
  onCancel,
  onClose,
}) => {
  // 選択状態管理用のステート
  const [selectedClassifications, setSelectedClassifications] = useState<Classification[]>([]);

  // 分類選択ハンドラ
  const handleSelectClassification = (classification: Classification) => {
    setSelectedClassifications((prevState) => [...prevState, classification]);
  };

  // OKボタンクリックハンドラ
  const handleOk = () => {
    onOk?.(selectedClassifications);
  };

  // キャンセルボタンクリックハンドラ
  const handleCancel = () => {
    onCancel?.();
  };

  // 閉じるボタンクリックハンドラ
  const handleClose = () => {
    onClose?.();
  };

  return (
    <Container>
      <Header>
        <Title>製品番号分類検索</Title>
        <CloseButton onClick={handleClose}>×</CloseButton>
      </Header>
      <Content>
        <ClassificationInputs>
          <ClassificationInput>
            <label>品番大分類</label>
            <input type="text" defaultValue="001" />
            <span>大分類テスト1</span>
          </ClassificationInput>
          <ClassificationInput>
            <label>品番中分類</label>
            <input type="text" defaultValue="001" />
            <span>中分類テスト1</span>
          </ClassificationInput>
          <ClassificationInput>
            <label>品番小分類</label>
            <input type="text" defaultValue="001" />
            <span>小分類テスト1</span>
          </ClassificationInput>
          <ClassificationInput>
            <label>品番分類名称</label>
            <input type="text" />
          </ClassificationInput>
        </ClassificationInputs>
        <RadioInputs>
          <RadioInput>
            <input type="radio" id="majorLevel" name="level" />
            <label htmlFor="majorLevel">大分類レベル</label>
          </RadioInput>
          <RadioInput>
            <input type="radio" id="middleLevel" name="level" />
            <label htmlFor="middleLevel">中分類レベル</label>
          </RadioInput>
          <RadioInput>
            <input type="radio" id="minorLevel" name="level" />
            <label htmlFor="minorLevel">小分類レベル</label>
          </RadioInput>
        </RadioInputs>
        <SearchButton>表示</SearchButton>
        <ClassificationList>
          <ClassificationListHeader>
            <span>分類コード</span>
            <span>分類名称</span>
          </ClassificationListHeader>
          {classifications.map((classification) => (
            <ClassificationListItem
              key={classification.id}
              onClick={() => handleSelectClassification(classification)}
            >
              <span>{classification.id}</span>
              <span>{classification.name}</span>
            </ClassificationListItem>
          ))}
        </ClassificationList>
      </Content>
      <Footer>
        <OkButton onClick={handleOk}>OK</OkButton>
        <CancelButton onClick={handleCancel}>クリア</CancelButton>
        <CloseButton onClick={handleClose}>終了</CloseButton>
      </Footer>
    </Container>
  );
};

// スタイリング
const Container = styled.div`
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  padding: 10px;
  max-width: 600px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Content = styled.div`
  margin-bottom: 20px;
`;

const ClassificationInputs = styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 10px;
`;

const ClassificationInput = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  label {
    flex-basis: 120px;
  }

  input {
    flex-grow: 1;
    padding: 5px;
  }

  span {
    margin-left: 10px;
  }
`;

const RadioInputs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const RadioInput = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SearchButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ClassificationList = styled.div`
  margin-top: 20px;
`;

const ClassificationListHeader = styled.div`
  display: flex;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 5px;

  span {
    flex-basis: 50%;
  }
`;

const ClassificationListItem = styled.div`
  display: flex;
  cursor: pointer;
  padding: 5px;

  &:hover {
    background-color: #f0f0f0;
  }

  span {
    flex-basis: 50%;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const OkButton = styled.button`
  padding: 5px 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const CancelButton = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
`;

// サンプルデータ
const sampleClassifications: Classification[] = [
  { id: '001001001', name: '小分類テスト1' },
  { id: '001001002', name: '小分類テスト2' },
  { id: '001001003', name: '小分類テスト3' },
];

// サンプル使用コンポーネント
const App: React.FC = () => {
  const handleOk = (selectedClassifications: Classification[]) => {
    console.log('Selected classifications:', selectedClassifications);
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  const handleClose = () => {
    console.log('Close clicked');
  };

  return (
    <ProductClassification
      classifications={sampleClassifications}
      onOk={handleOk}
      onCancel={handleCancel}
      onClose={handleClose}
    />
  );
};

export default App;