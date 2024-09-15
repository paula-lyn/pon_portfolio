import Circle from "../circle";
import "./style.css";

interface ContentProps {
  children: React.ReactNode;
}

function LabelComponent({ children }: ContentProps) {
  return (
    <div className="label-component">
      <Circle diameter={20} color="" />
      <span className="label">{children}</span>
    </div>
  );
}

export default LabelComponent;
