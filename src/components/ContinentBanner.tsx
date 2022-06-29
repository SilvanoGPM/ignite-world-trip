import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface ContinentBannerProps {
  title: string;
  image: string;
}

export function ContinentBanner({ title, image }: ContinentBannerProps) {
  return (
    <Box pos="relative" w="full" h={[150, 300, 500]}>
      <Box pos="absolute" top="0" bottom="0" left="0" right="0">
        <Image
          width="full"
          height="full"
          objectFit="cover"
          filter="brightness(0.5)"
          src={image}
        />
      </Box>

      <Box pos="absolute" top="0" bottom="0" left="0" right="0" zIndex="banner">
        <Flex
          maxW={1200}
          px="4"
          direction="column"
          justify={{ base: 'center', md: 'flex-end' }}
          align={{ base: 'center', md: 'baseline' }}
          h="full"
          mx="auto"
          pb={{ base: 0, md: 16 }}
        >
          <Text
            as="h1"
            color="white"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight={600}
          >
            {title}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
