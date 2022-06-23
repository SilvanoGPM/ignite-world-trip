import { Center, Image, Text } from '@chakra-ui/react';

interface TravelTypeProps {
  image: string;
  title: string;
}

export function TravelType({ title, image }: TravelTypeProps) {
  return (
    <Center flexDir="column" flex="1" minW="150" mb={[8, 8, 0]}>
      <Image src={image} alt={title} w="85" h="85" />

      <Text
        fontWeight={600}
        textTransform="lowercase"
        align="center"
        fontSize="24"
        mt="6"
      >
        {title}
      </Text>
    </Center>
  );
}
