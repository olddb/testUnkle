import { useState } from "react";

const Tooltip = props => {
  const [visible, setVisible] = useState(false);

  const focus = props.type === 'focus' || props.type === 'both';
  const enter = props.type === 'enter' || props.type === 'both';

  const typeVisible = {
    ...focus && {onFocus: () => setVisible(true)},
    ...focus && {onBlur: () => setVisible(false)},
    ...enter && {onMouseEnter: () => setVisible(true)},
    ...enter && {onMouseLeave: () => setVisible(false)},
  }

  return (
    <div
      className="tooltip-wrapper"
      {...typeVisible}
    >
      {props.children}
      {visible &&
        <div>
          {props.content}
        </div>
      }
    </div>
  );
}

export default Tooltip;
