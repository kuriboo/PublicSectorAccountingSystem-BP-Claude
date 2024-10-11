import React from 'react';
import styled from 'styled-components';

// 工事台帳登録のプロパティの型定義
type ConstructionRegisterProps = {
  constructionCode?: string; // 工事コード
  constructionName?: string; // 工事名称
  department?: string; // 部署
  fiscalYear?: string; // 年度
  contractorName?: string; // 業者名
  contractorCode?: string; // 業者コード
  factory?: string; // 工場
  budget?: number; // 予算
  orderDate?: string; // 発注日
  completionDate?: string; // 完了日
  paymentMethod?: string; // 支払方法
  estimatedAmount?: number; // 請負金額
  accountTitle?: string; // 勘定科目
  remarks?: string; // 備考
  onSave?: () => void; // 保存ボタン押下時の処理
  onClose?: () => void; // 終了ボタン押下時の処理
};

// 工事台帳登録コンポーネント
const ConstructionRegister: React.FC<ConstructionRegisterProps> = ({
  constructionCode = '',
  constructionName = '',
  department = '',
  fiscalYear = '',
  contractorName = '',
  contractorCode = '',
  factory = '',
  budget = 0,
  orderDate = '',
  completionDate = '',
  paymentMethod = '',
  estimatedAmount = 0,
  accountTitle = '',
  remarks = '',
  onSave,
  onClose,
}) => {
  return (
    <Container>
      <Title>工事台帳登録</Title>
      <Grid>
        <Label>工事コード</Label>
        <Input value={constructionCode} readOnly />
        <Label>工事名称</Label>
        <Input value={constructionName} />
      </Grid>
      <Grid>
        <Label>部署</Label>
        <Input value={department} />
        <Label>年度</Label>
        <Input value={fiscalYear} />
      </Grid>
      <Grid>
        <Label>業者コード</Label>
        <Input value={contractorCode} />
        <Label>業者名</Label>
        <Input value={contractorName} />
      </Grid>
      <Grid>
        <Label>工場</Label>
        <Input value={factory} />
        <Label>予算</Label>
        <Input type="number" value={budget} />
      </Grid>
      <Grid>
        <Label>発注日</Label>
        <Input type="date" value={orderDate} />
        <Label>完了日</Label>
        <Input type="date" value={completionDate} />
      </Grid>
      <Grid>
        <Label>支払方法</Label>
        <Input value={paymentMethod} />
        <Label>請負金額</Label>
        <Input type="number" value={estimatedAmount} />
      </Grid>
      <Label>勘定科目</Label>
      <Input value={accountTitle} />
      <Label>備考</Label>
      <Input value={remarks} />
      <ButtonContainer>
        <Button onClick={onSave}>保存</Button>
        <Button onClick={onClose}>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData: ConstructionRegisterProps = {
  constructionCode: 'C001',
  constructionName: '工事A',
  department: '部署X',
  fiscalYear: '2023',
  contractorName: '業者A',
  contractorCode: 'CT001',
  factory: '工場1',
  budget: 1000000,
  orderDate: '2023-09-01',
  completionDate: '2023-12-31',
  paymentMethod: '銀行振込',
  estimatedAmount: 900000,
  accountTitle: '工事費',
  remarks: '備考',
};

// 使用例
const App: React.FC = () => {
  return (
    <ConstructionRegister
      {...sampleData}
      onSave={() => console.log('保存ボタンが押されました')}
      onClose={() => console.log('終了ボタンが押されました')}
    />
  );
};

// スタイリング
const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 8px;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default ConstructionRegister;