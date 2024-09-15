export const getErrorMessage = (status: number) => {
  switch (
    status // 401은 인터셉터, 403은 미들웨어에서 처리
  ) {
    case 400:
      return {
        title: "잘못된 요청입니다.",
        content: "입력한 정보를 확인하고 다시 시도해 주세요.",
      };
    case 401:
      return {
        title: "인증 실패",
        content: "로그인 정보를 확인하고 다시 로그인해 주세요.",
      };
    case 403:
      return {
        title: "접근 권한이 없습니다.",
        content: "해당 페이지에 접근할 수 있는 권한이 없습니다.",
      };
    case 404:
      return {
        title: "요청하신 API 엔드포인트를 찾을 수 없습니다.",
        content: "입력하신 주소가 정확한지 확인해 주세요.",
      };
    case 408:
      return {
        title: "요청 시간이 초과되었습니다.",
        content: "네트워크 상태를 확인하고 다시 시도해 주세요.",
      };
    case 409:
      return {
        title: "서버 충돌이 발생하였습니다.",
        content: "요청이 서버 데이터와 충돌이 발생했습니다. 다시 시도해 주세요.",
      };
    case 429:
      return {
        title: "요청이 너무 많습니다.",
        content: "잠시 후 다시 시도해 주세요.",
      };
    case 500:
      return {
        title: "서버 요청 중 에러가 발생하였습니다.",
        content: "새로고침을 하거나 잠시 후 다시 접속해 주시기 바랍니다.",
      };

    case 503:
      return {
        title: "서비스를 사용할 수 없습니다.",
        content: "서버가 현재 점검 중입니다. 잠시 후 다시 시도해 주세요.",
      };
    default:
      return {
        title: "서비스에 접속할 수 없습니다.",
        content: "새로고침을 하거나 잠시 후 다시 접속해 주시기 바랍니다.",
      };
  }
};

// 리팩토링 코드
function createEmailList() {
  let emailList: string[] = [];

  return {
    setMailList(array: string[]): void {
      emailList = array;
    },
    getEmailList(): string[] {
      return emailList;
    },
  };
}

const emailList = createEmailList();

function appendEmail(mailList: string[], email: string): string[] {
  return [...mailList, email];
}

function handleFormSubmit(event: FormEvent): void {
  const form = event.target;
  const email = form.elements["email"].value;
  const newEamilList = add_contact(emailList.getEmailList(), email);
  emailList.setMailList(newEmailList);
}
