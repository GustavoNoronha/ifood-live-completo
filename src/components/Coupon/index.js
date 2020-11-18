import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

import { withNavigation } from 'react-navigation';

import {
  CouponButton,
  Divisor,
  Logo,
  Content,
  CouponInfo,
  Title,
  Validity,
} from './styles';

function Coupon({ navigation }) {
  return (
    <CouponButton onPress={() => {}}>
      <Divisor>
        <Content>
          <Logo />
          <CouponInfo>
            <Title>Cupom de R$5</Title>
            <Validity>Válido até as 00:00</Validity>
          </CouponInfo>
        </Content>
        <MaterialIcons name="keyboard-arrow-right" color='#ff6666' size={20} />
      </Divisor>
    </CouponButton>
  );
}

export default withNavigation(Coupon);
