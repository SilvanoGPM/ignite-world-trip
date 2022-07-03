import { Flex, Heading, Image, Text } from '@chakra-ui/react';

import type { Country, ImageAsset } from '$types/general';

interface ContinentCityCardProps {
  name: string;
  image: ImageAsset;
  country: Country;
}

export function ContinentCityCard({
  image,
  name,
  country,
}: ContinentCityCardProps) {
  return (
    <Flex w="256px" h="279px" rounded="md" overflow="hidden" flexDir="column">
      <Image src={image.url} w="full" h="173px" />

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
        <Flex justify="space-between" flexDir="column" h="full" maxW="80%">
          <Heading
            as="h4"
            fontSize="xl"
            fontWeight={600}
            title={name}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {name}
          </Heading>

          <Text
            fontSize="md"
            color="gray.300"
            title={country.name}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {country.name}
          </Text>
        </Flex>

        <Image
          src={country.image.url}
          alt={country.name}
          rounded="full"
          w="30px"
          h="30px"
        />
      </Flex>
    </Flex>
  );
}
