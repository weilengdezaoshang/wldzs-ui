import React, { memo } from 'react';
import './styles/index.less'; // 引入样式
export interface IButtonProps {
  /** 按钮类型 */
  type?: 'primary' | 'default';
  status?: 'success' | 'warning' | 'error' | 'default';
  /** 按钮文字 */
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/** 按钮组件 */
const Button: React.FC<IButtonProps> = (props) => {
  const { type = 'default', children, onClick } = props;
  return (
    <button
      type="button"
      className={`dumi-btn ${type ? 'dumi-btn-' + type : ''} cool-btn ${
        type ? 'cool-btn--' + type : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
