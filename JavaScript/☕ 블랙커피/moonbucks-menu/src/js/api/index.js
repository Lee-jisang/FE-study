const BASE_URL = "http://localhost:3000/api";
//프론트에서 서버에 데이터를 요청하거나 변경할 때, fetch 사용
//fetch("http://localhost:3000/api", option); //첫번째 인자는 url,두번째 인자는 상세한 옵션

const MenuApi = {
  //전체 메뉴를 GET으로 받아오는 함수
  async getAllMenuByCategory(category) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu` //this.currentCategory의 this는 MenuAPI이다
    );
    return response.json(); //await 키워드 사용하면 then 없이 response를 받을 수 있음
  },

  //현재 카테고리에 따라 메뉴명을 추가
  async createMenu(category, name) {
    const response = await fetch(`${BASE_URL}/category/${category}/menu`, {
      method: "POST", //생성
      headers: {
        "Content-Type": "application/json", //JSON데이터로 주고받는다
      },
      body: JSON.stringify({ name }),
    });
    if (!response.ok) {
      //console.log(response);
      alert("2글자 이상 입력하여야 추가가 됩니다");
      console.error("에러가 발생했습니다");
    }
  },

  //현재 카테고리에 따라 메뉴명을 수정
  async updateMenu(category, name, menuId) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu/${menuId}`,
      {
        method: "PUT", //수정
        headers: {
          // 주고받는 데이터
          "Content-Type": "application/json", //JSON데이터로 주고받는다
        },
        body: JSON.stringify({ name }),
      }
    );
    if (!response.ok) {
      console.error("에러가 발생했습니다");
      alert("수정할 때 2글자 이상 입력하여주세요");
    }
    return response.json();
  },

  //메뉴명품절표시 토글,수정
  async toggleSoldOutMenu(category, menuId) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu/${menuId}/soldout`,
      {
        method: "PUT", //수정
      }
    );
    if (!response.ok) {
      console.error("에러가 발생했습니다");
    }
  },

  //메뉴명 삭제
  async dleteMenu(category, menuId) {
    const response = await fetch(
      `${BASE_URL}/category/${category}/menu/${menuId}`,
      {
        method: "DELETE", //삭제
      }
    );
    if (!response.ok) {
      console.error("에러가 발생했습니다");
    }
  },
};

export default MenuApi;
