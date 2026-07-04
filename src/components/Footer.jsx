export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Okeke Chukwudalu. All rights reserved.</p>
        <a href="#home" className="back-to-top" aria-label="Back to top">
          ↑
        </a>
      </div>
    </footer>
  )
}
