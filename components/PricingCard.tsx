'use client';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
}

export function PricingCard({ title, price, features }: PricingCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-2">{price}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-green-500">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}