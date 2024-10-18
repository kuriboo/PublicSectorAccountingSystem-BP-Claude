import React from 'react';
import styled from '@emotion/styled';

type DivisionSetting = {
  code: string;
  name: string;
  ratio: string;
};

type SessionManagementFormProps = {
  divisions: DivisionSetting[];
  onSubmit: () => void;
  onCancel: () => void;
  onClear: () => void;
};

const SessionManagementForm: React.FC<SessionManagementFormProps> = ({
  divisions,
  onSubmit,
  onCancel,
  onClear,
}) => {
  return (
    <StyledForm>
      <StyledHeading>セッション管理保守</StyledHeading>
      <StyledRadioGroup>
        <StyledRadio type="radio" id="register" name="action" value="register" />
        <label htmlFor="register">登録</label>
        <StyledRadio type="radio" id="update" name="action" value="update" />
        <label htmlFor="update">訂正</label>
        <StyledRadio type="radio" id="delete" name="action" value="delete" />
        <label htmlFor="delete">削除</label>
      </StyledRadioGroup>
      <div>
        <label>
          セッション制限方法
          <StyledSelect>
            <option value="">制限なし</option>
          </StyledSelect>
        </label>
      </div>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>大分類</StyledTableHeader>
            <StyledTableHeader>中分類</StyledTableHeader>
            <StyledTableHeader>小分類</StyledTableHeader>
            <StyledTableHeader>制限数</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {divisions.map((division, index) => (
            <tr key={index}>
              <StyledTableCell>{division.code}</StyledTableCell>
              <StyledTableCell>{division.name}</StyledTableCell>
              <StyledTableCell>{division.ratio}</StyledTableCell>
              <StyledTableCell>
                <StyledInput type="number" min="1" />
              </StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <StyledButtonGroup>
        <StyledButton type="button" onClick={onSubmit}>
          OK
        </StyledButton>
        <StyledButton type="button" onClick={onClear}>
          クリア
        </StyledButton>
        <StyledButton type="button" onClick={onCancel}>
          終了
        </StyledButton>
      </StyledButtonGroup>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StyledHeading = styled.h2`
  margin-bottom: 20px;
`;

const StyledRadioGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const StyledRadio = styled.input`
  margin-right: 5px;
`;

const StyledSelect = styled.select`
  padding: 5px;
  margin-left: 10px;
`;

const StyledTable = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
`;

const StyledTableHeader = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
`;

const StyledTableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

const StyledInput = styled.input`
  width: 60px;
  padding: 5px;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// サンプルデータ
const sampleDivisions: DivisionSetting[] = [
  { code: '001', name: '所属大分類名称', ratio: '所属中分類名称' },
  { code: '002', name: '所属中分類名称', ratio: '総務課' },
];

const SessionManagementFormSample: React.FC = () => {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const handleCancel = () => {
    console.log('Form canceled');
  };

  const handleClear = () => {
    console.log('Form cleared');
  };

  return (
    <SessionManagementForm
      divisions={sampleDivisions}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onClear={handleClear}
    />
  );
};

export default SessionManagementFormSample;