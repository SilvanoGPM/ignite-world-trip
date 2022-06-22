import { Center, Image } from '@chakra-ui/react';
import Link from 'next/link';

export function Header() {
  return (
    <Center h={100}>
      <Link href="/">
        <Image src="/images/logo.svg" alt="WorldTrips Logo" />
      </Link>
    </Center>
  );
}
