import React from 'react';
import styled from '@emotion/styled';

type FixedAssetConvertProps = {
  companyName: string;
  convertedYear: number;
  accountStartDate: string;
  accountEndDate: string;
  remarks: string[];
};

const FixedAssetConvert: React.FC<FixedAssetConvertProps> = ({
  companyName,
  convertedYear,
  accountStartDate,
  accountEndDate,
  remarks,
}) => {
  // 日付をYYYY/MM/DD形式に変換する関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}/${month}/${day}`;
  };

  return (
    <Container>
      <Title>固定資産コンバート</Title>
      <CompanyName>{companyName}</CompanyName>
      <ConvertedYear>総務課 予算・会計担当 ぎょうせい太郎</ConvertedYear>
      <ConvertedYear>平成30年06月26日</ConvertedYear>
      <InfoContainer>
        <InfoLabel>当期会計年度</InfoLabel>
        <InfoValue>{formatDate(accountStartDate)} 年度</InfoValue>
      </InfoContainer>
      <InfoContainer>
        <InfoLabel>異動年月日</InfoLabel>
        <InfoValue>{formatDate(accountEndDate)}</InfoValue>
      </InfoContainer>
      <FileInput>
        <FileIcon />
        <FileName>C:¥Users¥Administrator¥Documents¥固定資産情報_20180625164351.zip</FileName>
      </FileInput>
      <RemarkList>
        {remarks.map((remark, index) => (
          <RemarkItem key={index}>{remark}</RemarkItem>
        ))}
      </RemarkList>
      <ButtonContainer>
        <Button>OK</Button>
        <Button>クリア</Button>
        <Button>終了</Button>
      </ButtonContainer>
    </Container>
  );
};

// サンプルデータを用いた使用例
const SampleUsage: React.FC = () => {
  const sampleData: FixedAssetConvertProps = {
    companyName: '行政市水道事業会計',
    convertedYear: 30,
    accountStartDate: '2018-04-01',
    accountEndDate: '2019-03-31',
    remarks: [
      '固定資産情報をファイルから取込、登録を行います。',
      'ZIP圧縮されたファイルのみ取り込めます。取り込むファイルについては専用のEXCELファイル(原票)から作成してください。',
      '原票以外で作成、編集されたファイルを取り込むとエラーとなります。',
      '異動年月日は当期会計年度内の日付を入力してください。',
      'コンバートするデータの異動年月日は画面で入力した異動年月日の日付で登録されます。',
      'ただし、原票上で異動区分が「01：取得」の固定資産情報を取り込む場合、',
      'コンバートするデータの異動年月日は原票で指定された取得年月日と同じになります。',
      '既に登録済みの資産番号と同一のデータがあまされている場合はデータルを取り込んだ場合はエラーとなります。',
      'コンバート処理後、登録を行った固定資産情報の一覧を帳票出力できます。',
      'コンバート処理でエラーがあった場合はすべてのデータがコンバート前の状態に戻ります。',
      'コンバートした固定資産情報は1固定資産コンバート取消(機能にて取消を行うことができます。',
      'ただし、コンバート後異動が発生している場合はコンバート取消を行うことはできません。',
      'また、コンバート取消は当年度にコンバートされた固定資産情報に限ります。',
    ],
  };

  return <FixedAssetConvert {...sampleData} />;
};

// スタイリング用のコンポーネント
const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CompanyName = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ConvertedYear = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const InfoLabel = styled.p`
  font-weight: bold;
  margin-right: 10px;
`;

const InfoValue = styled.p`
  margin: 0;
`;

const FileInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FileIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #999;
  margin-right: 10px;
`;

const FileName = styled.p`
  margin: 0;
`;

const RemarkList = styled.ul`
  margin-bottom: 20px;
`;

const RemarkItem = styled.li`
  margin-bottom: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  font-size: 16px;
`;

export default FixedAssetConvert;