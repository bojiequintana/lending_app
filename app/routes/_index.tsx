import { type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Lending App" },
    { name: "description", content: "Welcome to lending app" },
  ];
};

export default function Index() {
  return <div className="flex h-dvh w-dvh">Dashboard</div>;
}
