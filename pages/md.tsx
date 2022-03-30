import { useRouter } from "next/router";
export default function App() {
  const router = useRouter();
  const phone = router.query.phone || "xxx-xxxx-xxxx";
  return (
    <section id="nice">
      <h1 style={{ fontSize: "36px" }}>段波文</h1>
      <ul>
        <li>
          <section>性别：男 | 25岁</section>
        </li>
        <li>
          <section>电话：15680979383</section>
        </li>
        <li>
          <section>邮箱：dbwencookie@gmail.com</section>
        </li>
        <li>
          <section>工作年限：4 年</section>
        </li>
      </ul>
      <h2>
        <span className="prefix"></span>
        <span className="content">教育经历</span>
        <span className="suffix"></span>
      </h2>
      <ul>
        <li>
          <section>
            <strong>成都信息工程大学</strong> · 网络工程 · 本科
          </section>
        </li>
        <li>
          <section>英语 4 级，获得过国家奖学金</section>
        </li>
      </ul>
      <h2>
        <span className="prefix"></span>
        <span className="content">专业技能</span>
        <span className="suffix"></span>
      </h2>
      <ul>
        <li>
          <section>
            熟悉 HTML / CSS / JavaScript / ES6 / Typescript 等前端基础知识
          </section>
        </li>
        <li>
          <section>
            熟悉 前端工程化和性能优化，能使用 Webpack 从零到一搭建并优化前端项目
          </section>
        </li>
        <li>
          <section>熟悉 React 前端技术栈及原理</section>
        </li>
      </ul>
      <h2>
        <span className="prefix"></span>
        <span className="content">工作经历</span>
        <span className="suffix"></span>
      </h2>
      <h3>
        <span className="prefix"></span>
        <span className="content">成都聚思力信息技术有限公司（TD SYNNEX）</span>
        <span className="suffix"></span>
      </h3>
      <p>
        2017年11月 - 2022年03月
        <br />
        TD SYNNEX 是一家世界 500 强企业，主营业务包括全球的IT产品分销和供应链。
        <br />
        我担任 STELLR 云平台的前端开发工程师，负责 STELLR
        平台的前端基建和业务研发工作，同时也负责搭建前端基础服务，制定前端标准规范，培训前端新员工。
      </p>
      <h2>
        <span className="prefix"></span>
        <span className="content">项目经历</span>
        <span className="suffix"></span>
      </h2>
      <h3>
        <span className="prefix"></span>
        <span className="content">STELLR 云平台</span>
        <span className="suffix"></span>
      </h3>
      <p>
        2019年02月 - 2022年03月 STELLR 是面向欧洲，美洲地区的
        B端云产品销售平台，合作方包括 苹果，谷歌，微软等
        300+供应商，和20000+下游公司，是公司营收的三大马车之一。
        <br />
        项目技术：React + Redux + Webpack + Ant Design + Less + Immutable.js
      </p>
      <ul>
        <li>
          <section>
            主导部门前端框架选型和设计并实现了 UI 与逻辑分离的数据流方案。
          </section>
        </li>
        <li>
          <section>
            设计并实现了一套高度自定义的换肤方案，能使引入CSS文件大小最优，并支持非常灵活的自定义组合配置，目前已同步为公司所有前端项目的换肤方案。{" "}
            <strong>
              <a href="https://github.com/dbwcooper/lessys">链接</a>
            </strong>
          </section>
        </li>
        <li>
          <section>
            主导并设计了国际化方案，实现了文案的资源提取与整合，多语言翻译，文案的即时修改等功能。
          </section>
        </li>
        <li>
          <section>
            设计并实现了 STELLR 平台的 icon
            按需引入优化方案，项目的打包体积减少了 45%。
          </section>
        </li>
        <li>
          <section>
            设计并实现 JSF系统 与 React页面的双向通信机制，提供了 SETLLR
            平台的渐进式迭代升级方案，实现了 JSF 系统到 React 的平稳过渡。
            <a href="https://github.com/dbwcooper/adapter-frame">链接</a>
          </section>
        </li>
        <li>
          <section>
            设计并实现了 STELLR
            平台的低代码报表系统，为后端预置了图表，表格，列表以及前端自定义组件。
          </section>
        </li>
        <li>
          <section>
            设计并实现了一个 STELLR 平台的公用搜索库，用于匹配文本和图标。
            <a href="https://github.com/dbwcooper/react-ctrl-f">链接</a>
          </section>
        </li>
        <li>
          <section>
            优化了前端框架，引入了 pnpm 以及将 Webpack4 升级为
            Webpack5，提升了项目编译速度和打包体积。
          </section>
        </li>
        <li>
          <section>
            负责业务平台的页面开发工作，如：Checkout，Contract 等20+页面。
          </section>
        </li>
      </ul>
      <h3>
        <span className="prefix"></span>
        <span className="content">storefront 分销中台</span>
        <span className="suffix"></span>
      </h3>
      <p>
        2018年03月 - 2019年02月
        <br />
        storefront 是一个提供分销商发布产品，管理客户的平台，拥有 2000+
        分销商用户。
        <br />
        项目技术：React + Redux + Webpack + Ant Design + Less + Immutable.js
      </p>
      <ul>
        <li>
          <section>
            主导项目的重构，编写项目公用基础和复合组件，负责分配任务，跟进项目进度。
          </section>
        </li>
        <li>
          <section>优化项目数据流方案，设计并实现了路由级 model。</section>
        </li>
        <li>
          <section>设计并实现了 UI与逻辑关注点分离的前端框架。</section>
        </li>
      </ul>
      <h3>
        <span className="prefix"></span>
        <span className="content">TD SYNNEX China 官网</span>
        <span className="suffix"></span>
      </h3>
      <p>
        2022年01月 - 2022年02月
        <br />
        此网站用于对外展示公司形象，以及显示公司招聘岗位等。
        <strong>
          <a href="https://www.synnex-china.com/">链接</a>
        </strong>
        <br />
        项目技术： Next.js + Tailwind CSS
      </p>
      <ul>
        <li>
          <section>负责官网的设计与实现</section>
        </li>
        <li>
          <section>前端兼容性 响应式，支持 IE 浏览器，手机端，桌面端。</section>
        </li>
        <li>
          <section>前端性能优化，包括：图片压缩，视频，接口缓存等。</section>
        </li>
      </ul>
    </section>
  );
}
