export function Footer() {
  return (
    <footer className="bg-hw-black py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="font-serif text-2xl">Healthspan Wealth</span>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Healthspan Wealth. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
