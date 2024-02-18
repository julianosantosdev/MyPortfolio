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

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as='h1' type='heading1' color='grey5'>
              A cada bug resolvido, um aprendizado totalmente novo!
            </Text>
            <Text type='body1' color='grey6'>
              Olá, bem-vindo ao meu portfólio!
            </Text>
            <Text type='body1' color='grey6'>
              Eu sou o Juliano. Atualmente sou estudante de Desenvolvimento de
              Software Multiplataforma na FATEC-SP e Desenvolvedor Web FullStack
              formado pela na Kenzie Academy Brasil.
            </Text>
            <Text type='body1' color='grey6'>
              Vamos juntos!
            </Text>
            <HeaderButtonsArea>
              <Button as='a' href='#projetos'>
                Projetos
              </Button>
              <Button
                target='_blank'
                as='a'
                aria-label='Curriculo'
                href={`https://1drv.ms/b/s!AheHZmNYk2qKgscKtr1eZXlJWOPdbw?e=VkOvvf`}
              >
                Meu Currículo
              </Button>
              <Button as='a' href='#tecnologias'>
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id='tecnologias'>
        <Container>
          <Text as='h4' type='heading3' color='grey1'>
            Ferramentas que domino
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
              <Text as='h2' type='heading4' color='grey1'>
                Vamos trocar uma ideia?
              </Text>
              <Text as='p' type='body1' color='grey2'>
                No Linkedin podemos trocar experiências, contar histórias e
                aprendermos juntos!
              </Text>
              <Button
                type='primary'
                target='_blank'
                as='a'
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type='body1' color='grey2' css={{ marginBottom: '$2' }}>
                Projetos
              </Text>
              <Text as='h3' type='heading2' color='grey1'>
                Originalidade e{' '}
                <Text as='span' color='brand1' type='heading2'>
                  dedicação
                </Text>{' '}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
