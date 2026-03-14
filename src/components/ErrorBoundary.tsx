import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  info?: ErrorInfo;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled error in React tree:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          background: "#000",
          color: "#fff",
          textAlign: "center",
        }}>
          <div>
            <h1>Something went wrong.</h1>
            <p>{this.state.error?.message}</p>
            <pre style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
              {this.state.info?.componentStack}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
