import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import Input from '../Inputs/Input';
import Button from '../Buttons/Button';
import COLORS from '../constants';
import UserAvatar from '../Avatars/UserAvatar';
import debounce from '../_Utility/debounce';
import { setUserField } from '../../redux/activeUser/actions';
import Select from '../Inputs/Select';
import Label from '../Labels/Label';
import SubLabel from '../Labels/SubLabel';
import SubscriptionToggle from './SubscriptionToggle';
import { htmlOnlyMsg } from '../../utils/toastActions';

const PADDING_BETWEEN_PASS_INPUTS = '10px';

const PasswordForm = styled.div`
  display: block;
  margin-bottom: 24px;
  & > div {
    margin-right: 10px;
    margin-bottom: 10px;
    width: calc(25% - ${PADDING_BETWEEN_PASS_INPUTS});
    min-width: 205px;
  }
  & > button {
     width: calc(25%);
     min-width: 205px;
  }
`;

const LabelBox = styled.div`
  margin-bottom: 13px;
`;

const InputBox = styled.div`
  margin: 0 0 34px 0;
  display: block;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  width: 50%;
`;

const UploadButton = styled.button`
  background-color: ${COLORS.white};
  border: 1px dashed ${COLORS.gray4};
  border-radius: 5px;
  cursor: pointer;
  height: 42px;
  width: 100%;
  max-width: 240px;
`;

const UserAvaBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  & > div {
    margin-bottom: 20px;
  }
`;

const TimeContainer = styled.div`
  width: calc(25% - ${PADDING_BETWEEN_PASS_INPUTS});
  min-width: 205px;
`;

const NamesContainer = styled.div`
  width: calc(50% - ${PADDING_BETWEEN_PASS_INPUTS});
  min-width: 205px;
`;

const UserEditForm = () => {
  const dispatch = useDispatch();
  const {
    name, company, email, dateFormat, timeFormat, timeZone,
    sendEmails, sendNotifications, sendPushes,
  } = useSelector((state) => state.activeUser.data);

  const updateString = debounce((eName, eValue) => { dispatch(setUserField(eName, eValue)); }, 600);
  const updateToggler = (eName, eValue) => { dispatch(setUserField(eName, eValue)); };
  const onChange = (e) => updateString(e.target.name, e.target.value);

  const htmlOnlyDebounce = debounce(htmlOnlyMsg, 600);

  return (
    <>
      <Row>
        <Col>
          <NamesContainer>
            <InputBox>
              <Input
                name="name"
                label="username"
                onChange={onChange}
                value={name}
                type="text"
              />
            </InputBox>
            <InputBox>
              <Input
                label="company"
                onChange={onChange}
                value={company}
                name="company"
                type="text"
              />
            </InputBox>
            <InputBox>
              <Input
                label="email"
                onChange={htmlOnlyDebounce}
                value={email}
                name="email"
              />
            </InputBox>
          </NamesContainer>
        </Col>
        <Col>
          <UserAvaBlock>
            <UserAvatar
              size="100px"
              email={email}
              onClick={htmlOnlyMsg}
            />
            <UploadButton onClick={htmlOnlyMsg}>
              upload image
            </UploadButton>
          </UserAvaBlock>
        </Col>
      </Row>
      <div>
        <PasswordForm>
          <Input
            label="Current Password"
            onChange={htmlOnlyDebounce}
            value=""
            type="password"
            name=""
          />
          <Input
            label="New Password"
            onChange={htmlOnlyDebounce}
            value=""
            type="password"
            name="newPass"
          />
          <Input
            label="Confirm Password"
            onChange={htmlOnlyDebounce}
            value=""
            type="password"
            name="confirmPass"
          />
          {/* eslint-disable-next-line no-alert,no-undef */}
          <Button onClick={htmlOnlyDebounce} background={COLORS.green1} bordered={false}>
            Change Password
          </Button>
        </PasswordForm>
      </div>
      <TimeContainer>
        <InputBox>
          <Select
            defaultValue={dateFormat}
            label="Date Format"
            onChange={onChange}
            options={[
              { value: 'DD/MM/YY', name: 'DD/MM/YY' },
              { value: 'MM/DD/YY', name: 'MM/DD/YY' },
            ]}
            name="dateFormat"
          />
        </InputBox>
        <InputBox>
          <Select
            label="Time Format"
            defaultValue={timeFormat}
            onChange={onChange}
            options={[
              { value: 'hh:mm:ss', name: 'hh:mm:ss' },
              { value: 'h.mm', name: 'h.mm' },
            ]}
            name="timeFormat"
          />
        </InputBox>
        <InputBox>
          <Select
            label="Time Zone"
            defaultValue={timeZone}
            onChange={onChange}
            options={[
              { value: '0 GMT', name: '0 GMT' },
              { value: '-1 GMT', name: '-1 GMT' },
            ]}
            name="timeZone"
          />
        </InputBox>
      </TimeContainer>
      <div>
        <LabelBox>
          <Label>Notifications</Label>
        </LabelBox>
        <div>
          <SubLabel>
            We will send you email notifications about your company’s activity,
            whe daily limits are reached or when an employee requests appears
          </SubLabel>
        </div>
        <SubscriptionToggle
          onChange={(e) => updateToggler(e.target.name, e.target.checked)}
          checked={sendEmails}
          name="sendEmails"
          label="Send Emails"
        />
        <SubscriptionToggle
          name="sendPushes"
          label="Phone Pushes"
          checked={sendPushes}
          onChange={(e) => updateToggler(e.target.name, e.target.checked)}
        />
        <SubscriptionToggle
          checked={sendNotifications}
          onChange={(e) => updateToggler(e.target.name, e.target.checked)}
          name="sendNotifications"
          label="Site Notifications"
        />
      </div>
    </>
  );
};

export default UserEditForm;
