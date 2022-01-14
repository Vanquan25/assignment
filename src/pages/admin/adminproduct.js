import AdminProductsList from "../../components/admin/productlist";

const AdminProductPage = {
    render() {
        return /* html */ `
        <h1>Quản lí products</h1>
        ${AdminProductsList.render()}
        `;
    },
};
export default AdminProductPage;
