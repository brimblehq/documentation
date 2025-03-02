'use client';

interface PricingTableProps {
  plans: {
    name: string;
    features: Record<string, string | boolean | number>;
  }[];
}

export function PricingTable({ plans }: PricingTableProps) {
  const features = Object.keys(plans[0].features);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Feature
            </th>
            {plans.map((plan) => (
              <th
                key={plan.name}
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {features.map((feature) => (
            <tr key={feature}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {feature}
              </td>
              {plans.map((plan) => (
                <td key={plan.name} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {plan.features[feature]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}