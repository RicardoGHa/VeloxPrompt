import React, { useState } from 'react';
import { Send, X } from 'lucide-react';

const promptTypes = [
  { id: 'general', name: 'General Purpose' },
  { id: 'education', name: 'Education' },
  { id: 'image', name: 'Image Generation' },
  { id: 'coding', name: 'Code Generation' },
  { id: 'writing', name: 'Creative Writing' },
];

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setGeneratedPrompt(`Optimized prompt for ${selectedTypes.join(', ')}: "${prompt}" - This prompt has been enhanced for better AI interaction in the selected contexts.`);
    setIsLoading(false);
  };

  const handleTypeSelect = (typeId: string) => {
    if (!selectedTypes.includes(typeId)) {
      setSelectedTypes([...selectedTypes, typeId]);
    }
  };

  const handleTypeRemove = (typeId: string) => {
    setSelectedTypes(selectedTypes.filter(type => type !== typeId));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Generate Effective AI Prompts
      </h1>
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="promptType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Prompt Type(s)
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedTypes.map(typeId => (
                <span key={typeId} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:text-indigo-100">
                  {promptTypes.find(type => type.id === typeId)?.name}
                  <button
                    type="button"
                    onClick={() => handleTypeRemove(typeId)}
                    className="ml-2 inline-flex items-center p-0.5 rounded-full bg-indigo-200 text-indigo-600 hover:bg-indigo-300 dark:bg-indigo-700 dark:text-indigo-100 dark:hover:bg-indigo-600"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
            <select
              id="promptType"
              name="promptType"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value=""
              onChange={(e) => handleTypeSelect(e.target.value)}
            >
              <option value="" disabled>Select a prompt type</option>
              {promptTypes.map((type) => (
                <option key={type.id} value={type.id} disabled={selectedTypes.includes(type.id)}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Enter your prompt
            </label>
            <div className="mt-1">
              <textarea
                id="prompt"
                name="prompt"
                rows={4}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your prompt here..."
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isLoading || selectedTypes.length === 0}
            >
              {isLoading ? 'Generating...' : (
                <>
                  Generate Prompt <Send className="ml-2" size={18} />
                </>
              )}
            </button>
          </div>
        </form>
        {generatedPrompt && (
          <div className="mt-8 p-4 bg-green-100 dark:bg-green-800 rounded-md">
            <h2 className="text-lg font-semibold text-green-800 dark:text-green-200">Generated Prompt:</h2>
            <p className="mt-2 text-green-700 dark:text-green-300">{generatedPrompt}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;