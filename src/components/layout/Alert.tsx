import { Transition } from "react-transition-group";
import { useRef } from "react";

const duration = 600;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

interface ITransitionStyles {
  entering?: { opacity?: number };
  entered?: { opacity?: number };
  exiting?: { opacity?: number };
  exited?: { opacity?: number };
  [someProp: string]: any;
}

const transitionStyles: ITransitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};
interface IProps {
  alert: {
    msg: string;
    type: string;
  };
}

const Alert = ({ alert }: IProps): JSX.Element | null => {
  const nodeRef = useRef(null);
  const styles = alert.type ? `alert alert-${alert.type}` : "";

  return (
    <Transition
      in={!!alert.msg}
      nodeRef={nodeRef}
      timeout={duration}
      unmountOnExit={true}
    >
      {(state: string) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          className={styles}
          role="alert"
        >
          {alert.msg}
        </div>
      )}
    </Transition>
  );
};

export default Alert;
