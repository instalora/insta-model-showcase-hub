import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 md:px-10 max-w-[900px]">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: December 23, 2024
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using epicTwin's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily access the materials on epicTwin's website for personal, non-commercial transitory viewing only. This license does not include: modifying or copying the materials; using the materials for any commercial purpose without proper licensing; attempting to decompile or reverse engineer any software contained on the website; removing any copyright or other proprietary notations from the materials; or transferring the materials to another person.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Content Licensing</h2>
              <p className="text-muted-foreground leading-relaxed">
                AI-generated content purchased through epicTwin is licensed for commercial use according to the specific license tier purchased. All content remains the intellectual property of epicTwin and the original model creator until properly licensed. Unauthorized use, reproduction, or distribution of content is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Model Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Models who join the epicTwin platform retain ownership of their likeness and persona. By joining, models grant epicTwin permission to use their likeness for AI-generated content creation. Models receive compensation according to the revenue sharing agreement in place at the time of content generation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Prohibited Uses</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may not use epicTwin content for: creating deepfakes or misleading content; pornographic or adult content; defamatory, harassing, or discriminatory purposes; political campaign materials without disclosure; or any illegal activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                All purchases are final unless otherwise stated. Prices are subject to change without notice. We reserve the right to refuse or cancel orders at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on epicTwin's website are provided on an 'as is' basis. epicTwin makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall epicTwin or its suppliers be liable for any damages arising out of the use or inability to use the materials on epicTwin's website, even if epicTwin has been notified of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                epicTwin may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Questions about the Terms of Service should be sent to us at legal@epictwin.co
              </p>
            </section>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;
