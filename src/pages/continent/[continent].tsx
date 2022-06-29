import { ContinentBanner } from '$components/ContinentBanner';
import { Header } from '$components/Header';

export default function Continent() {
  return (
    <>
      <Header showBackButton />

      <main>
        <ContinentBanner
          title="Europa"
          image="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
        />
      </main>
    </>
  );
}
