import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';

type ContractInfo = {
  yearFrom: string;
  yearTo: string;
  kikanYearFrom: string;
  kikanYearTo: string;
  addText: string;
};

type Props = {
  onSubmit: (data: ContractInfo) => void;
};

const RegistrationForm: React.FC<Props> = ({ onSubmit }) => {
  const [contractInfo, setContractInfo] = useState<ContractInfo>({
    yearFrom: '',
    yearTo: '',
    kikanYearFrom: '',
    kikanYearTo: '',
    addText: '',
  });

  // フォーム入力時の処理
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContractInfo({ ...contractInfo, [name]: value });
  };

  // 送信ボタン押下時の処理
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(contractInfo);
  };

  return (
    <FormWrapper>
      <FormTitle>契約執行伺</FormTitle>
      <InputWrapper>
        <InputLabel>物件</InputLabel>
        <InputText
          type="text"
          name="addText"
          value={contractInfo.addText}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputRowWrapper>
        <InputWrapper>
          <InputLabel>起案年月日</InputLabel>
          <InputDate
            type="date"
            name="kikanYearFrom"
            value={contractInfo.kikanYearFrom}
            onChange={handleChange}
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabel>決裁年月日</InputLabel>
          <InputDate
            type="date"
            name="kikanYearTo"
            value={contractInfo.kikanYearTo}
            onChange={handleChange}
          />
        </InputWrapper>
      </InputRowWrapper>
      <InputRowWrapper>
        <InputWrapper>
          <InputLabel>起案者</InputLabel>
          <InputSelect>
            <option>文章マスタ 位置No3 入札書に記載</option>
            <option>文章マスタ 位置No3 その他</option>
          </InputSelect>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>決裁者</InputLabel>
          <InputSelect>
            <option>文章マスタ 位置No3 添付書類3</option>
            <option>文章マスタ 位置No3 添付書類4</option>
            <option>文章マスタ 位置No3 添付書類5</option>
          </InputSelect>
        </InputWrapper>
      </InputRowWrapper>
      <InputRowWrapper>
        <InputWrapper>
          <InputLabel>特記事項1</InputLabel>
          <InputSelect>
            <option>文章マスタ 位置No4 入札保証金</option>
            <option>文章マスタ 位置No4 契約保証金</option>
            <option>文章マスタ 位置No4 特記事項3</option>
            <option>文章マスタ 位置No4 特記事項4</option>
            <option>文章マスタ 位置No4 特記事項5</option>
          </InputSelect>        
        </InputWrapper>
        <InputWrapper>
          <InputLabel>備考</InputLabel>
          <InputSelect>
            <option>文章マスタ 位置No5 別紙参照</option>
            <option>文章マスタ 位置No5 備考2</option>
            <option>文章マスタ 位置No5 備考3</option>
            <option>文章マスタ 位置No5 備考4</option>
            <option>文章マスタ 位置No5 備考5</option>
          </InputSelect>
        </InputWrapper>
      </InputRowWrapper>
      <SubmitButton type="submit" onClick={handleSubmit}>
        OK
      </SubmitButton>
    </FormWrapper>
  );
};

// スタイリング
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;

const InputRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  font-weight: bold;
`;

const InputText = styled.input`
  width: 100%;
  padding: 5px;
`;

const InputDate = styled.input`
  width: 100%;
  padding: 5px;
`;

const InputSelect = styled.select`
  width: 100%;
  padding: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export default RegistrationForm;

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const handleSubmit = (data: ContractInfo) => {
    console.log('Submitted data:', data);
  };

  return <RegistrationForm onSubmit={handleSubmit} />;
};

export { SampleUsage };