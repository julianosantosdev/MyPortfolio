import { styled } from '@/styles/stitches.config';
import { colors } from '@/styles/Global';

export const Button = styled('button', {
  height: '2.75rem',
  appearance: 'none',
  background: '$brand2',
  color: '$grey3',
  fontWeight: '600',
  padding: '0 2rem',
  border: '2px solid $grey1',
  borderRadius: '$1',
  cursor: 'pointer',
  fontSize: '1rem',
  fontFamily: '$texts',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'max-content',

  variants: {
    type: {
      btLink: {
        background: 'transparent',
        borderColor: 'transparent'
      },
      primary: {
        background: '$brand2',
        borderColor: '$brand1',
        color: '$grey3',
        '&:hover': {
          backgroundColor: '$brand1',
          borderColor: '$brand1'
        }
      },
      icon: {
        backgroundColor: '$brand2',
        '&:hover': {
          backgroundColor: '$brand1'
        }
      },
      circle: {
        borderColor: '$brand2',
        backgroundColor: '$brand2',
        borderRadius: '50%',
        padding: '0',
        width: '2.75rem',
        height: '2.75rem',
        '&:hover': {
          backgroundColor: '$brand1'
        }
      }
    },
    ...colors
  }
});
