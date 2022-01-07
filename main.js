import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });
router.on({
// nếu user truy cập vào đường dẫn / thì sẽ làm việc gì đó
    "/": () => console.log("Home page"),
    "/about": () => console.log("About page"),
    "/product": () => console.log("Product Page"),
    "*": () => console.log("not found"),
});
router.resolve();
