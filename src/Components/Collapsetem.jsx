import { useState, useEffect, useRef } from 'react';
import fleche from '../assets/arrow_back_ios-24px 2.png'

function CollapseItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (isOpen && ref.current) {
      setContentHeight(ref.current.clientHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen, content]);


  return (
    <div className='apropos' >
      <div className='info'>
        <h3 >{title}</h3>
        <img src={fleche} alt="bouton d'ouvertue d'information" onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div
        style={{
          height: isOpen ? contentHeight : 0,
          overflow: 'hidden',
          transition: 'height 0.3s ease',
        }}
      >
        <div ref={ref}>
          <span>{content}</span>
        </div>
      </div>
    </div>
  );
}

export default CollapseItem