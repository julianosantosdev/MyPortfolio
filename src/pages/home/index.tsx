// Styles
import { Container } from '@/styles/Global';
import { Text } from '@/styles/Text';
import { Button } from '@/styles/Buttons';

// Components
import { Stack } from '@/components/Stack';
import { Project } from '@/components/Project';

// Data
import { stackData } from '@/utils/stackData';
import { userData } from '@/utils/userData';

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns
} from './style';
import React from 'react';

export const Home = (): React.JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as='h1' type='heading1' color='brand4'>
              A cada bug resolvido, um aprendizado totalmente novo!
            </Text>
            <Text type='body1' color='grey3'></Text>
            <Text type='body1' color='grey3'>
              Eu sou o Juliano e aqui você pode encontrar um pouco mais sobre
              mim!
            </Text>
            <Text type='body1' color='grey3'>
              Atualmente estudo{' '}
              <strong color='grey4'>
                Desenvolvimento de Software Multiplataforma na FATEC-SP
              </strong>{' '}
              e sou{' '}
              <strong>
                Desenvolvedor Web FullStack formado pela Kenzie Academy Brasil.{' '}
              </strong>
            </Text>
            <Text type='body1' color='grey3'>
              Vamos juntos!
            </Text>
            <HeaderButtonsArea>
              <Button type='primary' as='a' href='#projetos'>
                Projetos
              </Button>
              <Button type='primary' as='a' href='#tecnologias'>
                Stacks
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id='tecnologias'>
        <Container>
          <Text as='h4' type='heading3' color='grey3'>
            Stacks:
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id='projetos'>
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as='h2' type='heading4' color='grey3'>
                Esses são meus projetos e outros sempre estão aparecendo por
                aqui!
              </Text>
              <Text as='p' type='body1' color='grey3'>
                No GitHub você pode conferir meus commits e outras informações.
              </Text>
              <Button
                type='primary'
                target='_blank'
                as='a'
                href={`https://github.com/${userData.githubUser}`}
              >
                Acessar GitHub
              </Button>
              <Text as='p' type='body1' color='grey3'>
                Não se esqueça de acessar o Linkedin também!
              </Text>
              <Button
                type='primary'
                target='_blank'
                as='a'
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar Linkedin
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type='heading2' color='grey3' css={{ marginBottom: '$2' }}>
                Projetos
              </Text>
              {/*<Text as='h3' type='heading3' color='grey3'>
                Originalidade e{' '}
                <Text as='span' color='grey3' type='heading2'>
                  dedicação
                </Text>{' '}
                em cada detalhe
              </Text> */}
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
