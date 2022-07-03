import { Box, Center, Flex, Text } from '@chakra-ui/react';

interface ContinentDescriptionProps {
  description: string;
  countries: number;
  languages: number;
  citiesInTopHundred: number;
}

export function ContinentDescription({
  description,
  countries,
  languages,
  citiesInTopHundred,
}: ContinentDescriptionProps) {
  return (
    <Box mb="16">
      <Center flexWrap="wrap" gap={['2rem', '1rem']}>
        <Text
          maxW={{ base: 'full', md: 600 }}
          textAlign="justify"
          fontWeight={400}
          fontSize={['xl', '2xl']}
        >
          {description}
        </Text>

        <Center flex="1" w="full" gap="2rem">
          <Flex align={['flex-start', 'center']} flexDir="column">
            <Text color="brand.500" fontWeight={600} fontSize={['2xl', '5xl']}>
              {countries}
            </Text>
            <Text color="gray.500" fontWeight={600} fontSize={['md', '2xl']}>
              países
            </Text>
          </Flex>

          <Flex align={['flex-start', 'center']} flexDir="column">
            <Text color="brand.500" fontWeight={600} fontSize={['2xl', '5xl']}>
              {languages}
            </Text>

            <Text color="gray.500" fontWeight={600} fontSize={['md', '2xl']}>
              línguas
            </Text>
          </Flex>

          <Flex align={['flex-start', 'center']} flexDir="column">
            <Text color="brand.500" fontWeight={600} fontSize={['2xl', '5xl']}>
              {citiesInTopHundred}
            </Text>

            <Text
              color="gray.500"
              fontWeight={600}
              fontSize={['md', '2xl']}
              textAlign="center"
            >
              cidades +100
            </Text>
          </Flex>
        </Center>
      </Center>
    </Box>
  );
}
