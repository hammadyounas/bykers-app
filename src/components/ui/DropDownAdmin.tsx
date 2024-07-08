import Link from 'next/link';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

import Icon from '@/components/ui/Icon';

interface DropdownItem {
  label: string;
  link?: string;
  icon?: string;
  hasDivider?: boolean;
}

interface DropdownProps {
  label?: string;
  wrapperClass?: string;
  labelClass?: string;
  children?: ReactNode;
  classMenuItems?: string;
  items?: DropdownItem[];
  classItem?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label = 'Dropdown',
  wrapperClass = 'inline-block',
  labelClass = 'label-class-custom',
  children,
  classMenuItems = 'mt-2 w-[220px]',
  items = [
    {
      label: 'Action',
      link: '#',
    },
    {
      label: 'Another action',
      link: '#',
    },
    {
      label: 'Something else here',
      link: '#',
    },
  ],
  classItem = 'px-4 py-2',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={`relative ${wrapperClass}`} ref={dropdownRef}>
      <button className="block w-full" onClick={toggleDropdown}>
        <div className={labelClass}>{label}</div>
      </button>

      {isOpen && (
        <div
          className={`shadow-dropdown absolute z-[9999] origin-top-right rounded border
            border-slate-100 bg-white ltr:right-0 rtl:left-0 dark:border-slate-700 dark:bg-slate-800
            ${classMenuItems}
            `}
        >
          <div>
            {children ||
              items?.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    item.hasDivider
                      ? 'border-t border-slate-100 dark:border-slate-700'
                      : ''
                  } block ${classItem}`}
                >
                  {item.link ? (
                    <Link href={item.link}>
                      <a className="block">
                        {item.icon ? (
                          <div className="flex items-center">
                            <span className="block text-xl ltr:mr-3 rtl:ml-3">
                              <Icon icon={item.icon} />
                            </span>
                            <span className="block text-sm">{item.label}</span>
                          </div>
                        ) : (
                          <span className="block text-sm">{item.label}</span>
                        )}
                      </a>
                    </Link>
                  ) : (
                    <div className="block cursor-pointer">
                      {item.icon ? (
                        <div className="flex items-center">
                          <span className="block text-xl ltr:mr-3 rtl:ml-3">
                            <Icon icon={item.icon} />
                          </span>
                          <span className="block text-sm">{item.label}</span>
                        </div>
                      ) : (
                        <span className="block text-sm">{item.label}</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
