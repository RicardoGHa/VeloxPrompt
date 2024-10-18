import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    features: [
      '100 prompts per month',
      'Basic prompt optimization',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$29.99',
    features: [
      'Unlimited prompts',
      'Advanced prompt optimization',
      'Priority email support',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited prompts',
      'Custom prompt models',
      'Dedicated account manager',
      'On-premise deployment options',
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Choose the right plan for you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300">
          Whether you're just starting out or need enterprise-grade solutions,
          we have a plan that fits your needs.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col justify-between rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-xl ring-1 ring-gray-900/10 dark:ring-gray-100/10"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.name !== 'Enterprise' && (
                    <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-400">
                      /month
                    </span>
                  )}
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
