import React from 'react';
import styled from '@emotion/styled';

type OrderStatusSelectionProps = {
  /** 支出負担行為伺書を表示するかどうか */
  showExpenseOrder?: boolean;
  /** 後収調書を表示するかどうか */
  showLatePaymentOrder?: boolean;
  /** 発注品目明細書を表示するかどうか */
  showOrderItemDetails?: boolean;
  /** OKボタンをクリックした時のハンドラ */
  onOk?: () => void;
  /** クリアボタンをクリックした時のハンドラ */
  onClear?: () => void;
  /** キャンセルボタンをクリックした時のハンドラ */
  onCancel?: () => void;
};

const OrderStatusSelection: React.FC<OrderStatusSelectionProps> = ({
  showExpenseOrder = true,
  showLatePaymentOrder = false, 
  showOrderItemDetails = false,
  onOk,
  onClear,
  onCancel,
}) => {
  return (
    <Container>
      <Title>印刷対象帳票等を選択</Title>
      <Options>
        {showExpenseOrder && (
          <Option>
            <input type="checkbox" defaultChecked /> 支出負担行為伺書(物品)
          </Option>
        )}
        {showLatePaymentOrder && (
          <Option>
            <input type="checkbox" /> 後収調書  
          </Option>
        )}
        {showOrderItemDetails && (
          <Option>
            <input type="checkbox" /> 発注品目明細書
          </Option>  
        )}
      </Options>
      <ButtonContainer>
        <Button onClick={onOk}>OK</Button>
        <Button onClick={onClear}>クリア</Button>
        <Button onClick={onCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  width: 400px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.label`
  margin-bottom: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  margin-left: 8px;
`;

// Usage example
const App: React.FC = () => {
  return (
    <OrderStatusSelection
      showExpenseOrder={true}
      showLatePaymentOrder={true} 
      showOrderItemDetails={true}
      onOk={() => console.log('OK clicked')}
      onClear={() => console.log('Clear clicked')}
      onCancel={() => console.log('Cancel clicked')}
    />
  );
}

export default OrderStatusSelection;