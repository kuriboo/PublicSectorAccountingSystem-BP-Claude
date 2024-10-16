import React from 'react';
import styled from '@emotion/styled';

interface ModalProps {
  onSubmit: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ onSubmit, onCancel }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <h2>修繕履歴管理明細編集</h2>
        <FormGroup>
          <label>資産番号</label>
          <input type="text" defaultValue="70012" />
        </FormGroup>
        <FormGroup>
          <label>資産名称</label>
          <input type="text" defaultValue="ネットフェンス新設工事" />
        </FormGroup>
        <FormGroup>
          <label>範囲区分</label>
          <select defaultValue="修繕">
            <option>修繕</option>
          </select>
        </FormGroup>
        <FormGroup>
          <label>着手年月日</label>
          <input type="date" />
        </FormGroup>
        <FormGroup>
          <label>完了年月日</label>
          <input type="date" />
        </FormGroup>
        <FormGroup>
          <label>負担区分</label>
          <select defaultValue="修繕">
            <option>修繕</option>
          </select>
        </FormGroup>
        <FormGroup>
          <label>修繕内容</label>
          <textarea rows={4} />
        </FormGroup>
        <FormGroup>
          <label>備考</label>
          <textarea rows={4} />
        </FormGroup>
        <TaxGroup>
          <TaxItem>
            <label>税込額</label>
            <input type="number" defaultValue={0} />
          </TaxItem>
          <TaxItem>
            <label>消費税率</label>
            <select defaultValue="8">
              <option>8</option>
            </select>
            %
          </TaxItem>
        </TaxGroup>
        <ButtonGroup>
          <label>
            <input type="checkbox" />
            検査
          </label>
          <label>
            <input type="checkbox" />
            完了
          </label>
          <button type="button" onClick={onSubmit}>OK</button>
          <button type="button" onClick={onCancel}>クリア</button>
          <button type="button">キャンセル</button>
        </ButtonGroup>
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  width: 600px;

  h2 {
    margin-top: 0;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 5px;
  }
`;

const TaxGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

const TaxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  input,
  select {
    width: 100px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  label {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  button {
    padding: 5px 10px;
  }
`;

// Usage example
const App: React.FC = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  const handleCancel = () => {
    // Handle cancel action
  };

  return (
    <div>
      <h1>修繕履歴管理</h1>
      <Modal onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
};

export default App;