import React from 'react';
import styled from '@emotion/styled';

type CsvUploadFormProps = {
  onSubmit: (fromCsv: string, toCsv: string, csvText: string) => void;
};

const CsvUploadForm: React.FC<CsvUploadFormProps> = ({ onSubmit }) => {
  const [fromCsv, setFromCsv] = React.useState('');
  const [toCsv, setToCsv] = React.useState('');
  const [csvText, setCsvText] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(fromCsv, toCsv, csvText);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Instruction>
        適格請求書登録番号を相手先マスタに一括で登録します。
        <ol>
          <li>適格請求書番号を登録したい相手先マスタの情報を当画面から、CSVファイルで出力してください。</li>
          <li>出力したCSVファイルを専用のEXCELファイル(適格請求書登録番号設定ツール)に取り込みます。</li>
          <li>専用のEXCELファイル(適格請求書登録番号設定ツールより) 出力したCSVファイルを当画面から取り込んでください。</li>
        </ol>
        ※会計システムにすでに登録されている相手先情報のみ適格請求書番号、登録日が更新されます。<br />
        ※適格請求書登録番号がすでに登録されている相手先について、 再度取り込み を行っても上書きはされません。 CSVファイルの適格請求書登録番号が空欄の場合は選択式
      </Instruction>

      <CsvFields>
        <CsvField>
          <CsvLabel>相手先</CsvLabel>
          <CsvInput
            type="text"
            value={fromCsv}
            onChange={(e) => setFromCsv(e.target.value)}
          />
          <span> 〜 </span>
          <CsvInput
            type="text"
            value={toCsv}
            onChange={(e) => setToCsv(e.target.value)}
          />
        </CsvField>

        <RadioButtons>
          <RadioButton>
            <input type="radio" id="unregistered" name="csvType" value="unregistered" />
            <label htmlFor="unregistered">未登録のみ</label>
          </RadioButton>
          <RadioButton>
            <input type="radio" id="registered" name="csvType" value="registered" />
            <label htmlFor="registered">登録済のみ</label>  
          </RadioButton>
          <RadioButton>
            <input type="radio" id="all" name="csvType" value="all" />
            <label htmlFor="all">全て</label>
          </RadioButton>
        </RadioButtons>
        
        <CsvOutputButton>CSV出力</CsvOutputButton>
      </CsvFields>

      <CsvImport>
        <CsvImportLabel>CSVファイル取込</CsvImportLabel>
        <CsvImportTextarea
          value={csvText}
          onChange={(e) => setCsvText(e.target.value)}
          placeholder="適格請求書番号が空欄の場合、登録済の番号を削除する。"
        />
        <CsvImportButton>取込実行</CsvImportButton>
      </CsvImport>

      <Buttons>
        <ClearButton type="reset">クリア</ClearButton>
        <SubmitButton type="submit">終了</SubmitButton>
      </Buttons>
    </Form>
  );
};

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const Instruction = styled.div`
  font-size: 0.9rem;
  line-height: 1.5;
  ol {
    padding-left: 1.5rem;
  }
`;

const CsvFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CsvField = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CsvLabel = styled.label`
  flex: 0 0 80px;
`;

const CsvInput = styled.input`
  flex: 1;
  padding: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const RadioButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
`;

const CsvOutputButton = styled.button`
  padding: 0.25rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;
`;

const CsvImport = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CsvImportLabel = styled.label`
  font-weight: bold;
`;

const CsvImportTextarea = styled.textarea`
  height: 100px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CsvImportButton = styled.button`
  padding: 0.25rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const ClearButton = styled.button`
  padding: 0.25rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  padding: 0.25rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f0f0;
  cursor: pointer;
`;

// Sample usage
const SampleCsvUploadForm = () => {
  const handleSubmit = (fromCsv: string, toCsv: string, csvText: string) => {
    console.log('From CSV:', fromCsv);
    console.log('To CSV:', toCsv);
    console.log('CSV Text:', csvText);
  };

  return <CsvUploadForm onSubmit={handleSubmit} />;
};

export default SampleCsvUploadForm;