import React, { use } from 'react';
import PricingCard from '../pricingCard/pricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOptions = ({PricingPromise}) => {

    const pricingData = use(PricingPromise);
    

    return (
        <div>
            <h2 className='text-5xl'>Get our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}

                {
                    pricingData.map(pricing => <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;