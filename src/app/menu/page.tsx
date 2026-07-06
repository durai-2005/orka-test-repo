export default function Menu() {
  const items = [{ name: 'Espresso', price: '$3.50' }, { name: 'Latte', price: '$4.50' }, { name: 'Croissant', price: '$3.00' }];
  return (
    <div className="p-12 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Our Menu</h2>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.name} className="flex justify-between border-b pb-2">
            <span>{item.name}</span>
            <span className="font-bold">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}