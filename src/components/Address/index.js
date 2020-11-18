import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { Container, Location, AddressButton } from './styles';

export default function Address() {
  return (
    <Container>
      <AddressButton>
        <Location>Av Noronha, Rua Santa Catarina</Location>
        <MaterialIcons name="keyboard-arrow-down" size={20} color='#ff6666' />
      </AddressButton>
    </Container>
  );
}
