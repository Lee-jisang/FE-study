// 오늘 얻은 인사이트
// 1. 이벤트 위임을 어떻게할 수 있는지 알게 되서 좋았다.
// 2. 요구사항을 전략적으로 접근해야하는지, 단계별로 세세하게 나누는게 중요하다는걸 알게 됐다.
// 3. DOM 요소를 가져올때는 $표시를 써서 변수처럼 사용할 수 있는게 좋았다.
// 4. 새롭게 알게 된 메서드 innerText, insertAdjacentHTML, closest, e.target

// step1 요구사항 구현을 위한 전략-돔 조작과 이벤트 핸들링으로 메뉴 관리하기
// TODO 메뉴 추가
// - [o] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// - [o] 메뉴의 이름을 입력 받고 확인 버튼으로 추가한다.
// - [o] 추가되는 메뉴의 아래 마크업은 <ul id="espresso-menu-list" class="mt-3 pl-0"></ul> 안에 삽입해야 한다.
// - [o] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [o] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// - [o] 사용자 입력값이 빈 값이라면 추가되지 않는다.

// TODO 메뉴 수정
// - [o] 메뉴의 수정 버튼 클릭 이벤트를 받고, 메뉴 수정하는 모달창(prompt)이 뜬다.
// - [o] 모달창에서 신규메뉴명을 입력 받고, 확인버튼을 누르면 메뉴가 수정된다.

// TODO 메뉴 삭제
// - [o] 메뉴 삭제 버튼 클릭 이벤트를 받고, 메뉴 삭제 컨펌(confirm) 모달창이 뜬다.
// - [o] 확인 버튼을 클릭하면 메뉴가 삭제된다.
// - [o] 총 메뉴 갯수를 count하여 상단에 보여준다.

const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem("menu", JSON.stringify(menu));
  },
  getLocalStorage() {
    localStorage.getItem("menu");
  },
};

function App() {
  //메뉴카운트 변경함수
  const updateMenuCount = () => {
    const menuCount = $("#espresso-menu-list").querySelectorAll("li").length;
    $(".menu-count").innerText = `총 ${menuCount}개`;
  };

  //메뉴의 이름을 확인버튼 또는 엔터키로 입력받아서 화면에 보이게
  const addMenuName = () => {
    if ($("#espresso-menu-name").value !== "") {
      const espressoMenuName = $("#espresso-menu-name").value;
      const menuItemTemplate = (espressoMenuName) => {
        return `
            <li class="menu-list-item d-flex items-center py-2">
               <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
               <button
                 type="button"
                 class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
               >
                 수정
               </button>
               <button
                 type="button"
                 class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
               >
                 삭제
               </button>
            </li>`;
      };
      $("#espresso-menu-list").insertAdjacentHTML(
        "beforeend",
        menuItemTemplate(espressoMenuName)
      );
      updateMenuCount();
      $("#espresso-menu-name").value = "";
      //console.log(menuItemTemplate(espressoMenuName));
    } else {
      alert("값을 입력해주세요.");
    }
  };

  //메뉴명 수정
  const updateMenuName = (e) => {
    const $menuName = e.target.closest("li").querySelector(".menu-name"); //가장 가까운 li태그를 찾아서 해당 li태그를 수정한다
    const updatedMenuName = prompt("메뉴명을 수정하세요", $menuName.innerText); //모달창
    $menuName.innerText = updatedMenuName;
  };

  //메뉴리스트 열 한개 삭제
  const removeMenuName = (e) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      // 확인:true 리턴, 취소: false 리턴
      //console.log(e.target.closest("li"));
      e.target.closest("li").remove();
      updateMenuCount();
    }
  };

  //form태그가 자동으로 전송되는걸 막아준다.
  $("#espresso-menu-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  //확인 버튼 클릭
  $("#espresso-menu-submit-button").addEventListener("click", addMenuName);

  //엔터키 입력
  $("#espresso-menu-name").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addMenuName();
    }
  });

  //메뉴명 수정,삭제 버튼
  $("#espresso-menu-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-edit-button")) {
      updateMenuName(e); //수정
    }

    if (e.target.classList.contains("menu-remove-button")) {
      removeMenuName(e); //삭제
    }
  });
}

App();
