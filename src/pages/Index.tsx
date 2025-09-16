import Hero from "@/components/ui/neural-network-hero";

const Index = () => {
  return (
    <div className="w-screen h-screen flex flex-col relative">
      <Hero 
        title="Zentro Suite: The Future of Business Intelligence"
        description="Experience next-generation analytics powered by neural networks. Transform your data into actionable insights with our AI-driven business suite."
        badgeText="AI-Powered Analytics"
        badgeLabel="New"
        ctaButtons={[
          { text: "Start Free Trial", href: "#trial", primary: true },
          { text: "View Demo", href: "#demo" }
        ]}
        microDetails={["Enterprise Ready", "Real-time Processing", "Neural Analytics"]}
      />
    </div>
  );
};

export default Index;
