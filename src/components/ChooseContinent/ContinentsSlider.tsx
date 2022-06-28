import { Slide, Slider, SlideSettings } from '$components/Slider';

import { Continent } from './Continent';

import styles from './styles.module.scss';

const slides = [
  {
    slug: 'europe',
    title: 'Europa',
    subTitle: 'O continente mais antigo',
    image: '/images/continents/europe.png',
  },
  {
    slug: 'oceania',
    title: 'Oceânia',
    subTitle: 'O menor continente',
    image: '/images/continents/oceania.jpg',
  },
  {
    slug: 'asia',
    title: 'Ásia',
    subTitle: 'O continente mais quente',
    image: '/images/continents/asia.jpg',
  },
];

export function ContinentsSlider() {
  const sliderSettings: SlideSettings = {
    slidesPerView: 1,
    navigation: true,
    draggable: true,
    loop: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider settings={sliderSettings}>
        {slides.map((slide) => (
          <Slide key={slide.slug}>
            <Continent {...slide} />
          </Slide>
        ))}
      </Slider>
    </div>
  );
}
