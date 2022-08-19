// step1에서 얻은 인사이트
// 1. 이벤트 위임을 어떻게할 수 있는지 알게 되서 좋았다.
// 2. 요구사항을 전략적으로 접근해야하는지, 단계별로 세세하게 나누는게 중요하다는걸 알게 됐다.
// 3. DOM 요소를 가져올때는 $표시를 써서 변수처럼 사용할 수 있는게 좋았다.
// 4. 새롭게 알게 된 메서드 innerText, insertAdjacentHTML, closest, e.target

// step2에서 얻은 인사이트
// 1. 상태관리의 중요성, 변하는 데이터의 관리를 통하여 재사용성을 높이고, 오류를 최소화
// 2. export와 export default의 차이점
// 3. 이벤트 처리할 때 render함수를 재사용

// step3에서 얻은 인사이트
// 1. 요구사항이 명확하게 정리 되지 않으면 나중에 오류가 생겼을 때 시간이 배로 든다.
// 2. 요구사항은 최대한 짧고 간결하게 여러개

// step1 요구사항 구현을 위한 전략-돔 조작과 이벤트 핸들링으로 메뉴 관리하기
// TODO 메뉴 추가
// - [o] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// - [o] 메뉴의 이름을 입력 받고 확인 버튼으로 추가한다.
// - [o] 추가되는 메뉴의 아래 마크업은 <ul id="menu-list" class="mt-3 pl-0"></ul> 안에 삽입해야 한다.
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

// step2 요구사항-상태 관리로 메뉴 관리하기
// TODO localStorage Read & Write
// - [o] localStorage에 데이터를 저장한다.
//   - [o] 메뉴를 추가할 때
//   - [o] 메뉴를 수정할 때
//   - [o] 메뉴를 삭제할 때
// - [o] localStorage에 있는 데이터를 읽어온다.

// TODO 카테고리별 메뉴판 관리
// - [o] 에스프레소 메뉴판 관리
// - [o] 프라푸치노 메뉴판 관리
// - [o] 블렌디드 메뉴판 관리
// - [o] 티바나 메뉴판 관리
// - [o] 디저트 메뉴판 관리

// TODO 페이지 접근시 최초 데이터 Read & Rendering
// - [o] 페이지에 최초로 로딩될때 localStorage에 에스프레소 메뉴를 읽어온다.
// - [o] 에스프레소 메뉴를 페이지에 그려준다.

// TODO 품절 상태 관리
// - [o] 품절 상태인 경우를 보여줄 수 있게, 품절 버튼을 추가하고 sold-out class를 추가하여 상태를 변경한다.
// - [o] 품절 버튼을 추가한다.
// - [o] 품절 버튼을 클릭하면 localStorage에 상태값이 저장된다.
// - [o] 클릭이벤트에서 가장가까운 li 태그의 class속성 값에 sold-out을 추가한다.

// step3 요구사항 - 서버와의 통신을 통해 메뉴 관리하기

// TODO 서버 요청 부분
// - [o] 웹 서버를 띄운다.
// - [o] 서버에 새로운 매뉴가 추가될 수 있도록 요청한다.
// - [o] 서버에 카테고리별 메뉴리스트를 불러온다.
// - [o] 서버에 메뉴가 수정 될 수 있도록 요청한다.
// - [o] 서버에 메뉴의 품절상태가 토글될 수 있도록 요청한다.
// - [o] 서버에 메뉴가 삭제 될 수 있도록 요청한다.

// TODO 리팩토링 부분
// - [o] localStorage에 저장하는 로직은 지운다.
// - [o] fetch 비동기 api를 사용하는 부분을 async await을 사용하여 구현한다.

// TODO 사용자 경험
// - [o] API 통신이 실패하는 경우에 대해 사용자가 알 수 있게 alert으로 예외처리를 진행한다.
// - [o] 중복되는 메뉴는 추가할 수 없다.

// 내가 검토한 사항
// - [o] 품절된거는 수정되지 않아야하지 않나
// - [o] 2글자 이하면 수정이나 삭제안되게 알림?
// - [o] 취소누르면 빈값 들어오는 거

// 오늘의 회고
// 1. 웹서버 연동, menu-server
// 2. BASE_URL 웹서버 변수 먼저선언
// 3. 비동기 처리하는데 해당하는 부분이 어디인지 확인하고, 웹서버에 요청하게끔 코드 짜기
// 4. 서버에 요청한 후 데이터를 받아서 화면에 렌더링 하기
// 5. 리팩토링
// - localStorage 부분 지우기
// - API 파일 따로 만들어서 진행
// - 페이지 렌더링과 관련해서 중복되는 부분들 제거,
// - 서버 요청 할 때 option 객체
// - 카테고리 버튼 클릭 시 콜백 함수 분리 - changecategory
// 6. 사용자 경험 부분

// 꼭 기억해야 할 부분
// 학습 할때 그레이존을 발견해서 이곳을 학습!
// 코드리뷰

const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem("menu", JSON.stringify(menu));
  },
  getLocalStorage() {
    localStorage.getItem("menu");
  },
};

const BASE_URL = "http://localhost:3000/api";
//프론트에서 서버에 데이터를 요청하거나 변경할 때, fetch 사용
//fetch("http://localhost:3000/api", option); //첫번째 인자는 url,두번째 인자는 상세한 옵션

const HTTP_METHOD = {
  POST(data) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //JSON데이터로 주고받는다
      },
      body: JSON.stringify(data),
    };
  },
  PUT(data) {
    return {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", //JSON데이터로 주고받는다
      },
      body: data ? JSON.stringify(data) : null,
    };
  },
  DELETE(data) {
    return {
      method: "DELETE",
    };
  },
};

const request = async (url, option) => {
  const response = await fetch(url, option);
  if (!response.ok) {
    alert("에러가 발생했습니다.");
    console.error(e);
  }
  return response.json();
};

const requestWithdoutJson = async (url, option) => {
  const response = await fetch(url, option);
  if (!response.ok) {
    alert("에러가 발생했습니다.");
    console.error(e);
  }
  return response;
};

const MenuApi = {
  //전체 메뉴를 GET으로 받아오는 함수
  async getAllMenuByCategory(category) {
    return request(`${BASE_URL}/category/${category}/menu`);
  },
  //현재 카테고리에 따라 메뉴명을 추가
  async createMenu(category, name) {
    return request(
      `${BASE_URL}/category/${category}/menu`,
      HTTP_METHOD.POST({ name })
    );
  },
  //현재 카테고리에 따라 메뉴명을 수정
  async updateMenu(category, name, menuId) {
    return request(
      `${BASE_URL}/category/${category}/menu/${menuId}`,
      HTTP_METHOD.PUT({ name })
    );
  },
  //메뉴명품절표시 토글,수정
  async toggleSoldOutMenu(category, menuId) {
    return request(
      `${BASE_URL}/category/${category}/menu/${menuId}/soldout`,
      HTTP_METHOD.PUT()
    );
  },

  //메뉴명 삭제
  async dleteMenu(category, menuId) {
    return requestWithdoutJson(
      `${BASE_URL}/category/${category}/menu/${menuId}`,
      HTTP_METHOD.DELETE()
    );
  },
};

function App() {
  //상태 관리 = 변할 수 있는 데이터 관리, 이 앱에서 변하는 것이 무엇인가 - 메뉴명
  this.menu = {
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: [],
  };
  this.currentCategory = "espresso";
  this.init = async () => {
    this.menu[this.currentCategory] = await MenuApi.getAllMenuByCategory(
      this.currentCategory
    );
    render();
    initEventListeners();
  };

  //render -> 메뉴 목록(li태그)을 화면단에 나타냄
  const render = async () => {
    // 새로운 데이터를 불러온다음 렌더링
    this.menu[this.currentCategory] = await MenuApi.getAllMenuByCategory(
      this.currentCategory
    );
    const template = this.menu[this.currentCategory]
      .map((menuItem) => {
        //인덱스를 만들어준 이유-> 수정,삭제에서 한열을 선택하기 위해서
        return ` 
          <li data-menu-id="${
            menuItem.id
          }" class="menu-list-item d-flex items-center py-2">
             <span class="w-100 pl-2 menu-name ${
               menuItem.isSoldOut ? "sold-out" : ""
             }">${menuItem.name}</span>
             <button
               type="button"
               class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
             >
               품절
             </button>
             <button
               id="SOLD"  
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
      })
      .join("");

    $("#menu-list").innerHTML = template; //ul태그 안에 삽입
    updateMenuCount();
  };

  //메뉴카운트 변경함수
  const updateMenuCount = () => {
    const menuCount = this.menu[this.currentCategory].length;
    $(".menu-count").innerText = `총 ${menuCount}개`;
  };

  //메뉴의 이름을 확인버튼 또는 엔터키로 입력받아서 화면에 보이게
  const addMenuName = async () => {
    //async, await을 통하여 순서보장
    if ($("#menu-name").value === "") {
      alert("값을 입력해주세요.");
      return;
    }

    if ($("#menu-name").value.length < 2) {
      alert("2글자 이상 입력하여주세요");
      $("#menu-name").value = "";
      return;
    }

    const duplicatedItem = this.menu[this.currentCategory].find(
      (menuItem) => menuItem.name === $("#menu-name").value
    );

    if (duplicatedItem) {
      alert("이미 등록된 메뉴입니다. 다시입력해주세요.");
      $("#menu-name").value = "";
      return;
    }

    const menuName = $("#menu-name").value;
    await MenuApi.createMenu(this.currentCategory, menuName);
    render();
    $("#menu-name").value = ""; //입력하고 나서 인풋값 빈값으로 초기화
    //this.menu[this.currentCategory].push({ name: MenuName }); //배열(리스트)에 push를 이용해 객체를 담을 수 있음
    // store.setLocalStorage(this.menu); //local storage에 있는부분은 지운다
    // render();
    // $("#menu-name").value = "";
    //console.log(menuItemTemplate(espressoMenuName));
  };

  //메뉴명 수정-> 메뉴리스트 열 한개 수정
  const updateMenuName = async (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    const $menuName = e.target.closest("li").querySelector(".menu-name"); //가장 가까운 li태그를 찾아서 해당 li태그를 수정한다
    let updatedMenuName = prompt("메뉴명을 수정하세요", $menuName.innerText); //모달창, let으로 해야 재할당 가능
    if (updatedMenuName.length < 2) {
      alert("2글자 이상 입력하여주세요");
      $("#menu-name").value = "";
      return;
    }
    if (updatedMenuName === null) updatedMenuName = $menuName.innerText; // 취소 버튼을 눌렀을때 updatedMenuName에 null 이들어감
    await MenuApi.updateMenu(this.currentCategory, updatedMenuName, menuId);
    render();
    // if (updatedMenuName === null) updatedMenuName = $menuName.innerText; // 취소 버튼을 눌렀을때 updatedMenuName에 null 이들어감
    // if (updatedMenuName !== "") {
    //   this.menu[this.currentCategory][menuId].name = updatedMenuName;
    //   store.setLocalStorage(this.menu);
    //   render();
    // } else {
    //   alert("수정할 때 빈 값은 저장이 안됩니다.");
    // }
  };

  //메뉴리스트 열 한개 삭제
  const removeMenuName = async (e) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      // 확인:true 리턴, 취소: false 리턴
      const menuId = e.target.closest("li").dataset.menuId;
      await MenuApi.dleteMenu(this.currentCategory, menuId);
      //this.menu[this.currentCategory].splice(menuId, 1);
      //store.setLocalStorage(this.menu);
      //console.log(e.target.closest("li"));
      render();
    }
  };

  //품절버튼을 클릭했을때, 메뉴명 선긋기
  const soldOutMenuName = async (e) => {
    //품절 버튼 눌렀을 때 수정 버튼 안보이게 하고싶은데
    //console.log(e.target.closest("li"));
    const menuId = e.target.closest("li").dataset.menuId; //munuId에 인덱스 값이 담김
    await MenuApi.toggleSoldOutMenu(this.currentCategory, menuId);
    // this.menu[this.currentCategory][menuId].soldOut = //soldOut에 대해 선언해주지 않았으므로 undefined가 반환되고, !로 처음에는 true 다시 클릭하면 false
    //   !this.menu[this.currentCategory][menuId].soldOut;
    // store.setLocalStorage(this.menu);
    render();
  };

  //카테고리버튼을 클릭할때 카테고리를 바꿔주는 함수
  const changeCategory = (e) => {
    const isCategoryButton = e.target.classList.contains("cafe-category-name");
    if (isCategoryButton) {
      const categoryName = e.target.dataset.categoryName;
      this.currentCategory = categoryName;
      $("#category-title").innerText = `${e.target.innerText} 메뉴 관리`;
      //현재 카테고리에 데이터를 불러오는 api
      render();
    }
  };

  const initEventListeners = () => {
    //form태그가 자동으로 전송되는걸 막아준다.
    $("#menu-form").addEventListener("submit", (e) => {
      e.preventDefault();
    });

    //확인 버튼 클릭
    $("#menu-submit-button").addEventListener("click", addMenuName);

    //엔터키 입력
    $("#menu-name").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addMenuName();
      }
    });

    //메뉴명 수정,삭제,품절 버튼
    $("#menu-list").addEventListener("click", (e) => {
      if (e.target.classList.contains("menu-edit-button")) {
        //품절일 때는 수정이 안됨
        if (
          e.target
            .closest("li")
            .querySelector("span")
            .classList.contains("sold-out") === false
        ) {
          updateMenuName(e); //수정
        }
        return;
      }

      if (e.target.classList.contains("menu-remove-button")) {
        removeMenuName(e); //삭제
        return;
      }

      if (e.target.classList.contains("menu-sold-out-button")) {
        soldOutMenuName(e); //품절
        return;
      }
    });

    //카테고리 버튼을 클릭했을 때 해당 메뉴 관리 ex)에스프레소, 프라푸치노~
    $("nav").addEventListener("click", changeCategory);
  };
}

const app = new App(); //새로운 객체들이 여러개
app.init();
