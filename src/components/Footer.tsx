
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer: React.FC = () => {
  return (
    <footer className="bg-instalora-50 dark:bg-instalora-900 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold font-display bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Instalora
              </span>
            </a>
            <p className="mt-4 text-sm text-instalora-600 dark:text-instalora-300">
              Generate stunning AI model content for commercial use
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-display font-semibold mb-4 text-sm">Product</h3>
            <ul className="space-y-3">
              <li><a href="/models" className="text-instalora-600 hover:text-primary text-sm dark:text-instalora-300">Models</a></li>
              <li><a href="/pricing" className="text-instalora-600 hover:text-primary text-sm dark:text-instalora-300">Pricing</a></li>
              <li><a href="/enterprise" className="text-instalora-600 hover:text-primary text-sm dark:text-instalora-300">Enterprise</a></li>
              <li><a href="/partners" className="text-instalora-600 hover:text-primary text-sm dark:text-instalora-300">Partners</a></li>
            </ul>
          </div>

          <div className="md:col-span-1 md:text-left text-right">
            <h3 className="font-display font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-3">
              <li><a href="/blog" className="text-instalora-600 hover:text-primary text-sm dark:text-instalora-300">Blog</a></li>
              <li><a href="/documentation" className="text-instalora-600 hover:text-primary text-sm dark:text-instalora-300">Documentation</a></li>
              <li><a href="/support" className="text-instalora-600 hover:text-primary text-sm dark:text-instalora-300">Help Center</a></li>
              <li><a href="/community" className="text-instalora-600 hover:text-primary text-sm dark:text-instalora-300">Community</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display font-semibold mb-4 text-sm">Stay updated</h3>
            <p className="text-instalora-600 text-sm mb-4 dark:text-instalora-300">Subscribe to our newsletter</p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button type="submit" variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-instalora-200 dark:border-instalora-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-instalora-600 dark:text-instalora-400">
            © {new Date().getFullYear()} Instalora. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/terms" className="text-xs text-instalora-600 hover:text-primary dark:text-instalora-400">Terms</a>
            <a href="/privacy" className="text-xs text-instalora-600 hover:text-primary dark:text-instalora-400">Privacy</a>
            <a href="/cookies" className="text-xs text-instalora-600 hover:text-primary dark:text-instalora-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
