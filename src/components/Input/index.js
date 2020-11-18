import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { Container, TextInput } from './styles';

export default function Input({ placeholder, header }) {
  return (
    <Container header={header}>
      <MaterialIcons name="search" size={25} color='#ff6666' />
      <TextInput placeholder={placeholder} />
    </Container>
  );
}
