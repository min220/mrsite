const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg font-semibold text-foreground">
            MR
          </p>
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Min Rungsinaporn. Crafted with care in NYC.
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Barnard @ Columbia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
