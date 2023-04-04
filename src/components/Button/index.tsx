import classNames from "classnames";
import * as React from "react";

export interface IButtonProps {
  label?: string;
  onClick?: any;
  icon?: any;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
}

export default function Button(props: IButtonProps) {
  const { icon, label, onClick, disabled } = props;
  return (
    <>
      {icon ? (
        <div
          className={classNames(
            "Iconbutton relative hover:cursor-pointer whitespace-nowrap rounded-full h-10 w-10 p-2 hover:bg-neutral-300 fill-neutral-900 hover:fill-neutral-1000",
            {
              "opacity-5": disabled,
            }
          )}
          onClick={onClick}
        >
          {icon}
        </div>
      ) : (
        <button
          className={classNames("Button ", {
            "opacity-5": disabled,
          })}
          onClick={onClick}
          disabled={disabled}
        >
          {label && <span className="">{label}</span>}
        </button>
      )}
    </>
  );
}
