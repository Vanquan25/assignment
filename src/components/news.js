import axios from "axios";

const News = {
    async render() {
        const { data } = await axios.get("http://localhost:3002/posts");
        return /* html */`
              <h2 class="uppercase font-bold text-xl my-5 text-blue-800">
                Tin tức học tập
              </h2>
              <div class="grid md:grid-cols-3 gap-8">
              ${data.map((post) => `
                  <div class="border shadow rounded p-4">
                      <a href="/product/${post.id}">
                        <img
                          src="${post.img}" alt=""
                          class="w-full"
                        />
                      </a>
                      <h3 class="my-3">
                        <a href="/product/${post.id}" class="text-orange-500 font-semibold">${post.title}</a>
                      </h3>
                      <p class="text-xs">
                      ${post.desc}
                      </p>
                    </div>
                    `).join("")}
        
                    </div>
                    `;
    },

};
export default News;
