import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Folder } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Work = () => {
  const handleDriveClick = () => {
    window.open("https://drive.google.com/drive/folders/1Q0AFIqiWAAKJMkfE9n82JwFT_1EfKOMA", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-v-red" />
            <span className="text-v-red font-semibold uppercase tracking-wider text-sm">
              Our Portfolio
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Creative Work</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Explore our collection of successful campaigns, brand stories, and
            creative content.
          </p>

          {/* Main Card */}
          <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8 md:p-10 border border-border/50 shadow-lg">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Folder className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Complete Portfolio
                </h2>
                <p className="text-muted-foreground">
                  Access our full collection of projects including brand shoots,
                  campaigns, and creative content.
                </p>
              </div>
            </div>

            <button
              onClick={handleDriveClick}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-6 py-3 gradient-primary text-primary-foreground rounded-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <span>View All </span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;