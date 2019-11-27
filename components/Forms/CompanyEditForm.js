import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from '@emotion/styled';
import Input from '../Inputs/Input';
import Button from '../Buttons/Button';
import COLORS from '../constants';
import Select from '../Inputs/Select';
import Label from '../Labels/Label';
import SubLabel from '../Labels/SubLabel';
import SubscriptionToggle from './SubscriptionToggle';

const PasswordForm = styled.div`
  display: block;
  margin-bottom: 24px;
  & > div {
    margin-right: 10px;
    margin-bottom: 10px;
    width: calc(25% - 10px);
    min-width: 205px;
  }
  & > button {
     width: calc(25%);
     min-width: 205px;
  }
`;

const InputBox = styled.div`
  width: calc(25% - 10px);
  min-width: 205px;
  margin-bottom: 34px;
  display: block;
`;

const NotificationsBox = styled.div`

`;

const LabelBox = styled.div`
  margin-bottom: 13px;
`;

const SubLabelBox = styled.div`

`;

const CompanyEditForm = () => (
  <>
    <InputBox>
      <Input label="company name" onChange={() => {}} value="UI Inc" />
    </InputBox>
    <InputBox>
      <Input label="branch" onChange={() => {}} value="Web Design" />
    </InputBox>
    <InputBox>
      <Input label="email" onChange={() => {}} value="example@example.com" />
    </InputBox>
    <InputBox>
      <Input label="company name" onChange={() => {}} value="UI Inc" />
    </InputBox>
    <PasswordForm>
      <Input label="Current Password" onChange={() => {}} value="" type="password" />
      <Input label="New Password" onChange={() => {}} value="" type="password" />
      <Input label="Confirm Password" onChange={() => {}} value="" type="password" />
      <Button onClick={action('clicked')} background={COLORS.green1} bordered={false}>
        Change Password
      </Button>
    </PasswordForm>
    <InputBox>
      <Select
        label="DateFormat"
        onChange={() => {}}
        options={[
          { value: '1', name: 'DD/MM/YY' },
          { value: '2', name: 'MM/DD/YY' },
        ]}
      />
    </InputBox>
    <InputBox>
      <Select
        label="TimeFormat"
        onChange={() => {}}
        options={[
          { value: '1', name: 'hh:mm:ss' },
          { value: '2', name: 'h.mm' },
        ]}
      />
    </InputBox>
    <InputBox>
      <Select
        label="Time Zone"
        onChange={() => {}}
        options={[
          { value: '1', name: '0 GMT' },
          { value: '2', name: '-1 GMT' },
        ]}
      />
    </InputBox>
    <NotificationsBox>
      <LabelBox>
        <Label>Notifications</Label>
      </LabelBox>
      <SubLabelBox>
        <SubLabel>
          We will send you email notifications about your company’s activity,
          whe daily limits are reached or when an employee requests appears
        </SubLabel>
      </SubLabelBox>
    </NotificationsBox>
    <SubscriptionToggle label="Send Emails" />
    <SubscriptionToggle label="Phone Pushes" defaultState />
    <SubscriptionToggle label="Site Notifications" />
  </>
);

export default CompanyEditForm;
