import './Tabs.css';

export interface TabItem {
  key: string;
  label: string;
  subLabel?: string;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (nextKey: string) => void;
  ariaLabel?: string;
}

export function Tabs({ items, value, onChange, ariaLabel = 'Tabs' }: TabsProps) {
  return (
    <div className="ds-tabs" role="tablist" aria-label={ariaLabel}>
      {items.map((item) => {
        const isSelected = item.key === value;
        return (
          <button
            key={item.key}
            role="tab"
            type="button"
            aria-selected={isSelected}
            aria-controls={`panel-${item.key}`}
            id={`tab-${item.key}`}
            className="ds-tab"
            onClick={() => onChange(item.key)}
          >
            {item.label}
            {item.subLabel ? ` · ${item.subLabel}` : ''}
          </button>
        );
      })}
    </div>
  );
}
