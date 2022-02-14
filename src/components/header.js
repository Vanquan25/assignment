const Header = {
    render() {
        return `
        <div class="bg-[#272f54] py-4">
        <a href="#">
          <img src="../../../images/logo.jpg" alt="" class="mx-auto" />
        </a>
      </div>
        <nav class="bg-orange-300 flex justify-between items-center">
          <ul class="flex" id="menu">
            <li>
              <a
                href="/"
                class="transition duration-200 ease-in-out block p-3 hover:bg-indigo-500 hover:text-white"
                >Trang chủ</a
              >
            </li>
            <li>
              <a
                href="/about"
                class="transition duration-200 ease-in-out block p-3 hover:bg-indigo-500 hover:text-white"
                >Tuyển sinh</a
              >
            </li>
            <li>
              <a
                href="/product"
                class="transition duration-200 ease-in-out block p-3 hover:bg-indigo-500 hover:text-white"
                >Sinh viên</a
              >
            </li>
          </ul>
          <ul class="flex">
                <li><a  id="account-email" class="block px-4 py-5 hover:bg-indigo-500 hover:text-white"></a></li>
            </ul>
          <div class="flex mx-10">
            <input type="text" class="bg-white border border-gray-300 rounded-md my-2">
            <button class="bg-[#0000FF] m-2 w-full rounded-md px-3 hover:bg-[#9900FF]">Tìm kiếm</button>
          </div>
          <div class="m-3">
          <a href="/signin">Sign In</a>/<a href="/signup">Sign Up</a>
        </div>
        </nav> 
        `;
    },
    afterRender() {
        const user = JSON.parse(localStorage.getItem("user"));
        document.querySelector("#account-email").innerHTML = user.email;
    },
};
export default Header;
