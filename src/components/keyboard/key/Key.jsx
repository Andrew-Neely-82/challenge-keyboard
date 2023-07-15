const Key = ({ className, value, label, onClick, children }) => {
  return (
    <div className={`Keyboard__key ${className}`} aria-label={label} onClick={onClick}>
        {value} {children}
    </div>
  );
};
export default Key;
