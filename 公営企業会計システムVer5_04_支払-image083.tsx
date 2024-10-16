import React from 'react';
import styled from 'styled-components';

type BankStatementProps = {
  /**
   * 変更支出負担行為伺書(一般)とりまとめをチェックするかどうか
   */
  isGeneral: boolean;
  /**
   * 変更支出負担行為伺書(一般)をチェックするかどうか
   */
  isGeneralSingle: boolean;
};

/**
 * 印刷対象帳票を選択するコンポーネント
 */
const BankStatement: React.FC<BankStatementProps> = ({
  isGeneral,
  isGeneralSingle,
}) => {
  return (
    <Container>
      <Title>印刷対象帳票名</Title>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          checked={isGeneral}
        />
        <Label>変更支出負担行為伺書(一般)とりまとめ</Label>
      </CheckboxContainer>
      <CheckboxContainer>
        <Checkbox
          type="checkbox"
          checked={isGeneralSingle}
        />
        <Label>変更支出負担行為伺書(一般)</Label>
      </CheckboxContainer>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いたコンポーネントの使用例
const BankStatementExample: React.FC = () => {
  return (
    <BankStatement
      isGeneral={true}
      isGeneralSingle={false}
    />
  );
};

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const Title = styled.h3`
  margin: 0 0 16px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const Label = styled.label`
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default BankStatement;