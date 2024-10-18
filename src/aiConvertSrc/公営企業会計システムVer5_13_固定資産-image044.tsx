import React from 'react';
import styled from 'styled-components';

// 型定義
interface CompanyDataInputProps {
  onSave?: () => void;
  onCancel?: () => void;
}

// スタイル定義
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 5px;
  border-radius: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
  width: 120px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
`;

// コンポーネント定義
const CompanyDataInput: React.FC<CompanyDataInputProps> = ({ onSave, onCancel }) => {
  return (
    <Container>
      <Title>取得予測データ入力</Title>
      <Row>
        <Label>入力区分</Label>
        <div>
          <label>
            <input type="radio" name="inputType" value="register" /> 登録（登録番号）
          </label>
          <label>
            <input type="radio" name="inputType" value="code" /> 管理コード
          </label>
          <label>
            <input type="radio" name="inputType" value="name" /> 管理(とりまとめ)
          </label>
        </div>
      </Row>
      <Row>
        <Label>会計区分コード</Label>
        <Select defaultValue="予測用">
          <option>予測用</option>
        </Select>
      </Row>
      <Row>
        <Label>節</Label>
        <Input type="text" />
      </Row>
      <Row>
        <Label>細節</Label>
        <Input type="text" />
      </Row>
      <Row>
        <Label>明細</Label>
        <Input type="text" />
      </Row>
      <Row>
        <Label>積算</Label>
        <Input type="text" />
      </Row>
      <Row>
        <Label>部門</Label>
        <Input type="text" />
      </Row>
      <Row>
        <Label>地区</Label>
        <Input type="text" />
      </Row>
      <Row>
        <Label>債権方法</Label>
        <Select defaultValue="定額法">
          <option>定額法</option>
        </Select>
      </Row>
      <Row>
        <Label>耐用年数</Label>
        <Input type="text" />
      </Row>
      <Row>
        <Label>取得年月</Label>
        <Input type="text" />
      </Row>
      <Row>
        <Label>取得年度</Label>
        <Input type="text" />
      </Row>
      <Row>
        <Label>管轄局</Label>
        <Input type="text" />
      </Row>
      <Row>
        <Label>管轄係</Label>
        <Input type="text" />
      </Row>
      <Row>
        <Label>リース項目</Label>
        <div>
          <Label>契約方法</Label>
          <Input type="text" />
          <Label>期間</Label>
          <Input type="date" />
          ～
          <Input type="date" />
        </div>
      </Row>
      <Row>
        <Label>月数</Label>
        <Input type="text" value="000" readOnly />
      </Row>
      <Row>
        <Label>取得金額</Label>
        <Input type="text" value="0" readOnly />
      </Row>
      <Row>
        <Label>債務除外額</Label>
        <Input type="text" value="0" readOnly />
      </Row>
      <Row>
        <Label>残存率</Label>
        <Input type="text" value="000" readOnly />
      </Row>
      <Row>
        <Label>残存価額</Label>
        <Input type="text" value="0" readOnly />
      </Row>
      <Row>
        <Label>年間償却額</Label>
        <Input type="text" value="0" readOnly />
      </Row>
      <Row>
        <Label>限度率</Label>
        <Input type="text" value="000" readOnly />
      </Row>
      <Row>
        <Label>債務限度額</Label>
        <Input type="text" value="0" readOnly />
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
const sampleData = {
  // サンプルデータのプロパティを追加
};

// 使用例
const App: React.FC = () => {
  const handleSave = () => {
    // 保存処理
  };

  const handleCancel = () => {
    // キャンセル処理
  };

  return (
    <div>
      <h1>取得予測データ入力</h1>
      <CompanyDataInput onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default App;