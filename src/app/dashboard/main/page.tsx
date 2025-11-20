import { SimpleWidget, WidgetsGrid } from "@/app/components";

export const metadata = {
  title: "Main Page",
  description: "A simple main page",
};

export default function MainPage() {

  
  return (
    <div className="flex flex-col w-full h-screen">
      <h1 className="text-5xl mt-10 ml-10">Dashboard</h1>     
      <h2 className="text-3xl ml-10">Informacion General</h2>

      <WidgetsGrid/>
    </div>
  );
}
