import React from 'react';
import styled from 'styled-components';

// 固定資産マスタの型定義
interface FixedAssetMasterProps {
  assetNumber: string;
  assetName: string;
  assetType: string;
  acquisitionDate: string;
  depreciationStartDate: string;
  acquisitionCost: number;
  usefulLife: number;
  location: string;
  manager: string;
  startDate: string;
  endDate: string;
  onSave: () => void;
  onCancel: () => void;
}

// 固定資産マスタコンポーネント
const FixedAssetMaster: React.FC<FixedAssetMasterProps> = ({
  assetNumber,
  assetName,
  assetType,
  acquisitionDate,
  depreciationStartDate,
  acquisitionCost,
  usefulLife,
  location,
  manager,
  startDate,
  endDate,
  onSave,
  onCancel,
}) => {
  return (
    <Container>
      <h2>固定資産マスタ</h2>
      <Row>
        <Label>資産番号</Label>
        <Input value={assetNumber} readOnly />
      </Row>
      <Row>
        <Label>資産名称</Label>
        <Input value={assetName} />
      </Row>
      <Row>
        <Label>資産区分</Label>
        <Select value={assetType}>
          <option value="001">取得</option>
          <option value="002">水道施設管理センター</option>  
        </Select>
      </Row>
      <Row>
        <Label>施設</Label>
        <Input value="水道施設管理センター" readOnly />
      </Row>
      <Row>
        <Label>名称</Label>
        <Input value="水道施設管理システム" readOnly />
      </Row>
      <Row>
        <Label>取得年月日</Label>
        <Input type="date" value={acquisitionDate} />
      </Row>
      <Row>  
        <Label>償却開始年月日</Label>
        <Input type="date" value={depreciationStartDate} />
      </Row>
      <Row>
        <Label>取得価額</Label> 
        <Input type="number" value={acquisitionCost} />
      </Row>
      <Row>
        <Label>耐用年数</Label>
        <Input type="number" value={usefulLife} />
      </Row>
      <Row>
        <Label>設置場所</Label>
        <Input value={location} />  
      </Row>
      <Row>
        <Label>管理者</Label>
        <Input value={manager} />
      </Row>
      <Row>  
        <Label>施工年度</Label>
        <Input value="" />
      </Row>
      <Row>
        <Label>竣工年月日</Label> 
        <Input type="date" value="" />
      </Row>
      <Row>
        <Label>備考</Label>
        <TextArea />
      </Row>
      <ButtonContainer>
        <Button onClick={onSave}>OK</Button>
        <Button onClick={onCancel}>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: FixedAssetMasterProps = {
  assetNumber: '8002400',
  assetName: '',
  assetType: '001',
  acquisitionDate: '',
  depreciationStartDate: '',
  acquisitionCost: 5000000,
  usefulLife: 0,
  location: '',
  manager: '',
  startDate: '',
  endDate: '',
  onSave: () => console.log('Saved'),
  onCancel: () => console.log('Canceled'), 
};

// 使用例
const App: React.FC = () => {
  return (
    <div>
      <h1>固定資産管理システム</h1>  
      <FixedAssetMaster {...sampleData} />
    </div>
  );
};

export default App;

// スタイリング
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  width: 150px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
`;

const Select = styled.select`
  flex: 1;
  padding: 5px;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 5px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
`;