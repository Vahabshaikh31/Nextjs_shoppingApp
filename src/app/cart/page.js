import { auth } from "@/auth";
import { Carts } from "@/components/cart/index";
import { redirect } from "next/navigation";

const Cart = async () => {
  const getSession = await auth();

  if (!getSession) {
    redirect("/unauth-page");
  }
  return <Carts />;
};
export default Cart;
