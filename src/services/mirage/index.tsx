import { createServer, Model } from 'miragejs';

interface City {
  name: string;
  image: string;
  country: { image: string; name: string };
}

interface Continent {
  name: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  countries: number;
  languages: number;
  citiesInTopHundred: City[];
}

export function makeServer() {
  return createServer({
    models: {
      continent: Model.extend<Partial<Continent>>({}),
    },

    seeds(server) {
      server.db.loadData({
        continents: [
          {
            name: 'Europa',
            title: 'O país mais antigo.',
            slug: 'europe',
            description:
              'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
            countries: 50,
            languages: 60,
            citiesInTopHundred: [
              {
                name: 'Londres',
                image: '/images/england.png',
                country: {
                  name: 'Reino Unido',
                  image: '/images/united-kingdom.png',
                },
              },
            ],
          },
        ],
      });
    },

    routes() {
      this.namespace = 'api';
      this.timing = 500;

      this.get('/continents');
      this.get('/continents/:slug', (s, req) => {
        const { slug } = req.params;

        // workaround to typescript, not found continents prop.
        const x = (s as typeof s & {
          continents: { where: (attrs: Record<string, unknown>) => object };
        })!;

        return x.continents.where({ slug });
      });

      this.namespace = '';
      this.passthrough();
    },
  });
}
