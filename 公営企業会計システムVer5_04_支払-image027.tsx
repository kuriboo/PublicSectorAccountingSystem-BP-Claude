import React from 'react';
import styled from '@emotion/styled';

// 支出削除表のプロパティ型定義
type DeleteExpenseFormProps = {
  expenseId: number;
  onDelete: (id: number) => void;
};

// 支出削除表のスタイル定義
const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 4px;
  
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const DeleteExpenseForm: React.FC<DeleteExpenseFormProps> = ({ expenseId, onDelete }) => {
  // 削除ボタンのクリックハンドラ
  const handleDelete = () => {
    onDelete(expenseId);
  };

  return (
    <FormContainer>
      <FormTitle>支出削除表</FormTitle>
      <FormLabel>
        削除対象: {expenseId}
      </FormLabel>
      <FormButton onClick={handleDelete}>削除</FormButton>
    </FormContainer>
  );
};

// サンプルデータと使用例
const App: React.FC = () => {
  const sampleExpenseId = 1234;
  
  // 削除時の処理
  const handleDelete = (id: number) => {
    console.log(`Expense ${id} deleted`);
    // 実際の削除処理を実装
  };

  return (
    <div>
      <h1>支出削除表の使用例</h1>
      <DeleteExpenseForm expenseId={sampleExpenseId} onDelete={handleDelete} />
    </div>
  );
};

export default App;