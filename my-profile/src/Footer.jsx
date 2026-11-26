function Footer({ text = '© 2025 My App' }) {
  return (
    <footer className="site-footer">
      <p>{text}</p>
    </footer>
  );
}

export default Footer;