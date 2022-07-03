import { Box, Center, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { ImageAsset } from '$types/general';

interface ContinentProps {
  image: ImageAsset;
  slug: string;
  name: string;
  title: string;
}

export function Continent({ image, slug, title, name }: ContinentProps) {
  return (
    <Box
      h="450"
      pos="relative"
      sx={{
        '&::before': {
          content: "''",
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bg: `url(${image.url})`,
          bgSize: 'cover',
          bgPos: 'center',
          filter: 'brightness(0.8)',
          bgRepeat: 'no-repeat',
          transition: '0.2s filter',
        },

        '&:hover::before': {
          filter: 'brightness(0.5)',
        },
      }}
    >
      <Center
        color="white"
        flexDir="column"
        mb="4"
        pos="relative"
        w="100%"
        h="100%"
      >
        <Link href={`/continent/${slug}`}>
          <a>
            <Heading as="h2" fontSize="4xl" lineHeight="72px" fontWeight={700}>
              {name}
            </Heading>
          </a>
        </Link>

        <Text fontWeight={700}>{title}</Text>
      </Center>
    </Box>
  );
}
