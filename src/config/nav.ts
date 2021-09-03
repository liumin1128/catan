export interface NavItem {
  label: string;
  pathname: string;
}

const list: NavItem[] = [
  { pathname: "/", label: "Services" },
  { pathname: "/how-it-works", label: "How It Works" },
  { pathname: "/cases", label: "Cases" },
  { pathname: "/winning-products", label: "Winning Products" },
  { pathname: "/blog", label: "Blog" },
  { pathname: "/about", label: "About" },
];

export default list;
