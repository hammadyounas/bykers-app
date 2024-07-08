import { Background } from '@/components/common/Background';

import { Banner } from './Banner';

const BannerSection = () => (
  <div className="text-gray-600 antialiased">
    <Background color="bg-gray-100">
      <Banner
        yPadding="pt-20 pb-32"
        title="Bykers App"
        description="Bykers are for selling and purchasing"
      />
    </Background>
  </div>
);

export { BannerSection };
