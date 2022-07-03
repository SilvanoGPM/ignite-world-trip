import { Slide, Slider, SlideSettings } from '$components/Slider';
import type { Continent as ContinentType } from '$types/general';

import { Continent } from './Continent';

import styles from './styles.module.scss';

interface ContinentsSliderProps {
  continents: ContinentType[];
}

export function ContinentsSlider({ continents }: ContinentsSliderProps) {
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
        {continents.map((continent) => (
          <Slide key={continent.slug}>
            <Continent {...continent} />
          </Slide>
        ))}
      </Slider>
    </div>
  );
}
