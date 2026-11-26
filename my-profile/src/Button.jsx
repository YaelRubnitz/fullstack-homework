function Button({ type = 'Friend', label }) {
  const normalizedType = type.toLowerCase();

  return (
    <button
      type="button"
      className={`profile-btn profile-btn--${normalizedType}`}
    >
      {label}
    </button>
  );
}

export default Button;