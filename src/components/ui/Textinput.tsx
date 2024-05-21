import type { ChangeEvent, FocusEvent } from 'react';
import React, { useState } from 'react';

import Icon from '@/components/ui/Icon';

interface TextinputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  classLabel?: string;
  className?: string;
  classGroup?: string;
  register?: (name: string) => {
    name: string;
    onBlur: () => void;
    onChange: () => void;
    ref: (instance: HTMLInputElement | null) => void;
  };
  name?: string;
  readonly?: boolean;
  value?: string;
  error?: { message: string };
  icon?: string;
  disabled?: boolean;
  id?: string;
  horizontal?: boolean;
  validate?: string;
  isMask?: boolean;
  msgTooltip?: boolean;
  description?: string;
  hasicon?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  defaultValue?: string;
}

const Textinput: React.FC<TextinputProps> = ({
  type,
  label,
  placeholder = 'Add placeholder',
  classLabel = 'form-label',
  className = '',
  register,
  name,
  readonly,
  error,
  disabled,
  id,
  horizontal,
  validate,
  isMask,
  msgTooltip,
  description,
  hasicon,
  onChange,
  onFocus,
  defaultValue,
  ...rest
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`formGroup ${error ? 'has-error' : ''} ${
        horizontal ? 'flex' : ''
      } ${validate ? 'is-valid' : ''}`}
    >
      {label && (
        <label
          htmlFor={id}
          className={`block capitalize ${classLabel} ${
            horizontal ? 'flex-0 mr-6 w-[60px] break-words md:w-[100px]' : ''
          }`}
        >
          {label}
        </label>
      )}
      <div className={`relative ${horizontal ? 'flex-1' : ''}`}>
        {name && !isMask && (
          <input
            type={type === 'password' && open === true ? 'text' : type}
            {...(register && register(name))}
            {...rest}
            className={`${error ? ' has-error' : ''} form-control py-2 ${className}`}
            placeholder={placeholder}
            readOnly={readonly}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            onChange={onChange}
          />
        )}
        {!name && !isMask && (
          <input
            type={type === 'password' && open === true ? 'text' : type}
            className={`form-control py-2 ${className}`}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            defaultValue={defaultValue}
            onChange={onChange}
            id={id}
          />
        )}
        {/* Render masked input if isMask is true */}
        {name && isMask && (
          <input
            type="text"
            {...(register && register(name))}
            {...rest}
            placeholder={placeholder}
            className={`${error ? ' has-error' : ''} form-control py-2 ${className}`}
            onFocus={onFocus}
            id={id}
            readOnly={readonly}
            disabled={disabled}
            onChange={onChange}
          />
        )}
        <div className="absolute top-1/2 flex -translate-y-1/2 space-x-1 text-xl ltr:right-[14px] rtl:left-[14px] rtl:space-x-reverse">
          {hasicon && (
            <span
              className="text-secondary-500 cursor-pointer"
              onClick={handleOpen}
            >
              {open && type === 'password' && (
                <Icon icon="heroicons-outline:eye" />
              )}
              {!open && type === 'password' && (
                <Icon icon="heroicons-outline:eye-off" />
              )}
            </span>
          )}
          {error && (
            <span className="text-danger-500">
              <Icon icon="heroicons-outline:information-circle" />
            </span>
          )}
          {validate && (
            <span className="text-success-500">
              <Icon icon="bi:check-lg" />
            </span>
          )}
        </div>
      </div>
      {error && (
        <div
          className={`mt-2 ${
            msgTooltip
              ? 'bg-danger-500 inline-block rounded px-2 py-1 text-[10px] text-white'
              : 'text-danger-500 block text-sm'
          }`}
        >
          {error.message}
        </div>
      )}
      {validate && (
        <div
          className={`mt-2 ${
            msgTooltip
              ? 'bg-success-500 inline-block rounded px-2 py-1 text-[10px] text-white'
              : 'text-success-500 block text-sm'
          }`}
        >
          {validate}
        </div>
      )}
      {description && <span className="input-description">{description}</span>}
    </div>
  );
};

export default Textinput;
