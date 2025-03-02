'use client';

import { useState } from 'react';

interface Tab {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface CustomTabsProps {
  tabs: Tab[];
}

export function CustomTabs({ tabs }: CustomTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab.value
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.value}
            className={`${activeTab === tab.value ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}