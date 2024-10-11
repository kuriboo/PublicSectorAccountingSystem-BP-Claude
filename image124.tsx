import React from 'react';
import styled from '@emotion/styled';

interface FixedAssetConversionProps {
  companyName: string;
  year: number;
  assetType: string;
  registrationDate: string;
  conversionDate: string;
  fileName: string;
}

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
`;

const CompanyName = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Info = styled.p`
  font-size: 14px;
  margin-bottom: 3px;
`;

const FileName = styled.p`
  font-size: 14px;
  color: #666;
`;

const NoteList = styled.ul`
  margin-top: 20px;
  font-size: 14px;
`;

const NoteItem = styled.li`
  margin-bottom: 5px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;

  &:first-of-type {
    background-color: #007bff;
    color: #fff;
    border: none;
  }

  &:last-of-type {
    background-color: #6c757d;
    color: #fff;
    border: none;
  }
`;

const FixedAssetConversion: React.FC<FixedAssetConversionProps> = ({
  companyName,
  year,
  assetType,
  registrationDate,
  conversionDate,
  fileName,
}) => {
  return (
    <Container>
      <Title>固定資産コンバート</Title>
      <CompanyName>会社名: {companyName}</CompanyName>
      <Info>対象年度: {year}年度</Info>
      <Info>固定資産種類: {assetType}</Info>
      <Info>登録年月日: {registrationDate}</Info>
      <Info>変換年月日: {conversionDate}</Info>
      {fileName && <FileName>ファイル: {fileName}</FileName>}

      <NoteList>
        <NoteItem>固定資産情報をファイルから取込、登録を行います。</NoteItem>
        <NoteItem>
          ZIP圧縮されたファイルのみ取り込めます。取り込むファイルについては専用のEXCELファイル(原盤)から作成してください。
        </NoteItem>
        <NoteItem>
          原盤以外で作成、編集されたファイルを取り込むとエラーになります。
        </NoteItem>
        <NoteItem>異動年月日は当期会計年度内の日付を入力してください。</NoteItem>
        <NoteItem>
          コンバートするデータの異動年月日は画面で入力した異動年月日の日付で登録されます。
          ただし、原盤上で異動区分が「01：取得」の固定資産情報を取り込む場合、
          コンバートするデータの異動年月日は原盤で指定された取得年月日と同じになります。
        </NoteItem>
        <NoteItem>
          既に登録済みの資産番号と同一のデータが含まれている場合はデータ上書きが行われますのでご注意ください。
        </NoteItem>
        <NoteItem>
          コンバート処理後、登録を行った固定資産情報の一覧を帳票出力できます。
        </NoteItem>
        <NoteItem>
          コンバート処理でエラーがあった場合はすべてのデータがコンバート前の状態に戻ります。
        </NoteItem>
        <NoteItem>
          コンバートした固定資産情報は1固定資産コンバート取消(機能にて取消を行ってください。
          ただし、コンバート後異動が発生している場合はコンバート取消を行うことはできません。
          また、コンバート取消は当年度にコンバートされた固定資産情報に限ります。
        </NoteItem>
      </NoteList>

      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// Usage example
const App: React.FC = () => {
  return (
    <FixedAssetConversion
      companyName="行政市水道事業会計"
      year={30}
      assetType="平成30年06月26日"
      registrationDate="平成30年度"
      conversionDate="平成30年04月01日"
      fileName="C:\Users\Administrator\Documents\固定資産情報.zip"
    />
  );
};

export default App;