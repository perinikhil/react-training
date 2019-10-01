import React from 'react';
import Toast from './Toast';
import './ToastProvider.css';

export const context = React.createContext({});
const { Provider } = context;

function ToastProvider(props) {
  const { children } = props;
  const [toastProps, setToastProps] = React.useState(null);

  const show = (props) => setToastProps(props);
  const hide = () => setToastProps(null);

  return (
    <React.Fragment>
      <Provider value={{ show }}>
        { children }

        {
          toastProps && (
            <button className="toast-provider__item" onClick={hide}>
              <Toast {...toastProps} />
            </button>
          )
        }
      </Provider>
    </React.Fragment>
  );
}

export default ToastProvider;
