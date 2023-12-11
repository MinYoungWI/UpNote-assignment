# Up Note 과제

## 📝기능 구현 목록 작성

1. UI는 업노트 기반, 최소 가로 길이 = 1400px, 최대 가로 길이 = 1920px
2. 최초의 화면에서 NOTEBOOKS는 하나도 없는 상태
   1. notebooks 옆 플러스 버튼 누르면 모달창 띄워서 메모 추가 기능
   2. 메모가 추가되면 NoteList 컴포넌트 나타나게
3. 데이터는 로컬 스토리지에 저장해서 구현
4. 노트북의 목록 확인 가능하게 하기.
5. 노트북을 추가와 삭제할 수 있게 하기.
6. 노트북 안에 노트북은 추가 못하게 막기.
7. 노트북을 클릭하면 NOTEBOOKS에 있는 메모 목록을 확인 할 수 있게 하기
8. 메모 목록에서 메모를 선택하여 메모 내용을 확인하고 수정할 수 있게 하기
9. 텍스트 편집기는 ‘lexical text editor’를 설치 후 사용하여 구현
   1. 텍스트 편집 영역의 위, 아래 버튼은 구현하지 않습니다.(Checklist, Insert Image, Heading, Bold 등)
10. 텍스트 입력 후 (별도의 저장 버튼 없이) 즉시 혹은 일정 시간 후에 입력 사항이 저장 되어야 한다.
11. 메모 목록에서 메모 내용의 첫번째 줄이 메모의 제목으로 표시
12. 메모의 제목이 메모 목록의 가로 길이를 넘어가는 경우, 말줄임표(...) 처리

## 📝기능 구현 목록 작성(진행하며 추가하고 체크한 목록)

1. ~~UI는 업노트 기반, 최소 가로 길이 = 1400px, 최대 가로 길이 = 1920px~~
2. ~~최초의 화면에서 NOTEBOOKS는 하나도 없는 상태~~
   1. ~~notebooks 옆 플러스 버튼 누르면 모달창 띄워서 메모 추가 기능~~
      - ~~플러스 버튼을 클릭하면 모달창이 나오게~~
        1. - 클릭하면 setModalOpen(true)

           ```jsx
           let [modalOpen, setModalOpen] = useState(false);
           ```

        2. modalOpen이 true면 CreateNewNotebook 컴포넌트 노출

           ```
           {modalOpen && <CreateNewNotebook />}
           ```

        3. 모달 제거.. 모달 외 구역 클릭하면 닫아지게..(useRef 사용)

           ```jsx
           const modalRef = useRef();
           // 모달 외부 클릭 시 닫기
             const handleOutsideClick = (e) => {
               if (modalRef.current && !modalRef.current.contains(e.target)) {
                 setModalOpen(false);
               }
             };

             useEffect(() => {
               // 이벤트 리스너 추가
               document.addEventListener("mousedown", handleOutsideClick);

               // 컴포넌트가 unmount될 때 이벤트 리스너 제거
               return () => {
                 document.removeEventListener("mousedown", handleOutsideClick);
               };
             }, []);
           .
           .
           .
           return (
               <div ref={modalRef} className="createNewNotebook-modal-box">
           .
           .
           ```
      - ~~모달창 UI 만들기~~
   2. ~~메모가 추가되면 NoteList 컴포넌트 나타나게~~
      - ~~notebook 추가~~
        1. ~~사용자가 이름을 입력하고 create 버튼을 누르면 노트북 생성~~
           1. ~~로컬스토리지에 input 안 텍스트 저장~~

              ```jsx
              const clickedCreateBtn = (event) => {
                  setNameValue(event.target.value);
                  localStorage.setItem("notebookName", nameValue);
                };
              return (
                  ...
                      <input
                        placeholder="Enter Notebook name"
                        onChange={(e) => setNameValue(e.target.value)} // 입력된 텍스트를 상태에 업데이트
                      ></input>
              ```

           2. notebooks 추가하면, 로컬스토리지에 있는 value값으로 왼쪽 카테고리 확인 가능하게 하기.

              ```jsx
              //LeftNav component
              {
                localStorage.getItem("notebookName") &&
                localStorage.getItem("notebookName") !== null ? (
                  <div className="title2">
                    <img src="https://cdn.icon-icons.com/icons2/625/PNG/512/paper-plane_icon-icons.com_57396.png" />
                    {localStorage.getItem("notebookName")}
                  </div>
                ) : (
                  <div className="title2" style={{ display: "none" }}></div>
                );
              }
              ```

              이렇게 하면 추가해도 한 key에 하나의 value만 저장되어서 로컬스토리지 value값을 객체형식으로 저장해야할 것 같음.
3. ~~데이터는 로컬 스토리지에 저장해서 구현~~
4. 노트북의 목록 확인 가능하게 하기.
5. ~~노트북을 추가와 삭제할 수 있게 하기.~~
   1. ~~아이콘을 클릭하면 “삭제하시겠습니까?” 확인메세지 띄우기.~~
6. 노트북 안에 노트북은 추가 못하게 막기.
7. 노트북을 클릭하면 NOTEBOOKS에 있는 메모 목록을 확인 할 수 있게 하기
8. 메모 목록에서 메모를 선택하여 메모 내용을 확인하고 수정할 수 있게 하기
9. 텍스트 편집기는 ‘lexical text editor’를 설치 후 사용하여 구현
   1. 텍스트 편집 영역의 위, 아래 버튼은 구현하지 않습니다.(Checklist, Insert Image, Heading, Bold 등)
10. 텍스트 입력 후 (별도의 저장 버튼 없이) 즉시 혹은 일정 시간 후에 입력 사항이 저장 되어야 한다.
11. 메모 목록에서 메모 내용의 첫번째 줄이 메모의 제목으로 표시
12. 메모의 제목이 메모 목록의 가로 길이를 넘어가는 경우, 말줄임표(...) 처리

## 회고..⭐

상태관리 라이브러리의 필요성을 아주 많이!! 느꼈다.

zustand 사용해봤으면 좋았을 듯 싶다...

중간에 설치했다가 사용하면서 익숙치 않아 더 오랜 시간이 걸릴까봐 우선은 익숙한 방식으로 완성을 목표로 진행시켰지만, 퍽 글러먹은 생각이었다. 결론은 완성도 못했으니.

오히려 상태 끌어올리기 고민으로 많은 시간을 잡아먹은듯.. 그런데 그마저도 잘하지 못했다.

과제를 제출하고 zustand 공부부터 해야겠다.

localstorage를 배열 형식으로 저장하는데에 시간을 많이 보냈다. (그치만 성공하지 못했다)

<aside>
📝 notebooks 추가하면, 로컬스토리지에 있는 value값으로 왼쪽 카테고리 확인 가능하게 하기.

```jsx
//LeftNav component
{
  localStorage.getItem("notebookName") &&
  localStorage.getItem("notebookName") !== null ? (
    <div className="title2">
      <img src="https://cdn.icon-icons.com/icons2/625/PNG/512/paper-plane_icon-icons.com_57396.png" />
      {localStorage.getItem("notebookName")}
    </div>
  ) : (
    <div className="title2" style={{ display: "none" }}></div>
  );
}
```

이렇게 하면 추가해도 한 key에 하나의 value만 저장되어서 로컬스토리지 value값을 객체형식으로 저장해야할 것 같음.

</aside>

이라고 작성해두었지만 성공하지 못했다는 슬픈 이야기

이거는 다시 생각해보니 1차 팀프로젝트를 진행하면서도 애를 많이 먹었던 부분이기도 하다. 마감 기한일에 맞추느라 얼레벌레 씨름하다 그대로 흘려보낸 탓에 지금 내가 이러고 있는 거라는 생각이 들어, 같은 실수 두번하지 않으리라.

과제 제출 후 할 일 두 번째, localStorage 해결하기.

기능 구현 목록의 중요성을 한번 더 깨달았다.

세부적으로 작성해두지 않으면 목표한 길로 가는데에 혼란이 생길 수 있다.

<aside>
📝 **기능 목록을 재검토한다**
기능 목록을 클래스 설계와 구현, 함수(메서드) 설계와 구현과 같이 너무 상세하게 작성하지 않는다. 클래스 이름, 함수(메서드) 시그니처와 반환값은 언제든지 변경될 수 있기 때문이다. 너무 세세한 부분까지 정리하기보다 구현해야 할 기능 목록을 정리하는 데 집중한다. ****정상적인 경우도 중요하지만, 예외적인 상황도 기능 목록에 정리한다. 특히 예외 상황은 시작 단계에서 모두 찾기 힘들기 때문에 기능을 구현하면서 계속해서 추가해 나간다.

**기능 목록을 업데이트한다**
README.md 파일에 작성하는 기능 목록은 기능 구현을 하면서 변경될 수 있다. 시작할 때 모든 기능 목록을 완벽하게 정리해야 한다는 부담을 가지기보다 기능을 구현하면서 문서를 계속 업데이트한다. 죽은 문서가 아니라 살아있는 문서를 만들기 위해 노력한다.

</aside>

생산성과 효율성을 높이는 코드 습관이 중요하다.(천년만년 기한이 주어진게 아니니)

> 과제를 수행하면서 부족한 점을 깨닫고, 그 부분을 극복하고자 하는 강한 동기부여를 얻을 수 있었던 만큼, 큰 배움의 시간이었다.
