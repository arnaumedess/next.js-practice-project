import { CartCounter } from "@/app/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Counter Page",
  description: "A simple counter page",
};

export default function CounterPage() {

  
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <span>Producto del carrito</span>      
      <CartCounter value={10} />
    </div>
  );
}
