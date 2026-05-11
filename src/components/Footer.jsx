export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" glow-target text-center text-gray-400 py-6">
      © {year} Sveltoz Solutions Pvt Ltd. All rights reserved.
    </footer>
  );
}