export function Footer() {
  return (
    <footer className="mt-auto border-t py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-semibold">ECG Analyzer</div>
        <div className="flex gap-8 text-sm text-muted-foreground">
          {/* <a href="#" className="hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground">
            Terms
          </a>
          <a href="#" className="hover:text-foreground">
            Security
          </a>
          <a href="#" className="hover:text-foreground">
            Contact
          </a> */}
        </div>
        {/* <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Moment Healthcare Inc.</div> */}
      </div>
    </footer>
  )
}
