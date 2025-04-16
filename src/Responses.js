// src/Responses.js
import imgChanghee from "./resources/images/img_changhee.jpg";

export const predefinedResponses = [
  { pattern: /틀려|틀렸어|아닌/i, 
    response: (
      <p>아닌데요? 맞는데요!</p>
    ),
  },
  { pattern: /안녕/i, 
    response: (
      <p>안녕하세요! 무엇을 도와드릴까요?</p>
    ),
  },
  { pattern: /성별|남자/i, 
    response: (
      <p>한창희는 건강한 남자입니다!</p>
    ),
  },
  { pattern: /나이/i, 
    response: (
      <p>1992년 2월 10일 생으로 만 33살 입니다.</p>
    ),
  },
  { pattern: /키|몸무게|신체/i, 
    response: (
      <p>한창희의 키는 177cm이며 반올림하면 178cm가 된다고 하나, <br />뜬구름잡는 소리라고 생각됩니다. 몸무게는 68kg이며 신체는 건강한 편입니다. <br />틀린 부분이 있다면 말씀해주세요 !</p>
    ),
  },
  {
    pattern: /넌|누구|한창희/i,
    response: (
      <div>
        <p>안녕하세요 저는 한창희입니다.</p>
        <ul>
          <li>92년 2월 10일 생</li>
          <li>남자</li>
          <li>병역의무</li>
          <li>
            <div className="frame-img">
              <img src={imgChanghee} alt="한창희" />
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    pattern: /작업|목록|포트폴리오/i,
    response: (
      <div className="my-work">
        <p>저의 작업 목록은 다음과 같습니다 : </p>
        <div className="my-work">
          <p>오토플러스</p>
          <ul>
            <li><a href="https://project1.com" target="_blank" rel="noopener noreferrer">포트폴리오 프로젝트 1</a></li>
            <li><a href="https://project2.com" target="_blank" rel="noopener noreferrer">포트폴리오 프로젝트 2</a></li>
            <li><a href="https://project3.com" target="_blank" rel="noopener noreferrer">포트폴리오 프로젝트 3</a></li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    pattern: /경력|스킬/i,
    response: (
      <div className="my-skill">
        <p>저의 경력 및 스킬은 다음과 같습니다 : </p>
        <div className="my-skill-cont">
          <p>오토플러스</p>
          <ul>
            <li>ㅁㅁㅁㅁㅁㅁㅁㅁㅁ</li>
            <li>ㅁㅁㅁㅁㅁㅁㅁㅁㅁ</li>
            <li>ㅁㅁㅁㅁㅁㅁㅁㅁㅁ</li>
            <li>ㅁㅁㅁㅁㅁㅁㅁㅁㅁ</li>
            <li>ㅁㅁㅁㅁㅁㅁㅁㅁㅁ</li>
            <li>ㅁㅁㅁㅁㅁㅁㅁㅁㅁ</li>
          </ul>
        </div>
        <div className="my-skill-cont">
          <p>헥토</p>
          <ul>
            <li>ㅁㅁㅁㅁㅁㅁㅁㅁㅁ</li>
            <li>ㅁㅁㅁㅁㅁㅁㅁㅁㅁ</li>
            <li>ㅁㅁㅁㅁㅁㅁㅁㅁㅁ</li>
            <li>ㅁㅁㅁㅁㅁㅁㅁㅁㅁ</li>
            <li>ㅁㅁㅁㅁㅁㅁㅁㅁㅁ</li>
          </ul>
        </div>
      </div>
    ),
  },
  { pattern: /React|리액트/i, response: "React는 훌륭한 라이브러리입니다! 관련 문서를 보려면 [여기](https://reactjs.org/)를 클릭하세요." },
  { pattern: /기타/i, response: "저는 지금 준비 중이에요. 다른 질문을 해주세요!" },
];

export default predefinedResponses;
  