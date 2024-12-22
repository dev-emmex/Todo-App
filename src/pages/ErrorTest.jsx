function ErrorTest() {
  const throwError = () => {
    throw new Error('This is a test error');
  };

  return (
    <div className="error-test">
      <h1>Error Boundary Test</h1>
      <p>Click the button below to trigger an error:</p>
      <button onClick={throwError}>Trigger Error</button>
    </div>
  );
}

export default ErrorTest;