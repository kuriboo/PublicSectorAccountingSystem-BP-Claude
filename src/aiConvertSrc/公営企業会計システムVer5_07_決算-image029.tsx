import React from 'react';
import styled from 'styled-components';

// 備考印字区分の選択肢
const printRemarkOptions = [
  { value: '0', label: '備考名称・金額印字' },
  { value: '1', label: '備考名称のみ印字' },
  { value: '2', label: '備考印字なし' },
];

type Props = {
  year: string;
  officeName: string;
  printRemarkType: string;
  printRemarkPrice: string;
  processingContent: string;
  onChangeYear: (value: string) => void;
  onChangeOfficeName: (value: string) => void;
  onChangePrintRemarkType: (value: string) => void; 
  onChangePrintRemarkPrice: (value: string) => void;
  onChangeProcessingContent: (value: string) => void;
  onClickOK: () => void;
  onClickClear: () => void;
  onClickCancel: () => void;
};

const AccountTransferDialog: React.FC<Props> = ({
  year,
  officeName,
  printRemarkType,
  printRemarkPrice,
  processingContent,
  onChangeYear,
  onChangeOfficeName,
  onChangePrintRemarkType,
  onChangePrintRemarkPrice,
  onChangeProcessingContent,
  onClickOK,
  onClickClear,
  onClickCancel,
}) => {
  return (
    <Container>
      <Row>
        <Label>年度</Label>
        <Input value={year} onChange={e => onChangeYear(e.target.value)} />
      </Row>
      <Row>
        <Label>仕訳科目略称</Label>
        <Input value={officeName} onChange={e => onChangeOfficeName(e.target.value)} />
      </Row>
      <Row>
        <Label>備考印字区分</Label>
        <Select
          value={printRemarkType}
          onChange={e => onChangePrintRemarkType(e.target.value)}
        >
          {printRemarkOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Row>
      <Row>
        <Label>備考印字金額</Label>
        <Input
          value={printRemarkPrice}
          onChange={e => onChangePrintRemarkPrice(e.target.value)}
        />
      </Row>
      <Row>
        <Label>処理概要</Label>
        <Textarea
          value={processingContent}
          onChange={e => onChangeProcessingContent(e.target.value)}
          placeholder="備考に印字する内容を入力してください。"
        />
      </Row>
      <ButtonContainer>
        <Button onClick={onClickOK}>OK</Button>
        <Button onClick={onClickClear}>クリア</Button>
        <Button onClick={onClickCancel}>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータ
const sampleData = {
  year: '平成29',
  officeName: '小道村金',
  printRemarkType: '0',
  printRemarkPrice: '10,000',
  processingContent: '備考に印字する内容を入力してください。',
};

const AccountTransferDialogExample: React.FC = () => {
  const [year, setYear] = React.useState(sampleData.year);
  const [officeName, setOfficeName] = React.useState(sampleData.officeName);
  const [printRemarkType, setPrintRemarkType] = React.useState(sampleData.printRemarkType);
  const [printRemarkPrice, setPrintRemarkPrice] = React.useState(sampleData.printRemarkPrice);
  const [processingContent, setProcessingContent] = React.useState(sampleData.processingContent);

  const handleClickOK = () => {
    console.log('OK clicked');
  };

  const handleClickClear = () => {
    setYear('');
    setOfficeName('');
    setPrintRemarkType('0');
    setPrintRemarkPrice('');
    setProcessingContent('');
  };

  const handleClickCancel = () => {
    console.log('Cancel clicked');
  };

  return (
    <AccountTransferDialog
      year={year}
      officeName={officeName}
      printRemarkType={printRemarkType}
      printRemarkPrice={printRemarkPrice}
      processingContent={processingContent}
      onChangeYear={setYear}
      onChangeOfficeName={setOfficeName}
      onChangePrintRemarkType={setPrintRemarkType}
      onChangePrintRemarkPrice={setPrintRemarkPrice}
      onChangeProcessingContent={setProcessingContent}
      onClickOK={handleClickOK}
      onClickClear={handleClickClear}
      onClickCancel={handleClickCancel}
    />
  );
};

export default AccountTransferDialogExample;

// スタイリング
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const Label = styled.label`
  flex: 1;
  margin-right: 8px;
`;

const Input = styled.input`
  flex: 2;
  padding: 4px;
`;

const Select = styled.select`
  flex: 2;
  padding: 4px;
`;

const Textarea = styled.textarea`
  flex: 2;
  padding: 4px;
  resize: vertical;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 8px;
  padding: 4px 16px;
  cursor: pointer;
`;