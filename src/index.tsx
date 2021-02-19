import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
export interface ICollapsibleProps {
  open?: boolean;
  header: string | React.ReactNode;
  headerClassName?: string;
  titleClassName?: string;
  iconButtonClassName?: string;
  contentClassName?: string;
  contentContainerClassName?: string;
  iconUp?: React.ReactNode;
  iconDown?: React.ReactNode;
  collapsibleClassName?: string;
}

const Collapsible: React.FC<ICollapsibleProps> = ({
  open,
  collapsibleClassName = 'collapsible-card-edonec',
  headerClassName = 'collapsible-header-edonec',
  titleClassName = 'title-text-edonec',
  iconButtonClassName = 'collapsible-icon-button-edonec',
  contentClassName = 'collapsible-content-edonec',
  contentContainerClassName = 'collapsible-content-padding-edonec',
  iconUp: IconUp,
  iconDown: IconDown,
  children,
  header,
}) => {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(open ? undefined : 0);
  const ref = useRef<HTMLDivElement>(null);
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    // @ts-ignore
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);
  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);
  return (
    <>
      <div className={collapsibleClassName}>
        <div>
          <div className={headerClassName}>
            <div className={titleClassName}>{header}</div>
            <button type="button" className={iconButtonClassName} onClick={handleFilterOpening}>
              {IconDown && IconUp ? (
                isOpen ? (
                  IconDown
                ) : (
                  IconUp
                )
              ) : (
                <i className={`fas-edonec fa-chevron-down-edonec ${isOpen ? 'rotate-center-edonec down' : 'rotate-center-edonec up'}`} />
              )}
            </button>
          </div>
        </div>
        <div className={contentClassName} style={{ height }}>
          <div ref={ref}>
            <div className={contentContainerClassName}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsible;
