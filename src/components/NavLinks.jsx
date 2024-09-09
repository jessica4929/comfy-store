import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const links = [
  { text: "home", id: "1", url: "/" },
  { text: "about", id: "2", url: "/about" },
  { text: "products", id: "3", url: "/products" },
  { text: "cart", id: "4", url: "/cart" },
  { text: "checkout", id: "5", url: "/checkout" },
  { text: "orders", id: "6", url: "/orders" },
];
const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((text === "checkout" || text === "orders") && !user) return null;
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
