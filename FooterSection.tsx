interface FooterSectionProps {
  content: {
    copyright: string;
  };
}

export function FooterSection({ content }: FooterSectionProps) {
  return (
    <footer className="w-full py-12 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="mb-4">Product</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
              <li><a href="#" className="hover:text-white">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4">Resources</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white">Licenses</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
