const Footer = () => {
      return (
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Kami. Tous droits réservés.</p>
            <div className="mt-2">
              <a href="https://github.com/tonusername" target="_blank" rel="noopener noreferrer" className="mx-2">GitHub</a>
              <a href="https://linkedin.com/in/tonusername" target="_blank" rel="noopener noreferrer" className="mx-2">LinkedIn</a>
              <a href="https://twitter.com/tonusername" target="_blank" rel="noopener noreferrer" className="mx-2">Twitter</a>
              
            </div>
          </div>
        </footer>
      );
    };
    export default Footer;