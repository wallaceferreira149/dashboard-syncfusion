import * as Tooltip from '@radix-ui/react-tooltip';

export type ToolTipProps = {
  content: string | JSX.Element;
  showArrow?: boolean;
  delay?: number;
  side?: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
  children: React.ReactNode;
};

export const ToolTip: React.FC<ToolTipProps> = ({
  content,
  showArrow = true,
  delay = 0,
  side,
  sideOffset,
  ...props
}) => {
  return (
    <Tooltip.Provider delayDuration={delay}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div>{props.children}</div>
        </Tooltip.Trigger>
        <Tooltip.Content side={side} sideOffset={sideOffset}>
          {content}
          {showArrow && <Tooltip.Arrow />}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
