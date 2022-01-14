import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import DetailPage from "./pages/detail";
import AdminProductPage from "./pages/admin/adminproduct";
import AdminProductEdit from "./pages/admin/productEdit";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import AdminDashboard from "./pages/admin/admindashboard";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#header").innerHTML = Header.render();
    document.querySelector("#app").innerHTML = content;
    document.querySelector("#footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
    "/signup": () => {
        print(SignUp.render());
    },
    "/signin": () => {
        print(SignIn.render());
    },
    "/product/:id": ({ data }) => {
        const { id } = data;
        print(DetailPage.render(id));
    },
    "/admin/products": () => {
        print(AdminProductPage.render());
    },
    "/admin/product/:id/edit": ({ data }) => {
        const { id } = data;
        print(AdminProductEdit.render(id));
    },
    "/admin/dashboard": () => {
        print(AdminDashboard.render());
    },
});

router.resolve();
