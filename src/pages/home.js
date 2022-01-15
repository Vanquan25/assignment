import Banner from "../components/banner";
import News from "../components/news";
import Footer from "../components/footer";
import Header from "../components/header";

const HomePage = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
        ${Header.render()}
        <main>
        <div class="banner">
        ${Banner.render()}
    </div>
    <div class="news">
        ${News.render()}
    </div>
        </main>
        ${Footer.render()}
      </div>

         
        `;
    },
};
export default HomePage;
