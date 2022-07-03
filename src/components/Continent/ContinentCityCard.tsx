import { Flex, Heading, Image, Text } from '@chakra-ui/react';

interface ContinentCityCardProps {
  image: string;
  city: string;
  country: { image: string; name: string };
}

export function ContinentCityCard({
  image,
  city,
  country,
}: ContinentCityCardProps) {
  return (
    <Flex w="256px" h="279px" rounded="md" overflow="hidden" flexDir="column">
      <Image src={image} w="full" h="173px" />

      <Flex
        align="center"
        justify="space-between"
        px="4"
        py="6"
        border="1px"
        borderColor="brand.500"
        borderTopColor="transparent"
        roundedBottom="md"
        flex="1"
      >
        <Flex justify="space-between" flexDir="column" h="full">
          <Heading as="h4" fontSize="xl" fontWeight={600}>
            {city}
          </Heading>

          <Text fontSize="md" color="gray.300">
            {country.name}
          </Text>
        </Flex>

        <Image
          src={country.image}
          alt={country.name}
          rounded="full"
          w="30px"
          h="30px"
        />
      </Flex>
    </Flex>
  );
}
