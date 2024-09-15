import "./style.css";

interface ContentProps {
  children: React.ReactNode;
}

function SectionLabel({ children }: ContentProps) {
  return (
    <div className="section-wrapper">
      <div className="section-border"></div>
      <h3 className="section-label">{children}</h3>
    </div>
  );
}

export default SectionLabel;
