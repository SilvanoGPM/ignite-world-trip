import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      '500': '#FFBA08',
      '200': 'rgba(255, 186, 8, 0.5)',
    },

    gray: {
      '500': '#47585B',
      '300': '#999999',
      '100': '#F5F8FA',
    },
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },

  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.500',
      },
    },
  },
});
