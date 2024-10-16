import React from 'react';
import styled from 'styled-components';

type Props = {
  startDate: string;
  endDate: string;
  reservationType: '予算所属' | '起案所属';
  travelDestinations: {
    domestic: boolean;
    overseas: boolean;
    training: boolean;
    publicTransportation: boolean;
    accommodations: boolean;
  };
  purposes: {
    discussion: boolean;
    fieldSurvey: boolean;
    research: boolean;
    sales: boolean;
  };
  includesWeekend: '指定しない' | '指定する';
  includesHoliday: '指定しない' | '指定する';
  printRequired: boolean;
  shouldDeliver: boolean;
  unaccompanied: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 0.5rem;
`;

const BusinessTripRequestForm: React.FC<Props> = ({
  startDate,
  endDate,
  reservationType,
  travelDestinations,
  purposes,
  includesWeekend,
  includesHoliday,
  printRequired,
  shouldDeliver,
  unaccompanied,
}) => {
  return (
    <Container>
      <Row>
        <Label>振替日</Label>
        <Input type="date" defaultValue={startDate} />
        <span>～</span>
        <Input type="date" defaultValue={endDate} />
      </Row>

      <Row>
        <Label>所属</Label>
        <Select defaultValue={reservationType}>
          <option value="予算所属">予算所属</option>
          <option value="起案所属">起案所属</option>
        </Select>
      </Row>

      <Row>
        <Label>伝票種類</Label>
        {Object.entries(travelDestinations).map(([key, value]) => (
          <Label key={key}>
            <Checkbox defaultChecked={value} />
            {key}
          </Label>
        ))}
      </Row>

      <Row>
        <Label>用途</Label>
        {Object.entries(purposes).map(([key, value]) => (
          <Label key={key}>
            <Checkbox defaultChecked={value} />
            {key}
          </Label>
        ))}
      </Row>

      <Row>
        <Label>伝票番号</Label>
        <Select defaultValue={includesWeekend}>
          <option value="指定しない">指定しない</option>
          <option value="指定する">指定する</option>
        </Select>
      </Row>

      <Row>
        <Label>相手先印字</Label>
        <Select defaultValue={includesHoliday}>
          <option value="印字しない">印字しない</option>
          <option value="印字する">印字する</option>
        </Select>
      </Row>

      <Row>
        <Label>電子決裁</Label>
        <Label>
          <Checkbox defaultChecked={printRequired} />
          未連携
        </Label>
        <Label>
          <Checkbox defaultChecked={shouldDeliver} />
          連携済み(決裁中)
        </Label>
        <Label>
          <Checkbox defaultChecked={unaccompanied} />
          決裁完了
        </Label>
        <div>
          ※連携する場合、「未連携」のみ出力対象となります。
          「未連携」には、連携先システムで削除された伝票も含まれます。
        </div>
      </Row>
    </Container>
  );
};

export default BusinessTripRequestForm;

// Usage example
const App = () => {
  return (
    <BusinessTripRequestForm
      startDate="2022-02-15"  
      endDate="2022-02-18"
      reservationType="予算所属"
      travelDestinations={{
        domestic: true,
        overseas: false,
        training: true,
        publicTransportation: true,
        accommodations: true,
      }}
      purposes={{
        discussion: true,
        fieldSurvey: true,
        research: true,
        sales: true,
      }}
      includesWeekend="指定しない"
      includesHoliday="印字しない"
      printRequired={true}
      shouldDeliver={true}
      unaccompanied={true}
    />
  );
};