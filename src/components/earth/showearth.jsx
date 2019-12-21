import React, { useState, useRef, useEffect } from 'react';
import styles from "./showearth.scss";
import showEarthHandle from "./showearthhandle/showearthhandle";


function ShowEarth(props) {
  const container = useRef();

  useEffect(() => {
    const earth = new showEarthHandle(container.current);
    earth.show();
    return () => {
      earth.end();
    };
  }, []);

  // const [count, setCount] = useState(0);
  return (
    <div className={styles.page} style={props.style}>
      <div ref={container} style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}></div>
    </div>
  );
}
export default ShowEarth;
