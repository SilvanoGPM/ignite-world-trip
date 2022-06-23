import { Center, Image, Text } from '@chakra-ui/react';

interface TravelTypeProps {
  image: string;
  title: string;
}

export function TravelType({ title, image }: TravelTypeProps) {
  return (
    <Center flexDir="column" maxW="200">
      <Image src={image} alt={title} w="85" h="85" />

      <Text fontWeight={600} textTransform="lowercase" mt="6">
        {title}
      </Text>
    </Center>
  );
}
