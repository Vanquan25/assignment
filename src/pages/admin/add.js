import axios from "axios";
import { add } from "../../api/posts";

const Add = {
    render() {
        return /* html */`      
      
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <form id="form-add-post">
                        <input type="text" class="border border-black" id="title-post" placeholder="Title"/><br />
                        <input type="file" class="border border-black" id="img-post" placeholder="Img" /><br />
                        <textarea name=""  cols="30" rows="10" class="border border-black" id="desc-post" placeholder="Description"></textarea><br />
                        <button>Thêm</button>
                    </form>
                </div>
            </div>
            </main>
        </div>
        `;
    },
    afterRender() {
        // console.log(document.querySelector('#form-add-post'));
        const formAdd = document.querySelector("#form-add-post");
        const CLOUD_API = "https://api.cloudinary.com/v1_1/dixysmopg/image/upload";
        const CLOUD_PRESET = "xjfrqlvj";
        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = document.querySelector("#img-post").files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUD_PRESET);

            const { data } = await axios.post(CLOUD_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            const post = {
                title: document.querySelector("#title-post").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            };
            add(post);
            // fetch("http://localhost:3005/post", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         // 'Content-Type': 'application/x-www-form-urlencoded',
            //     },
            //     body: JSON.stringify(post),
            // });
        });
    },
};
export default Add;
