type OrbitItemProps = {
  label: string;
  tooltip: string;
  className: string;
};

export default function OrbitItem({ label, tooltip, className }: OrbitItemProps) {
  return (
    <div className={`orbit-item ${className}`}>
      <button className="orbit-sphere" type="button" aria-label={label}>
        <span className="orbit-core" />
        <span className="orbit-tooltip">{tooltip}</span>
      </button>
    </div>
  );
}
