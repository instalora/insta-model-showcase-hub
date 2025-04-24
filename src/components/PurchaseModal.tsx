
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Package {
  id: string;
  name: string;
  imageCount: number;
  videoCount: number;
  price: number;
}

interface PurchaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPurchaseComplete: () => void;
}

const packages: Package[] = [
  {
    id: 'basic',
    name: 'Basic',
    imageCount: 10,
    videoCount: 2,
    price: 99
  },
  {
    id: 'pro',
    name: 'Professional',
    imageCount: 25,
    videoCount: 5,
    price: 199
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    imageCount: 50,
    videoCount: 10,
    price: 349
  }
];

const PurchaseModal: React.FC<PurchaseModalProps> = ({ open, onOpenChange, onPurchaseComplete }) => {
  const [selectedPackage, setSelectedPackage] = useState<string>('basic');
  const [step, setStep] = useState<'select-package' | 'payment'>('select-package');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContinue = () => {
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      onPurchaseComplete();
      onOpenChange(false);
      setStep('select-package'); // Reset for next time
    }, 1500);
  };

  const handleBack = () => {
    setStep('select-package');
  };

  const selectedPackageData = packages.find(p => p.id === selectedPackage);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-display">
            {step === 'select-package' ? 'Choose a Package' : 'Complete Your Purchase'}
          </DialogTitle>
        </DialogHeader>

        {step === 'select-package' ? (
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {packages.map((pkg) => (
                <div 
                  key={pkg.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedPackage === pkg.id 
                      ? 'border-primary bg-primary/5 shadow-sm' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <h3 className="font-medium text-base mb-2">{pkg.name}</h3>
                  <p className="text-2xl font-bold mb-4">${pkg.price}</p>
                  <ul className="text-sm space-y-2 text-instalora-600 dark:text-instalora-300">
                    <li className="flex items-center space-x-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                      </svg>
                      <span>{pkg.imageCount} images</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                      </svg>
                      <span>{pkg.videoCount} videos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                      </svg>
                      <span>Commercial license</span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <Button onClick={handleContinue}>
                Continue
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handlePaymentSubmit} className="mt-4 space-y-6">
            <div>
              <Label htmlFor="card-name">Cardholder Name</Label>
              <Input id="card-name" placeholder="John Smith" className="mt-1" required />
            </div>
            
            <div>
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="4242 4242 4242 4242" className="mt-1" required />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiration">Expiration</Label>
                <Input id="expiration" placeholder="MM/YY" className="mt-1" required />
              </div>
              <div>
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" className="mt-1" required />
              </div>
            </div>

            <div className="pt-4">
              <div className="flex justify-between mb-4">
                <span className="text-sm text-instalora-600 dark:text-instalora-300">
                  Package: {selectedPackageData?.name}
                </span>
                <span className="font-medium">
                  ${selectedPackageData?.price}
                </span>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={handleBack} disabled={isSubmitting}>
                  Back
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : `Pay $${selectedPackageData?.price}`}
                </Button>
              </div>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
