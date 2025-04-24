
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface GenerationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  modelName: string;
  freeGenerationsLeft: number;
  onGenerate: () => void;
}

const GenerationModal: React.FC<GenerationModalProps> = ({ 
  open, 
  onOpenChange, 
  modelName,
  freeGenerationsLeft,
  onGenerate
}) => {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('natural');
  const [generating, setGenerating] = useState(false);
  
  const handleGenerate = () => {
    if (!prompt) return;
    
    setGenerating(true);
    
    // Simulate generation process
    setTimeout(() => {
      setGenerating(false);
      onGenerate();
      onOpenChange(false);
      // Reset form
      setPrompt('');
    }, 2000);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-display">
            Generate with {modelName}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          {freeGenerationsLeft > 0 ? (
            <div className="mb-4 px-3 py-2 bg-primary/10 border border-primary/20 rounded-md text-sm">
              You have <strong>{freeGenerationsLeft}</strong> free generations left. Free generations include a watermark.
            </div>
          ) : (
            <div className="mb-4 px-3 py-2 bg-yellow-100 border border-yellow-200 rounded-md text-sm text-yellow-800">
              You've used all your free generations. Purchase a package to generate more images without watermarks.
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="prompt">Description</Label>
              <Textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={`Describe how you want ${modelName} to appear...`}
                className="mt-1 resize-none h-24"
              />
              <p className="text-xs text-instalora-500 mt-1">
                Example: "Professional headshot for LinkedIn profile, natural lighting, neutral background"
              </p>
            </div>
            
            <div>
              <Label htmlFor="style">Style</Label>
              <Select value={style} onValueChange={setStyle}>
                <SelectTrigger id="style" className="mt-1">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="natural">Natural</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="cinematic">Cinematic</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="artistic">Artistic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="pt-2">
              <Button 
                onClick={handleGenerate}
                disabled={!prompt || generating}
                className="w-full"
              >
                {generating ? 'Generating...' : 'Generate Image'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GenerationModal;
