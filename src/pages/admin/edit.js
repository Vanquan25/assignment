import { get, update } from "../../api/posts";

const adminEdit = {

    async render(id) {
        const { data } = await get(id);
        return /* html */`      
     
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <form id="form-edit-post">
                        <input type="text" class="border border-black" id="id-post" placeholder="Title" value="${data.id}"/><br />
                        <input type="text" class="border border-black" id="title-post" placeholder="Title" value="${data.title}"/><br />
                        <input type="text" class="border border-black" id="img-post" placeholder="Img" value="${data.img}" /><br />
                        <textarea name=""  cols="30" rows="10" class="border border-black" id="desc-post" placeholder="Description">${data.desc}</textarea><br />
                        <button> Update</button>
                    </form>
                </div>
            </div>
            </main>
        </div>
        `;
    },
    afterRender(id) {
        // console.log(document.querySelector('#form-edit-post'));
        const formEdit = document.querySelector("#form-edit-post");
        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            update({
                id,
                title: document.querySelector("#title-post").value,
                img: document.querySelector("#img-post").value,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default adminEdit;
