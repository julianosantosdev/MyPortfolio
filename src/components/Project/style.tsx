import { styled } from '../../styles/stitches.config';
import { Flex } from '../../styles/Global';
import { Text } from '../../styles/Text';

export const Project = styled('article', {
  marginTop: '4rem',
  transition: '200ms',
  padding: '16px',

  '&:hover': {
    scale: '105%',
    transition: '200ms',
    borderRadius: '8px',
    backgroundColor: '$brand2',
    
  }
});

export const ProjectStack = styled(Flex, {
  margin: '0.5rem 0 1.25rem 0'
});

export const ProjectStackTech = styled('span', {
  backgroundColor: '$brand4',
  color: '$brand1',
  padding: '0  0.5rem',
  borderRadius: '$2'
});

export const ProjectLinks = styled(Flex, {
  marginTop: '2.25rem'
});

export const ProjectLink = styled('a', {
  fontSize: '1rem',
  color: '$brand1',
  fontWeight: '500',
  marginRight: '$2',
  display: 'flex',
  alignItems: 'center',
  lineHeight: '0',

  '&:hover': {
    color: '$brand4'
  },

  [`& svg`]: {
    marginRight: '$1'
  }
});
