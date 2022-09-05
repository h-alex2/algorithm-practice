# Algorithm Practice
알고리즘 문제를 풀고 정리하는 공간입니다.

<details>
<summary>Pointer</summary>

## Frequency Counter 빈도수 세기 패턴
- 보통 js 객체를 사용해서 다양한 값과 빈도를 수집하는 것

## Multiple Pointers 다중 포인터
- 이 패턴의 개념은 인덱스나 위치에 해당하는 포인터나 값을 만든 다음 특정 조건에 따라 중간 지점에서부터 시작 지점이나 끝 지점이나 양쪽 지점을 향해 이동시키는 것

## Sliding Window
- 규모가 큰 데이터셋에서 데이터의 하위 집합을 추적하는 이런 문제에 있어서 유용
- 정렬할 필요 없다.

## Divide and Conquer 분할과 정복
- 이 알고리즘은 주로 배열이나 문자열 같은 큰 규모의 데이터셋을 처리한다.
- 값을 찾기 위해 배열의 왼쪽에서 시작하여 오른쪽 끝까지 이동하는 것보다는 배열을 작은 조각으로 세분하여 각 조각들을 어디로 이동시킬지 결정하는 작업
- 이진 탐색

</details>

<details>
<summary>Recursion</summary>

## 재귀란
- 자기 자신을 호출하는 함수

## 재귀는 어디에 쓰일까?
- JSON.parse나 JSON.stringify
  - 이 두 가지는 자바스크립트 엔진으로 실행 - 재귀적으로 작성하는 경우가 많다.
- document.getElementById && DOM traversal algorithms
  - DOM은 모든 요소가 중첩된 트리 구조로 되어 있다.
- Object traversal

## 호출 스택
- 호출 스택은 자바스크립트의 보이지 않는 곳에서 작동하는 정적 데이터 구조(static data structure)이다.
- 재귀 함수는 계속해서 스택을 추가한다.

## 재귀 함수의 두 가지 기본 요소
1. 종료 조건 (Base Case or End point)
2. 다른 input

## 팩토리얼(Factorial)
- 4! = 4 * 3 * 2 * 1
```js
function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * (num - 1);
}
```

## 재귀의 함정
- 종료 조건이 없는 경우
- 잘못된 값을 반환하거나 반환하지 않는 경우
- Stack overflow

## Helper Method Recursion
- 두 개의 함수가 있다.
  1. 메인 외부 함수
  2. 메인 외부 함수 안의 재귀 함수

## 배열을 복사하는 메서드 활용하기
배열을 사용하고 헬퍼 메소드 없이 순수 재귀 솔루션을 작성하는 경우, 배열을 복사하는 `slice`, `spread 연산자`, `concat` 같은 메소드를 사용할 수 있다. 그러면 배열을 변경할 필요가 없다. 그리고 일종의 결과를 축적할 수도 있다.

## 문자열 - slice, substring 사용해서 사본 만들기


## 객체 - Object.assign, spread 연산자

</details>

<details>
<summary>JavaScript Method</summary>

### sort()
- Tim Sort를 사용해서 구현되어짐
- 시간복잡도 O(n\log n)O(nlogn), stable, in-place 정렬
- 요소가 문자열로 취급되어 정렬됨.
- 프로퍼티 값이 문자열인 경우 산술 연산으로 비교하면 NaN이 나온다. 비교 연산으로 사용하기
- 기본 정렬 순서는 유니코드 코드 포인트의 순서를 따른다.
```js
let arr = [ 1, 2, 15 ];
arr.sort() // 1, 15, 2
```
- 기본 정렬 기준 대신 새로운 정렬 기준을 만들려면 `arr.sort()`에 새로운 함수를 넘겨주어야 한다.
  - 인수로 넘겨주는 함수는 반드시 값 두 개를 비교해야 하고 양수나 음수 또는 0을 반환해야 한다.
  - 반환값 < 0 0보다 작으면 비교 함수의 첫 번째 인수를 우선하여 정렬하고,
  - 반환값 = 0 이면 정렬하지 않으며,
  - 반환값 > 0 0보다 크면 두 번째 인수를 우선하여 정렬한다.

### reverse()
- 요소 순서를 뒤집는다.

### indexOf(value)
- value가 들어있는 index를 리턴

### String.prototype.charCodeAt()
- 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환한다.


### Object.entries
- for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 `[key, value]` 쌍의 배열을 반환한다. (for-in 루프는 프로토 타입 체인의 속성도 열거한다.)

### String.prototype.localeCompare()
- 참조 문자열이 정렬 순서에서 지정된 문자열의 앞인지 뒤인지 또는 지정된 문자열과 동일한지 여부를 나타내는 숫자를 반환한다.
  - 음수 : 지정된 문자열의 전에 발생하는 경우
  - 0 : 지정된 문자열과 참조 문자열이 동일한 경우
  - 양수 : 지정된 문자열의 다음에 발생하는 경우
- 큰 배열을 정렬하는 것과 같이 많은 수의 문자열을 비교할 경우에는 `Intl.Collator - compare` 을 사용하는 것이 좋다고 한다.
  - Intl.Collator 쓸 때 대문자 먼저 오도록 하는 방법
  ```js
  console.log(['Z', 'a', 'z', 'ä'].sort(new Intl.Collator('de', { caseFirst: 'upper' } ).compare));
  // expected output: ["a", "ä", "Z", "z"]
  ```

```js
const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// expected output: 0
```
- 대소문자를 구문하지 않는 정렬
```js
let items = ['reserve', 'Premier', 'click', 'communicate', 'cafe', 'Adieu'];
items.sort( (a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
```

### in 연산자
- in 연산자는 명시된 속성이 명시된 객체에 존재하면 true를 반환
- `속성 in 객체명`

### indexOf
- 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다.
- 원본  배열에 인수로 전달한 요소와 중복되는 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스를 반환한다.
- 존재하지 않으면 -1 을 반환한다.

### lastIndexOf
- 주어진 값과 일치하는 부분을 fromIndex로부터 역순으로 탐색하여 최초로 마주치는 인덱스를 반환한다.
- 일치하는 부분이 없으면 -1을 반환한다.

### String.fromCharCode()
- UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환한다.
```js
console.log(String.fromCharCode(189, 43, 190, 61));
// expected output: "½+¾="
```

### Array.prototype.includes()
- 배열이 특정 요소를 포함하고 있는지 판별

### enumerable
- 프로토타입에 isAnagram 정의 후 for in 루프를 돌리면 isAnagram 자체가 노출되게 된다. for-in 이나 Object.keys() 에서 노출되지 않도록 숨기는 것이 좋다.
```js
console.log(Object.keys(String.prototype));
// [ 'isAnagram' ]

for (const key in String.prototype) {
  console.log(key)
}
```

### Array.prototype.find()

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

### Array.prototype.findLast()

</details>