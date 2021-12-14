import { useState } from "react";

// Tooltip Documentation:
// type: focus => will display tooltip on focus
// type: enter => will display tooltip on mouseEnter
// type: both  => will display tooltip both on focus and mouseEnter
// content: the content of the tooltip, handle component, html and plain text

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
        <>
          {props.content}
        </>
      }
    </div>
  );
}

export default Tooltip;
