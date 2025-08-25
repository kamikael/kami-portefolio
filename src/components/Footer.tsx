const Footer = () => {
      return (
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Kami. Tous droits réservés.</p>
            <div className="mt-2">
              <a href="https://github.com/kamikael" target="_blank" rel="noopener noreferrer" className="mx-2">GitHub</a>
              <a href="https://www.linkedin.com/in/harold-kamikael-0a349331b/" target="_blank" rel="noopener noreferrer" className="mx-2">LinkedIn</a>
              <a href="https://www.tiktok.com/@kami_dev7" target="_blank" rel="noopener noreferrer" className="mx-2">tiktok</a>
              <a href="https://www.instagram.com/kamikael_dev/" target="_blank" rel="noopener noreferrer" className="mx-2">instagram</a>
            </div>
          </div>
        </footer>
      );
    };
    export default Footer;