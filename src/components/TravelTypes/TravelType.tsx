import { Box, Center, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface TravelTypeProps {
  image: string;
  title: string;
}

export function TravelType({ title, image }: TravelTypeProps) {
  const isSmallVersion = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Center flexDir={['row', 'column']} flex="1" minW="150" mb={[8, 8, 0]}>
      {isSmallVersion ? (
        <Image src={image} alt={title} w="85" h="85" mb="6" />
      ) : (
        <Box w="8px" h="8px" bg="brand.500" borderRadius="full" mr="2" />
      )}

      <Text
        fontWeight={[500, 600]}
        textTransform="lowercase"
        align="center"
        fontSize={['15', '24']}
      >
        {title}
      </Text>
    </Center>
  );
}
