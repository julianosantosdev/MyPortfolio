import { Container } from '@/styles/Global';
import { Text } from '@/styles/Text';
import { Button } from '@/styles/Buttons';
import { Footer as FooterWrapper } from './style';
import { FaAngleUp } from 'react-icons/fa';
import React from 'react';

export const Footer = (): React.JSX.Element => {
  return (
    <FooterWrapper>
      <Container>
        <Button
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          aria-label='Voltar para o topo do site'
          type='circle'
        >
          <FaAngleUp />
        </Button>
        <Text type='body1' color='brand4'>
          ✋ Obrigado por acessar!
        </Text>
        <Text type='body2' color='brand4'>
          Atualizado em: 04/02/2025
        </Text>
      </Container>
    </FooterWrapper>
  );
};
