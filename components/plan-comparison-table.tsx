'use client';

import { InfoIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface Plan {
  description: string;
  features: string[];
}

interface PlanComparisonTableProps {
  plans: Record<string, Plan>;
}

export function PlanComparisonTable({ plans }: PlanComparisonTableProps) {
  return (
    <div className="prose my-6 overflow-auto prose-no-margin">
      <table className="w-full whitespace-nowrap text-sm text-fd-muted-foreground">
        <thead>
          <tr>
            <th className="w-[30%]">Plan</th>
            <th className="w-[40%]">Description</th>
            <th className="w-[30%]">Features</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(plans).map(([planName, plan]) => (
            <tr key={planName}>
              <td>
                <code className="rounded-md bg-fd-secondary p-1 text-fd-secondary-foreground">
                  {planName}
                </code>
              </td>
              <td>
                <div className="flex items-center gap-1">
                  {plan.description}
                  <Popover>
                    <PopoverTrigger>
                      <InfoIcon className="size-4" />
                    </PopoverTrigger>
                    <PopoverContent className="prose max-h-[400px] min-w-[220px] max-w-[400px] overflow-auto text-sm prose-no-margin">
                      {plan.description}
                    </PopoverContent>
                  </Popover>
                </div>
              </td>
              <td>
                <ul className="list-disc pl-4">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}