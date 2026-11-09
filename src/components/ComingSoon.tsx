import StatusPage from "./StatusPage";

interface ComingSoonProps {
  gameName: string;
}

export default function ComingSoon({ gameName }: ComingSoonProps) {
  return (
    <StatusPage
      title="Coming soon"
      heading={gameName}
      message="Our Hextech engineers are crafting this puzzle. Check back soon."
    />
  );
}
