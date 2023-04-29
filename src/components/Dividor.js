import React from 'react';

const TransparentDivider = () => {
  const dividerStyle = {
    width: '100%', // 分割线宽度
    height: '1px', // 分割线高度
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // 分割线颜色
    margin: '16px 0', // 分割线外边距
  };

  return <div style={dividerStyle}></div>;
};

export default TransparentDivider;
