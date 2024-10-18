import React from 'react';
import { Zap, Target, Users } from 'lucide-react';

const features = [
  {
    name: 'Advanced AI Technology',
    description: 'Our cutting-edge AI models are trained on vast datasets to provide the most effective prompts.',
    icon: Zap,
  },
  {
    name: 'Tailored for Your Needs',
    description: 'Customize prompts for various AI models and specific use cases to maximize your results.',
    icon: Target,
  },
  {
    name: 'Community-Driven',
    description: 'Join a thriving community of prompt engineers and AI enthusiasts to share insights and best practices.',
    icon: Users,
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">About VeloxPrompt</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Elevate Your AI Interactions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            VeloxPrompt is dedicated to revolutionizing the way you interact with AI models. Our advanced prompt generation tool helps you craft the perfect prompts for any AI task.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-16 lg:mt-24">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our Mission</h3>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            At VeloxPrompt, we believe in the power of effective communication with AI. Our mission is to bridge the gap between human intent and machine understanding, enabling users to harness the full potential of AI technologies. By providing sophisticated prompt engineering tools, we empower individuals and businesses to achieve unprecedented results in their AI-driven tasks and projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;