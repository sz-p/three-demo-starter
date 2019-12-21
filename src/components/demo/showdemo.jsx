import React, { useState, useRef, useEffect } from 'react';
import styles from "./showdemo.scss";
import showDemoHandle from "./demoHandle/showdemohandle";


function ShowDemo(props) {
  const container = useRef();

  useEffect(() => {
    const earth = new showDemoHandle(container.current);
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
export default ShowDemo;
