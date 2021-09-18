import React from 'react';
import vueTodo from 'img/vueTodo.PNG';
import vuexTodo from 'img/vuexTodo.png';
import vuexNews from 'img/vuexNews.png';
import habit from 'img/react.PNG';
import youtube from 'img/reacthook.PNG';

const Projects = () => {
  return (
    <section id="work" className="section">
      <div className="section__container">
        <h1>My work</h1>
        <h3>Projects</h3>
        <div className="work__catagories">
          <button className="category__btn selected" data-filter="*">
            All<span className="category__count"> 5 </span>
          </button>
          <button className="category__btn" data-filter="framework">
            Vue.js<span className="category__count"> 3 </span>
          </button>
          <button className="category__btn" data-filter="library">
            React.js<span className="category__count"> 2 </span>
          </button>
        </div>

        <div className="work__projects">
          <a
            href="https://github.com/MaJunghan/TodoList"
            className="project"
            target="blank"
            data-type="framework"
          >
            <img className="project_img" src={vueTodo} alt="Vue Todo" />
            <div className="project__description">
              <h3>Vue.js Todo List</h3>
              <span>
                제일 처음 작업한 Todolist
                <br />
                localStorage Data <br />
                추가 삭제 전체삭제 구현
              </span>
            </div>
          </a>
          <a
            href="https://github.com/MaJunghan/TodoVuex"
            className="project"
            target="blank"
            data-type="framework"
          >
            <img className="project_img" src={vuexTodo} alt="VueX Todo" />
            <div className="project__description">
              <h3>VueX Todo List</h3>
              <span>
                Vuex Store와 헬퍼함수를 사용하여
                <br />
                만든 TodoList store State를 통해 <br />
                추가 삭제 전체삭제 완료체크 구현
              </span>
            </div>
          </a>
          <a
            href="https://github.com/MaJunghan/Vuecli3"
            className="project"
            target="blank"
            data-type="framework"
          >
            <img className="project_img" src={vuexNews} alt="Vuex News" />
            <div className="project__description">
              <h3>Vuex News API</h3>
              <span>
                비동기 처리의 상태관리
                <br />
                view에서 dispatch를통해 <br />
                비동기처리가 왔을때 Ation을 호출 <br />
                트랜지션 사용 LoaDingBar 구현
              </span>
            </div>
          </a>
          <a href="#" className="project" target="blank" data-type="library">
            <img className="project_img" src={habit} alt="React Class" />
            <div className="project__description">
              <h3>Habit-tracker</h3>
              <span>
                react Class Component로 만든 <br />
                취미목록 App <br />
                추가 삭제 전체삭제 구현
              </span>
            </div>
          </a>
          <a href="#" className="project" target="blank" data-type="library">
            <img className="project_img" src={youtube} alt="React Class" />
            <div className="project__description">
              <h3>Youtube Clone Coding</h3>
              <span>
                react Hook(함수형) Component <br />
                구글 open API를 통해서 사용자인증후, <br />
                YouTube list, 상세페이지, 동영상 재생등 구현
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
