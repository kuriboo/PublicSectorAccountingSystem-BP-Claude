import React from 'react';
import styled from '@emotion/styled';

type PrintSettingProps = {
  // 予定負担行為伺書(一般)を印刷するかどうか
  printYoteiHutanGyomuUchi: boolean;
  // 予定負担行為伺書(一般)とりまとめを印刷するかどうか
  printYoteiHutanGyomuUchiTorimatome: boolean;
  // 入札執行依頼書(一般)を印刷するかどうか
  printNyusatsuShikkoIraisho: boolean;
  // 再発行中の書類名
  reissuingDocumentName: string;
  // 再発行中の部数
  reissuingCopies: number;
  // 変更回数指定の指定方法（'指定無' | '指定'）
  changeCountSpecifiedBy: 'None' | 'Specified';
  // 変更回数の指定値
  changeCountValue: number;
  // 訂正回数指定の指定方法（'指定無' | '指定'）
  correctionCountSpecifiedBy: 'None' | 'Specified';
  // 訂正回数の指定値  
  correctionCountValue: number;
};

const Container = styled.div`
  padding: 8px;
  background-color: #f0f0f0;
`;

const DocumentTypeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const DocumentTypeItem = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CountInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CountInput = styled.input`
  width: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const Button = styled.button`
  padding: 4px 8px;
`;

const PrintSetting: React.FC<PrintSettingProps> = ({
  printYoteiHutanGyomuUchi,
  printYoteiHutanGyomuUchiTorimatome,
  printNyusatsuShikkoIraisho,
  reissuingDocumentName,
  reissuingCopies,
  changeCountSpecifiedBy,
  changeCountValue,
  correctionCountSpecifiedBy,
  correctionCountValue,
}) => {
  return (
    <Container>
      <DocumentTypeList>
        <DocumentTypeItem>
          <input type="checkbox" checked={printYoteiHutanGyomuUchi} readOnly />
          予定負担行為伺書(一般)
        </DocumentTypeItem>
        <DocumentTypeItem>
          <input type="checkbox" checked={printYoteiHutanGyomuUchiTorimatome} readOnly />
          予定負担行為伺書(一般)とりまとめ
        </DocumentTypeItem>
        <DocumentTypeItem>
          <input type="checkbox" checked={printNyusatsuShikkoIraisho} readOnly />  
          入札執行依頼書(一般)
        </DocumentTypeItem>
      </DocumentTypeList>
      
      <div>
        再発行中: 
        {reissuingDocumentName 
          ? <span>{reissuingDocumentName} {reissuingCopies}部</span>
          : <span>無</span>
        }
      </div>

      <CountInputContainer>
        変更回数指定:
        <label>
          <input
            type="radio"
            value="None"
            checked={changeCountSpecifiedBy === 'None'}
            readOnly
          />
          指定無
        </label>
        <label>
          <input
            type="radio"
            value="Specified"
            checked={changeCountSpecifiedBy === 'Specified'}
            readOnly
          />
          指定
        </label>
        <CountInput type="number" value={changeCountValue} readOnly />
        回
      </CountInputContainer>

      <CountInputContainer>
        訂正回数指定:
        <label>
          <input
            type="radio"
            value="None"
            checked={correctionCountSpecifiedBy === 'None'}
            readOnly
          />
          指定無
        </label>
        <label>
          <input
            type="radio"
            value="Specified"
            checked={correctionCountSpecifiedBy === 'Specified'}
            readOnly
          />
          指定
        </label>
        <CountInput type="number" value={correctionCountValue} readOnly />
        回
      </CountInputContainer>

      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>キャンセル</Button>
      </ButtonContainer>
    </Container>
  );
};

// 使用例
const App: React.FC = () => {
  return (
    <PrintSetting
      printYoteiHutanGyomuUchi={true}
      printYoteiHutanGyomuUchiTorimatome={true}  
      printNyusatsuShikkoIraisho={false}
      reissuingDocumentName="予定負担行為伺書"
      reissuingCopies={3}
      changeCountSpecifiedBy="Specified"
      changeCountValue={2}
      correctionCountSpecifiedBy="None"
      correctionCountValue={0}
    />
  );  
};

export default App;